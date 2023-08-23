<script lang="ts">
	import Icon from '$lib/components/content/icon.svelte';

	export let icon: string = '';
	export let title: string = '';
	export let summary: string = '';
	export let color: string = '';
</script>

<article class="group">
	<header class="flex gap-6 items-center mb-4 -mt-4">
		<div
			class="rounded-sm {'bg-' +
				color.replace('--', '')} group-hover:bg-neutral-light transition-colors duration-75 p-5">
			<Icon classes="fill-neutral-dark" name={icon} />
		</div>
		<h1
			{title}
			class="mb-0 line-clamp-1 text-left leading-normal transition-colors duration-75 group-hover:!text-neutral-light {'!text-' +
				color.replace('--', '')}">
			{title}
		</h1>
	</header>
	<main class="border-dots pl-6 xl:pl-7 border-l-2">
		<p class="max-w-prose font-condensed text-left text-neutral-base">{summary}</p>
	</main>
</article>
