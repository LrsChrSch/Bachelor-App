<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/components/content/icon.svelte';

	export let href: string = '';
	export let name: string = '';
	export let classes: string = '';
	export let onClick: () => void = () => {};
</script>

{#if href !== ''}
	<a {href} class="flex gap-5 transition-all duration-75 font-medium pr-4 {classes}">
		{#if name}
			<Icon {name} />
		{/if}
		<slot />
	</a>
{:else}
	<button class="flex gap-5 transition-all duration-75 {classes}" on:click={onClick}>
		{#if name}
			<Icon {name} />
		{/if}
		<slot />
	</button>
{/if}
