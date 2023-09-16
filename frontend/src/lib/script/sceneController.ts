import { get, writable } from 'svelte/store';
import { UMAP } from 'umap-js';
import type { WeaviateObject } from 'weaviate-ts-client';
import { client } from '$lib/script/dbController';

let umap: UMAP;
let bounds = {
	x: { min: -1, max: 1 },
	y: { min: -1, max: 1 },
	z: { min: -1, max: 1 }
};

function normalizeData(data: number[][]) {
	const result = [];
	for (const point of data) {
		if (get(dimensions) === 2) {
			result.push([
				((point[0] - bounds.x.min) / (bounds.x.max - bounds.x.min)) * 2 - 1,
				((point[1] - bounds.y.min) / (bounds.y.max - bounds.y.min)) * 2 - 1
			]);
		} else {
			result.push([
				((point[0] - bounds.x.min) / (bounds.x.max - bounds.x.min)) * 2 - 1,
				((point[1] - bounds.y.min) / (bounds.y.max - bounds.y.min)) * 2 - 1,
				((point[2] - bounds.z.min) / (bounds.z.max - bounds.z.min)) * 2 - 1
			]);
		}
	}
	return result;
}

function rebuild(data: number[][]) {
	console.log('Rebuilding UMAP with', data);
	// Update neighbors count to be higher.
	umap = new UMAP({
		nComponents: get(dimensions),
		nNeighbors: Math.min(data.length, 5)
	});

	const result = umap.fit(data);

	console.log('Rebuilt UMAP');
	bounds = {
		x: {
			min: Math.min(...result.map((v) => v[0])),
			max: Math.max(...result.map((v) => v[0]))
		},
		y: {
			min: Math.min(...result.map((v) => v[1])),
			max: Math.max(...result.map((v) => v[1]))
		},
		z: {
			min: Math.min(...result.map((v) => v[-1 + get(dimensions)])), // this is hacky
			max: Math.max(...result.map((v) => v[-1 + get(dimensions)]))
		}
	};

	return result;
}

interface thoughtData {
	[key: string]: {
		pos: number[];
		lines: {
			in: number[][];
			out: number[][];
		};
		text: string;
		image: string;
		caption: string;
		category: string;
		generated: boolean;
		in: any[];
		out: any[];
		// out: string;
		time: Date;
	};
}

function realizeData(data: any[]) {
	console.log('Applying data', data);
	fullData = data;
	const thoughtObject: thoughtData = {};
	for (const thought of data) {
		try {
			const inIds = thought['in']
				? thought['in'].map((item: any) => {
						if (item && item['beacon']) {
							const id = item['beacon'].split('localhost/').pop();
							return id ? id : '';
						} else {
							return item['_additional']['id'];
						}
				  })
				: [''];
			const outIds = thought['out']
				? thought['out'].map((item: any) => {
						if (item && item['beacon']) {
							const id = item['beacon'].split('localhost/').pop();
							return id ? id : '';
						} else {
							return item['_additional']['id'];
						}
				  })
				: [''];
			thoughtObject[thought['_additional']['id']] = {
				pos: thought['pos'],
				lines: thought['lines'] ?? { in: [], out: [] },
				text: thought['text'],
				image: thought['image'],
				caption: thought['caption'],
				category: thought['category'],
				generated: thought['generated'],
				in: inIds,
				out: outIds,
				// out: thought['out'] ? thought['out'][0]['_additional']['id'] : '',
				time: new Date(parseInt(thought['_additional']['creationTimeUnix']))
			};
		} catch (e) {
			console.log(thought);
			console.log('Error while realizing data', e);
		}
	}
	console.log('Realized data', thoughtObject);
	publicData.set(thoughtObject);
}

let fullData: {
	_additional: { id: string | undefined; vector: number[] | undefined; creationTimeUnix: string };
	image: {} | null;
	caption: {} | null;
	text: {} | null;
	in: any | null;
	out: any | null;
	category: {} | null;
	generated: {} | null;
	pos: number[];
	lines: { in: any[] | null; out: any[] | null };
}[] = [];

const publicData = writable({});

function wait(ms: number) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(ms);
		}, ms);
	});
}

const className = 'Thought';
const thoughts = await client.graphql
	.get()
	.withClassName(className)
	.withFields(
		'text image caption category generated in {... on ' +
			className +
			' {_additional {id}}} _additional {id vector creationTimeUnix} out {... on ' +
			className +
			' {_additional {id}}} _additional {id vector creationTimeUnix}'
	)
	.withLimit(10000)
	.do();

async function getThoughts(className: string) {
	console.log('Refreshing...', className);

	const selectedThought = get(currentThought);
	const allShown = get(showAll);

	currentThought.set({});
	hovered.set('');
	showAll.set(false);

	const extracted = thoughts.data.Get[className];

	console.log('Fetched', extracted);

	// Getting positions
	if (extracted.length >= 2) {
		const data = [];
		for (const thought of extracted) {
			data.push(thought._additional.vector);
		}

		const pos = normalizeData(rebuild(data));

		for (let i = 0; i < extracted.length; i++) {
			extracted[i].pos = pos[i];
		}
		console.log('Updated with positions', extracted);
	} else {
		if (extracted.length === 1) {
			if (get(dimensions) === 2) {
				extracted[0].pos = [0, 0];
			} else {
				extracted[0].pos = [0, 0, 0];
			}
		}
		console.log('Not enough data to rebuild UMAP', extracted);
	}

	//Building lines
	console.log('Building lines...');

	for (const thought of extracted) {
		thought.lines = { in: [], out: [] };
		if (thought.in) {
			thought.in.forEach((inThought: any) => {
				const inThoughtData = extracted.find(
					(t: any) => t._additional.id === inThought._additional.id
				);
				if (inThoughtData) {
					const line = [thought.pos, inThoughtData.pos];
					// append line to the thought
					if (thought.lines && thought.lines.in) {
						thought.lines.in = [...thought.lines.in, line];
					}
				}
			});
		}
		// do the same for out
		if (thought.out) {
			thought.out.forEach((outThought: any) => {
				const outThoughtData = extracted.find(
					(t: any) => t._additional.id === outThought._additional.id
				);
				if (outThoughtData) {
					const line = [thought.pos, outThoughtData.pos];
					// append line to the thought
					if (thought.lines && thought.lines.out) {
						thought.lines.out = [...thought.lines.out, line];
					}
				}
			});
		}
	}

	console.log('Updated with lines', extracted);

	realizeData(extracted);

	// set currentThought to the thought from publicData with the same id as selectedThought in the form of { ...value, id: key }
	// timeout 100ms

	//await wait(300);

	//selectThoughtById(selectedThought.id);
	//showAll.set(allShown);
}

