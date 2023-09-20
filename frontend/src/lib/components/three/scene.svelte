<script lang="ts">
	import { T, useThrelte, useRender } from '@threlte/core';
	import {
		BlendFunction,
		DepthEffect,
		DepthPass,
		EffectComposer,
		EffectPass,
		GlitchEffect,
		GodRaysEffect,
		GridEffect,
		KernelSize,
		NoiseEffect,
		OutlineEffect,
		RenderPass,
		SMAAEffect,
		SMAAPreset,
		TiltShiftEffect
	} from 'postprocessing';
	import {
		OrbitControls,
		Instance,
		InstancedMesh,
		Grid,
		HTML,
		useGltf,
		useCursor
	} from '@threlte/extras';
	import {
		SphereGeometry,
		Vector3,
		Vector2,
		MeshPhongMaterial,
		BoxGeometry,
		Camera,
		FogExp2,
		Fog
	} from 'three';
	import { interactivity } from '@threlte/extras';
	import { page } from '$app/stores';
	import { position, target, cam, groundOffset } from '$lib/script/cameraController';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import {
		publicData,
		currentThought,
		getThoughts,
		showAll,
		hovered,
		showNewDialog
	} from '$lib/script/sceneController';
	import Window from '$lib/components/ui/window.svelte';

	const { scene, camera, renderer, size } = useThrelte();

	const composer = new EffectComposer(renderer);

	const setupEffectComposer = (camera: Camera) => {
		composer.removeAllPasses();
		composer.addPass(new RenderPass(scene, camera));
		composer.addPass(
			new EffectPass(
				camera,
				new SMAAEffect({
					preset: SMAAPreset.HIGH
				})
			)
		);
		composer.addPass(
			new EffectPass(
				camera,
				new TiltShiftEffect({
					kernelSize: KernelSize.SMALL,
					focusArea: 0.5,

					resolutionScale: 1
				})
			)
		);
	};
	$: setupEffectComposer($camera);
	$: composer.setSize($size.width, $size.height);

	useRender((_, delta) => {
		composer.render(delta);
	});

	interactivity();

	onMount(async () => {
		// set timeout of 300ms
		//console.log('Models', modelsGltf);
		//await new Promise((r) => setTimeout(r, 300));
		await getThoughts('Thought');
	});

	camera.subscribe((value) => {
		cam.set(value);
	});

	function map(value, oldRange, newRange) {
		var newValue =
			((value - oldRange[0]) * (newRange[1] - newRange[0])) / (oldRange[1] - oldRange[0]) +
			newRange[0];
		return Math.min(Math.max(newValue, newRange[0]), newRange[1]);
	}

	const modelsGltf = useGltf('/assets/models/shapes2.glb');

	const instances = [
		{
			node: '1',
			category: 'Information'
		},
		{
			node: '2',
			category: 'Keep'
		},
		{
			node: '3',
			category: 'Focus'
		},
		{
			node: '4',
			category: 'Change'
		},
		{
			node: '5',
			category: 'Create'
		},
		{
			node: 'user'
		}
	];

	function colorHelper(name: string) {
		const color = `rgb(${getComputedStyle(document.documentElement)
			.getPropertyValue(name)
			.replaceAll(' ', ',')})`;
		return color;
	}

	function getColorName(generated: boolean, category: string) {
		if (!generated) {
			return '--human';
		} else {
			switch (category) {
				case 'Information':
					return '--two';
				case 'Keep':
					return '--three';
				case 'Focus':
					return '--four';
				case 'Change':
					return '--five';
				case 'Create':
					return '--six';
				default:
					return '--one';
			}
		}
	}

	const { onPointerEnter: cursorEnter, onPointerLeave: cursorLeave } = useCursor(
		'pointer',
		'default'
	);
</script>

<!-- <svelte:window on:resize={() => composer.setSize(window.innerWidth, window.innerHeight)} /> -->

<T.PerspectiveCamera makeDefault position={$position} near={0.01} far={10}>
	<OrbitControls
		enableDamping={true}
		maxDistance={7}
		minDistance={0.1}
		enableZoom={true}
		target={$target} />
</T.PerspectiveCamera>

