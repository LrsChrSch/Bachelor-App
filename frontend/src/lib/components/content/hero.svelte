<script lang="ts">
	import IconButton from '$lib/components/content/iconButton.svelte';

	export let heading: string;
	export let showChapters = false;
	export let currentChapter: number;
	export let maxChapters: number;

	let containerHeight = 0;

	// if containerHeight changes, set the --scroll-offset variable to the containerHeight
	$: if (containerHeight) {
		document.documentElement.style.setProperty('--scroll-offset', `${containerHeight + 13}px`);
	}
</script>

<header
	class=" z-50 bg-neutral-dark backdrop-blur-xl dark:bg-opacity-75 drop-shadow-lg dark:drop-shadow-none px-7 py-7 xs:px-8 2xl:py-8 sticky top-0"
	bind:clientHeight={containerHeight}>
	<div class="flex mb-7 {currentChapter === 0 ? 'justify-end' : 'justify-between'}">
		{#if currentChapter !== 0}
			<IconButton
				onClick={() => (currentChapter - 1 >= 0 ? (currentChapter -= 1) : (currentChapter = 0))}
				name="left"
				classes="fill-neutral-base text-neutral-base !scroll-my-0">
				<span class="hidden sm:inline">vorheriges Kapitel</span>
			</IconButton>
		{/if}
		{#if currentChapter !== maxChapters - 1}
			<IconButton
				onClick={() =>
					currentChapter + 1 < maxChapters
						? (currentChapter += 1)
						: (currentChapter = maxChapters - 1)}
				name="right"
				classes="fill-neutral-base text-neutral-base flex-row-reverse !scroll-my-0 ">
				Nächstes Kapitel
			</IconButton>
		{/if}
	</div>
	<div class="border-dots border-r-2 pr-7">
		<h1 title={heading}>{heading}</h1>
		<IconButton
			onClick={() => (showChapters = !showChapters)}
			name={!showChapters ? 'chapter' : 'close'}
			classes="fill-neutral-light text-neutral-light hover:fill-neutral-base hover:text-neutral-base !scroll-my-0  {showChapters
				? '!fill-red hover:text-red'
				: ''}">
			{!showChapters ? 'Kapitelübersicht' : 'Kapitelübersicht schließen'}
		</IconButton>
	</div>
</header>
