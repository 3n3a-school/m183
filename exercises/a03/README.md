# Sichere Passwörter

## Anforderungen an Passwort

* Länge von mindestens 12 Zeichen
* Passwortstärke von 4/4

### Bezüge zu Nutzerfreundlichkeit

Als Passwort sollen auch Lange Sätze, oder Kombinationen von längeren Wörter gültig sein.
Da diese auch sicher und einfacher zu merken sind. Somit ist die Hoffnung, dass sich viel 
mehr Nutzer ein längeres Passwort verwenden, welches Sie nicht aufschreiben.

### Sicherheitüberlegungen

Damit der Nutzer weiss wie Sicher sein Passwort in etwa ist, hat es unterhalb des Eingabefeldes
eine Anzeige, wenn diese ausgefüllt ist, dann ist das Passwort relativ sicher und es dauert eine gewisse Zeit,
um es zu cracken.

Damit unsere Passwörter in der Datenbank sicher abgespeichert werden, benutzen wir den Argon2d Hashing Algorithmus, mit
11 Iterationen (Rekursion) und einem Memorykostenfaktor von 4096 KiB.

## Persistenz des Passwortes

* In der Datenbank, separaten Tabelle (DSGV)
* Salt wird generiert von CryptoJS
* Hash generiert mit Argon2d Algorithmus
