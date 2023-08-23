<script lang="ts">
	import HeadingSection from '$lib/components/content/sections/headingSection.svelte';
	import TextSection from '$lib/components/content/sections/textSection.svelte';
	import ImageLeftSection from '$lib/components/content/sections/imageLeftSection.svelte';
	import ImageWideSection from '$lib/components/content/sections/imageWideSection.svelte';
	import JumpMarker from '../jumpMarker.svelte';
</script>

<HeadingSection heading="Aktive Gegebenheiten">
	Dieses Kapitel gibt eine kurze Einführung in die Thematik.
</HeadingSection>

<ImageLeftSection
	src="/assets/images/interfaces.png"
	alt="Example image"
	float="right"
	heading="Interfaces">
	Die meisten Interfaces sind visuell und bieten verschiedene Interaktionsmöglichkeiten wie Buttons,
	Eingabefeldern usw. mittels Maus, Tastatur oder Touchscreen. Weniger verbreitet sind räumliche
	Virtual bzw. Mixed Reality-Oberflächen, die menschliche Interaktion nutzen. Diese nutzen
	symbolische Eingabemethoden wie Button-Klicks oder Mausbewegungen. Subsymbolische Eingaben
	hingegen, wie Sprachassistenten in Smartphones und Computern, berücksichtigen Bedeutung. LLMs
	haben hierbei eine zentrale Rolle durch Übersetzungsfunktionen. Symbolische Eingaben erfordern
	menschliche Abstraktion, während subsymbolische direkter sind. Die Interface-Wahl sollte von
	gewünschten Optionen abhängen, wobei der Mensch die Programm-Auswahl bestimmt und subsymbolische
	Eingaben eine Vielzahl von Möglichkeiten bieten, während symbolische direkter, aber abstrakter
	sind.
</ImageLeftSection>

<ImageLeftSection
	src="/assets/images/vr.png"
	alt="Example image"
	float="left"
	heading="Dimensionalität">
	Die Dimensionalität stellt bei Interfaces eine Herausforderung dar, da Menschen lediglich drei
	Dimensionen wahrnehmen können, während klassische Monitore nur zwei Dimensionen anzeigen. Obwohl
	dreidimensionale Interfaces theoretisch möglich sind, sind sie aufgrund unausgereifter
	Interaktionsmöglichkeiten noch nicht weit verbreitet. Im Bereich der Computer und insbesondere
	neuronaler Netzwerke hingegen operiert man oft in vielen Dimensionen. Diese hohe Dimensionalität
	ist schwer verständlich und erfordert spezielle Techniken zur Veranschaulichung. Ähnlich zur
	3D-Kamera-Projektion zielt die Dimensionalitätsreduktion darauf ab, n-dimensionale Räume in meist
	zwei- oder dreidimensionale Räume zu überführen. Hierbei werden neuronale Netzwerke mittels
	unsupervised Learning trainiert, um Dimensionen so zu reduzieren, dass die Struktur der Daten
	erhalten bleibt. Es gibt drei gängige Methoden zur Dimensionalitätsreduktion: "Principal Component
	Analysis", "t-Distributed Stochastic Neighbor Embedding" und "Uniform Manifold Approximation and
	Projection". Diese Techniken ermöglichen es, die internen Repräsentationen von Daten in
	aussagekräftigen Diagrammen darzustellen, um so Einblicke in neuronale Netzwerke zu gewinnen. Die
	Anpassung der Dimensionalität ist grundlegend für die Mensch-Maschine-Kommunikation, da Computer
	komplexe Daten in höheren Dimensionen verarbeiten, während Menschen auf reduzierte Darstellungen
	angewiesen sind, um die Bedeutung zu erfassen und zu verstehen.
</ImageLeftSection>

<HeadingSection heading="Passive Gegebenheiten">
	Dieses Kapitel gibt eine kurze Einführung in die Thematik.
</HeadingSection>

