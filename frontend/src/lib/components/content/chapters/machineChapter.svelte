<script lang="ts">
	import HeadingSection from '$lib/components/content/sections/headingSection.svelte';
	import TextSection from '$lib/components/content/sections/textSection.svelte';
	import ImageLeftSection from '$lib/components/content/sections/imageLeftSection.svelte';
	import ImageWideSection from '$lib/components/content/sections/imageWideSection.svelte';
	import JumpMarker from '../jumpMarker.svelte';
	import QuoteSection from '../sections/quoteSection.svelte';
	import ExpandableListSection from '../sections/expandableListSection.svelte';
</script>

<HeadingSection heading="Einleitung">
	Dieses Kapitel gibt eine kurze Einführung in die Thematik. <br /> Es erklärt zudem die Grundlagen der
	Navigation in der Visualisierung.
</HeadingSection>

<QuoteSection
	heading="Historie"
	author="John McCarthy, A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence (1955)">
	We propose that a 2 month, 10 man study of artificial intelligence be carried out during the
	summer of 1956 at Dartmouth College in Hanover, New Hampshire. The study is to proceed on the
	basis of the conjecture that every aspect of learning or any other feature of intelligence can in
	principle be so precisely described that a machine can be made to simulate it. An attempt will be
	made to find how to make machines use language, form abstractions and concepts, solve kinds of
	problems now reserved for humans, and improve themselves. We think that a significant advance can
	be made in one or more of these problems if a carefully selected group of scientists work on it
	together for a summer.
</QuoteSection>

<TextSection multicolumn={true}>
	Der Vorschlag zum "Dartmouth Summer Research Project on Artificial Intelligence" markiert in den
	frühen 1950er Jahren den Beginn der Historie von KI. Hier trafen sich Mathematiker und
	Wissenschaftler zu einem Brainstorming, um einen Grundstein zu legen. Der Workshop wurde von John
	McCarthy vorgeschlagen und verfolgte das Ziel, maschinelles Lernen und Intelligenz nachzubilden.
	Ideen wie symbolische Methoden und neuronale Netzwerke wurden geboren, letztere von Forschern wie
	Alan Turing und Marvin Minsky. Der KI-Winter, etwa von 1974 bis 1980, folgte auf überzogene
	Erwartungen an KI und führte zu finanziellen Einbrüchen. Er endete mit dem Aufkommen von
	Expertensystemen, welche die Entscheidungsprozesse von Menschen simulierten und KI wiederbelebten.
	Neuronale Netzwerke mit Hidden Layers brachten Fortschritte, gefolgt von einer neuen Ära der
	KI-Nutzung im 21. Jahrhundert. Schnellere Computer und größere Datensätze ermöglichten
	Fortschritte in Bereichen wie Bilderkennung und Sprachverarbeitung. KI erhielt Einzug in geradezu
	alle Bereiche der Wirtschaft. Die Zukunft der KI zeigt sich durch Fortschritte in der natürlichen
	Sprachverarbeitung, Bildgenerierung und der Suche nach kreativen Anwendungen. Dennoch werfen
	ethische Fragen und die Angst vor den Folgen der KI Schatten auf den Fortschritt in diesem Feld.
</TextSection>

<ImageWideSection
	src="/assets/images/ai.png"
	alt="Ein KI-generiertes Bild eines augmentierten Gehirns"
	showAlt={true} />

