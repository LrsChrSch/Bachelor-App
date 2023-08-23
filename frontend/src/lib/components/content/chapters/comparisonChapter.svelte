<script lang="ts">
	import HeadingSection from '$lib/components/content/sections/headingSection.svelte';
	import TextSection from '$lib/components/content/sections/textSection.svelte';
	import ImageLeftSection from '$lib/components/content/sections/imageLeftSection.svelte';
	import ImageWideSection from '$lib/components/content/sections/imageWideSection.svelte';
	import JumpMarker from '../jumpMarker.svelte';
</script>

<HeadingSection heading="Automatenmensch">
	Dieses Kapitel gibt eine kurze Einführung in die Thematik.
</HeadingSection>

<ImageLeftSection
	src="/assets/images/humans.png"
	alt="Example image"
	float="left"
	heading="Grundsätzlich sind die Menschen besser">
	Im Streben nach Automatisierung und Effizienz spielt die Mensch-Maschine-Beziehung eine
	entscheidende Rolle. Obwohl der Mensch in vielen Bereichen überlegen ist, wird versucht, Maschinen
	menschenähnliche Kognition beizubringen, um Aufgaben zu automatisieren. Dieses Bestreben wurzelt
	in der langjährigen Geschichte der Automatisierung, bei der die Maschine als Werkzeug genutzt
	wird, um den Menschen von repetitiven Aufgaben zu entlasten. Der Kerngedanke von Teslers Theorem,
	dass Intelligenz das umfasst, was Maschinen noch nicht beherrschen, unterstreicht die Motivation
	hinter der maschinellen Kognition. Ein oft missverstandener Punkt ist die Vorstellung, dass
	einzelne Menschen gegenüber Maschinen überlegen sind. Hierbei liegt der Fokus auf der kollektiven
	Fähigkeit von Menschen im Vergleich zu Einzelpersonen. Bei der Trainingsbewertung von Maschinen
	ist die Loss-Funktion entscheidend, die den Unterschied zur menschlichen Leistung beschreibt. Ein
	ideales Minimum kann durch den Gradientenabstiegsalgorithmus nie erreicht werden, weshalb Modelle
	auf Methoden wie unsupervised oder reinforcement Learning angewiesen sind, die einen anderen
	Evaluationsansatz verwenden. Die gängigen Studien, wie das Mycin-Beispiel, vergleichen oft direkt
	einen Menschen mit einer Maschine. Jedoch liegt der Schlüssel in der Art des Wissens: Die Maschine
	nutzt das kollektive Wissen vieler Menschen, während ein Mensch auf sein individuelles Wissen
	beschränkt ist. Ein realistischerer Vergleich würde einen informierten Menschen gegen eine
	Maschine antreten lassen, wobei der "Human Error" die letzte verbleibende menschliche
	Einflussgröße ist. Somit spiegelt die Automatisierung nicht nur die technologischen Vorteile
	wider, sondern auch die Notwendigkeit, begrenzte Ressourcen effizient zu nutzen.
</ImageLeftSection>

<TextSection heading="Gedächtnis" multicolumn={true}>
	Die Vorzüge des digitalen Gedächtnisses sind bereits aus den vorherigen Kapiteln deutlich
	geworden. Maschinen haben die Fähigkeit, eine breite Palette von Daten äußerst präzise zu
	speichern und abzurufen - die Kernfunktion von Computern. Heutzutage liegt der Schwerpunkt von
	Smartphones nicht mehr primär auf Telefonaten, sondern vielmehr auf dem Zugriff, der Speicherung
	und der Darstellung von Informationen. Ein zusätzlicher Vorteil liegt in der Mobilität digitaler
	Speichermedien, sei es ein einfacher USB-Stick oder die Möglichkeit, Festplatten leicht auszubauen
	und zu transportieren. Im Gegensatz dazu gestaltet sich der Transport von Informationen aus einem
	menschlichen Gehirn äußerst komplex. Hier zeigt sich ein weiterer Vorzug digitaler Systeme
	gegenüber biologischen Gehirnen: die direkte Datenübertragung. Während die direkte Übertragung von
	Daten aus dem Gehirn noch nicht möglich ist, erfordert sie bei biologischen Systemen Umwege über
	die Kommunikation, was, wie von Shannon und Weaver beschrieben, naturgemäß anfällig für Störungen
	ist.
