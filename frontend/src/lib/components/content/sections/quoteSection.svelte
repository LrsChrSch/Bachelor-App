<script lang="ts">
	export let author: string;
	export let heading: string = '';
</script>

<section class="mb-9">
	{#if heading}
		<h3>{heading}</h3>
	{/if}
	<blockquote class="font-serif text-xl text-justify leading-relaxed hyphens-auto" cite={author}>
		"<slot />"
	</blockquote>
	<p class="text-neutral-base">- {author}</p>
</section>
