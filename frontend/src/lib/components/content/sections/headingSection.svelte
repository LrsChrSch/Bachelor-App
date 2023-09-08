<script lang="ts">
	export let heading: string;
</script>

<section class="flex flex-col border-dots pr-6 border-r-2 first:mt-0 mt-9 mb-7">
	<h2 class="text-left">{heading}</h2>
	<p class="text-left font-condensed text-neutral-base">
		<slot />
	</p>
</section>
