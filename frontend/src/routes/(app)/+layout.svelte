<script lang="ts">
	import '@fontsource/ibm-plex-sans/400.css';
	import '@fontsource/ibm-plex-sans/500.css';
	import '@fontsource/ibm-plex-sans/700.css';
	import '@fontsource/ibm-plex-sans-condensed/400.css';
	import '@fontsource/ibm-plex-sans-condensed/500.css';
	import '@fontsource/ibm-plex-mono/400.css';
	import '@fontsource/ibm-plex-serif/300.css';
	import '@fontsource/ibm-plex-serif/400.css';

	import '../../app.css';
	import Visualization from '$lib/components/three/visualization.svelte';

	import IconSquare from '$lib/components/ui/iconSquare.svelte';
	import SearchBar from '$lib/components/ui/searchBar.svelte';

	import { resetCamera } from '$lib/script/cameraController';
	import { showAll, dimensions } from '$lib/script/sceneController';

	import { swipe } from 'svelte-gestures';
	import Icon from '$lib/components/content/icon.svelte';
	import IconButton from '$lib/components/content/iconButton.svelte';

	import { showVisualization } from '$lib/script/sceneController';
	import { get } from 'svelte/store';

	function handler(event: any) {
		const direction = event.detail.direction;

		if (direction === 'left') {
			showVisualization.set(true);
		} else if (direction === 'right') {
			showVisualization.set(false);
		}
	}
</script>

<div
	use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: 'pan-y' }}
	on:swipe={handler}
	class="md:grid grid-cols-13 3xl:flex w-full grid-rows-1 h-screen overflow-hidden max-h-screen">
	<main
		class="col-span-6 lg:col-span-5 3xl:w-full max-w-3xl h-full border-r border-neutral-base border-opacity-20 dark:border-r-0">
		<slot />
	</main>
	<section
		class="fixed z-10 top-0 w-full md:col-span-7 lg:col-span-8 h-full bg-neutral-dark md:relative transition-all duration-300 {$showVisualization
			? 'left-0'
			: 'left-full md:left-0'}">
		<div
			aria-hidden="true"
			class="hidden dark:md:block w-10 absolute inset-0 bg-gradient-to-r from-neutral-dark to-transparent right-auto h-full pointer-events-none z-10" />
		<Visualization />
		<div class="absolute inset-0 pointer-events-none">
			<div class="flex flex-col justify-between items-end h-full [&>*]:pointer-events-auto">
				<div
					class="bg-neutral-dark rounded-base backdrop-blur-xl dark:bg-opacity-75 drop-shadow-lg dark:drop-shadow-none gap-7 px-7 py-6 md:px-6 md:py-5 md:mt-6 2xl:mt-7 md:mr-7 dark:md:mr-4 2xl:mr-9 dark:2xl:mr-[2.5rem] md:w-fit w-full flex justify-between md:justify-end items-center">
					<IconButton
						name="left"
						onClick={() => showVisualization.set(false)}
						classes="fill-accent hover:fill-neutral-light transition-colors duration-75 md:hidden" />
					<SearchBar />
				</div>
				<div class="flex flex-col gap-5 px-7 py-7 2xl:py-8 2xl:pl-10 2xl:pr-9">
					<IconSquare
						onClick={() => {
							if (get(dimensions) === 3) {
								dimensions.set(2);
								resetCamera();
							} else {
								dimensions.set(3);
								resetCamera();
							}
						}}
						name={$dimensions === 3 ? 'threeD' : 'twoD'}
						text={$dimensions === 3 ? 'Wechsel zu 2D' : 'Wechsel zu 3D'} />

					<IconSquare
						onClick={() => showAll.update((c) => (c = !c))}
						classes={$showAll
							? '!bg-accent !fill-neutral-dark hover:!bg-neutral-light hover:border-neutral-light '
							: ''}
						name="graph"
						text="Verbindungen anzeigen" />
					<IconSquare onClick={() => resetCamera()} name="resetView" text="Kamera reset" />
				</div>
			</div>
		</div>
	</section>
	<!-- <button
		class="fixed z-20 bottom-7 left-7 xs:bottom-8 xs:left-8 bg-accent rounded-full p-6"
		on:click={() => (showVisualization = !showVisualization)}>
		<Icon name="visualization" size="m" />
	</button> -->
</div>
