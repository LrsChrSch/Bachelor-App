<script lang="ts">
	import { showNewDialog } from '$lib/script/sceneController';
	import { onDestroy, onMount } from 'svelte';
	import AddForm from './addForm.svelte';
	import Icon from '../content/icon.svelte';
	import { clickOutside } from '$lib/script/clickOutside';
	import { fade, scale } from 'svelte/transition';
	import { spring } from 'svelte/motion';

	// get mouse position
	let mouseX = 0;
	let mouseY = 0;
	let dialogX = spring(0);
	let dialogY = spring(0);
	let dialogWidth = 0;
	let dialogHeight = 0;
	export let navHeight = 0;
	let mounted = false;

	onMount(() => {
		mounted = true;
		dialogX.set(window.innerWidth / 2);
		dialogY.set(window.innerHeight / 2);
		// get current mouse position
		window.addEventListener('mousemove', (e) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
		});

		window.addEventListener('resize', (e) => {
			showNewDialog.set(false);
		});
	});

	const unsubscribe = showNewDialog.subscribe(() => {
		setPosition(mouseX, mouseY, true);
	});

	function setPosition(mouseX: number, mouseY: number, hard: boolean) {
		if (!mounted) return;
		dialogX.set(
			Math.min(Math.max(mouseX, 0 + dialogWidth / 2), window.innerWidth - dialogWidth / 2),
			{
				hard: hard
			}
		);
		dialogY.set(
			Math.min(
				Math.max(mouseY, 0 + dialogHeight / 2 + navHeight),
				window.innerHeight - dialogHeight / 2
			),
			{
				hard: hard
			}
		);
	}

	onDestroy(unsubscribe);
</script>

{#if $showNewDialog}
	<div
		use:clickOutside
		on:click_outside={() => setPosition(mouseX, mouseY, false)}
		bind:clientWidth={dialogWidth}
		bind:clientHeight={dialogHeight}
		transition:scale={{ duration: 150, start: 0.9 }}
		class="fixed -translate-x-1/2 -translate-y-1/2 scale-90 sm:scale-100 min-w-[320px]"
		style={'top: ' + $dialogY + 'px; left: ' + $dialogX + 'px;'}>
		<div
			class="flex bg-accent justify-between p-5 items-center fill-neutral-dark text-neutral-dark">
			<p class="font-medium">Neu</p>
			<button on:click={() => showNewDialog.set(false)}>
				<Icon
					name="close"
					classes="hover:fill-neutral-light transition-colors duration-75" /></button>
		</div>
		<AddForm />
	</div>
{/if}
