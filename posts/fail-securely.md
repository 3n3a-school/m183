# Failing Securely

## Was ist mit dem Begriff gemeint?

Sicherheit ist heutzutage immer wichtiger, mit dem Anstieg an mehr diversen und komplexen Systemen. Jedes dieser Systeme, oder zumindest ein grosser Teil davon, braucht ein Login, oder einen anderen Sicherheitsmechanismus. Nun der Twist, der Sicherheitsmechanismus muss auch sicher sein. Entweder der Mechanismus erlaubt eine Aktion, er verbietet diese, oder aus verschiedensten Gründen kann er eine Fehlermeldung ausspucken. Nun gibt es Sofware, welche Fehlermeldungen ausspuckt die zu viel Informationen ausgibt. Wie zum Beispiel Wordpress, wenn man sich anmeldet mit einem Benutzer welcher nicht existiert, gibt es die hilfreiche Meldung zurück, dass es diesen Benutzer schon gibt.

Mit _Fail Securely_ ist gemeint, dass ein System so aufgebaut ist, dass eine Fehlermeldung das gleiche Ausgibt wie wenn eine Aktion nicht erlaubt ist.

## Negativbeispiel

Hier haben wir das populäre CMS, Wordpress. Dieses bietet dem Benutzer eine Login Möglichkeit. Nun wenn ein böswilliger Benutzer sich anmelden möchte, und er versucht das Passwort, oder den Benutzernamen zu erraten, dann hat diese Person einen grossen Spass. Denn Wordpress teilt ihr einfach mit ob ein Benutzer / eine Email schon registriert wurde. Somit kann ein Angreifer ein Loginformular solange mit Benutzernamen, und Passwörtern aus einer Liste befüllen bis er das korrekte erraten hat.

## Korrekte umsetzung

Das Beispiel oben, sollte das gleiche ausgeben wie wenn ein Benutzer nicht berechtigt ist auf das System zuzugreifen. Nämlich wäre das eine generische Fehlermeldung, wie zum Beispiel _Bitte überprüfen Sie ihr Benutzernamen und Passwort_. Generell sollte ein System von Grunde auf so aufgebaut sein, dass es zum einen nicht abstürzt bei einer Fehlermeldung und zum anderen keine schützenswerten Daten ausgibt.

**Quelle**: [OWASP](https://owasp.org/www-community/Fail_securely)