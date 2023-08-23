<script lang="ts">
	export let heading: string;
</script>

<section class="flex flex-col border-dots content-section -mb-8 pr-7 border-r-2">
	<h2 class="text-left">{heading}</h2>
	<p class="text-left font-condensed text-neutral-base">
		<slot />
	</p>
</section>
