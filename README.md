# Website Lions Club Rudolstadt-Heidecksburg

Einfache, statische Website (reines HTML/CSS/JS, kein Server nötig) im
Lions-Farbschema (Blau/Gold), angelehnt an die Gestaltungssprache von
Lions Clubs International.

## Struktur

```
index.html        Startseite
ueber-uns.html     Über den Club / Geschichte / Vorstand
projekte.html      Hilfsprojekte
termine.html       Terminübersicht
kontakt.html       Kontaktformular + Kontaktdaten
impressum.html     Impressum (Pflichtangaben, § 5 TMG)
datenschutz.html   Datenschutzerklärung
css/style.css      Gesamtes Design (Farben, Layout, Responsive)
js/script.js       Mobiles Menü, aktive Navigation, Jahreszahl im Footer
```

## Vor dem Veröffentlichen unbedingt erledigen

Alle Platzhalter sind im Text mit `[eckigen Klammern]` oder als
*„Platzhaltertext“* markiert. Wichtigste Stellen:

- **Vereinsdaten**: Adresse, Telefon, Gründungsjahr, Mitgliederzahl,
  Distriktnummer (in allen Footern, in `kontakt.html`, `impressum.html`,
  `ueber-uns.html`).
- **Vorstand**: Namen/Fotos in `ueber-uns.html`.
- **Projekte & Termine**: Echte Aktionen statt der Beispielprojekte in
  `projekte.html` und `termine.html` eintragen.
- **Fotos**: Die schraffierten blauen Kästen sind Platzhalter. Eigene
  Fotos einfügen, z. B. `<img src="img/dein-foto.jpg" alt="...">` anstelle
  von `<div class="photo-placeholder">…</div>`.
- **Logo**: Der runde „L“-Badge ist ein generisches Platzhalter-Emblem
  (bewusst *nicht* das offizielle, markenrechtlich geschützte
  Lions-Emblem). Das offizielle Logo/Wortzeichen könnt ihr über das
  Lions-Markenportal (Brand Center von Lions Clubs International, für
  Mitgliedsclubs zugänglich) herunterladen und hier einsetzen.
- **Impressum/Datenschutz**: Rechtstexte sind nur ein Grundgerüst –
  bitte fachlich prüfen (lassen), bevor die Seite online geht.
- **Kontaktformular**: Nutzt aktuell einen einfachen `mailto:`-Versand
  (öffnet das E-Mail-Programm des Besuchers). Für zuverlässigere
  Zustellung später z. B. an einen Formular-Dienst (Formspree o. Ä.)
  oder ein eigenes Backend anbinden.

## Lokal ansehen

Einfach `index.html` per Doppelklick im Browser öffnen – es ist keine
Installation nötig.

## Veröffentlichen (Hosting)

Da es sich um reine statische Dateien handelt, könnt ihr den kompletten
Ordner z. B. hochladen bei:

- einem klassischen Webhoster (per FTP/SFTP, gängig bei Vereins-Domains)
- GitHub Pages / Netlify / Vercel (kostenlose statische Hostings)

Wichtig: Ordnerstruktur (inkl. `css/` und `js/`) unverändert mit hochladen.
