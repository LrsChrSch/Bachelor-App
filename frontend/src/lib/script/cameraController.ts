import { tweened } from 'svelte/motion';
import { cubicInOut } from 'svelte/easing';
import { Vector3 } from 'three';
import { get, writable, type Readable } from 'svelte/store';
import { currentThought, dimensions } from '$lib/script/sceneController';

export const groundOffset = 1.0;
export let cam = writable(null);

function map(value: number, oldRange: number[], newRange: number[]) {
	var newValue =
		((value - oldRange[0]) * (newRange[1] - newRange[0])) / (oldRange[1] - oldRange[0]) +
		newRange[0];
	return Math.min(Math.max(newValue, newRange[0]), newRange[1]);
}

const duration = 1500;
const startPos = [4, 3, 0];
const startTarget = [0, 1, 0];

export let position = tweened(startPos, {
	duration: duration,
	easing: cubicInOut,
	interpolate: (a, b) => {
		return (t) => {
			return get(cam)
				.position.toArray()
				.map((v: number, i: number) => {
					return v + (b[i] - v) * t;
				});
		};
	}
});
export let target = tweened(startTarget, {
	duration: duration,
	easing: cubicInOut,
	interpolate: (a, b) => {
		return (t) => {
			return new Vector3(0, 0, -1)
				.applyQuaternion(get(cam).quaternion)
				.add(get(cam).position)
				.toArray()
				.map((v, i) => {
					return v + (b[i] - v) * t;
				});
		};
	}
});

const unsubscribe = currentThought.subscribe((val) => {
	if (val) {
		if (val.pos && get(dimensions) !== 2) {
			setCamera(val.pos);
		}
	}
});

export const resetSignal = writable(false);

export function resetCamera() {
	if (get(dimensions) === 2) {
		resetSignal.set(true);
	} else {
		position.set(startPos);
		target.set(startTarget);
	}
}

export function setCamera(newPos: number[]) {
	const angle = Math.atan2(newPos[2], newPos[0]);
	const radius = Math.sqrt(newPos[0] ** 2 + newPos[2] ** 2); // set the radius to the distance of newPos to the origin
	const distance = 0.25;
	const x = (radius + distance) * Math.cos(angle);
	const z = (radius + distance) * Math.sin(angle);

	position.set([x, newPos[1] + groundOffset + 0.05, z]);
	target.set([newPos[0], newPos[1] + groundOffset, newPos[2]]);
}