function selectThoughtById(id: string) {
	console.log('Selecting', id);
	if (id) {
		const thought = Object.entries(get(publicData)).find(([key, value]) => key === id);
		if (thought) {
			currentThought.set({ ...thought[1], id: thought[0] });
		}
	}
}

const isPowerOfTwo = (n: number) => {
	return n !== 0 && (n & (n - 1)) === 0;
};

async function createThought(
	thought: {
		text?: string;
		image?: string;
		caption?: string;
		category?: string;
		generated?: boolean;
	},
	references: string[],
	className: string
) {
	console.log('Creating thought...');

	let data = client.data.creator().withClassName(className);

	const beacons: { beacon: string }[] = [];
	references?.forEach((reference) => {
		beacons.push({ beacon: 'weaviate://localhost/' + reference });
	});

	console.log(beacons);

	const props = {
		...thought,
		generated: thought.generated ?? false,
		in: references[0] !== null ? beacons : undefined
	};
	console.log(props);

	data = data.withProperties(props);

	const result: WeaviateObject = await data.do();
	console.log('Created:', result);

	if (references[0] !== null && result.id) {
		references.forEach(async (reference) => {
			const res = await client.data.getterById().withClassName(className).withId(reference).do();

			// alter the schema
			let props = res.properties;
			console.log(props);

			const newRef = { beacon: 'weaviate://localhost/' + result.id };
			// add newRef to the out property array

			if (props.out) {
				props.out.push(newRef);
			} else {
				props.out = [newRef];
			}

			await client.data
				.updater()
				.withId(reference)
				.withClassName(className)
				.withProperties(props)
				.do();
		});
	}

	if (isPowerOfTwo(fullData.length + 1) || fullData.length < 5) {
		console.log('Po2');
		await wait(100);
		await getThoughts(className);
	} else {
		console.log('Vector', result.vector);
		let pos = umap.transform([result.vector ?? []]);
		pos = normalizeData(pos, pos.length);

		console.log(fullData);
		console.log('pos', pos);

		// get the position of the every in thoughts and create a line between them
		const lines: number[][][] = [];
		if (references[0] !== null) {
			references.forEach((reference) => {
				const inThought = fullData.find((t) => t._additional.id === reference);
				if (inThought) {
					const line = [pos[0], inThought.pos];
					lines.push(line);
					// append line to the inThought out lines
					if (inThought.lines && inThought.lines.out) {
						inThought.lines.out = [...inThought.lines.out, line];
						// update the inThought in fullData
						fullData = fullData.map((t) => {
							if (t._additional.id === inThought._additional.id) {
								return inThought;
							} else {
								return t;
							}
						});
					}
				}
			});
		}

		console.log('Time', result);

		fullData.push({
			_additional: {
				id: result.id,
				vector: result.vector,
				creationTimeUnix: `${result.creationTimeUnix}`
			},
			image: result.properties?.image ?? null,
			caption: result.properties?.caption ?? null,
			text: result.properties?.text ?? null,
			in: result.properties?.in ?? null,
			out: result.properties?.out ?? null,
			// out: null,
			category: result.properties?.category ?? null,
			generated: result.properties?.generated ?? null,
			pos: pos[0],
			lines: {
				in: lines,
				out: []
			}
		});

		realizeData(fullData);
	}

	if (!thought.generated) {
		selectThoughtById(result.id);
		showNewDialog.set(false);
	}

	return result;
}

async function searchThought(searchStr: string, className: string) {
	let query = client.graphql
		.get()
		.withClassName(className)
		.withFields('_additional {id certainty}');

	if (searchStr.endsWith('?')) {
		console.log('Asking question...');
		query = query.withAsk({
			question: searchStr,
			properties: ['text']
		});
	} else {
		console.log('Searching...');
		query = query.withNearText({ concepts: [searchStr], distance: 0.6 });
	}

	const result = await query.withLimit(1).do();
	console.log(result.data.Get[className]);
	if (result.data.Get[className].length > 0) {
		selectThoughtById(result.data.Get[className][0]._additional.id);
		return true;
	} else {
		return false;
	}
}

async function getDBInfo(className: string) {
	return await client.schema.classGetter().withClassName(className).do();
}

const currentThought = writable<thoughtData>({});
const hovered = writable('');
const showAll = writable(false);
const showNewDialog = writable(false);
const showVisualization = writable(false);
const dimensions = writable(3);

export {
	createThought,
	getThoughts,
	publicData,
	currentThought,
	showAll,
	searchThought,
	selectThoughtById,
	getDBInfo,
	hovered,
	showNewDialog,
	showVisualization,
	dimensions
};
