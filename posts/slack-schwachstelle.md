# Schwachstelle in Slack URLs

> Geschrieben für die Berufsschule im Rahmen des Moduls 183, zum Thema Applikationssicherheit und aktuelle Schwachstellen

## Was ist passiert?

Die Messaging Plattform Slack hat _"kryptografisch verschlüsselte Versionen der Passwörter einiger Benutzer enthüllt"_ - (Wired). Diese Sicherheitslücke wurde duch einen _"unabhängigen Sicherheitsforscher"_ aufgedeckt, wie Slack in einem Blog-Post schreibt.

Wenn ein Benutzer einen Link zum beitreten seiner Workspace erstellte oder löschte, dann wurde das gehashte Passwort des Link-Erstellers an andere Mitglieder der Workspace mitgesendet.

## Wie wurde reagiert?

Slack teilte mit, dass am gleichen Tag der Entdeckung der Sicherheitslücke eine neue Version herausgebracht wurde, welche die Lücke schliesst. Die Benutzer welche betroffen waren wurden durch Slack informiert und haben deren Passwörter zurückgesetzt. Diese Nutzer müssen nun ein neues Passwort setzen.

Laut der Firma hätte niemand mit dieser Schwachstelle das wirkliche Passwort eines Benutzers bekommen können.

## Meine Gedanken

Sensitive Daten wie das Passwort oder auch die gehashte Version davon sollten niemals in einer Transaktion aufzufinden sein, welche nichts mit Authentifizierung zu tun hat. Nie sollten solche sensitive von anderen Benutzern ersichtlich sein, wenn auch nur in einem Request.

## Quellen

* [Slack - Blog Post über diese Lücke (11.08.22)](https://slack.com/blog/news/notice-about-slack-password-resets)
* [Malwarebytes - Kommentar zu Sicherheitslücke (11.08.22)](https://www.malwarebytes.com/blog/news/2022/08/slack-flaw-exposed-users-hashed-passwords)
