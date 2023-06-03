# Einstellungsaufgabe

Hallo!

herzlichen Glückwunsch, dass du es bis hier hin geschafft hast. Mit dieser Aufgabe werde ich deinen Kenntnisstand zu div. Themen testen. Bitte nimm dieses Projekt als Grundlage für ein neues (öffentliches) Repository auf GitHub (oder einem Git-Server deiner Wahl). Pushe das Projekt initial in das Repository, sodass ich deine Anpassungen/Änderungen in der Commit Historie nachverfolgen kann.

## Aufgabenstellung

- Für Kunde X haben wir eine simple Master/Detail App entwickelt, mit dem der Kunde seine Lieferanten verwalten kann.
- In der Masterlist sieht man die Übersicht der Lieferanten, hier soll man neue Lieferanten anlegen und bestehende suchen können. Durch Klick auf einen Lieferanten wird eine Navigation zu dessen Detail Seite ausgeführt
- Die Aufgabe dient dafür dir einen kleinen Einblick in die SAP Welt zu schaffen und zu sehen wie du mit neuen Technologien zu recht kommst.
- Aktionen im Frontend die mit "Dummy" beginnen musst du nicht weiter beachten

## Deine Aufgaben

- [ ] Syntaxfehler im JavaScript Coding beheben
- [ ] #TodoFilter: Filterung/Suche in der Liste einbauen (Suchfeld oben)
  - Stichwort: Binding filtern
  - Möglichkeit Lieferantenname oder Nummer einzugeben
- [ ] Füge 2 weitere Lieferanten in den Mockdaten hinzu
- [ ] Lieferanten Detail Sicht: Löse das Feld "PLZ" vom "Ort", sodass die Felder einzeln untereinander stehen
- [ ] Prüfe welche Themes es gibt und ändere das Theme für die gesamte Anwendung
- [ ] Dir fallen weitere Optimierungen ein? Dann tob dich aus !

Als Hilfestellung kannst du im Projekt nach "#TodoFilter" suchen, um die korrekte Stelle zu finden.

## Hilfreiche Links

- [OPENUI5 SDK Dokumentation](https://openui5.hana.ondemand.com/)
- [Doku über Filter](https://openui5.hana.ondemand.com/api/sap.ui.model.Filter)
- [Doku Suchfeld](https://sapui5.hana.ondemand.com/#/entity/sap.m.SearchField)

Solltest du dennoch bei irgendwelchen Schritten scheitern, es zu Fehlern kommen oder du 'feststecken' kontaktiere mich einfach und ich werde dir dann helfen.

## Set-Up

Hierbei handelt es sich um eine UI5/Nodejs App, du benötigst also:

- GIT cli

- NodeJS / NPM installiert

- UI5 tools:

```sh
# Global
npm install --global @ui5/cli

# In your project
npm install --save-dev @ui5/cli
```

Clone dir das Repository lokal, danach kannst du dann direkt die Anwendung starten. Der Befehl

```sh
npm install
```

ist >nicht< notwendig.

Zum Starten der Anwendung im root Verzeichnis:

```sh
ui5 serve -o index.html
```

Nun wird sich die Anwendung direkt mit deinem Standardbrowser öffnen. Jedoch: Nun musst du 1-2 Syntaxfehler beheben, sodass die Anwendung lauffähig ist.

Danach kannst du mit den anderen Aufgaben fortfahren.

## Fertig?

Gut gemacht! Wenn du mit allen Aufgaben fertig bist gib lade Alex zum Repository ein, bzw. schicke ihm den Link -> alexander.bauer@bauerberatung.de
