<script lang="ts">
	import * as d3 from 'd3';

	let width = 0;
	let height = 0;
	let marginY = 34 + 89;
	let marginX = 89;

	import {
		getThoughts,
		publicData,
		hovered,
		currentThought,
		showAll,
		showNewDialog
	} from '$lib/script/sceneController';
	import { onMount, onDestroy } from 'svelte';
	import { get } from 'svelte/store';
	import Window from '../ui/window.svelte';
	import { resetSignal } from '$lib/script/cameraController';
	import { fade, scale } from 'svelte/transition';

	onMount(async () => {
		await getThoughts('Thought');
		viewWidth = width;
		viewHeight = height;
	});

	$: x = d3.scaleLinear([-1, 1], [0 + marginX, width - marginX]);
	$: y = d3.scaleLinear([-1, 1], [0 + marginY, height - marginY]);
	$: text = d3.scaleLinear([0, 200], [5, 13]).clamp(true);

	function getColorName(generated: boolean, category: string) {
		if (!generated) {
			return '-human';
		} else {
			switch (category) {
				case 'Information':
					return '-two';
				case 'Keep':
					return '-three';
				case 'Focus':
					return '-four';
				case 'Change':
					return '-five';
				case 'Create':
					return '-six';
				default:
					return '-one';
			}
		}
	}

	$: line = d3
		.line()
		.x((d) => x(d[0]))
		.y((d) => y(d[1]));

	let dialogWidth = 0;
	let dialogHeight = 0;
	let dialogX = 0;
	let dialogY = 0;

	let viewX = 0;
	let viewY = 0;
	let viewWidth = width;
	let viewHeight = height;
	let zoom = 1;

	let mouseX = 0;
	let mouseY = 0;

	const unsubscribe = resetSignal.subscribe(() => {
		viewX = 0;
		viewY = 0;
		viewWidth = width;
		viewHeight = height;
		zoom = 1;
		resetSignal.set(false);
	});

	onDestroy(() => {
		unsubscribe();
	});

	let moving = false;

	let timeDelta = 0;

	function clickData(event: Event, value: any, key: string) {
		event.preventDefault();
		const newThought = { ...value, id: key };
		showNewDialog.set(false);
		currentThought.set(newThought);
		dialogX = mouseX;
		dialogY = mouseY;
	}
</script>

