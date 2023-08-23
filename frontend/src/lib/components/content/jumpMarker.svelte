<script lang="ts">
	export let jumpID: string = '';
	import { showVisualization, selectThoughtById } from '$lib/script/sceneController';
	import Icon from './icon.svelte';

	let windowWidth = 0;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<button
	class="bg-neutral-light h-[22px] text-neutral-dark hover:bg-accent font-semibold font-sans transition-colors duration-75 px-3 rounded-sm items-center gap-3 inline-flex"
	on:click={() => {
		showVisualization.set(true);
		setTimeout(
			() => {
				selectThoughtById(jumpID);
			},
			windowWidth > 768 ? 0 : 400
		);
	}}>
	<slot />
</button>
