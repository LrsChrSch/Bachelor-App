<script lang="ts">
	import { createThought, selectThoughtById } from '$lib/script/sceneController';
	import Icon from '../content/icon.svelte';

	let text: string = '';
	let image: FileList | null = null;
	let imageValue: string = '';
	let imageInput: HTMLInputElement;

	export let reference: string | null = null;

	async function submit(event: Event) {
		event.preventDefault();

		let result;
		if (image) {
			const reader = new FileReader();
			reader.readAsDataURL(image[0]);
			reader.onload = async () => {
				console.log(text);
				const img = reader.result as string;
				const imageData = img.split('base64,')[1];
				result = await createThought(
					{
						text: text,
						image: imageData,
						caption: text
					},
					reference ? [reference] : [],
					'Thought'
				);

				text = '';
				image = null;
				imageValue = '';
				return;
			};
		} else {
			result = await createThought(
				{
					text: text
				},
				reference ? [reference] : [],
				'Thought'
			);
			text = '';
			image = null;
			imageValue = '';
		}
	}

	function handler(event: Event) {
		event.preventDefault();
		imageInput.click();
	}

	export let color: string = 'accent';
</script>

<div class="bg-neutral-dark p-6 pr-5">
	<form on:submit={submit} class="flex">
		<button
			class="mr-5 p-3 flex justify-center items-center group {'hover:bg-' +
				color}  transition-colors duration-75"
			on:click={handler}>
			<Icon
				name="upload"
				classes="{'fill-' +
					color} cursor-pointer group-hover:fill-neutral-dark transition-colors duration-75" />
		</button>
		<input
			bind:value={imageValue}
			bind:files={image}
			bind:this={imageInput}
			type="file"
			name="image"
			id="image"
			class="hidden" />

		<input
			type="text"
			name="text"
			id="text"
			bind:value={text}
			on:keypress={(event) => {
				if (event.key === 'Enter') {
					submit(event);
				}
			}}
			placeholder="Text eingeben"
			required
			class="focus-state bg-transparent placeholder:text-neutral-base {'text-' +
				color}  font-medium border-b-2 {'border-' +
				color} w-full hover:placeholder:text-neutral-light transition-colors duration-75" />
		<button
			on:click={submit}
			aria-label="submit"
			class="ml-6 group {'hover:bg-' + color} p-3 transition-colors duration-75">
			<Icon
				name="send"
				classes="{'fill-' + color} group-hover:fill-neutral-dark transition-colors duration-75" />
		</button>
	</form>
	<div class="flex gap-4 justify-between mt-4 fill-neutral-base text-neutral-base">
		{#if image}
			<p class="line-clamp-1 max-w-[25ch]">{image[0].name}</p>
			<button
				class="hover:fill-red transition-colors duration-75"
				on:click={() => {
					image = null;
					imageValue = '';
				}}>
				<Icon name="bin" size="s" />
			</button>
		{/if}
	</div>
</div>
