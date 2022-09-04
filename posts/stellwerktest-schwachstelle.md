# Schwachstelle im Stellwerktest

> Geschrieben für die Berufsschule im Rahmen des Moduls 183, zum Thema Applikationssicherheit und aktuelle Schwachstellen

## Was ist passiert?

Im Juni 2022 haben Schüler aus dem Kanton Schwyz beim üben des Stellwerktests eine Schwachstelle entdeckt. Diese ermöglichte es ihnen mit Hilfe der Browser-Konsole ein Code-Snippet auszuführen, welches ihnen die Antworten des Tests lieferte. Die Staatsanwaltschaft St. Gallen schreibt, die SchülerInnen haben nicht aktiv das System des Stellwerks gehackt, sondern eine Schwachstelle der Applikation ausgenutzt um ein besseres Resultat zu erreichen am Test.

Wie 20 Minuten berichtete haben gewisse Schüler mit "diesem Trick die Höchstpunktzahl erreicht". Eine Klasse aus Schwyz muss aus diesem Grund nun den Stellwerktest wiederholen.

## Wie wurde reagiert?

Der Lehrmittelverlags St. Gallen, welcher _"stellwerk.ch"_ für andere Kantone betreut und bereitstellt, hat zusammen mit dem Applikationsprovider Arcadix umgehend reagiert, wie die Staatsanwaltschaft St. Gallen in einer Medienmitteilung schreibt. Die Schwachstelle wurde laut 20 Minuten am 14. Juni 2022 durch Entwickler geschlossen.

## Meine Gedanken

Persönlich kann ich mir zwei Szenarien vorstellen wie dieser Fehler zustande kam.

Das erste ist, dass aus fälschlicher Überlegung, die Applikationslogik zum überprüfen der Testresultate Clientseitig ausgeführt wird. Dies beinhaltet, dass die Resultate im Browser des Benutzers zu einem Zeitpunkt präsent sind.

Bei der Entwicklung der verschiedenen Applikationen des Stellwerks, für die Lehrer, die Schüler und die Administration der Schule, kann es sein, dass eine Funktion im Browser verfügbar war, welche die entsprechenden Resultate einer Prüfung einfach ausgab. Dies bedeutet dann, dass zum einen der Endpunkt auf dem Server nicht abgesichert war und somit ein Nutzer mit Rolle "Schüler" auf diese Daten zugreifen konnte. Zum anderen auch dass die ungewollte Funktion in allen Applikationen vorhanden ist, auch wenn diese von einem Schüler nie gebraucht werden sollte.

Aus meiner Analyse der Login Seite von "stellwerk.ch", sowie beim anschauen der Website von Arcadix, konkludiere ich, dass Kestrel, ein ASP.NET Core Webserver verwendet wird im Backend, sowie Angular im Frontend.

## Quellen

* [20 Minuten - Schüler überlisten mit Tastenkombi Stellwerktest (20.06.22)](https://www.20min.ch/story/schueler-ueberlisten-mit-tastenkombi-stellwerktest-350775542168)
* [St. Galler Staatsanwaltschaft - Schwachstelle im Stellwerktest-Programm behoben (20.06.22)](https://www.sg.ch/news/sgch_allgemein/2022/06/schwachstelle-im-stellwerktest-programm-behoben.html)