<TextSection heading="Grundlagen von KI" multicolumn={true}>
	Das Gebiet der künstlichen Intelligenz (KI) innerhalb der Informatik befasst sich mit der
	Entwicklung von Computersystemen, die menschenähnliche Intelligenzaufgaben und Entscheidungen
	automatisieren können. Hierbei werden klassische kognitive Prozesse wie Wahrnehmung,
	Informationsverarbeitung, Planung und Schlussfolgerung nachgeahmt, was verschiedene
	Anwendungsgebiete wie Robotik, Computer Vision, Natural Language Processing (NLP) und
	Frage-Antwort-Systeme unterstützt. Die KI-Forschung strebt an, menschliche Intelligenz in
	Maschinen zu simulieren, und steht in Verbindung mit der Frage nach dem Verhältnis von Leben,
	Geist, Maschinen und Kultur. Ein verwandtes Problem ist dasjenige der künstlichen Lebensformen.
	Ziel ist die "starke KI" oder auch "künstliche Allgemeine Intelligenz" (AGI), die vielfältige
	geistige Aufgaben wie ein Mensch bewältigen kann. Ein Ansatz zur Erreichung dieses Ziels war das
	Human Brain Project (HBP) von 2013 bis 2023, welches die Simulation biologischer Gehirne
	untersuchte. Bisherige Versuche der starken KI sind aufgrund technischer Komplexität, begrenzter
	Rechenleistung und Datenmengen gescheitert. Die aktuell existierenden KI-Systeme sind als
	"schwache KIs" bekannt und zielen auf spezifische Aufgabenbereiche ab. Diese KIs nutzen
	mathematische, statistische, psychologische, linguistische und philosophische Ansätze, wobei
	symbolische oder subsymbolische Technologien eingesetzt werden können. Fortgeschrittene schwache
	KIs wie IBM's Watson oder OpenAI's GPT-4 vereinen mehrere Ansätze, um diverse Probleme zu lösen,
	beispielsweise in Suchmaschinen, Empfehlungssystemen, Sprachassistenten und generativen Modellen.
	Aufgrund des "KI-Effekts" verlieren solche Systeme oft an als intelligent wahrgenommener
	Komplexität, sobald sie alltäglich werden, was auf Larry Teslers Aussage hinweist: "Intelligenz
	ist alles, was Maschinen noch nicht gemacht haben."
</TextSection>

<HeadingSection heading="Symbolisch und subsymbolisch">
	Die folgenden beiden Abschnitte geben einen Überblick über die Navigation in der Visualisierung
	und den Textteil.
</HeadingSection>
<TextSection heading="Symbolisch">
	Die Funktionsweise von symbolischer KI, auch als "klassische" oder "regelbasierte" KI bekannt,
	beruht auf der Nutzung expliziter Symbole zur Repräsentation von Objekten. Diese Symbole werden
	mittels klar definierter Regeln kombiniert, manipuliert und ausgewählt, um Verhalten zu erzeugen
	oder neue Symbole zu erstellen. Viele dieser KIs verwenden logische Sprachen wie bspw. "CycL" für
	die Symbolformulierung, um Verbindungen herzustellen und Ableitungen zu treffen. Die Abfrage
	dieser Symbole erfolgt durch festgelegte Algorithmen, um gezielte Ergebnisse zu erzielen.
	Beispielsweise nutzt das Projekt "Cyc" diese Methode, um umfangreiches Wissen in einer
	Wissensbasis zu verwalten. Dieser Ansatz erstreckt sich auch auf Computerspiele, wie etwa die
	Bewegungsmuster der Geister in "Pac-Man". Symbolische KI bietet klare Nachvollziehbarkeit,
	ermöglicht informierte Entscheidungsprozesse und flexibles Wissensmanagement, kann aber
	Expertenwissen erfordern und ist anfällig für fehlende oder mehrdeutige Daten.
</TextSection>
<TextSection heading="Subsymbolisch">
	Die subsymbolische KI basiert auf dem Konzept biologischer neuronaler Netzwerke, in denen
	Einheiten, sogenannte Neuronen, durch Synapsen verbunden sind. Diese Netzwerke werden mittels
	großer Datensätze trainiert, wobei die Neuronenparameter iterativ angepasst werden, um optimale
	Ergebnisse zu erzielen. Der Vorteil liegt in der Verarbeitung vielfältiger, unstrukturierter Daten
	wie Bilder und Sprache. Subsymbolische KIs finden selbstständig Muster und Zusammenhänge, sind
	universell einsetzbar und erfordern keine explizite Programmierung. Dennoch sind sie schwerer
	kontrollierbar und interpretierbar, was in sicherheitskritischen Anwendungen problematisch sein
	kann. Sie sind stark von Trainingsdaten abhängig, benötigen viel Daten für Genauigkeit und sind
	rechenintensiv sowie zeitintensiv im Training.
</TextSection>

<HeadingSection heading="Cognitive Computing">
	Die folgenden beiden Abschnitte geben einen Überblick über die Navigation in der Visualisierung
	und den Textteil.
</HeadingSection>

