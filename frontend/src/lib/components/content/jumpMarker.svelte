<script lang="ts">
	export let href: string = '';
	export let text: string = '';
	import { showVisualization, selectThoughtById } from '$lib/script/sceneController';
	import Icon from './icon.svelte';

	let windowWidth = 0;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<button
	class="bg-accent text-neutral-dark hover:bg-neutral-light font-sans transition-colors duration-75 px-3 rounded-sm items-center gap-3 inline"
	on:click={() => {
		showVisualization.set(true);
		setTimeout(
			() => {
				selectThoughtById(href);
			},
			windowWidth > 768 ? 0 : 400
		);
	}}>
	{text}
</button>
