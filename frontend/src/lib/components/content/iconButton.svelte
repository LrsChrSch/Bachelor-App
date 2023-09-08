<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/components/content/icon.svelte';

	export let href: string = '';
	export let name: string = '';
	export let classes: string = '';
	export let onClick: () => void = () => {};
	export let size: string = 'm';
</script>

{#if href !== ''}
	<a {href} class="flex gap-5 transition-all duration-75 font-medium pl-3 pr-4 {classes}">
		{#if name}
			<Icon {name} />
		{/if}
		<slot />
	</a>
{:else}
	<button class="flex gap-5 transition-all duration-75 w-fit {classes}" on:click={onClick}>
		{#if name}
			<Icon {name} {size} />
		{/if}

		<slot />
	</button>
{/if}
