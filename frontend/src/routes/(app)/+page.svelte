<script lang="ts">
	import Hero from '$lib/components/content/hero.svelte';
	import { connect } from '$lib/script/dbController';
	import { afterUpdate, onMount, onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	import ChapterCard from '$lib/components/content/chapterCard.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	import Navigation from '$lib/components/content/chapters/00_navigation.md?raw';
	import Introduction from '$lib/components/content/chapters/01_introduction.md?raw';
	import Human from '$lib/components/content/chapters/02_human.md?raw';
	import Machine from '$lib/components/content/chapters/03_machine.md?raw';
	import Comparison from '$lib/components/content/chapters/04_comparison.md?raw';
	import Combination from '$lib/components/content/chapters/05_combination.md?raw';
	import Application from '$lib/components/content/chapters/06_application.md?raw';

	import { resetBeacon, resetSite, timeSinceInteraction } from '$lib/script/resetSite';
	import { get } from 'svelte/store';
	import NextChapterSection from '$lib/components/content/sections/nextChapterSection.svelte';
	import SuperImage from '$lib/components/content/superImage.svelte';
	import SuperText from '$lib/components/content/superText.svelte';
	import JumpMarker from '$lib/components/content/jumpMarker.svelte';
	import MobileOnly from '$lib/components/content/mobileOnly.svelte';
	import SuperParagraph from '$lib/components/content/superParagraph.svelte';

	const chapters = [
		{
			title: 'Einführung in die Thematik und Fragen',
			icon: 'rebuild',
			summary:
				'Dieses Kapitel gibt eine kurze Einführung in die Thematik und Fragestellung dieser Arbeit.',
			color: '--one',
			content: Introduction
		},
		{
			title: 'Über die menschliche Kognition',
			icon: 'human',
			summary:
				'Hier werden die Basisfunktionen der menschlichen Kognition aufgegriffen und erläutert. Es geht um Wahrnehmung, Aufmerksamkeit, Gedächtnis und das Nachdenken an sich.',
			color: '--human',
			content: Human
		},
		{
			title: 'Über die maschinelle Kognition',
			icon: 'robot',
			summary:
				'Der Computer ist gar nicht so weit vom Menschen entfernt, wie man oft denkt. Dieses Kapitel ist eine Übersicht über die wesentlichen kognitiven Funktionen der Maschine, Sensorik, KI und mehr.',
			color: '--three',
			content: Machine
		},
		{
			title: 'Vergleich von Mensch zu Maschine',
			icon: 'compare',
			summary:
				'In diesem Kapitel werden die menschliche Kognition mit der maschinellen Kognition in einem Diskurs verglichen.',
			color: '--five',
			content: Comparison
		},
		{
			title: 'Von GI zu ASI fehlt eigentlich nur noch das A',
			icon: 'combine',
			summary:
				'In diesem Kapitel werden Vorschläge eingebracht, wie beide Systeme miteinander kombiniert werden können.',
			color: '--six',
			content: Combination
		},
		{
			title: 'Die Funktionsweise dieser Applikation',
			icon: 'websocket',
			summary:
				'Als abschließendes Kapitel wird etwas über die Funktionsweise dieser Applikation gesagt.',
			color: '--two',
			content: Application
		}
	];

	let showChapters = false;
	let showHelp = false;
	let currentChapter = 0;

	let mounted = false;
	onMount(() => {
		resetSite();
		connect();
		mounted = true;
	});

	function resetTimer() {
		if (get(resetBeacon)) {
			resetBeacon.set(false);
			resetSite();
		}
		timeSinceInteraction.set(new Date().getTime());
	}

	const unsubscribe = resetBeacon.subscribe((value) => {
		currentChapter = 0;
		showChapters = false;
		showHelp = false;
	});

	onDestroy(() => {
		unsubscribe();
	});

	$: {
		if (mounted) {
			showChapters = false;
			showHelp = false;
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

	const source = `
	
# Test test `;
</script>

<svelte:head>
	<title>{chapters[currentChapter].title}</title>
	<meta name="description" content={chapters[currentChapter].summary} />
</svelte:head>

<svelte:body
	on:mousemove={resetTimer}
	on:wheel={resetTimer}
	on:keydown={resetTimer}
	on:touchstart={resetTimer}
	on:click={resetTimer} />

<div class="overflow-y-auto max-h-full overflow-x-hidden @container" id="contentContainer">
	<Hero
		bind:showChapters
		bind:showHelp
		bind:currentChapter
		maxChapters={chapters.length}
		heading={chapters[currentChapter].title}
		nextChapter={chapters[Math.min(currentChapter + 1, chapters.length - 1)].title}
		previousChapter={chapters[Math.max(currentChapter - 1, 0)].title} />
	<div class="px-7 py-5 xs:px-8 xs:py-7 2xl:py-8 h-full">
		{#if showChapters}
			<ul
				in:fly={{ x: showHelp ? 89 : -89, delay: transitionSpeed, duration: transitionSpeed }}
				out:fly={{ x: showHelp ? 89 : -89, duration: transitionSpeed }}>
				{#each chapters as chapter, i}
					<li class="mb-5 dark:mb-8 w-full group/item">
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
		{:else if showHelp}
			<div
				class="flex flex-col content-section"
				in:fly={{ x: showChapters ? 89 : -89, delay: transitionSpeed, duration: transitionSpeed }}
				out:fly={{ x: showChapters ? 89 : -89, duration: transitionSpeed }}>
				<!-- <svelte:component this={chapters[currentChapter].component} /> -->

				<SvelteMarkdown
					source={Navigation}
					renderers={{
						paragraph: SuperParagraph,
						image: SuperImage,
						text: SuperText,
						link: JumpMarker,
						codespan: MobileOnly
					}} />
			</div>
		{:else}
			<div
				class="flex flex-col content-section"
				in:fly={{ x: 89, delay: transitionSpeed, duration: transitionSpeed }}
				out:fly={{ x: 89, duration: transitionSpeed }}>
				<!-- <svelte:component this={chapters[currentChapter].component} /> -->

				<SvelteMarkdown
					source={chapters[currentChapter].content}
					renderers={{
						paragraph: SuperParagraph,
						image: SuperImage,
						text: SuperText,
						link: JumpMarker,
						codespan: MobileOnly
					}} />
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
