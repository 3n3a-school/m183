# my-project

Folgende Personen sind an diesem Projekt beteiligt: Benjamin Klein & Enea Krähenbühl.

Die einzige Bedingung, die für das Passwort gilt, ist die Länge. Wir haben uns für eine Zeichenlänge von 12 entschieden. 
Diese Vorgabe nervt den Benutzer nicht, da es nicht zu streng ist. Da wir uns nur auf die Zeichenlänge begrenzt haben,
wird der Benutzer ausreichend darüber informiert, wie stark das Passwort ist und ob es irgendwelche Mängel hat. Werden zum Beispiel
Wörter benutzt, die häufig vorkommen, wird der Benutzer darauf hingewiesen. Ein weiteres Beispiel wäre eine typische Zeichenfolge,
wie "abc" oder "12345". Dem Benutzer ist jedoch überlassen, ob er trotzdem das Passwort wählt. Wir machen Vorschläge und keine Restriktionen.

Der Ablauf ist folgendermassen: Das Hashing und die Schätzung, ob das Passwort sicher ist, wird mittels einer externen Library gemacht. Die Library “zxcvbn” wird für die Schätzung verwendet und “CryptoJS” für das Hashing. Wenn der Benutzer nun das Passwort eingibt, wird die Stärke des Passworts aktualisiert und überprüft, ob die Mindestlänge erreicht wurde. Erst beim Erreichen der Mindestlänge wird der Button zum Bestätigen freigegeben. Wenn der Benutzer nun auf den Button drückt, wird als erstes ein Salt randomisiert erstellt. Dieser Salt wird dann gehasht. Anschliessend wird der Argon2 Algorithmus für das Hashen verwendet. Nun hat der Benutzer die Möglichkeit, das eingegebene Passwort zu überprüfen. Ob das Passwort korrekt oder falsch ist, wird dem Benutzer dann über die Benutzeroberfläche signalisiert. 

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and enzyme
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
