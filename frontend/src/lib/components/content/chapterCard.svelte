<script lang="ts">
	import Icon from '$lib/components/content/icon.svelte';

	export let icon: string = '';
	export let title: string = '';
	export let summary: string = '';
	export let color: string = '';
</script>

<article
	class="group/card drop-shadow-md hover:drop-shadow-xl transition-[filter] duration-75 border-neutral-base border border-opacity-20 dark:border-0 bg-neutral-dark p-6 mb-3 dark:mb-0 dark:p-0 dark:m-0 dark:drop-shadow-none dark:hover:drop-shadow-none rounded-base">
	<header class="flex gap-6 items-center mb-4">
		<div
			class="rounded-sm {'bg-' +
				color.replace(
					'--',
					''
				)} group-hover/card:bg-neutral-light transition-colors duration-75 p-5">
			<Icon
				classes="fill-neutral-light group-hover/card:fill-neutral-dark dark:fill-neutral-dark transition-colors duration-75"
				name={icon} />
		</div>
		<h1
			{title}
			class="mb-0 line-clamp-1 text-left leading-[1.15] transition-colors duration-75 group-hover/card:!text-neutral-light {'!text-' +
				color.replace('--', '')}">
			{title}
		</h1>
	</header>
	<main class="border-dots ml-[20px] pl-6 xl:pl-8 border-l-2 group-last/item:border-l-0">
		<p class="max-w-prose font-condensed text-left text-neutral-base">{summary}</p>
	</main>
</article>
