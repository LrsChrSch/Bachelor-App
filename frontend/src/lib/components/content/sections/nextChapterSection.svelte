<script lang="ts">
	import Icon from '../icon.svelte';

	export let title: string;
	export let currentChapter: number;
	export let maxChapters: number;
</script>

<section class="content-section !my-8 grid grid-cols-[1fr_70px] justify-end gap-x-6">
	<h2 class="text-right col-span-2 -mb-5 xs:col-span-1">Nächstes Kapitel</h2>
	<h3
		class="bg-transparent text-neutral-base p-0 xs:line-clamp-1 row-start-2 text-right w-full -mb-5">
		{title}
	</h3>
	<button
		on:click={() =>
			currentChapter + 1 < maxChapters ? (currentChapter += 1) : (currentChapter = maxChapters - 1)}
		class="bg-accent relative overflow-hidden xs:row-span-2 rounded-sm group aspect-square w-[70px]"
		aria-label="Nächstes Kapitel">
		<Icon
			name="right"
			classes="fill-neutral-dark absolute top-1/2 left-1/2 -translate-x-10 group-hover:-translate-x-1/2 -translate-y-1/2 transition-transform duration-150"
			size="xl" />
		<Icon
			name="right"
			classes="fill-neutral-dark absolute top-1/2 left-1/2 -translate-x-1/2  group-hover:translate-x-10 -translate-y-1/2 transition-transform duration-150"
			size="xl" />
	</button>
</section>
