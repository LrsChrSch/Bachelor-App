<script lang="ts">
	import { fade } from 'svelte/transition';
	import IconButton from './iconButton.svelte';
	import { resetBeacon } from '$lib/script/resetSite';
	import { onDestroy, onMount } from 'svelte';

	export let href: string;
	export let text: string;
	export let showAlt: boolean = true;
	export let classes: string = '';
	export let imageClasses: string = '';

	let dialog: HTMLDialogElement;

	let isMounted = false;

	onMount(() => {
		isMounted = true;
	});

	const unsubscribe = resetBeacon.subscribe((value) => {
		if (isMounted) {
			dialog.close();
		}
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div
	class="w-3/5 group-odd:float-left group-even:float-right group-odd:mr-6 group-even:ml-6 only:mr-0 only:w-full group drop-shadow-lg dark:drop-shadow-none flex flex-col">
	<button
		on:click={() => dialog.showModal()}
		class="{classes} hover:cursor-zoom-in h-full w-full block">
		<img
			src={href}
			alt={text}
			class="grayscale-0 hover:grayscale duration-300 transition-[filter] w-full object-cover rounded-base border border-neutral-base border-opacity-20 dark:border-0 {imageClasses}" />
	</button>

	{#if showAlt}
		<p
			class="text-left font-condensed text-neutral-base border-dots mt-3 border-l-2 pl-6 group-only:block hidden !my-0 !columns-1">
			{text}
		</p>
	{/if}

	<dialog
		bind:this={dialog}
		class="w-full h-full bg-neutral-dark bg-opacity-75 backdrop-blur-md overflow-hidden">
		<div
			class="flex flex-col gap-6 w-full h-full bg-transparent px-7 py-7 xs:px-8 2xl:py-8 hover:cursor-zoom-out"
			on:click={() => dialog.close()}
			on:keypress={() => dialog.close()}>
			<div class="flex justify-end gap-5">
				<IconButton
					name="close"
					size="xl"
					classes="fill-neutral-light"
					onClick={() => dialog.close()} />
			</div>
			<div class="w-full h-full flex flex-col justify-center items-center gap-5">
				<img class="max-w-full max-h-[80%] object-cover rounded-base" src={href} alt={text} />
				{#if showAlt}
					<p
						class="text-neutral-light text-center lg:text-lg max-w-prose text-center !my-0 !columns-1">
						{text}
					</p>
				{/if}
			</div>
		</div>
	</dialog>
</div>