<div class="flex flex-col gap-7">
	<TextSection>
		Cognitive Computing ist ein interdisziplinäres Feld, das menschliche Denkprozesse simuliert. Es
		kombiniert Wahrnehmung, Speicherung sowie symbolische und subsymbolische Prozesse. Im Gegensatz
		zum traditionellen Computing zielt es nicht auf festgelegte Algorithmen ab, sondern auf die
		Nachbildung menschlicher Fähigkeiten. Hierbei wird mit vielfältigen, unstrukturierten Daten wie
		Texten, Bildern und Audio gearbeitet. Die Ergebnisse sind nicht deterministisch wie bei
		herkömmlichen Methoden, erfordern spezielle Schnittstellen für eine natürliche
		Mensch-Maschine-Interaktion. Ein prominentes Beispiel ist das Chat-Interface von ChatGPT, das
		über einfache Textausgaben hinausgeht. Ziel des cognitive Computing ist die Entwicklung
		dynamischer, menschlich agierender Systeme.
	</TextSection>
	<TextSection>
		Kognitive Architekturen sind theoretische Modelle zur Simulation menschlicher kognitiver
		Prozesse. Sie beschreiben die Zusammensetzung von Komponenten, um menschliches Verhalten
		nachzuahmen. Bekannte Architekturen wie ACT-R und Soar basieren auf psychologischen Ansätzen.
		ACT-R, von John Anderson entwickelt, nutzt "Production Rules", um Reaktionen auf Situationen zu
		generieren. Soar, von Allen Newell und John Laird entwickelt, setzt auf symbolische In- und
		Outputs, lernt durch Erfahrung und verwendet Verstärkungslernen zur Optimierung der
		Problemlösung.
	</TextSection>
</div>

<div class="flex flex-col gap-7">
	<ImageLeftSection
		src="/assets/images/randomness.png"
		alt="Example image"
		float="left"
		heading="Zufall als Kreativersatz">
		Maschinen gelten im Allgemeinen als weniger kreativ, da sie auf vorhandenen Daten basieren und
		deterministische Algorithmen verwenden, um vorhersehbare Ergebnisse zu erzeugen. Selbst
		neuronale Netzwerke sind nach dem Training im Wesentlichen festgelegte Algorithmen. Dennoch
		handelt auch der Mensch größtenteils deterministisch, beeinflusst durch die Naturgesetze und den
		philosophischen Determinismus. Obwohl der Mensch versucht, sich von dieser Vorstellung zu lösen,
		um seinen freien Willen zu bewahren, gibt es aus naturwissenschaftlicher Sicht keinen Grund,
		warum Dinge nicht so geschehen sollten, wie sie es tun. Die Unerklärbarkeit vieler Ereignisse
		ermöglicht jedoch Interpretationsspielraum, auch wenn diese Interpretationen letztlich ebenfalls
		deterministisch sind. Der Mensch betrachtet Zufall oft als kreativen Ersatz, da der wahre
		Ursprung vieler Dinge undurchsichtig ist. Die Lücke zwischen dem Ursprung und dem sichtbaren
		Ergebnis wird durch das Konzept der "Kreativität" gefüllt, obwohl der eigentliche Ursprung, wie
		bei generierten Bildern, oft komplex und undurchsichtig ist.
	</ImageLeftSection>
</div>
<TextSection heading="Speicherung von Informationen">
	Auf der grundlegendsten Ebene erfolgt die Informationsspeicherung in Computern durch elektrische
	Signale, die entweder den Wert 1 oder 0 repräsentieren. Diese Signale werden in verschiedenen
	Speichersystemen wie Festplatten, Arbeitsspeicher oder Cache gespeichert. Bytes, Zusammenschlüsse
	von Einsen und Nullen, dienen als Basiseinheiten, um komplexe Datentypen wie Zahlen oder
	Buchstaben zu repräsentieren. Dieser Vorgang wird als "Encoding" bezeichnet, wobei bekannte
	Encodings wie ASCII, UTF-8 und UTF-16 existieren. Ein Dateisystem regelt die Datenspeicherung und
	-organisation, indem Daten Adressen zugewiesen werden, welche von Prozessoren genutzt werden
	können. Datenbanken bieten eine strukturierte Methode zur Organisation von Daten, inklusive
	Indexierung und Suchfunktionen. Verschiedene Datenbanktypen wie relationale, Graph- und
	Vektordatenbanken bieten jeweils spezifische Vorzüge zur Speicherung von Daten je nach deren Art
	und Komplexität. Die Datenwiederherstellung ist zuverlässig, solange das Speichermedium intakt
	ist, und Daten können durch Kombination von An/Aus-Signalen vielfältige Informationen
	repräsentieren.
