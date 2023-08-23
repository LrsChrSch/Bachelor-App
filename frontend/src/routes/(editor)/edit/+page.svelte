<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/components/three/scene.svelte';
	import AddForm from '$lib/components/ui/addForm.svelte';
	import AddDialog from '$lib/components/ui/addDialog.svelte';

	import SearchBar from '$lib/components/ui/searchBar.svelte';

	import { getDBInfo, dimensions } from '$lib/script/sceneController';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import IconButton from '$lib/components/content/iconButton.svelte';
	import IconSquare from '$lib/components/ui/iconSquare.svelte';

	import { resetCamera } from '$lib/script/cameraController';
	import { showAll } from '$lib/script/sceneController';

	import { getThoughts } from '$lib/script/sceneController';
	import Socket from '$lib/components/ui/socket.svelte';
	import Icon from '$lib/components/content/icon.svelte';
	import { reset } from '$lib/script/dbController';

	let name = '';
	let description = '';

	let hideHint = true;

	onMount(async () => {
		const info = await getDBInfo('Thought');
		console.log('Info', info);
		name = info.class || '';
		description = info.description || '';
	});

	showAll.subscribe((value) => {
		console.log(value);
	});

	let navigationHeight = 0;
</script>

<svelte:head>
	<title>Editor</title>
	<meta name="description" content="Editor" />
</svelte:head>

<div class="flex flex-col h-full">
	<nav
		class="flex justify-between px-5 py-5 gap-7 sm:px-7 sm:py-6 lg:px-10 md:py-7 bg-neutral-dark backdrop-blur-xl dark:bg-opacity-75 drop-shadow-lg dark:drop-shadow-none pointer-events-auto"
		bind:clientHeight={navigationHeight}>
		<IconButton
			name="home"
			classes="text-accent fill-accent hover:text-neutral-light hover:fill-neutral-light transition-colors duration-75"
			href="/"><span class="hidden sm:block">Home</span></IconButton>
		<SearchBar />
	</nav>
	<section
		class="[&>*]:pointer-events-auto flex-1 px-5 py-5 pt-3 sm:px-7 sm:py-6 lg:px-10 md:py-7 flex sm:flex-row items-center sm:items-end flex-col gap-5 {!hideHint
			? 'justify-between sm:justify-between'
			: 'justify-end'}">
		{#if !hideHint}
			<p class="text-neutral-base items-center text-center -mb-4">
				Klicke, um neuen Gedanken zu erstellen
				<button
					on:click={() => (hideHint = true)}
					aria-label="Hinweis verstecken"
					title="Hinweis verstecken">
					(x)
				</button>
			</p>
		{/if}
		<div class="flex gap-5">
			<IconSquare
				onClick={() => {
					if (get(dimensions) === 3) {
						dimensions.set(2);
					} else {
						dimensions.set(3);
					}
				}}
				name={$dimensions === 3 ? 'twoD' : 'threeD'}
				text={$dimensions === 3 ? 'Wechsel zu 2D' : 'Wechsel zu 3D'} />
			<IconSquare onClick={() => resetCamera()} name="resetView" text="Kamera reset" />
			<IconSquare onClick={() => getThoughts('Thought')} name="rebuild" text="UMAP neu berechnen" />
			<IconSquare
				onClick={() => showAll.update((c) => (c = !c))}
				classes={$showAll
					? '!bg-accent !fill-neutral-dark hover:!bg-neutral-light hover:border-neutral-light '
					: ''}
				name="graph"
				text="Verbindungen anzeigen" />

			<Socket />
			<IconSquare
				onClick={async () => {
					await reset();
					await getThoughts('Thought');
				}}
				name="bin"
				text="Data reset" />
			<AddDialog navHeight={navigationHeight} />
		</div>
	</section>
</div>
