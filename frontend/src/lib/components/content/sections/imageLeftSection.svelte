<script lang="ts">
	import SuperImage from '../superImage.svelte';

	export let src: string;
	export let alt: string;
	export let heading: string = '';
	export let float: 'left' | 'right' = 'left';
</script>

<section>
	{#if heading}
		<h3 class="w-full">{heading}</h3>
	{/if}

	<p class="text-justify">
		<!-- <img
			class="{float === 'left'
				? 'float-left mr-6'
				: 'float-right ml-6'} max-w-[60%] rounded-sm w-full h-auto object-cover grayscale-[0.95] hover:grayscale-0 transition-[filter] duration-300"
			{src}
			{alt} /> -->

		<SuperImage
			{src}
			{alt}
			showAlt={false}
			classes="{float === 'left' ? 'float-left mr-6' : 'float-right ml-6'} w-3/5" />
		<slot />
	</p>
</section>