</TextSection>

<TextSection heading="Flexibilität, Geschwindigkeit und Contenance">
	Im Bereich der Computertechnologie ist das simultane Jonglieren mehrerer Aufgaben allgegenwärtig,
	von laufenden Programmen und Hintergrundprozessen bis hin zur flexiblen Nutzung von Threads.
	Dieses Multitasking entspricht dem menschlichen Konzept, erfordert jedoch Aufmerksamkeits- und
	Ressourcenverteilung. Die Definition von Frank Lee und Niels Taatgen beschreibt es treffend als
	die Fähigkeit, mit den Anforderungen mehrerer Aufgaben gleichzeitig umzugehen. Dies kann zu
	Fehlern führen, wie bei der Handynutzung während des Autofahrens. Die Flexibilität von Computern
	ist auch in der Automatisierung zentral. Large Language Model begeistern mit Vielseitigkeit und
	Geschwindigkeit, besonders in analytischen Aufgaben wie Mathematik oder Mustererkennung, während
	der Mensch in generativen Prozessen schneller ist. Der Rechenleistungstrend zeigt stetigen Anstieg
	und Maschinen erfüllen immer anspruchsvollere Aufgaben, die Monotonie und Menge würden einen
	Menschen überfordern. Obwohl Maschinen Emotionen fehlen, agieren sie präzise und ausdauernd, ohne
	von Langeweile oder Ermüdung beeinflusst zu werden.
</TextSection>

<ImageLeftSection
	src="/assets/images/additive.png"
	alt="Example image"
	float="left"
	heading="Additiv und subtraktiv">
	Im Bereich der menschlichen Kognition betont das erste Kapitel die additiven Denkprozesse des
	Menschen und seine Fähigkeit, neue Informationen zu generieren. Im Gegensatz dazu gestaltet sich
	die Bewertung von Informationsgenerierung bei Computern komplexer. Speicherung von Dateien kann
	als additive Aktion betrachtet werden. Technologien wie Generative Adversarial Networks (GANs)
	erzeugen Bilder und Transformer generieren Text, doch diese sind nur oberflächliche Ansätze. Die
	tiefergehende Analyse zeigt, dass Transformer aus bekannten Optionen auswählen und GANs Bilder aus
	zufälligen Datenblöcken formen. Selbst Diffuser agieren im Wesentlichen als raffinierte
	Rauschfilter. Sogar beim Datenkopieren werden lediglich vorhandene Einsen und Nullen umgekehrt.
	Für Computer ist der hinzugefügte Aspekt primär elektrische Energie. Denkprozesse dagegen beruhen
	auf Subtraktion, Selektion, Manipulation und logischer binärer Zustandsvergleiche. Es zeigt sich,
	dass Maschinen auf verschiedenen Ebenen agieren: Hinzufügen von Signalen auf der tiefsten,
	Selektion auf der mittleren und sogar generative Prozesse auf der obersten Ebene. Kein Ansatz
	übertrifft den anderen per se, doch dies ist ein relevanter Gedanke, insbesondere bei neuronalen
	Netzwerken, wo Werte für alle Output-Positionen ausgegeben werden, ungeachtet der vorherigen
	Überbietung durch andere Optionen. Die Theorie der rationalen Entscheidung schlägt vor, dass
	Menschen ähnlich handeln, indem sie alle möglichen Ergebnisse simulieren und das Beste wählen.
	Allerdings werden diese Gedanken durch kognitive Beschränkungen und Aufmerksamkeitsmechanismen
	eingeschränkt. Hier ergibt sich eine Verbindung zwischen Mensch und Computer: Der Mensch für
	originelle Ideen und der Computer für die Berechnung potenzieller Resultate.
</ImageLeftSection>

