<script lang="ts">
	export let author: string;
	export let heading: string = '';
</script>

<section class="content-section">
	{#if heading}
		<h3>{heading}</h3>
	{/if}
	<blockquote class="font-serif text-xl leading-relaxed hyphens-auto mb-6" cite={author}>
		"<slot />"
	</blockquote>
	<p class="text-neutral-base">- {author}</p>
</section>
