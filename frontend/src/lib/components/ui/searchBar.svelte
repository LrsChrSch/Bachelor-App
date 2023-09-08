<script lang="ts">
	import { searchThought } from '$lib/script/sceneController';
	import Icon from '../content/icon.svelte';

	let searchQuery: string = '';
	let found: boolean;

	async function search(event: Event) {
		event.preventDefault();
		found = await searchThought(searchQuery, 'Thought');
		setTimeout(() => {
			found = true;
		}, 500);
		searchQuery = '';
	}
</script>

<form on:submit={search} class="flex items-center gap-4 sm:gap-6 w-full xs:min-w-[280px] max-w-xs">
	<input
		type="text"
		bind:value={searchQuery}
		class="focus-state bg-transparent placeholder:text-neutral-base text-accent font-medium border-b-2 transition-colors duration-75 border-accent w-full"
		name="search"
		id="search"
		placeholder="Input search term or question" />
	<button type="submit" class={found === false ? 'animate-wiggle' : 'animate-none'}>
		<Icon
			name="search"
			classes="fill-accent hover:fill-neutral-light transition-colors duration-75" />
	</button>
</form>