<ImageLeftSection
	src="/assets/images/binary.png"
	alt="Example image"
	float="right"
	heading="An und Aus">
	Die anfängliche Ansicht, dass der Unterschied zwischen Mensch und Computer in der
	Informationsverarbeitung darin besteht, dass Computer nur binäre Zustände nutzen, während der
	Mensch Zwischenzustände versteht, erweist sich bei genauer Betrachtung als zu vereinfacht. Diese
	Gegenüberstellung vernachlässigt grundlegende Unterschiede. Während Computer auf einer physischen
	Ebene mit elektrischen Signalen in an- oder ausgeschaltetem Zustand arbeiten, repräsentiert die
	psychisch-philosophische Idee des Menschen eine erweiterte Form der "Unschärfelogik", die auf
	Gleitzustände abzielt. Um faire Vergleiche zu ziehen, sollten beide Systeme auf derselben
	physischen Ebene analysiert werden. Dabei wird klar, dass sowohl menschliche Nervenzellen als auch
	Computer auf binäre Zustände angewiesen sind: Feuern oder nicht feuern. Beide können jedoch mit
	abgestuften Potenzialen umgehen, sei es durch neuronale Abstufungen oder variable Schwellenwerte
	in modernen Prozessoren. Letztlich liegt der gemeinsame Nenner in der Nutzung elektrischer Signale
	zur Informationsverarbeitung, bei der Aktivierung als zentralem Prinzip, sei es durch neuronales
	Feuern oder digitales An- und Ausschalten.
</ImageLeftSection>

<ImageLeftSection
	src="/assets/images/sensors.png"
	alt="Example image"
	float="left"
	heading="Sensorik und Wahrnehmung">
	Sensorik und Wahrnehmung sind zwei unterschiedliche Konzepte, die sowohl bei biologischen als auch
	technischen Systemen relevant sind. Ein Sensor verwandelt einen Stimulus in ein Signal, während
	die Wahrnehmung dieses Signals in nutzbare Information umwandelt. Bei Menschen erfordert die
	Wahrnehmung zusätzlich psychische Prozesse, während Maschinen algorithmische Verarbeitung
	benötigen. Elektrische Sensoren ähneln biologischen Sensoren weitgehend, wobei auch erweiterte
	Technologien wie Radar und LiDAR sowie Infrarotkameras und Ultraschallsensoren existieren. Die
	Beurteilung von elektrischen und biologischen Sensoren ist komplex, wobei elektrische Sensoren
	direktere Werte liefern. Fehler können sowohl in der Sensorik als auch in der Wahrnehmung
	auftreten. Beim Menschen können Aufmerksamkeitsmängel, falsche Mustererkennung und Emotionen die
	Wahrnehmung beeinflussen. Maschinen machen eher algorithmische Wahrnehmungsfehler. Computer können
	Objekte nur sehen, wenn sie unverdeckt sind, im Gegensatz zur "Objektpermanenz" im menschlichen
	Wahrnehmungsprozess. Moderne Computer-Vision-Systeme können durch Täuschungen, wie in der Studie
	"The Elephant in the Room" von Rosenfeld et al., beeinträchtigt werden, was ihre Anfälligkeit für
	Wahrnehmungsirrtümer verdeutlicht.
</ImageLeftSection>

<TextSection heading="Visualisierung" multicolumn={true}>
	In der besprochenen Auflistung steht die Visualisierung von mentalen Bildern im Fokus, die
	verschiedene Sinneseindrücke wie Geräusche oder Gerüche einschließen können. Diese Aktivierung
	ähnelt der Wahrnehmung, aber das Gehirn zeigt gewisse Zurückhaltung, um Verwechslungen zwischen
	Realität und Vorstellung zu vermeiden. Solche Bilder sind oft vage, farblos und ständig im Wandel.
	Während es keine direkte Visualisierung mentaler Bilder gibt, werden sie oft von Künstler*innen
	beschrieben oder rekonstruiert. Eine Studie mit dem "Vividness of Visual Imagery Questionnaire
	(VVIQ)" ergab, dass die meisten Menschen keine deutlichen mentalen Bilder haben. Die VVIQ-Scores,
	die Klarheit messen, sinken mit dem Alter exponentiell. Im Kontext der Computertechnologie
	erlauben Bildgenerierungssysteme wie Diffuser die Visualisierung von Gedanken in Form von
	textbasierten mentalen Bildern. Diese sind detaillierter und beständiger als menschliche Varianten
	und werfen Fragen über deren Qualität im Vergleich zu menschlichen kreativen Produkten auf, was
	weiterhin diskutiert wird. Die meisten würden zustimmen, dass generierte Bilder höhere VVIQ-Scores
	erzielen würden als eigene Vorstellungen.
