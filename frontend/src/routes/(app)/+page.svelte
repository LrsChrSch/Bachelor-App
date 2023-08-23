<script lang="ts">
	import Hero from '$lib/components/content/hero.svelte';
	import { connect } from '$lib/script/dbController';
	import { afterUpdate, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import ChapterCard from '$lib/components/content/chapterCard.svelte';
	import NavigationChapter from '$lib/components/content/chapters/navigationChapter.svelte';
	import NextChapterSection from '$lib/components/content/sections/nextChapterSection.svelte';
	import HumanChapter from '$lib/components/content/chapters/humanChapter.svelte';
	import MachineChapter from '$lib/components/content/chapters/machineChapter.svelte';
	import ComparisonChapter from '$lib/components/content/chapters/comparisonChapter.svelte';
	import CombinationChapter from '$lib/components/content/chapters/combinationChapter.svelte';

	const chapters = [
		{
			title: 'Einführung in die Thematik und Navigation',
			icon: 'rebuild',
			summary:
				'Dieses Kapitel gibt eine kurze Einführung in die Thematik. Es erklärt zudem die Grundlagen der Navigation in der Visualisierung.',
			color: '--one',
			component: NavigationChapter
		},
		{
			title: 'Über die menschliche Kognition',
			icon: 'human',
			summary:
				'Hier werden die Basisfunktionen der menschlichen Kognition aufgegriffen und erläutert. Es geht um Wahrnehmung, Aufmerksamkeit, Gedächtnis und das Nachdenken selbst.',
			color: '--human',
			component: HumanChapter
		},
		{
			title: 'Gegenstück: maschinelle Kognition',
			icon: 'robot',
			summary:
				'Der Computer ist gar nicht so weit vom Menschen entfernt, wie man oft denkt. Dieses Kapitel ist eine Übersicht über die wesentlichen kognitiven Funktionen der Maschine, Sensorik, KI und mehr.',
			color: '--two',
			component: MachineChapter
		},
		{
			title: 'Vergleich von Mensch zu Maschine',
			icon: 'compare',
			summary:
				'In diesem Kapitel werden die menschliche Kognition mit der maschinellen Kognition in einem Diskurs verglichen.',
			color: '--five',
			component: ComparisonChapter
		},
		{
			title: 'Von GI zu ASI fehlt eigentlich nur das A',
			icon: 'combine',
			summary:
				'Als abschließendes Kapitel werden Vorschläge eingebracht, wie beide Systeme miteinander kombiniert werden können.',
			color: '--six',
			component: CombinationChapter
		}
	];

	let showChapters = false;
	let currentChapter = 0;

	let mounted = false;
	onMount(() => {
		connect();
		mounted = true;
	});

	$: {
		if (mounted) {
			showChapters = false;
			document.documentElement.style.setProperty(
				'--accent',
				getComputedStyle(document.documentElement).getPropertyValue(chapters[currentChapter].color)
			);
		}
	}

	afterUpdate(() => {
		const contentContainer = document.getElementById('contentContainer');
		if (contentContainer) {
			contentContainer.scrollTop = 0;
		}
	});

	const transitionSpeed = 150;
</script>

<svelte:head>
	<title>{chapters[currentChapter].title}</title>
	<meta name="description" content={chapters[currentChapter].summary} />
</svelte:head>

<div class="overflow-y-auto max-h-full overflow-x-hidden @container" id="contentContainer">
	<Hero
		bind:showChapters
		bind:currentChapter
		maxChapters={chapters.length}
		heading={chapters[currentChapter].title} />
	<div class="px-7 py-5 xs:px-8 xs:py-7 2xl:py-8">
		{#if showChapters}
			<ul
				in:fly={{ x: -89, delay: transitionSpeed, duration: transitionSpeed }}
				out:fly={{ x: -89, duration: transitionSpeed }}>
				{#each chapters as chapter, i}
					<li class="mb-8 w-full">
						<button
							class="w-full"
							on:click={() =>
								currentChapter !== i ? (currentChapter = i) : (showChapters = false)}>
							<ChapterCard
								color={chapter.color}
								icon={chapter.icon}
								title={chapter.title}
								summary={chapter.summary} />
						</button>
					</li>
				{/each}
			</ul>
		{:else}
			<div
				class="flex flex-col gap-9"
				in:fly={{ x: 89, delay: transitionSpeed, duration: transitionSpeed }}
				out:fly={{ x: 89, duration: transitionSpeed }}>
				<svelte:component this={chapters[currentChapter].component} />
				{#if currentChapter + 1 < chapters.length}
					<NextChapterSection
						bind:currentChapter
						maxChapters={chapters.length}
						title={chapters[currentChapter + 1].title} />
				{/if}
			</div>
		{/if}
	</div>
	<div
		aria-disabled="true"
		class="sticky bottom-0 left-0 right-0 h-8 -mt-8 bg-gradient-to-t from-neutral-dark to-transparent" />
</div>
