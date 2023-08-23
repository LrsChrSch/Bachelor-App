<script lang="ts">
	import HeadingSection from '$lib/components/content/sections/headingSection.svelte';
	import TextSection from '$lib/components/content/sections/textSection.svelte';
	import ImageLeftSection from '$lib/components/content/sections/imageLeftSection.svelte';
	import ImageWideSection from '$lib/components/content/sections/imageWideSection.svelte';
	import JumpMarker from '../jumpMarker.svelte';
	import QuoteSection from '../sections/quoteSection.svelte';
</script>

<QuoteSection author="Dr. Fei-Fei Li">
	[...] there is nothing "artificial" about this technology - it is made by humans, intended to
	behave like humans and affects humans. So if we want it to play a positive role in tomorrow's
	world, it must be guided by human concerns.
</QuoteSection>

<HeadingSection heading="Thematik">
	Dieses Kapitel gibt eine kurze Einführung in die Thematik.
</HeadingSection>

<TextSection multicolumn={true}>
	Mit der Welle an künstlichen Intelligenzen KI, die zwischen 2022 und 2023 veröffentlicht wurden,
	fand ein Paradigmen-Wechsel statt. Mit der Transformer-Architektur können Menschen ihre Absichten
	in ihrer eigenen Sprache äußern und sparen sich so die Umwandlung in eine für Maschinen
	verständliche Form, wie bspw. Programmcode oder eine Suchanfrage. Text-basierte Modelle wie Bert
	oder GPT-3 bearbeiten so die Anfrage und geben eine Antwort in ebenso menschlicher Sprache, aber
	mit scheinbar übermenschlichen Fähigkeiten zurück. Als Konsequenz kommen so immer häufiger Fragen
	wie "wird KI die Menschen ersetzen?” oder augenscheinliche Sichtungen von "Artificial General
	Intelligence" auf und Diskussionen über Regulierung und Ethik nehmen zu. Diese Arbeit zeigt die
	Unterschiede und Gemeinsamkeiten von menschlichen und maschinellen kognitiven Fähigkeiten auf,
	indem sie einen Überblick über die Funktionsweise des Denkens und der KI-Modelle (insbesondere aus
	dem Bereich der Text- und Bildgenerierung) gibt und diese miteinander vergleicht. Darüber hinaus
	werden die oben genannten Fragen diskutiert und anhand einer Applikation demonstriert, wie sich
	beide Systeme gegenseitig augmentieren können, um eine neue Art des Denkens und neue Formen der
	Mensch-KI-Interaktion zu erkunden.
</TextSection>

<ImageWideSection
	src="/assets/images/brain2.png"
	alt="Ein KI-generiertes Bild eines augmentierten Gehirns"
	showAlt={true} />

<HeadingSection heading="Navigation">
	Die folgenden beiden Abschnitte geben einen Überblick über die Navigation in der Visualisierung
	und den Textteil.
</HeadingSection>
<TextSection heading="Visualisierung">
	Mit der Welle an künstlichen Intelligenzen KI, die zwischen 2022 und 2023 veröffentlicht wurden,
	fand ein Paradigmen-Wechsel statt. Mit der Transformer-Architektur können Menschen ihre Absichten
	in ihrer eigenen Sprache äußern und sparen sich so die Umwandlung in eine für Maschinen
	verständliche Form, wie bspw. Programmcode oder eine Suchanfrage. Text-basierte Modelle wie Bert
	oder GPT-3 bearbeiten so die Anfrage und geben eine Antwort in ebenso menschlicher Sprache, aber
	mit scheinbar übermenschlichen Fähigkeiten zurück.
</TextSection>
<TextSection heading="Content">
	Mit der Welle an künstlichen Intelligenzen KI, die zwischen 2022 und 2023 veröffentlicht wurden,
	fand ein Paradigmen-Wechsel statt. Mit der Transformer-Architektur können Menschen ihre Absichten
	in ihrer eigenen Sprache äußern und sparen sich so die Umwandlung in eine für Maschinen
	verständliche Form, wie bspw. Programmcode oder eine Suchanfrage. Text-basierte Modelle wie Bert
	oder GPT-3 bearbeiten so die Anfrage und geben eine Antwort in ebenso menschlicher Sprache, aber
	mit scheinbar übermenschlichen Fähigkeiten zurück.
</TextSection>