</TextSection>

<ImageWideSection
	src="/assets/images/visualize.png"
	alt="Ein KI-generiertes Bild eines augmentierten Gehirns"
	showAlt={true} />

<HeadingSection heading="Die Grenzen des Lernens">
	Dieses Kapitel gibt eine kurze Einführung in die Thematik.
</HeadingSection>

<TextSection heading="Herausforderungen und Unterschiede beim Lernen" multicolumn={true}>
	Das Lernen ist für Maschinen äußerst herausfordernd, da der Mensch in fast allen Lernaspekten
	überlegen ist. Menschliches Lernen geschieht schneller und effizienter als das von neuronalen
	Netzwerken, wie am Beispiel des Trainings des GPT-3-Modells deutlich wird. Wenige Durchläufe
	reichen Menschen aus, um Grundlagen zu begreifen, während Maschinen Hunderte oder Tausende
	benötigen. Zero- bzw. Few-Shot Learning bringt Maschinen näher an menschliches Lernen, indem sie
	während der Aufgabenbearbeitung unterstützende Informationen erhalten. Menschliche Intuition und
	kontextuelles Verstehen überflügeln ebenfalls KI. Kinder entwickeln früh physikalisches und
	biologisches Verständnis, während KI spezifisch denkt und keinen gesunden Menschenverstand
	besitzt. Kontextuelles Verstehen ermöglicht Menschen tiefere Bedeutung und fundierte
	Entscheidungen. In diesem Bereich übertrifft der Mensch KI, die oft nur auf engen Input fokussiert
	ist.
</TextSection>

<TextSection heading="Von GI zu ASI" multicolumn={true}>
	Die Begrenzung der künstlichen Intelligenz (KI) liegt vor allem in ihrer Lernfähigkeit.
	KI-Paradigmen übertreffen selten ihre menschlichen Schöpfer, da sie durch Daten, vorgegebene
	Grenzen und Ziele beschränkt sind. Symbolische KI wie "DeepBlue" kann nur außerhalb menschlicher
	Begrenzungen dominieren, während subsymbolische KI, die unabhängig vom Menschen lernt, wie durch
	unsupervised oder reinforcement Learning, eine Chance hat, besser zu werden. Die Entwicklung einer
	echten allgemeinen KI (AGI) wird Zeit erfordern, da ein einzelnes neuronales Netzwerk wohl nicht
	alle menschlichen Fähigkeiten erlernen kann, ohne eine einheitliche Darstellung verschiedener
	Datenformate zu haben. Die Herausforderung liegt darin, die Bedeutungen unterschiedlicher Medien
	ähnlich wie bei einem Universal-Encoding zu vereinen, wobei Kommunikation in beide Richtungen
	durch ein universelles Mittel für AGI notwendig ist. Multimodale KI wie GPT-4 könnten dabei
	hilfreich sein, um vielfältige Inputs zu verarbeiten und angemessene Ergebnisse zu liefern, jedoch
	ist auch die physisch-motorische Ebene ein integraler Bestandteil von Intelligenz. Der Sprung von
	aktuellen KIs zu AGI ist bedeutend, während der Schritt von AGI zur künstlichen Superintelligenz
	(ASI) vergleichsweise gering ist. Eine AGI könnte Systeme generieren, die sich selbst verbessern,
	wodurch jede Verbesserung eine ASI darstellt. Die Idee, dass ein System etwas Überlegenes schaffen
	kann, wirft zwar Fragen auf. Die "Singularität" bleibt vorerst ein Begriff ohne klaren Nutzen, da
	die Schaffung einer Intelligenz mit unverständlichen Gedanken begrenzten Wert hat. Stattdessen
	wäre es sinnvoller, existierende Ansätze zu optimieren und zu erweitern. Das menschliche Gehirn
	bildet bereits das GI von AGI, und der Schritt zur ASI erfordert nur noch das externe "A".
</TextSection>
