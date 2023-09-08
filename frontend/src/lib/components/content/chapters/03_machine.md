## Hardware

"Bionik" bezeichnet Technologien, die Methoden und Systeme aus der Natur in hergestellte Objekte transferieren. Tatsächlich basieren fast alle Technologien, auch der Computer, auf organischen Vorbildern. Der Heimcomputer besteht heutzutage aus einer Vielzahl Komponenten, welche allerdings immer einem gewissen Grundaufbau folgen. Mit etwas Fantasie findet man schnell die Ähnlichkeit zum menschlichen Körper und dessen Organen:

- Das Gehäuse als Körper
- Eine Energiezufuhr über mehrere Leitungen als Verdauungssystem
- Ein Motherboard, was sämtliche Komponenten miteinander verbindet, als Nervensystem
- Festplatten und sonstige Speichermedien als Gedächtnis
- Und natürlich die verschiedenen Recheneinheiten als Denkapparate
- Peripheriegeräte wie Tastatur und Maus als Sinnesorgane

Natürlich gibt es auch einige Unterschiede: Die Energiezufuhr ist wesentlich simpler als das vom Menschen, Speicher können Dinge auf Kommando löschen und sind beim Abruf von Informationen quasi unfehlbar (sofern das Speichermedium keinen technischen Defekt hat) und Sensoren sind nicht von Sinnestäuschungen beeinflussbar und liefern konkrete Werte.

## Software

![Eine abstrakte Darstellung eines großen Computers](assets/images/ai.png)Künstliche Intelligenz ist ein Teilgebiet der Informatik und beschäftigt sich damit, Computersysteme zu entwickeln, die diverse Aufgaben erledigen und Entscheidungen treffen können, die normalerweise einen Menschen benötigen würden. Wenn wir also über das maschinelle Denken reden, beschäftigen wir uns quasi ausschließlich mit künstlicher Intelligenz, auch wenn die anderen Bereiche natürlich ebenfalls eine Rolle spielen. Das Ziel von künstlicher Intelligenz ist die Automatisierung der klassischen kognitiven Prozesse wie Wahrnehmung, Informationsverarbeitung, Planung und Schlussfolgerung bis zu dem Punkt, an dem man von sog. "starker KI", also KI, die sämtliche Aufgaben eines Menschen übernehmen kann, spricht.

Bisher sind alle Versuche, starke KI zu entwickeln, an der technischen Komplexität oder fehlenden Ressourcen gescheitert. Somit sind alle momentan existenten KIs "schwache KIs", die nur für einen bestimmten Aufgabenbereich entwickelt wurden. Man kann alle KI-Systeme in eine von den zwei folgenden Kategorien einordnen:

### Symbolisch

![Verschiedene goldene Symbole, die in einem Raum umherschweben](assets/images/symbols.png) Symbolische bzw. "klassische" oder "regelbasierte" KI benutzt explizite Symbole, um Objekte zu repräsentieren. Diese Symbole werden mit Hilfe der ebenfalls expliziten Regeln kombiniert, manipuliert und selektiert, um neue Symbole zu erstellen oder bestimmtes Verhalten zu erzeugen. Sie benutzen also eine gewisse Menge an explizitem Wissen, um auf vorprogrammierte Art und Weise damit zu arbeiten. Ein Beispiel für eine symbolische KI ist "Cyc", ein Projekt, welches seit Jahrzehnten versucht, sämtliches Wissen über die Welt in einer Wissensbasis zu kombinieren. Ein anderes Beispiel ist "MYCIN", ein sog. "Expert System", welche Ärzten bei der Diagnose von Infektionskrankheiten helfen konnte, allerdings nie für einen echten Fall genutzt wurde. Die gängigsten Formen von symbolischer KI sind heutzutage allerdings KIs in Videospielen, die mit Hilfe von Regeln und Wissen über die Spielwelt eigenständig Entscheidungen treffen können.

