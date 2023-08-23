<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { createThought } from '$lib/script/sceneController';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
	import IconSquare from './iconSquare.svelte';

	let socket: WebSocket;
	onMount(() => {
		toggleSocket();
	});

	onDestroy(() => {
		// if socket exists and is open, close it
		if (socket && socket.readyState === socket.OPEN) {
			socket.close();
		}
	});

	let socketActive = false;

	let sendNew = true;

	function toggleSocket() {
		if (socket && socket.readyState === socket.OPEN) {
			socket.close();
			socketActive = false;
		} else {
			sendNew = true;
			socket = new WebSocket('ws://localhost:5000');
			socket.onopen = () => {
				socketActive = true;
				console.log('connected');
				socket.send(JSON.stringify({ status: 'connected', className: 'Thought' }));
			};

			socket.onmessage = async (event) => {
				const data = JSON.parse(event.data);
				console.log(data);

				if (data.status === 'connected') {
					socket.send(JSON.stringify({ status: 'acknowledged', className: 'Thought' }));
				} else if (data.status === 'new') {
					const ins = data.in;
					delete data.in;

					await createThought(data, ins, 'Thought');
					//socket.send(JSON.stringify({ status: 'updated', className: 'Thought' }));
				} else if (data.status === 'done') {
					if (sendNew)
						socket.send(JSON.stringify({ status: 'acknowledged', className: 'Thought' }));
					else socket.send(JSON.stringify({ status: 'kill', className: 'Thought' }));
				}
			};

			socket.onclose = () => {
				console.log('disconnected');
				socketActive = false;
			};

			socket.onerror = (error) => {
				console.log(error);
			};
		}
	}
</script>

<!-- <button
	on:click={}
	class="rounded-full p-4 flex items-center justify-center aspect-square {socketActive
		? 'bg-green-light'
		: 'bg-red-dark text-neutral-light'}">
	{socketActive ? 'C' : 'D'}
</button> -->

<IconSquare
	onClick={() => toggleSocket()}
	classes={socketActive
		? '!bg-accent !fill-neutral-dark hover:!bg-neutral-light hover:border-neutral-light '
		: ''}
	name="websocket"
	text="Verbindungen anzeigen" />

<IconSquare onClick={() => (sendNew = false)} name="close" text="Disconnect" />
