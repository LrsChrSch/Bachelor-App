<script lang="ts">
	import HeadingSection from '$lib/components/content/sections/headingSection.svelte';
	import TextSection from '$lib/components/content/sections/textSection.svelte';
	import ImageLeftSection from '$lib/components/content/sections/imageLeftSection.svelte';
	import ImageWideSection from '$lib/components/content/sections/imageWideSection.svelte';
	import JumpMarker from '../jumpMarker.svelte';
	import QuoteSection from '../sections/quoteSection.svelte';
	import ExpandableListSection from '../sections/expandableListSection.svelte';
</script>

<HeadingSection heading="Grundlagen menschlichen Denkens">
	Dieses Kapitel gibt eine kurze Einführung in die Thematik. <br /> Es erklärt zudem die Grundlagen der
	Navigation in der Visualisierung.
</HeadingSection>

<ImageLeftSection
	src="/assets/images/perception2.png"
	alt="Example image"
	float="left"
	heading="Wahrnehmung">
	Die Wahrnehmung bildet die Grundlage aller kognitiven Prozesse, indem sie dem Menschen
	Informationen über Objekte, Ereignisse und Beziehungen in seiner Umgebung vermittelt. Sie bezieht
	sich auf physische Sinneswahrnehmungen sowie auf psychische Prozesse, die mit der
	Informationsverarbeitung verbunden sind, wie die Erkennung von Emotionen und metakognitiven
	Abläufen. Die Sinnesorgane spielen eine Schlüsselrolle in diesem Prozess, wobei jedes Organ auf
	die Erfassung spezifischer Umweltreize spezialisiert ist, etwa das visuelle System für Licht und
	Farben und das auditive System für Schall. Die Wahrnehmung durchläuft mehrere Stufen: Die
	Sinnesorgane erfassen Reize, die über sensorische Bahnen ans Gehirn weitergeleitet und dort
	interpretiert werden. Dieser Prozess involviert nicht nur sensorische, sondern auch psychische
	Aspekte, die durch das Zusammenspiel verschiedener Hirnregionen geprägt sind. Die Verarbeitung von
	Sinnesreizen ermöglicht die Wahrnehmung von Objekten, Räumlichkeit, Bewegung und anderen
	Umwelteigenschaften. Diese Konzepte greifen auf Ideen von William James zurück, der den
	fortlaufenden Fluss von Sinneseindrücken betonte, die aktiv vom Individuum ausgewählt werden
	können.
</ImageLeftSection>

<QuoteSection author="William James, Principles of Psychology (1890)" heading="Aufmerksamkeit">
	Es ist die Besitzergreifung des Geistes, in deutlicher und lebhafter Weise, von einem von
	anscheinend mehreren gleichzeitig möglichen Objekten oder Gedankengängen. Zuwendung und
	Konzentration des Bewusstseins gehören zu ihren Voraussetzungen. Sie impliziert Vernachlässigung
	einiger Dinge, um andere besser verarbeiten zu können, und sie ist ein Zustand mit einem echten
	Gegenteil, nämlich dem verwirrten, benommenen, zerstreuten Zustand [...]
</QuoteSection>