</TextSection>

<TextSection heading="Informationsblöcke">
	Im Kern arbeiten Computer mit Informationsblöcken, sei es durch das Speichern und gemeinsame
	Verarbeiten von Daten in Blöcken oder durch die Verwendung von Neuronen-Layern in neuronalen
	Netzwerken. Die Übertragung von Daten erfolgt oft über Pakete, und die Aneinanderreihung von
	Einsen und Nullen allein ist in der Praxis nicht praktikabel. Sinn ergibt sich erst durch
	Kombinationen. Die Schnelligkeit der Computerberechnungen macht die Verarbeitung einzelner Bits
	meist nicht beobachtbar. Abstraktionsebenen in der Software lassen uns annehmen, dass der Computer
	in separaten Einheiten arbeitet. Im nächsten Kapitel wird dies genauer betrachtet.
</TextSection>

<ImageWideSection
	src="/assets/images/brain3.png"
	alt="Ein KI-generiertes Bild eines augmentierten Gehirns"
	showAlt={true} />

<HeadingSection heading="Kognitive Technologien">
	Diese Sektionen gibt einen Überblick über relevante Technologien, die man inkorporieren könnte, um
	ein kognitives System zu entwickeln.
</HeadingSection>

<ExpandableListSection
	list={[
		{
			summary: 'State Machine',
			content: `Eine State Machine ist ein Modell zur Beschreibung des Verhaltens eines Systems oder Prozesses. Sie besteht aus verschiedenen Zuständen, die durch Übergänge miteinander verknüpft sind. Jeder Zustand kann Aktionen ausführen, Daten speichern oder auf andere Zustände verweisen. Inputs, auch "Events" oder "Trigger" genannt, sowie Outputs, auch "Aktionen" genannt, beeinflussen die Zustandsübergänge. Es gibt deterministische State Machines, bei denen jeder Zustand einen festgelegten Übergang für jeden möglichen Input hat, und nicht-deterministische State Machines, bei denen ein Input zu verschiedenen Übergängen führen kann. Diese Konzepte finden Anwendung in verschiedenen Maschinen wie Aufzügen, Ampeln und Kaffeemaschinen.
				
			Im Bereich der Kognition können State Machines verwendet werden, um ein vereinfachtes Modell des Verstands zu erstellen, wobei Zustände verschiedene kognitive Prozesse symbolisieren, wie Denken, Erinnern und Wahrnehmen. Die Ergebnisse aus den Zuständen lösen Übergänge zu neuen Zuständen aus. In kognitiven Architekturen dienen Zustandsautomaten als Grundstruktur, auf der non-symbolische Prozesse wie neuronale Netzwerke und probabilistische Prozesse aufbauen können, während das System innerhalb menschlicher Grenzen bleibt.`
		},
		{
			summary: 'Klassifikation',
			content: `Klassifikatoren, ein Hauptanwendungsbereich neuronaler Netzwerke, verarbeiten Eingaben als mehrdimensionale Zahlenlisten. Durch schrittweise Reduzierung über Hidden Layer erreichen sie eine knappe Darstellung in der Ausgabeschicht, wobei jede Position eine Klasse repräsentiert. Mit der Softmax-Aktivierung entstehen Wahrscheinlichkeiten für die Klassen, wobei die wahrscheinlichste Klasse ermittelt wird. Das Netzwerk erkennt Muster in den Eingabedaten und verknüpft sie mit entsprechenden Klassen. Beispielsweise kann das "Iris Flower Dataset" für eine Klassifikation genutzt werden, wobei vier Inputs die Blattmaße beschreiben und drei Outputs die Arten repräsentieren. Bildklassifikation erfolgt mit Convolutional Neural Networks (CNNs), die ähnliche Prinzipien anwenden. Ein Klassifikator lernt aus den Daten, kann jedoch nur Vorhandenes klassifizieren. Zero-Shot Klassifikation ermöglicht sogar die Klassifizierung von Unbekanntem durch die Erfassung von Klassenbeziehungen. Hier erstellt der Klassifikator einen Raum für Datenpunkte und klassifiziert neue Punkte anhand ihrer Nähe zu bekannten Klassenpunkten. 
		
		Dieser Ansatz überträgt subsymbolische Daten in symbolische Informationen, wie etwa die Stimmungserkennung in Texten für anwendungsorientierte Entscheidungen. Klassifikatoren dienen somit als Schnittstelle zur Umwandlung und Nutzung von Daten für algorithmische Prozesse.`
		},
		{
			summary: 'Vektor- und Graphdatenbanken',
			content: `Vektor- und Graphdatenbanken sind zwei wichtige Arten von Datenbanken im kognitiven Bereich. Vektor­datenbanken ähneln Zero-Shot-Klassifikatoren und speichern Daten als mehrdimensionale Punkte. Diese Datenpunkte können basierend auf Distanz gefunden und im Vektorraum bewegt werden. Durch neuronale Netzwerke werden Embeddings erzeugt, welche die Bedeutung von Input-Daten als Zahlen darstellen. Diese Vektoren ermöglichen Empfehlungssysteme und verleihen neuronalen Netzwerken eine Form des Gedächtnisses. Graphdatenbanken hingegen speichern Daten in Graphen mit Knoten und Verbindungen. Diese Struktur erlaubt die Darstellung von Relationen und Beziehungen mittels Knoten und Kanten, wodurch sie relationale Datenbanken in dieser Hinsicht übertreffen. Die Kombination von Vektor- und Graphdatenbanken kann sowohl örtliche Nähe als auch semantische Verbindungen zwischen Daten effektiv darstellen.`
		},
		{
			summary: 'Transformer',
			content: `Die Transformer-Architektur ist eine moderne Technologie für neuronale Netzwerke, hauptsächlich im Bereich des Natural Language Processing (NLP) verwendet. Statt wie bisherige NLP-Systeme, die auf RNNs basieren, die Schwierigkeiten haben, Kontext in sequenziellen Daten zu erfassen, verarbeitet der Transformer den gesamten Input auf einmal. Er nutzt Self-Attention-Mechanismen, um Kontextinformationen hinzuzufügen und erzeugt als Ausgabe einzelne Tokens, die die kleinsten Einheiten im Text repräsentieren. Der Prozess involviert Tokenization, Positional Encoding und Self-Attention, häufig mit mehreren Attention-Heads. Für die Generierung von Text werden probabilistische Sampling-Techniken wie "Top-K" und "Top-P" verwendet, um die Diversität und Kontrolle über den Output zu steuern. Der Transformer findet in vielfältigen Anwendungen wie Computer Vision, Sprach- und Audioerkennung sowie Musikgenerierung Verwendung. Trotz der Fortschritte haben Transformer noch Herausforderungen wie Ressourcenintensivität und Anfälligkeit für Trainingsdaten-Bias. Ein Beispiel aus 2023 zeigte amüsante Ausgaben von Modellen wie GPT-2, GPT-3 und ChatGPT aufgrund einzelner Token-Eingaben \cite{rumbelow2023solidgoldmagikarp}.`
		},
		{
			summary: 'Diffuser',
			content: `Diffuser-Modelle sind eine Form von generativen neuronalen Netzwerken, die hauptsächlich zur Bildgenerierung basierend auf Textprompten verwendet werden. Sie basieren auf einem Diffusionsprozess, der von nichtgleichgewichtigen thermodynamischen Systemen inspiriert ist. Dabei werden Daten schrittweise "ruiniert" und anschließend einem neuronalen Netzwerk beigebracht, diesen Prozess umzukehren. Im Gegensatz zu früheren Ansätzen wie Generative Adversarial Networks (GANs) und Variational Autoencoders (VAEs) bieten Diffuser-Modelle eine einfachere und flexiblere Trainingsmethode, die oft bessere Ergebnisse erzielt. Das Training beinhaltet die Verwendung eines U-Net-Modells namens "Noise Predictor", um Rauschen in den Daten vorherzusagen und anzupassen. Zusätzlich ermöglicht das "Conditioning" die Steuerung der Bildgenerierung durch Text oder andere Informationen. Der gesamte Prozess umfasst die Generierung eines zufälligen Latenten, die Rauschvorhersage durch das U-Net unter Berücksichtigung des Conditionings, mehrere Schritte des Rauschens und schließlich die Verwendung des VAE-Decoders, um ein hochauflösendes Bild zu generieren.`
		}
	]} />
