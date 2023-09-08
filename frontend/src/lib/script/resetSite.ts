import { get, writable } from 'svelte/store';
import { resetCamera } from './cameraController';
import { dimensions, showAll } from './sceneController';

let timeSinceInteraction = writable(new Date().getTime());

let resetBeacon = writable(false);

function resetSite() {
	// console.log(new Date().getTime() - get(timeSinceInteraction));
	if (new Date().getTime() - get(timeSinceInteraction) > 5 * 60 * 1000) {
		resetBeacon.set(true);
		resetCamera();
		dimensions.set(3);
		showAll.set(false);
	} else {
		setTimeout(resetSite, 1000);
	}
}

export { resetBeacon, resetSite, timeSinceInteraction };