<div class="flex flex-col gap-7">
	<TextSection>
		Aufmerksamkeit beschreibt nicht nur die Fokussierung auf bestimmte Informationen, sondern auch
		die effiziente Zuweisung begrenzter kognitiver Ressourcen. Dies äußert sich in einer
		Engpasssituation, in der das Gehirn Daten verarbeitet. Alles außerhalb dieses Engpasses wird
		praktisch ausgeblendet, um relevante Reize besser zu verarbeiten - eine Art
		Leistungsoptimierung. Unbeabsichtigtes Ausblenden wird als "Inattentional Blindness" bezeichnet.
	</TextSection>

	<ExpandableListSection
		list={[
			{
				summary: 'Selektive Aufmerksamkeit',
				content:
					'Das Individuum konzentriert sich bewusst auf einen bestimmten Reiz oder eine bestimmte Informationsquelle, während andere Reize oder Informationen ausgeblendet werden.'
			},
			{
				summary: 'Anhaltende Aufmerksamkeit',
				content:
					'Bezieht sich auf die Fähigkeit, über einen längeren Zeitraum hinweg auf einen bestimmten Reiz oder eine bestimmte Aufgabe konzentriert zu bleiben, ohne von ablenkenden Reizen abgelenkt zu werden.'
			},
			{
				summary: 'Geteilte Aufmerksamkeit',
				content:
					'Die Person versucht, ihre Aufmerksamkeit gleichzeitig auf mehrere Reize oder Informationsquellen zu richten. Es besteht die Fähigkeit, zwischen verschiedenen Aufgaben oder Reizen hin- und herzuwechseln.'
			},
			{
				summary: 'Wechselnde Aufmerksamkeit',
				content:
					'Ist die Fähigkeit, schnell zwischen verschiedenen Reizen oder Aufgaben zu wechseln und sich auf jede Aufgabe oder jeden Reiz angemessen zu konzentrieren.'
			}
		]}>
		Es lassen sich vier Arten von Aufmerksamkeit unterscheiden:
	</ExpandableListSection>
</div>

<ImageLeftSection
	src="/assets/images/imagination.png"
	alt="Example image"
	float="right"
	heading="Imagination">
	Die Vorstellungskraft stellt eine erweiterte Form der Wahrnehmung dar, indem sie auf vergangene
	oder gegenwärtige Sinneseindrücke zurückgreift, um Bilder von nicht-physisch präsenten Dingen zu
	formen. Diese menschliche Fähigkeit erlaubt die Erschaffung von mentalen Bildern, die jenseits
	direkter Sinneserfahrungen liegen und ist von entscheidender Bedeutung für Problemlösung,
	Zukunftsplanung und kreatives Denken. Wissenschaftliche Studien verdeutlichen, dass sowohl die
	Wahrnehmung als auch die Vorstellung ähnliche Hirnregionen aktivieren. Allerdings geschieht dies
	bei Vorstellungstätigkeiten mit geringerer Intensität im Vergleich zur direkten Wahrnehmung, was
	auf eine Art Simulation der Wahrnehmung hinweist. Die Unterscheidung zwischen diesen Prozessen
	wird durch unterschiedliche Hirnaktivitätsniveaus ermöglicht. Unter bestimmten Umständen, wie bei
	psychischen Störungen etwa PTBS oder Schizophrenie, können die Grenzen zwischen Wahrnehmung und
	Vorstellung verschwimmen, sodass Halluzinationen als reale Wahrnehmungen empfunden werden können.
</ImageLeftSection>

<TextSection heading="Gedächtnis" multicolumn={true}>
	Das menschliche Gedächtnis ist ein entscheidendes Instrument zur Speicherung und Abruf von
	Informationen. Es bildet die Grundlage für Lernprozesse, Wissensaufbau und nahezu alle kognitiven
	Vorgänge, vergleichbar mit der Bedeutung der Wahrnehmung. Das Gedächtnis ist ein komplexes System
	aus verschiedenen Komponenten, darunter das sensorische Gedächtnis, das Kurzzeitgedächtnis und das
	Langzeitgedächtnis, die sich in Bezug auf Speicherdauer und Inhaltsart unterscheiden. Das
	sensorische Gedächtnis bewahrt Sinneseindrücke für Millisekunden bis Sekunden, während das
	Kurzzeitgedächtnis temporär eine begrenzte Menge an Informationen für Sekunden bis Minuten hält.
	Das Langzeitgedächtnis ist für die langanhaltende Informationsspeicherung verantwortlich und
	gliedert sich in Declarative Memory, das Fakten und Ereignisse speichert, einschließlich Semantic
	Memory für allgemeines Wissen und Episodic Memory für persönliche Erfahrungen, sowie Procedural
	Memory, das Fertigkeiten und Gewohnheiten enthält. Das Gedächtnis ermöglicht den Zugriff auf
	vergangene Erfahrungen zur Entscheidungsfindung, Problemlösung und Vorbereitung auf die Zukunft.
	Die zentralen Prozesse umfassen Kodierung, Speicherung und Abruf von Informationen.