Ein großer Vorteil von diesen Systemen ist, dass sie sehr transparent sind. Der gesamte Gedankenprozess kann ohne weiteres zurückverfolgt und angepasst werden. Somit sind sie auch für Bereiche, in denen Sicherheit und Vertrauen eine große Rolle spielen, wie z.B. in der Medizin, sehr gut geeignet. Je nach Form sind sie zudem in der Lage, auch mit wenigen Eingangsdaten komplexes Verhalten zu zeigen. Allerdings sind sie auch recht unflexibel und können nicht gut mit mehrdeutigem oder unklarem Wissen umgehen. Fehlende Daten oder Zusammenhänge können zudem schnell zu toten Winkeln führen: Es ist also essentiell, dass diese KIs vor der Benutzung korrekt eingerichtet werden. Im Falle von Expert Systems benötigt dies, wie der Name impliziert, andere Expert\*innen, die ihr eigenes Wissen korrekt kodieren müssen. Dies ist ein sehr aufwendiger Prozess, der zudem auch noch sehr fehleranfällig ist.

### Subsymbolisch

![Ein Gehirn bestehend aus Kabeln und schwarzen Metallplatten](assets/images/brain.png) Subsymbolische KI-Systeme entfernen sich dagegen von explizitem Wissen und Symbolen. Sie orientieren sich stattdessen am biologischen Aufbau des Gehirns und nutzen sog. "künstliche neuronale Netzwerke", um selbstständig zu lernen, wie eine bestimmte Aufgabe zu erledigen ist. Diese Netzwerke bestehen aus vielen einzelnen "Neuronen", die in mehreren "Layern" gruppiert sind und über "Synapsen" miteinander verbunden werden. Die Idee dabei ist, dass die verschiedenen Layer Informationen auf verschiedenen Abstraktionsebenen verarbeiten können. Diese Neuronen haben verschiedene Parameter, die angepasst werden können, um andere Outputs zu erzeugen. Während des Lernprozesses gehen neuronale Netzwerke relativ große Datensätze durch und verändern ihre internen Parameter so, dass ein bestimmtes Ziel erreicht wird. Dieser Prozess wird "Training" genannt. Nach dem Training können sie dann auf neue Daten angewendet werden, um Vorhersagen zu machen oder Entscheidungen zu treffen.

Subsymbolische KI ist nicht auf klare Muster und Zusammenhänge angewiesen, sondern kann diese selbst finden. In vielen Fällen erkennen sie dabei sogar Zusammenhänge, die ein Mensch nicht erkennen würde. Sie können dadurch auch besser mit komplexen, unstrukturierten oder mehrdeutigen Daten wie Bildern, Audio oder SPrache umgehen, als symbolische KIs. Vor allem müssen diese KIs aber auch nicht explizit programmiert werden und lassen sich dadurch schnell auf unterschiedlichste Aufgaben anwenden. In dieser Hinsicht sind sie größtenteils _universell_.

Auf der anderen Seite bedeutet diese hohe Selbstständigkeit allerdings auch, dass den Entwickler\*innen weniger Kontrolle bleibt, was sie für sicherheitskritische Anwendungen problematisch macht. Gleichzeitig sind sie sehr abhängig von den Trainingsdaten. Sind diese Daten zu schlecht oder zu wenig, kann das neuronale Netzwerk nicht gut trainiert werden und liefert schlechte Ergebnisse. Zudem sind sie sehr rechenintensiv und benötigen viel Speicherplatz, was sie für kleinere Geräte ungeeignet macht.

## Besondere Eigenschaften

### Speichern und Löschen

![Farbige Blöcke auf einer runden Platte](/assets/images/storage.png) Auf der tiefsten Ebene erfolgt die Speicherung von Informationen bei einem Computer bekannterweise in der Form von elektrischen Signalen. Diese Signale sind entweder an (1) oder aus (0). Einzelne Einsen und Nullen haben jedoch nicht wirklich viel Aussagekraft, weswegen sie zu kleineren Gruppen, also "Bytes" kombiniert werden. Für alle praktischen Zwecke könnte man also sagen, dass ein Computer Daten immer in Blöcken verarbeitet, während der Mensch eher einen kontinuierlichen Fluss an Informationen benutzt. Diese kleinen Gruppen werden auf einem der vielen verschiedenen Speichermedien eines Computers zusammen mit einer Adresse abgelegt. Das Abrufen und Löschen von Daten erfolgt dann nur über diese Adresse. Zum Löschen wird die Adresse in der Regel einfach überschrieben, wodurch die Daten vorerst nicht mehr abrufbar sind.