<T.DirectionalLight position={[3, 3, 5]} intensity={0.2} />
<T.PointLight position={[0, groundOffset, 0]} intensity={0.5} decay={3} />

<T.AmbientLight intensity={0.2} />

{#if $modelsGltf}
	<T.Group
		name="Objects"
		on:pointermissed={() => {
			currentThought.set({});
			hovered.set('');
			showNewDialog.set(true);
		}}>
		{#each instances as instance}
			<InstancedMesh
				frustumCulled={false}
				position={[0, groundOffset, 0]}
				geometry={instance.node === 'user'
					? new SphereGeometry(1, 64, 32)
					: $modelsGltf.nodes[instance.node].geometry}>
				<!--  -->
				<T.MeshStandardMaterial roughness={0.75} />
				{#if $publicData}
					{#each Object.entries($publicData) as [key, value]}
						{#if value.category === instance.category || (instance.node === 'user' && !value.generated)}
							{#if $currentThought.id !== key}
								<Instance
									on:click={() => {
										cursorLeave();
										const newThought = { ...value, id: key };
										showNewDialog.set(false);
										currentThought.set(newThought);
									}}
									on:pointerenter={cursorEnter}
									on:pointerleave={cursorLeave}
									on:pointerenter={() => hovered.set(key)}
									on:pointerleave={() => hovered.set(null)}
									position={value.pos}
									rotation={[
										(Math.floor(Math.random() * 4) * Math.PI) / 2,
										(Math.floor(Math.random() * 4) * Math.PI) / 2,
										(Math.floor(Math.random() * 4) * Math.PI) / 2
									]}
									color={$hovered === key
										? $showAll
											? colorHelper('--vis-color')
											: colorHelper(getColorName(value.generated, value.category))
										: $showAll
										? colorHelper(getColorName(value.generated, value.category))
										: colorHelper('--vis-color')}
									scale={map(value.text.length, [0, 200], [0.01, 0.02])} />
							{:else}
								<HTML interactive transform sprite position={value.pos} scale={0.0025}>
									<Window color={getColorName(value.generated, value.category).replace('--', '')} />
								</HTML>
							{/if}
						{/if}
					{/each}
				{/if}
			</InstancedMesh>
		{/each}
	</T.Group>
{/if}

<T.Group position={[0, groundOffset, 0]}>
	{#if $publicData}
		{#each Object.entries($publicData) as [key, value]}
			{#if key === $hovered || $currentThought.id === key || $showAll}
				{#each value.lines.in as line}
					<T.Line opacity={0.5}>
						<T.BufferGeometry
							on:create={({ ref }) => {
								const points = line;
								let positions = [];
								for (let i = 0; i < points.length; i++) {
									positions.push(new Vector3(points[i][0], points[i][1], points[i][2]));
								}
								ref.setFromPoints(positions);
							}} />
						<T.LineBasicMaterial
							transparent={true}
							opacity={key === $hovered || $currentThought.id === key ? 1 : $showAll ? 0.25 : 0}
							color={$showAll && !(key === $hovered || $currentThought.id === key)
								? colorHelper('--neutral-base')
								: colorHelper('--five')} />
					</T.Line>
				{/each}
				{#each value.lines.out as line}
					<T.Line opacity={0.5}>
						<T.BufferGeometry
							on:create={({ ref }) => {
								const points = line;
								let positions = [];
								for (let i = 0; i < points.length; i++) {
									positions.push(new Vector3(points[i][0], points[i][1], points[i][2]));
								}
								ref.setFromPoints(positions);
							}} />
						<T.LineBasicMaterial
							transparent={true}
							opacity={key === $hovered || $currentThought.id === key ? 1 : 0}
							color={$showAll && !(key === $hovered || $currentThought.id === key)
								? colorHelper('--neutral-base')
								: colorHelper('--six')} />
					</T.Line>
				{/each}
			{/if}
		{/each}
	{/if}
</T.Group>

<Grid
	axes="xzy"
	cellColor={colorHelper('--neutral-base')}
	cellSize={0.2}
	cellThickness={0.5}
	fadeDistance={8}
	fadeStrength={1}
	followCamera={true}
	sectionColor={colorHelper('--neutral-base')}
	sectionThickness={1}
	sectionSize={2} />