</TextSection>

<TextSection heading="Vergessen" multicolumn={true}>
	Ein bedeutender Aspekt des menschlichen Gedächtnisses, der in enger Verbindung mit dem Erinnern
	steht, ist das Vergessen. Verschiedene Theorien versuchen, die Mechanismen und Ursachen des
	Vergessens zu erklären. Diese Theorien konzentrieren sich auf Faktoren wie Interferenz,
	Degeneration von Verbindungen im Gedächtnis im Laufe der Zeit und den Einfluss fehlender Reize auf
	den Abruf. Trotz dieser Ansätze fehlt eine umfassende Erklärung für bewusstes Vergessen. Eine der
	gängigsten Ideen ist, dass das bewusste Unterdrücken von Erinnerungen, auch als "Repression"
	bekannt, eine essentielle Funktion des Gehirns darstellt. Dieser Prozess ermöglicht es,
	unerwünschte Erinnerungen zu verdrängen. Diese bewusste Kontrolle über das Vergessen ist von
	großer Bedeutung, da sie dazu beiträgt, ein Gleichgewicht zwischen Erinnern und Vergessen
	aufrechtzuerhalten.
</TextSection>

<TextSection heading="Emotionen">
	Die genaue Definition und der Ursprung von Emotionen bleiben bis heute ungeklärt. Im Wesentlichen
	handelt es sich bei Emotionen um psychische Zustände, die andere Denkprozesse und Handlungen
	beeinflussen. Sie entstehen als Reaktionen auf interne und externe Reize und variieren stark in
	ihrer Dauer und Intensität. Beispielsweise ist "Panik" eine kurzlebige, aber intensive Emotion,
	während "Neid" ein länger anhaltendes Gefühl beschreibt. Emotionen wirken sich auf nahezu alle
	kognitiven Vorgänge aus, einschließlich Wahrnehmung und motorische Handlungen, und haben einen
	besonderen Einfluss auf Entscheidungsprozesse. Eine plausible Erklärung für ihre Existenz könnte
	darin liegen, andere Individuen zu beeinflussen. Emotionen dienen als Kommunikationsmittel, um
	eigene Werte und Pläne zu vermitteln und andere zu überzeugen. Dies unterstreicht ihre Rolle als
	wichtige Faktoren im zwischenmenschlichen Austausch und in der sozialen Interaktion.
</TextSection>

<div class="flex flex-col gap-7">
	<ImageLeftSection
		src="/assets/images/creativity.png"
		alt="Example image"
		float="left"
		heading="Kreativität">
		Ein interessanter Aspekt von Gedanken ist, dass sie, da sie nicht durch sensorische Stimulation
		angeregt werden müssen, scheinbar aus dem Nichts entstehen können. Dieser Aspekt wird oft auch
		als "Kreativität" bezeichnet. Doch die Definition von Kreativität bleibt umstritten. Teresa M.
		Amabile beleuchtet in "The Social Psychology of Creativity" die Möglichkeit, Kreativität anhand
		der Qualität von als kreativ bewerteten Produkten oder Reaktionen zu betrachten. Andere
		Ansichten identifizieren Kreativität anhand spezifischer Merkmale von Produkten, Personen oder
		Denkprozessen, während einige den Fokus auf die Qualität der Reaktion einer Person legen. Selbst
		die Ansicht, dass Kreativität sich der eindeutigen Definition entzieht und daher als
		unergründlich betrachtet wird, findet Raum. Dennoch ist unbestritten, dass Kreativität
		existiert, gestützt allein durch die Existenz des Begriffs. Subjektiv lässt sich feststellen,
		dass gewisse Produkte oder Prozesse "kreativer" sind, und ausreichend subjektive Bewertungen ein
		objektives Maß ergeben. Die Herausforderung liegt in der präzisen Erfassung durch die
		vielfältigen Formen, die Kreativität annimmt. Dennoch lässt sich festlegen, dass Kreativität
		kein eigenständiger Denkprozess ist, sondern aus verschiedenen anderen Vorgängen wie divergentem
		oder assoziativem Denken zusammengesetzt wird.
	</ImageLeftSection>

	<TextSection showDots={false}>
		Gleichzeitig ist die Kreativität auch ein Prozess, der durch verschiedene Parameter eingegränzt
		werden muss: Ist ein Mensch mit unendlichen Möglichkeiten konfrontiert, ist er in der Regel
		damit überfordert, etwas Neues entstehen zu lassen. Nichts kann also aus unbegrenzten
		Möglichkeiten entstehen. Nichts kann aber auch nicht aus Nichts entstehen. Ohne Anreiz oder auch
		Inspiration ist es für den Menschen kaum möglich, überhaupt irgendetwas zu tun - Ein Gesetz,
		welches im Gehirn geradezu physikalisch etabliert ist.
	</TextSection>
