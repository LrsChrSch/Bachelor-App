import weaviate, {
	type WeaviateClass,
	type WeaviateClient,
	type WeaviateSchema
} from 'weaviate-ts-client';

import { dev } from '$app/environment';
import { get, writable } from 'svelte/store';

let client: WeaviateClient;

async function connect() {
	if (import.meta.env.SSR && import.meta.env.PROD) {
		client = weaviate.client({
			scheme: 'http',
			host: 'weaviate:8080'
		});
	} else {
		if (dev) {
			client = weaviate.client({
				scheme: 'http',
				host: 'localhost:8080'
			});
		} else {
			client = weaviate.client({
				scheme: 'http',
				host: 'host:8080' // change this to hostname of machine
			});
		}
	}

	await refreshSchema();
	if (get(dbSchema) === null) {
		return false;
	} else {
		return true;
	}
}

connect();

const className = 'Thought';

const thoughtClass: WeaviateClass = {
	class: className,
	description: className,
	vectorIndexType: 'hnsw',
	vectorizer: 'multi2vec-clip',
	moduleConfig: {
		'multi2vec-clip': {
			textFields: ['text']
			// imageFields: ['image'],
			// weights: {
			// 	textFields: [0.75],
			// 	imageFields: [0.25]
			// }
		}
	},
	properties: [
		{
			dataType: ['text'],
			name: 'text'
		},
		{
			dataType: ['blob'],
			name: 'image'
		},
		{
			dataType: ['text'],
			name: 'caption'
		},
		{
			dataType: ['text'],
			name: 'category'
		},
		{
			dataType: [className],
			name: 'out'
		},
		{
			dataType: [className],
			name: 'in'
		},
		{
			dataType: ['boolean'],
			name: 'generated'
		}
	]
};

function isContained(obj1: any, obj2: any) {
	for (let prop in obj2) {
		if (!(prop in obj1) || !isEqual(obj1[prop], obj2[prop])) {
			return false;
		}
	}
	return true;
}

function isEqual(val1: any, val2: any) {
	if (Array.isArray(val1) && Array.isArray(val2)) {
		if (val1.length !== val2.length) {
			return false;
		}
		for (let i = 0; i < val1.length; i++) {
			if (!isEqual(val1[i], val2[i])) {
				return false;
			}
		}
		return true;
	} else if (typeof val1 === 'object' && typeof val2 === 'object') {
		return isContained(val1, val2);
	} else {
		return val1 === val2;
	}
}

const dbSchema = writable<WeaviateSchema | null>(null);

async function refreshSchema() {
	let schema: WeaviateSchema | null = null;
	try {
		schema = await client.schema.getter().do();
	} catch (err) {
		console.error(err);
		return;
	}

	// if (schema.classes) {
	// 	schema.classes.forEach((c) => {
	// 		if (c.class !== className) {
	// 			if (c.class) client.schema.classDeleter().withClassName(c.class).do();
	// 		}
	// 	});
	// }

	// // check if Thought-Class exists and if it matches the thoughtClass object
	// if (schema.classes && schema.classes.length > 0) {
	// 	const schemaClass = schema.classes[0];
	// 	// check if thoughtClass object matches schemaClass
	// 	if (!isContained(schemaClass, thoughtClass)) {
	// 		// if not, delete schemaClass and create new one
	// 		await client.schema.classDeleter().withClassName(className).do();
	// 		await createNew();
	// 	}
	// } else {
	// 	await createNew();
	// }

	dbSchema.set(schema);
	console.log('Schema', schema);
}

async function createNew() {
	await client.schema.classCreator().withClass(thoughtClass).do();
}

async function getThoughtById(id: string) {
	return await client.data.getterById().withClassName(className).withId(id).do();
}

async function reset() {
	console.log('Resetting...');
	try {
		await client.schema.classDeleter().withClassName(className).do();
	} catch (err) {}

	await createNew();
}

export { client, connect, refreshSchema, reset, dbSchema, getThoughtById };
