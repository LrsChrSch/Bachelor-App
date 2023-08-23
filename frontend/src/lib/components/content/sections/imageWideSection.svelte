<script lang="ts">
	export let src: string;
	export let alt: string;
	export let heading: string = '';
	export let showAlt: boolean = true;
</script>

<section class="content-section">
	{#if heading}
		<h3 class="w-full">{heading}</h3>
	{/if}

	<img
		class="rounded-sm aspect-video w-full h-auto object-cover mb-6 grayscale-[0.95] hover:grayscale-0 transition-[filter] duration-300"
		{src}
		{alt} />
	{#if showAlt}
		<p class="text-left font-condensed text-neutral-base border-dots border-l-2 pl-6">{alt}</p>
	{/if}
</section>
