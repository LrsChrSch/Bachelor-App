## Eingesetzte Technologien

Neben der Dimensionalitätsreduktion werden in dieser Anwendung auch noch weitere Technologien eingesetzt. Insgesamt besteht die Applikation aus drei Komponenten:

- Einer Datenbank, welche sämtliche Gedanken speichert
- Einer Oberfläche, die diese Daten visualisiert und den eigentlichen Inhalt der Arbeit anzeigt
- Einer multi-modalen KI, welche im Hintergrund laufen kann, um ebenfalls Gedanken hinzuzufügen

Das Ziel ist es, einen Raum zu schaffen, in dem sowohl der Mensch als auch die Maschine miteinander philosophieren können. Dazu werden die Gedanken ihrer Bedeutung nach räumlich dargestellt werden. Es können Verbindungen gemacht und neue Einblicke zu bestehenden Themen gewonnen werden.

### Datenspeicher und Kommunikationswege

![Ein Datenspeicher in einer vereisten Landschaft](assets/images/database.png)

Sämtliche Datenpunkte in der Visualisierung rechts liegen in einer Vektordatenbank. Das heißt, dass sie nicht nur aus den Daten wie Texten oder Bildern selbst bestehen, sondern zusätzlich noch einen Vektor haben, der ihre Position im Raum bestimmt. Dieser Vektor wird mit Hilfe einer KI generiert, welche Inhalte mit ähnlichen Bedeutungen auch räumlich ähnlich positioniert. Dieser Vektor kann mit Hilfe von einer UMAP auf drei bzw. zwei Dimensionen reduziert werden, um sie in der Visualisierung darzustellen. Sowohl die Oberfläche als auch die KI-Seite können diese Datenbank anfragen, um die Gedanken des jeweils anderen zu lesen und darauf zu reagieren. Oberfläche und KI sind dabei ständig über einen Websocket miteinander verbunden, um Gedanken in Echtzeit auszutauschen.

### Künstliche Kognition

![Ein Strom aus Gedanken in einem Gehirn](assets/images/cognition.png) Die KI-Seite bzw. eher die künstliche Kognition ist ein Programm, welches in Python programmiert wurde. Es wählt Gedanken in einem speziellen, mit einem Aufmerksamkeitsmechanismus gelenkten Verfahren aus und entscheidet sich dann zwischen mehreren expliziten Aufgabentypen, die es auf diesen Gedanken anwenden kann. Die KI kann Wissen abrufen, Informationen verändern, bestimmte Dinge selektieren, verschiedene Rollen einnehmen, etc. Diese Aufgaben beziehen sich alle auf die Dinge, die eine Maschine "besser" kann als der Mensch. Zur Erfüllung der Aufgaben wird ein symbolisches Grundkonstrukt mit subsymbolischen KIs zur Text- und Bildgenerierung kombiniert. Die Textgenerierung funktioniert über das Modell namens "Llama2", die Bildgenerierung läuft über ein selbst trainiertes "Stable Diffusion XL"-Modell. Dazu kommen noch Klassifikatoren, um subsymbolische Inhalte in symbolische zu übertragen. Die genauen Details lassen sich in der Thesis nachlesen.

Ziel der KI ist es, das menschliche Denken zu ergänzen (bspw. durch das Abfragen von faktischem Wissen) und es zu erweitern (bspw. durch die Generierung von Bildern). Sie soll eine Rolle im Finden von neuen Ideen und interessanten Verbindungen spielen. Zusätzlich organisiert sie das Wissen und versucht ihre eigenen Denkprozesse transparent darzustellen.

### Oberfläche

Diese Oberfläche ist in Wirklichkeit eine Website. Neben der Vermittlung der Inhalte dieser Arbeit ist sie auch dazu da, ein Interface zwischen Mensch und Maschine zu bilden. Über eine zweite, für Betrachter\*innen versteckte Seite kann ein Administrator seinen eigenen Gedankenraum in Kooperation mit der KI bauen. Hier werden subsymbolische Eingabemethoden verwendet, um die Gedanken des Menschen so direkt wie möglich einzufangen.

Diese Seite hier ist dagegen zugänglich für alle. Neben diesem inhaltlichen Teil wird auch die experimentelle Visualisierung gezeigt, in der viele der hier genannten Aspekte erfahrbar sind. Die einzelnen Gedankenpunkte werden hier in einem 2D- bzw. 3D-Raum angezeigt. Die visuelle Erscheinung unterscheidet sich basierend auf der Kategorie, der der Gedanke angehört. Es gibt 7 Kategorien: Eine für den Menschen, und sechs für die unterschiedlichen Aufgabenbereiche der Maschine. Die Kategorien sind:

- Violett: Alle menschlichen Gedanken
- Dunkelblau: Metakognition (unsichtbar)
- Cyan: Fakten und Informationen
- Altrosa: Nutzen von Informationen
- Rot: Selektion und Fokussierung
- Orange: Manipulieren und Verändern
- Grün: Generieren und Erzeugen

Mehr Informationen über die Navigation der Visualisierung findet sich in der Navigationshilfe rechts unter der Überschrift.

<!-- TODO: Gedankenfarben

TODO: umschreiben
TODO: Bilder einfügen
TODO: Gedankenmarken einfügen -->
