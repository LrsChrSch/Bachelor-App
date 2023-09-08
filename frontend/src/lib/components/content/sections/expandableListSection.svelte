<script lang="ts">
	import Icon from '../icon.svelte';

	export let heading: string = '';
	export let list = [
		{ summary: 'Remember', content: 'Content 1' },
		{ summary: 'Understand', content: 'Content 2' },
		{ summary: 'Apply', content: 'Content 3' },
		{ summary: 'Analyze', content: 'Content 4' },
		{ summary: 'Evaluate', content: 'Content 5' },
		{ summary: 'Create', content: 'Content 6' }
	];
</script>

<section>
	<div class="">
		{#if heading}
			<h3>{heading}</h3>
		{/if}
		<p class="font-condensed text-neutral-base"><slot /></p>
	</div>
	<ul>
		{#each list as { summary, content }}
			<li
				class="mb-5 list-none xs:list-outside xs:list-decimal list marker:text-sm marker:text-neutral-base">
				<details class="group border-b border-neutral-base border-opacity-20 pb-4 pl-3">
					<summary class="select-none cursor-pointer flex justify-between">
						{summary}
						<Icon
							name="expand"
							classes="fill-accent group-open:-scale-y-100 transition-transform duration-75" />
					</summary>
					<div class="mt-5 text-neutral-base">
						<p class="text-justify whitespace-pre-line">{content}</p>
					</div>
				</details>
			</li>
		{/each}
	</ul>
</section>
