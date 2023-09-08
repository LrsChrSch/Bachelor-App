<script lang="ts">
	import { connect, dbSchema } from '$lib/script/dbController';
	import { getThoughts, dimensions } from '$lib/script/sceneController';
	import Scene from '$lib/components/three/scene.svelte';
	import { Canvas } from '@threlte/core';
	import IconButton from '../content/iconButton.svelte';
	import Graph from './graph.svelte';
	import { get } from 'svelte/store';
	import { fade } from 'svelte/transition';

	async function reconnect() {
		if (await connect()) getThoughts('Thought');
		else console.log('Conneciton failed.');
	}
</script>

{#if $dbSchema === null}
	<div
		class="w-full h-full bg-neutral-dark absolute inset-0 bg-opacity-75 z-10 backdrop-blur-[2px]">
		<IconButton
			onClick={() => reconnect()}
			name="graph"
			classes="text-neutral-light fill-neutral-light dark:fill-neutral-dark dark:text-neutral-dark rounded-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent px-5 py-3">
			DB verbinden
		</IconButton>
	</div>
{/if}

{#if $dimensions === 2}
	<div class="h-full w-full" in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration: 300 }}>
		<Graph />
	</div>
{:else}
	<div class="h-full w-full" in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration: 300 }}>
		<Canvas>
			<Scene />
		</Canvas>
	</div>
{/if}