<div
	id="scene"
	on:mousedown={(e) => {
		timeDelta = e.timeStamp;
		moving = true;
	}}
	on:mouseup={() => {
		moving = false;
	}}
	on:wheel={(e) => {
		if (e.target.id === 'scene' || e.target.id === 'blank') {
			// update viewX and viewY so it zooms into the middle

			zoom = Math.min(Math.max(zoom + e.deltaY / 1000, 0.1), 2);
		}
	}}
	on:mousemove={(e) => {
		mouseX = e.layerX;
		mouseY = e.layerY;
		if (moving) {
			if (e.target.id === 'scene' || e.target.id === 'blank') {
				// update viewX and viewY
				viewX -= e.movementX * zoom;
				viewY -= e.movementY * zoom;
			}
		}
	}}
	on:click={(e) => {
		if (
			(e.originalTarget.id === 'scene' || e.originalTarget.id === 'blank') &&
			e.timeStamp - timeDelta < 200
		) {
			currentThought.set({});
			hovered.set('');
			showNewDialog.set(true);
		}
	}}
	on:keydown={() => {
		//console.log('Keydown');
	}}
	class="w-full h-full"
	bind:clientWidth={width}
	bind:clientHeight={height}>
	<svg
		viewBox="0 0 500 500"
		fill="none"
		class="absolute w-full h-full stroke-neutral-base pointer-events-none"
		preserveAspectRatio="none"
		stroke-width="0.1"
		xmlns="http://www.w3.org/2000/svg">
		<g>
			<line y1="82.75" x2="500" y2="82.75" />
			<line y1="166.083" x2="500" y2="166.083" />
			<line y1="249.417" x2="500" y2="249.417" />
			<line y1="332.75" x2="500" y2="332.75" />
			<line y1="416.083" x2="500" y2="416.083" />
			<line x1="416.917" y1="-0.333374" x2="416.917" y2="499.667" />
			<line x1="333.583" x2="333.583" y2="500" />
			<line x1="250.25" y1="-0.333374" x2="250.25" y2="500" />
			<line x1="166.917" y1="-0.333374" x2="166.917" y2="500" />
			<line x1="83.5834" y1="-0.333374" x2="83.5834" y2="500" />
		</g>
	</svg>

	<svg
		class="w-full h-full"
		viewBox="{viewX + (viewWidth - viewWidth * zoom) / 2} {viewY +
			(viewHeight - viewHeight * zoom) / 2} {viewWidth * zoom} {viewHeight * zoom}"
		id="blank">
		<g>
			<!-- Grid: -->
		</g>
		<g>
			{#each Object.entries($publicData) as [key, value]}
				{#if key === $hovered || $currentThought.id === key || $showAll}
					{#each value.lines.in as lines}
						<path
							transition:fade={{ duration: 75 }}
							fill="none"
							class="transition-colors duration-75
                            {key === $hovered || $currentThought.id === key
								? 'opacity-100'
								: $showAll
								? 'opacity-50'
								: 'opacity-0'}
                            {$showAll && !(key === $hovered || $currentThought.id === key)
								? 'stroke-neutral-base'
								: 'stroke-five'}"
							stroke-width={1 * zoom}
							d={line(lines)} />
					{/each}
					{#each value.lines.out as lines}
						<path
							transition:fade={{ duration: 75 }}
							fill="none"
							class="transition-colors duration-75
                            {$showAll && !(key === $hovered || $currentThought.id === key)
								? 'stroke-neutral-base'
								: 'stroke-six'} 
                                
                                {key === $hovered || $currentThought.id === key
								? 'opacity-100'
								: 'opacity-0'}"
							stroke-width={1 * zoom}
							d={line(lines)} />
					{/each}
				{/if}
			{/each}
		</g>
		<g>
			{#each Object.entries($publicData) as [key, value]}
				<g
					class="cursor-pointer"
					on:mouseenter={() => {
						hovered.set(key);
					}}
					on:mouseleave={() => {
						hovered.set(null);
					}}
					on:click={(e) => clickData(e, value, key)}
					on:keypress={(e) => clickData(e, value, key)}>
					<circle
						class=" {$showAll
							? 'hover:fill-neutral-light fill' + getColorName(value.generated, value.category)
							: 'fill-neutral-light hover:fill' +
							  getColorName(value.generated, value.category)} transition-colors duration-75"
						cx={x(value.pos[0])}
						cy={y(value.pos[1])}
						r={text(value.text.length) * zoom} />
				</g>
			{/each}
		</g>
		{#each Object.entries($publicData) as [key, value]}
			{#if $hovered === key}
				<text
					transition:fade={{ duration: 75 }}
					font-size={18 * zoom}
					class="fill-neutral-light mix-blend-multiply dark:mix-blend-difference"
					dominant-baseline="middle"
					text-anchor="middle"
					x={x(value.pos[0])}
					y={y(value.pos[1]) - text(value.text.length) * zoom - 10 * zoom}
					>{value.text.split(' ').slice(0, 5).join(' ')}{value.text.split(' ').length > 5
						? '...'
						: ''}</text>
			{/if}
		{/each}
	</svg>
</div>

{#if $currentThought.pos}
	<div
		bind:clientWidth={dialogWidth}
		bind:clientHeight={dialogHeight}
		class="absolute transition-all duration-300 -translate-x-1/2 -translate-y-1/2"
		style="left: {Math.min(
			Math.max(dialogX, 0 + dialogWidth / 2 + marginX),
			width - dialogWidth / 2 - marginX
		)}px; 
        top: {Math.min(
			Math.max(dialogY, 0 + dialogHeight / 2 + marginY),
			height - dialogHeight / 2 - marginY
		)}px">
		<Window
			color={getColorName($currentThought.generated, $currentThought.category).replace('-', '')} />
	</div>
{/if}