</div>

<TextSection heading="Der additive Gedankenprozess" multicolumn={true}>
	Menschliches Denken ist primär additiv: Es beinhaltet die Schaffung neuer Sätze, Informationen,
	Bilder und Verbindungen sowie die Erweiterung von Wissen und Fähigkeiten durch das Erlernen und
	Anwenden neuer Dinge. Dieses Merkmal resultiert aus der Unfähigkeit, Informationen sofort zu
	vergessen, und der scheinbaren Unmöglichkeit, andere Denkweisen zu eliminieren. Ein subtraktiver
	Denkprozess, der auf die Auswahl eines einzigen Ergebnisses aus vielfältigen Möglichkeiten
	abzielt, ist begrenzt, da die Menge an Möglichkeiten den menschlichen Verstand übersteigt. Sogar
	analog zur Bildhauerei, bei der eigentlich Material entfernt wird, um eine Statue zu enthüllen,
	wird das Potenzial erst additiv als mentale Vorstellung umgesetzt und dann physisch subtraktiv
	ausgearbeitet. Ein selektiver Prozess, wie das Auswählen eines Elements aus einer Liste, schafft
	Fokus und erzeugt so neue Informationen, während alte Information allmählich an Bedeutung
	verliert. Vergessen, als potenziell nicht-additiver Prozess, ist komplexer und bedarf weiterer
	Forschung, um festzustellen, ob gezieltes Entfernen von Informationen möglich ist.
</TextSection>

<div class="flex flex-col gap-7">
	<ImageWideSection
		src="/assets/images/dimensionality.png"
		alt="Ein KI-generiertes Bild eines augmentierten Gehirns"
		showAlt={true}
		heading="Dimensionalität des Denkens" />

	<TextSection multicolumn={true}>
		Das Festhalten und Übertragen von Gedanken erfolgt durch die Umwandlung vielfältiger
		Informationen in wahrnehmbare Dimensionen, wobei eine Dimension eine spezifische Eigenschaft
		eines Objekts ist. Ein Beispiel ist die Zerlegung einer Blume in Höhe, Alter, Farbe und andere
		Eigenschaften, die als Punkte im mehrdimensionalen Raum betrachtet werden können. Der Geist kann
		diese Informationen simultan verarbeiten, erfordert jedoch Fokussierung auf einzelne Aspekte. Im
		Gegensatz dazu ist die menschliche Wahrnehmung auf drei räumliche Dimensionen beschränkt. Obwohl
		oft die Zeit als vierte Dimension erwähnt wird, ist sie keine unmittelbar wahrgenommene
		Dimension, sondern wird diskret durch das Gedächtnis abgerufen. Die Umsetzung mehrdimensionaler
		Informationen in die dreidimensionale Wahrnehmung wird am Beispiel einer Blume deutlich, wobei
		abstrakte Eigenschaften wie Emotionen verbalisiert werden müssen. Tabellen und Diagramme dienen
		ebenfalls dazu, komplexe Informationen in niedrigerdimensionale Darstellungen zu überführen. Der
		Umstand, dass Menschen zwar drei Dimensionen wahrnehmen, aber in mehreren Dimensionen denken
		können, wird später näher erläutert.
	</TextSection>
</div>
