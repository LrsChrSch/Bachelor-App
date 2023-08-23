<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/components/content/icon.svelte';

	export let name: string = '';
	export let text: string = '';
	export let classes: string = '';
	export let onClick: () => void = () => {};
</script>

<button
	class="flex justify-end transition-all p-2 rounded-sm items-center group border-2 fill-accent hover:fill-neutral-dark hover:bg-accent duration-75 border-accent bg-neutral-dark dark:bg-opacity-25 drop-shadow-md dark:drop-shadow-none backdrop-blur-sm {classes}"
	title={text}
	on:click={onClick}>
	{#if name}
		<Icon {name} size="l" />
	{/if}
</button>
