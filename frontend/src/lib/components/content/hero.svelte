<script lang="ts">
	import IconButton from '$lib/components/content/iconButton.svelte';

	export let heading: string;
	export let nextChapter: string;
	export let previousChapter: string;
	export let showChapters = false;
	export let showHelp = false;
	export let currentChapter: number;
	export let maxChapters: number;

	let containerHeight = 0;

	// if containerHeight changes, set the --scroll-offset variable to the containerHeight
	$: if (containerHeight) {
		document.documentElement.style.setProperty('--scroll-offset', `${containerHeight + 13}px`);
	}
</script>

<header
	class="z-50 bg-neutral-dark backdrop-blur-xl dark:bg-opacity-75 drop-shadow-lg dark:drop-shadow-none px-7 py-7 xs:px-8 2xl:py-8 sticky top-0 border-b border-neutral-base border-opacity-20 dark:border-0"
	bind:clientHeight={containerHeight}>
	<div class="flex mb-7 gap-6 {currentChapter === 0 ? 'justify-end' : 'justify-between'}">
		{#if currentChapter !== 0}
			<IconButton
				onClick={() => (currentChapter - 1 >= 0 ? (currentChapter -= 1) : (currentChapter = 0))}
				name="left"
				classes="fill-neutral-base text-neutral-base hover:text-neutral-light hover:fill-neutral-light transition-colors duration-75 !scroll-my-0">
				<span class="hidden h-7 max-w-full sm:line-clamp-1 text-left pr-4">{previousChapter}</span>
			</IconButton>
		{/if}
		{#if currentChapter !== maxChapters - 1}
			<IconButton
				onClick={() =>
					currentChapter + 1 < maxChapters
						? (currentChapter += 1)
						: (currentChapter = maxChapters - 1)}
				name="right"
				classes="fill-neutral-base text-neutral-base hover:text-neutral-light hover:fill-neutral-light transition-colors duration-75 flex-row-reverse !scroll-my-0">
				<span class="hidden h-7 max-w-full sm:line-clamp-1 text-left pl-3">{nextChapter}</span>
			</IconButton>
		{/if}
	</div>
	<div>
		<h1 class="border-dots border-r-2 pr-7">{heading}</h1>
		<div class="flex justify-between gap-6">
			<IconButton
				onClick={() => {
					showChapters = !showChapters;
					showHelp = false;
				}}
				name={!showChapters ? 'chapter' : 'close'}
				classes="fill-neutral-light text-neutral-light hover:fill-neutral-base hover:text-neutral-base !scroll-my-0 pr-3 pl-3 {showChapters
					? '!fill-four !text-four hover:!fill-neutral-light hover:!text-neutral-light focus:ring-four'
					: ''}">
				{!showChapters ? 'Kapitelübersicht' : 'Kapitelübersicht schließen'}
			</IconButton>
			<IconButton
				onClick={() => {
					showHelp = !showHelp;
					showChapters = false;
				}}
				name={!showHelp ? 'navHelp' : 'close'}
				classes="flex-row-reverse fill-neutral-base text-neutral-base hover:fill-neutral-light hover:text-neutral-light !scroll-my-0 pl-3  {showHelp
					? '!fill-four !text-four hover:!fill-neutral-light hover:!text-neutral-light focus:ring-four'
					: ''}">
				{!showHelp ? 'Navigationshilfe' : 'Navigationshilfe schließen'}
			</IconButton>
		</div>
	</div>
</header>
