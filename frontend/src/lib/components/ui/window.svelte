<script lang="ts">
	import {
		currentThought,
		hovered,
		selectThoughtById,
		dimensions
	} from '$lib/script/sceneController';
	import { get } from 'svelte/store';
	import AddForm from '$lib/components/ui/addForm.svelte';
	import Icon from '../content/icon.svelte';
	import { fade, scale } from 'svelte/transition';
	import { page } from '$app/stores';
	import SuperImage from '../content/superImage.svelte';
	import { tick } from 'svelte';

	export let color: string = 'accent';

	let icon = 'bookmark';

	async function init(el) {
		await tick();
		el.focus();
	}
</script>

{#if $currentThought.text || $currentThought.image}
	<article
		transition:scale={{ duration: 150, start: 0.9 }}
		class="abolute top-1/2 left-1/2 min-w-[384px] max-w-sm bg-neutral-dark drop-shadow-lg dark:drop-shadow-none backdrop-blur-xl {get(
			dimensions
		) === 2
			? ''
			: 'scale-[500%]'}">
		<header class="flex text-neutral-dark p-5 fill-neutral-dark justify-between {'bg-' + color}">
			<div class="flex gap-5">
				<button
					title="Nach hinten"
					aria-label="Nach hinten"
					disabled={$currentThought.in.length < 1 || $currentThought.in[0] === ''}
					class="disabled:opacity-50 focus:ring-transparent"
					on:click={() => {
						const randomThoughtIndex = Math.floor(Math.random() * $currentThought.in.length);
						selectThoughtById($currentThought.in[randomThoughtIndex]);
					}}>
					<Icon
						classes="fill-neutral-light hover:fill-neutral-dark dark:fill-neutral-dark"
						name="previous"
						size="m" />
				</button>
				<button
					title="Nach vorne"
					aria-label="Nach vorne"
					disabled={$currentThought.out.length < 1 || $currentThought.out[0] === ''}
					class="disabled:opacity-50 focus:ring-transparent"
					on:click={() => {
						console.log($currentThought.out);
						const randomThoughtIndex = Math.floor(Math.random() * $currentThought.out.length);
						selectThoughtById($currentThought.out[randomThoughtIndex]);
					}}>
					<Icon
						classes="rotate-180 fill-neutral-light hover:fill-neutral-dark dark:fill-neutral-dark"
						name="previous"
						size="m" />
				</button>
			</div>
			<button
				class="focus:ring-transparent"
				title="Schließen"
				use:init
				on:click={() => {
					hovered.set('');
					currentThought.set({});
				}}>
				<Icon
					name="close"
					size="m"
					classes="fill-neutral-light hover:fill-neutral-dark dark:fill-neutral-dark dark:hover:fill-neutral-light transition-colors duration-75" />
			</button>
		</header>
		<main>
			<div>
				{#if $currentThought.image}
					<SuperImage
						href="data:image/png;base64,{$currentThought.image}"
						text={$currentThought.caption}
						imageClasses="!rounded-t-none"
						showAlt={false} />
					<!-- <img
					class="grayscale-[0.9] hover:grayscale-0 transition-[filter] duration-300"
					src="data:image/png;base64,{$currentThought.image}"
					alt={$currentThought.caption} /> -->
				{/if}
				<!-- <p>{$currentThought.id}</p> -->
			</div>

			<div class="px-6 py-5">
				<p class=" text-xs text-neutral-base font-bold whitespace-pre-line">
					{$currentThought.category ? $currentThought.category + ' /' : ''}
					{new Date($currentThought.time).toLocaleString('de-DE', {
						hour: '2-digit',
						minute: '2-digit',
						year: '2-digit',
						month: '2-digit',
						day: '2-digit'
					})}
				</p>
				{#if $page.url.pathname === '/edit'}
					<button
						class="fill-neutral-base text-neutral-base text-sm w-full items-center flex gap-3 -mx-2"
						on:click={async () => {
							await navigator.clipboard.writeText($currentThought.id);
							icon = 'bookmarkAdded';
							setTimeout(() => {
								icon = 'bookmark';
							}, 1000);
						}}>
						<Icon name={icon} size="s" />
						{icon === 'bookmarkAdded' ? 'Kopiert!' : $currentThought.id}
					</button>
				{/if}
				{#if !$currentThought.text}
					<p class="text-neutral-base font-condensed leading-tight">
						{$currentThought.caption}
					</p>
				{/if}

				<p
					class="whitespace-pre-line mt-4 {$currentThought.generated
						? 'font-mono'
						: 'font-serif text-lg'}">
					{$currentThought.text}
				</p>
			</div>

			{#if $page.url.pathname === '/edit'}
				<AddForm {color} reference={$currentThought.id} />
			{/if}
		</main>
	</article>
{/if}