<TextSection heading="Aktive Rolle">
	Die Erweiterung des menschlichen Verstands durch Maschinen impliziert keine Ersatzfunktion für
	bestimmte Gehirnbereiche, sondern stellt eine zusätzliche, ergänzende Dimension dar. Die
	verschiedenen kognitiven Aspekte können nicht einfach abgeschaltet werden, vielmehr erweitert ein
	digitales Gedächtnis das Langzeitgedächtnis als eine Art "Permanentgedächtnis". Eine künstliche
	Intelligenz (KI) zur Bildgenerierung beispielsweise ersetzt nicht einfach einen spezifischen
	Hirnabschnitt. Dabei ist es essenziell, dass die Maschine nicht passiv bleibt, sondern aktiv und
	dauerhaft am Denkprozess teilnimmt. Dies unterscheidet sie von einem bloßen Bestandteil, indem sie
	als Werkzeug agiert, das nur bei Bedarf genutzt wird. Die damit einhergehende aktive Rolle wirft
	Fragen zur Veränderung der menschlichen Identität auf und deren Einfluss auf Bewusstsein und
	Wahrnehmung. Die Auswirkungen lassen sich nur im Laufe der Zeit beantworten. Während die aktuelle
	Generation durch eine solche Gehirnerweiterung stark beeinflusst wäre, könnten zukünftige
	Generationen, ähnlich den "digital Natives", als "augmented Beings" aufwachsen und dieses Konzept
	als normal empfinden. Letztlich wird das, was als "menschlich", "natürlich" oder "normal"
	angesehen wird, von Statistik und Gewohnheit geprägt sein.
</TextSection>

<TextSection heading="Vertrauen">
	Vertrauen in das Teilen von Gedanken mit Technologie ist nicht selbstverständlich, trotz der
	wachsenden Akzeptanz unter Digital Natives. Die Anmeldung von über einer Million Menschen bei
	ChatGPT zeigt das Interesse, aber nicht unbedingt das Vertrauen in Tech-Unternehmen wie Meta oder
	Google. Kommerzielle Interessen bremsen den Fortschritt in diesem Bereich, während offene
	Alternativen an Qualität und Benutzerfreundlichkeit mangelt. Physische Trennung kann Vertrauen
	aufbauen, indem sie Kontrolle über Daten vermittelt, aber auch den digitalen Aspekt relativiert
	und die direkte Systemkommunikation erschwert. Vertrauen ist eine individuelle Entscheidung, und
	die Verantwortung liegt beim Menschen, nicht bei KI-Maschinen. Die Zensur von KI-Modellen zur
	Risikovermeidung ist problematisch und beeinträchtigt die Qualität. Die eigentliche
	Herausforderung ist die Transparenz: Zensur führt zu Verwirrung darüber, was erlaubt ist, und
	erzeugt Misstrauen bei der Ablehnung selbst subtiler Gedanken.
</TextSection>

<ImageLeftSection
	src="/assets/images/openness.png"
	alt="Example image"
	float="left"
	heading="Offenheit">
	Offenheit, vergleichbar mit Vertrauen, ist ein Schlüsselfaktor, der hier nicht auf das Teilen von
	Gedanken abzielt, sondern vielmehr auf die Anerkennung maschineller Fähigkeiten. Ein ikonisches
	Beispiel dafür bietet die Eröffnungssequenz von "2001: A Space Odyssey", in der Affen auf einen
	schwarzen Monolithen treffen und erst zögerlich Annäherung finden. Diese Szene spiegelt das
	Verhalten gegenüber neuen Technologien wider - behutsames Herantasten und gleichzeitig das
	Vermeiden von Stillstand und Ablehnung. Aktuelle Beispiele, wie der Autorenstreik der "Writers
	Guild of America" und Bedenken zur KI-generierten Inhalte, verdeutlichen das Wechselspiel zwischen
	Vorsicht und Ablehnung im Technologiebereich. Es ist entscheidend anzuerkennen, dass Technologie
	sich kontinuierlich verbessert und menschliche Fähigkeiten nicht unantastbar sind. Diese
	Erkenntnis umfasst auch die Aesthetik, die entlang eines Spektrums existiert. Automatisierung hebt
	die Erwartungen an menschliche Leistungen, indem sie das Niveau konkretisiert. Dies motiviert
	dazu, über das Gewohnte hinauszugehen, da die Automatisierung Raum für originellere Arbeit
	schafft. Generative Systeme zielen nicht darauf ab, den Menschen zu übertreffen, sondern ihn
	nachzuahmen. Somit regt "Offenheit" auch an, Neues zu suchen und das Alltägliche zu überwinden.
</ImageLeftSection>
