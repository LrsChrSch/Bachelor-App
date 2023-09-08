<script lang="ts">
	import SuperImage from '../superImage.svelte';

	export let src: string;
	export let alt: string;
	export let heading: string = '';
	export let showAlt: boolean = true;
</script>

<section class="mb-9">
	{#if heading}
		<h3 class="w-full">{heading}</h3>
	{/if}

	<SuperImage {src} {alt} {showAlt} />
</section>
