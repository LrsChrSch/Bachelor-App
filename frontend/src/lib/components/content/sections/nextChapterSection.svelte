<script lang="ts">
	import Icon from '../icon.svelte';

	export let title: string;
	export let currentChapter: number;
	export let maxChapters: number;
</script>

<section class="flex justify-end items-center gap-x-6 mt-9 mb-7 @container">
	<div class="text-right">
		<h2 class="text-right !mb-0">Nächstes Kapitel</h2>
		<h3
			class="bg-transparent text-neutral-light dark:text-neutral-base p-0 !mb-0 hidden @sm:block !mt-0 text-right w-full">
			{title}
		</h3>
	</div>
	<button
		on:click={() =>
			currentChapter + 1 < maxChapters ? (currentChapter += 1) : (currentChapter = maxChapters - 1)}
		class="bg-accent relative overflow-hidden rounded-sm group aspect-square w-[70px] min-w-[70px] h-[70px]"
		aria-label="Nächstes Kapitel">
		<Icon
			name="right"
			classes="fill-neutral-light dark:fill-neutral-dark absolute top-1/2 left-1/2 -translate-x-10 group-hover:-translate-x-1/2 -translate-y-1/2 transition-transform duration-150"
			size="xl" />
		<Icon
			name="right"
			classes="fill-neutral-light dark:fill-neutral-dark absolute top-1/2 left-1/2 -translate-x-1/2  group-hover:translate-x-10 -translate-y-1/2 transition-transform duration-150"
			size="xl" />
	</button>
</section>