Um Daten noch effektiver zu organisieren und zu finden können zudem Datenbanken benutzt werden. Diese bilden strukturierte Systeme, übernehmen das "Indexing" von Daten und ermöglichen es, Daten mit Hilfe von sog. "Queries" zu finden und zu verknüpfen. Das Speichern von Daten ist somit einer der Hauptnutzen von Maschinen: Ein Handy ist heutzutage eher für das Abrufen und Speichern von Daten zuständig, als das Telefonieren.

### Zufall als Kreativitätsersatz

![](assets/images/random.png)

Maschinen werden oft als mangelhaft kreativ betrachtet, da sie Entscheidungen auf Grundlage vorhandener Daten treffen und deterministische Algorithmen (auch bei subsymbolischer KI) anwenden. Der Mensch handelt allerdings ebenfalls deterministisch, allerdings wird diese Idee des "Determinismus" oft zugunsten des freien Willens unterdrückt, was wiederum Selbstbestimmung ermöglicht. Der deterministische Ursprung der meisten Ereignisse unklar, was zu einer Lücke in der Kausalkette führt. Diese Lücke kann der Mensch mit seiner eigenen Interpretation füllen.

Die Unergründlichkeit des Ursprungs ist letztlich das, was den Menschen Zufall als kreatives Substitut sehen lässt. Warum ein generiertes Bild so aussieht, wie es aussieht, ist nicht erkennbar. Es entsteht wieder eine Lücke, die der Mensch durch sein Wissen, dass es einen Ursprung geben muss, auffüllt. Der wahre Ursprung, also pseudozufällige Zahlen, die durch Millionen von Parametern in mehreren Durchläufen manipuliert werden, ist in diesem Fall so undurchsichtig, dass es für den Verstand nur eine Ursache geben kann: Das zwar undurchsichtige, aber greifbarere Konzept von "Kreativität".

### Garantiertes Ergebnis

Neuronale Netzwerke haben die Eigenschaft, garantiert ein Ergebnis zu erzeugen. Sie werden geradezu gezwungen, sich für einen Output zu entscheiden. Dieser Output ist zwar nicht immer der gewünschte, aber er ist immer vorhanden. Diese Fähigkeit ist in vielen praktischen Anwendungen sehr sinnvoll. Sie erlaubt der KI auch mit Unsicherheit und Mehrdeutigkeit umzugehen. _Eine_ Antwort ist also besser als _keine_ Antwort, weil selbst schlechte Antworten von weiteren Algorithmen oder dem Menschen interpretiert werden können. Wenn ein Modell normalerweise sehr gut darin ist, Zusammenhänge in Texten zu erkennen, und einen neuen Text augenscheinlich falsch zuordnet, dann sollte die erste Überlegung sein, warum es diese Zuordnung gemacht hat und nicht direkt, wie man diesen Fehler ausmerzen kann.

In der Psychologie ist es bereits eine gängige Praxis, von biologischen Beeinträchtigungen im Gehirn auf die Funktion einzelner Komponenten zu schließen. Auch in der KI-Forschung ist ein großer Teil der Arbeit das Erforschen der "Fehler" eines neuronalen Netzwerks, in der Hoffnung, neue und interessante Erkenntnisse zu gewinnen.

### Flexibilität

Eine besonders hervorzuhebende Eigenschaft von Computern ist ihre Flexibilität. Sie sind buchstäblich in der Lage auf Knopfdruck von einem Kontext in den nächsten zu wechseln. So kann man ohne weiteres zuerst einen Text schreiben, dann im Web suchen und schließlich ein Computerspiel starten. Das scheint auf den ersten Blick nicht wirklich besonders. Bei näherer Betrachtung setzt diese Fähigkeit voraus, dass sämtliche vorherigen Aktionen bei der einen Aufgabe keinen Einfluss auf die Bewältigung der nächsten Aufgabe haben.

Computer haben keine Emotionen und bleiben dadurch unbelastet. Sie können ihren Speicher gezielt leeren und auch die Recheneinheiten machen keine wirklichen Vorschriften, was in einem bestimmten Moment geht und was nicht. Das ist eine der größten Stärken von Computern: die temporale Unabhängigkeit und die vollkommene Freiheit bei der Festlegung oder auch Teilung des Fokus.
