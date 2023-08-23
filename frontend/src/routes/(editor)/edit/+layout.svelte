<script>
	import '@fontsource/ibm-plex-sans/400.css';
	import '@fontsource/ibm-plex-sans/500.css';
	import '@fontsource/ibm-plex-sans/700.css';
	import '@fontsource/ibm-plex-mono/400.css';
	import '@fontsource/ibm-plex-serif/400.css';
	import '@fontsource/ibm-plex-sans-condensed/400.css';
	import '@fontsource/ibm-plex-sans-condensed/500.css';

	import '../../../app.css';
	import Visualization from '$lib/components/three/visualization.svelte';
</script>

<div class="h-screen overflow-hidden">
	<Visualization />
	<main class="absolute inset-0 pointer-events-none">
		<slot />
	</main>
</div>
