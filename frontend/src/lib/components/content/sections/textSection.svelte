<script lang="ts">
	export let heading: string = '';
	export let multicolumn: boolean = false;
	export let showDots: boolean = true;
</script>

<section class="content-section">
	{#if heading}
		<h3 class="w-full">{heading}</h3>
	{/if}
	<p
		class="text-justify {multicolumn
			? 'xl:columns-2'
			: showDots
			? 'border-dots border-l-2 pl-6'
			: ''} gap-6">
		<slot />
	</p>
</section>
