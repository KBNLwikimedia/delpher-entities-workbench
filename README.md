# Delpher Entiteiten Workbench

[![Open punten](https://img.shields.io/github/issues/KBNLwikimedia/delpher-entities-workbench?label=open%20punten&color=00857b)](https://github.com/KBNLwikimedia/delpher-entities-workbench/issues)
[![Licentie](https://img.shields.io/github/license/KBNLwikimedia/delpher-entities-workbench?label=licentie&color=00857b)](LICENSE)
[![Materiaal](https://img.shields.io/badge/materiaal-Delpher%20%2F%20KB-01415b)](https://www.delpher.nl)
[![Gekoppeld aan](https://img.shields.io/badge/gekoppeld%20aan-Wikidata-990000)](https://www.wikidata.org)
[![Gemaakt voor](https://img.shields.io/badge/gemaakt%20voor-HackaLOD%202026-b23a53)](https://netwerkdigitaalerfgoed.nl/hackalod/)

<p align="center">
  <a href="https://www.delpher.nl" title="Delpher"><picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/media/delpher-logo-dark.svg">
    <img src="assets/media/delpher-logo.svg" alt="Delpher" height="54">
  </picture></a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://www.kb.nl" title="KB, nationale bibliotheek"><picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/media/kb-logo-dark.svg">
    <img src="assets/media/kb-logo.svg" alt="KB, nationale bibliotheek" height="46">
  </picture></a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://netwerkdigitaalerfgoed.nl/hackalod/" title="HackaLOD 2026, Middelburg"><img src="assets/media/hackalod-logo.jpg" alt="HackaLOD 2026" height="56"></a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://www.wikidata.org" title="Powered by Wikidata"><img src="assets/media/wikidata-stamp.png" alt="Powered by Wikidata" height="52"></a>
</p>

Een oude krant staat vol namen: mensen, schepen, diersoorten, plaatsen,
organisaties. Deze werkbank haalt ze uit de tekst, zoekt op welk
[Wikidata](https://www.wikidata.org)-item erbij hoort, en legt elke keuze aan
een mens voor. Het materiaal komt uit [Delpher](https://www.delpher.nl):
miljoenen gedigitaliseerde kranten, doorzoekbaar gemaakt door de
[KB, de nationale bibliotheek van Nederland](https://www.kb.nl).

Stap voor stap: de app voert een zoekopdracht uit bij Delpher en haalt van elk
gevonden artikel drie dingen op — de volledige tekst, de scan van de
krantenpagina, en de plaats van elk woord op die scan. Daarna zoekt hij de namen
op in die tekst, stelt bij elke naam een Wikidata-item voor, en zet het
resultaat in een werkbank waarin jij bevestigt, verbetert, samenvoegt, splitst,
hernoemt of koppelt. Elke beslissing wordt opgeschreven, krijgt een datum, en is
altijd weer in te trekken.

Gebouwd ter voorbereiding op
[HackaLOD 2026](https://netwerkdigitaalerfgoed.nl/hackalod/) in Middelburg, de
Nederlandse hackathon over digitaal erfgoed en open data van Netwerk Digitaal
Erfgoed. Het eerste project is de **Siboga-expeditie**, de Nederlandse
zeeonderzoeksexpeditie die in 1899–1900 door de Indonesische archipel voer.

<!--
De links in de galerij wijzen naar raw.githubusercontent.com, zodat een klik het
plaatje zelf oplevert en niet GitHubs bestandspagina. Ze dragen GEEN
target="_blank": GitHub filtert dat attribuut weg (nagemeten tegen zijn eigen
/markdown-API, die ook rel naar nofollow herschrijft), dus het zou een nieuw
tabblad beloven dat er niet komt.

Op de GitHub Pages-site (kbnlwikimedia.github.io/delpher-entities-workbench)
opent een klik het plaatje juist OVER de pagina heen, in een lichtbak. Die wordt
geladen vanuit _includes/head-custom.html en zoekt zijn eigen links op; er staat
met opzet niets voor in dit bestand. Een <script> of <style> hier zou door
GitHub niet weggegooid maar ZICHTBAAR gemaakt worden, en dan stond de hele
broncode als tekst op deze pagina.
-->

## Zo ziet het eruit

De zestien schermen, in de volgorde waarin je ze tegenkomt. Klik op een
afbeelding om hem groot te bekijken.

<!-- GALERIJ:START -- gegenereerd, zie scripts/build_readme_gallery.py -->
<table>
<tr>
<td width="50%" valign="top">
<a href="https://raw.githubusercontent.com/KBNLwikimedia/delpher-entities-workbench/refs/heads/main/assets/media/01-uitleg.png"><img src="assets/media/01-uitleg.png" alt="Over deze workbench"></a>
<br><b>1 &middot; Eerst even lezen wat dit is</b><br>
De pagina <i>Over deze workbench</i> legt in gewone taal uit waar de app voor is en in welke volgorde je te werk gaat. Geschreven voor iemand die hem voor het eerst opent.
</td>
<td width="50%" valign="top">
<a href="https://raw.githubusercontent.com/KBNLwikimedia/delpher-entities-workbench/refs/heads/main/assets/media/02-overzicht.png"><img src="assets/media/02-overzicht.png" alt="Het projectoverzicht"></a>
<br><b>2 &middot; Al je projecten op een pagina</b><br>
Een tegel per onderwerp, met het eigen logo erachter en hoeveel krantenartikelen erin zitten. Onder de streep staan de projecten die je hebt uitgezet: die zijn uit de app, maar op je schijf staat alles nog.
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://raw.githubusercontent.com/KBNLwikimedia/delpher-entities-workbench/refs/heads/main/assets/media/03-nieuw-project.png"><img src="assets/media/03-nieuw-project.png" alt="Het formulier voor een nieuw project"></a>
<br><b>3 &middot; Een nieuw project beginnen</b><br>
Onder het naamveld staat wat die naam gaat worden: het webadres, en de map op je schijf. Bij het logo zie je alvast de lettercode die je krijgt als je er geen kiest — hier <code>ZUI</code>. Rechts staan de vier stappen die je daarna doorloopt.
</td>
<td width="50%" valign="top">
<a href="https://raw.githubusercontent.com/KBNLwikimedia/delpher-entities-workbench/refs/heads/main/assets/media/04-galerij.png"><img src="assets/media/04-galerij.png" alt="De krantenartikelen naast elkaar"></a>
<br><b>4 &middot; De krantenartikelen van een project</b><br>
Links de kolom om mee te filteren. Op elk kaartje staan de scan van de krantenpagina, het stukje tekst waarin je zoekwoord voorkomt, en de namen die iemand in dat artikel heeft goedgekeurd.
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://raw.githubusercontent.com/KBNLwikimedia/delpher-entities-workbench/refs/heads/main/assets/media/05-zoeksuggesties.png"><img src="assets/media/05-zoeksuggesties.png" alt="Het zoekvak biedt een goedgekeurde naam aan"></a>
<br><b>5 &middot; Typen in het zoekvak</b><br>
De bovenste regel zoekt gewoon op die letters. Daaronder wordt Anna Weber-van Bosse aangeboden als naam — gevonden op een schrijfwijze die in de kranten staat, met het merkje van Wikidata omdat vaststaat wie ze is, en goed voor 28 artikelen.
</td>
<td width="50%" valign="top">
<a href="https://raw.githubusercontent.com/KBNLwikimedia/delpher-entities-workbench/refs/heads/main/assets/media/06-filteren.png"><img src="assets/media/06-filteren.png" alt="De filterkolom met twee jaren en een soort bericht aangevinkt"></a>
<br><b>6 &middot; Filteren met de kolom links</b><br>
Achter elk vinkje staat hoeveel artikelen er overblijven als je het aanzet. Hier staan twee jaren en een soort bericht tegelijk aan. Alles wat je aanvinkt komt in het webadres te staan, dus je kunt precies dit beeld doorsturen.
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://raw.githubusercontent.com/KBNLwikimedia/delpher-entities-workbench/refs/heads/main/assets/media/07-groeperen.png"><img src="assets/media/07-groeperen.png" alt="De artikelen gegroepeerd per jaar"></a>
<br><b>7 &middot; De uitkomst per jaar bij elkaar</b><br>
Dezelfde zoekopdracht, maar nu op jaar gegroepeerd. Zo zie je wanneer er over je onderwerp geschreven werd, in plaats van alleen hoeveel.
</td>
<td width="50%" valign="top">
<a href="https://raw.githubusercontent.com/KBNLwikimedia/delpher-entities-workbench/refs/heads/main/assets/media/08-lezer.png"><img src="assets/media/08-lezer.png" alt="Het leesscherm: scan, tekst en de gevonden namen"></a>
<br><b>8 &middot; Een artikel lezen</b><br>
Linksboven de scan van de krantenpagina, daaronder de tekst met om elke naam een lijntje in de kleur van zijn soort, en rechts alle namen op soort gegroepeerd. Per naam zie je hoe zeker de herkenning is, welke schrijfwijzen dit artikel gebruikt, en het Wikidata-nummer als dat is goedgekeurd.
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://raw.githubusercontent.com/KBNLwikimedia/delpher-entities-workbench/refs/heads/main/assets/media/09-lichtbak.png"><img src="assets/media/09-lichtbak.png" alt="De scan op ware grootte over het leesscherm heen"></a>
<br><b>9 &middot; De scan op ware grootte</b><br>
Klik op de scan en hij komt schermvullend over de rest heen, om te verslepen. De gekleurde markeringen zijn de zoekwoorden waarmee dit artikel bij Delpher gevonden is, elk in de kleur van zijn eigen zoekopdracht.
</td>
<td width="50%" valign="top">
<a href="https://raw.githubusercontent.com/KBNLwikimedia/delpher-entities-workbench/refs/heads/main/assets/media/10-bevestigen.png"><img src="assets/media/10-bevestigen.png" alt="Het venster dat om bevestiging vraagt"></a>
<br><b>10 &middot; Het ene venster waar elke wijziging langs gaat</b><br>
Het zegt wat het gaat vastleggen en ook wat het met opzet niet doet. De laatste regel voor de knoppen is elke keer dezelfde keuze: alleen dit artikel, of alle artikelen — met erbij hoe vaak de naam voorkomt, zodat die tweede keuze een getal is en geen gok.
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://raw.githubusercontent.com/KBNLwikimedia/delpher-entities-workbench/refs/heads/main/assets/media/11-correcties-artikel.png"><img src="assets/media/11-correcties-artikel.png" alt="De beslissingen die op dit artikel van invloed zijn"></a>
<br><b>11 &middot; Wat er al besloten is over dit artikel</b><br>
Naast de tekst zie je welke eerdere beslissingen op dit artikel doorwerken, met een legenda van de zeven soorten die je kunt nemen. Elke regel is met een klik weer in te trekken.
</td>
<td width="50%" valign="top">
<a href="https://raw.githubusercontent.com/KBNLwikimedia/delpher-entities-workbench/refs/heads/main/assets/media/12-entiteiten.png"><img src="assets/media/12-entiteiten.png" alt="Alle namen van het project in een lijst"></a>
<br><b>12 &middot; Alle namen van een project in een lijst</b><br>
Een regel per naam, met de soort, wat Wikidata erover zegt, alle schrijfwijzen die in de kranten staan, het goedgekeurde nummer en hoe vaak de naam voorkomt. Hier werk je een heel project door in plaats van een artikel.
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://raw.githubusercontent.com/KBNLwikimedia/delpher-entities-workbench/refs/heads/main/assets/media/13-dubbelen.png"><img src="assets/media/13-dubbelen.png" alt="Namen die waarschijnlijk hetzelfde zijn, bij elkaar gezet"></a>
<br><b>13 &middot; Namen die op elkaar lijken, bij elkaar</b><br>
De app zet namen die waarschijnlijk hetzelfde zijn bij elkaar, zodat je ze in een keer kunt samenvoegen. Vaak zijn het leesfouten in de scan: <i>Snellius-expeditie</i> staat er ook als <i>Snelliusexpeditie</i> en <i>SneUlus-expeditie</i>.
</td>
<td width="50%" valign="top">
<a href="https://raw.githubusercontent.com/KBNLwikimedia/delpher-entities-workbench/refs/heads/main/assets/media/14-entiteit-paneel.png"><img src="assets/media/14-entiteit-paneel.png" alt="Het paneel van een naam, met zijn geschiedenis"></a>
<br><b>14 &middot; Een naam, van dichtbij</b><br>
De velden die je kunt aanpassen, de foto waar Wikidata naar wijst, alle schrijfwijzen, en onderaan de geschiedenis. Dat laatste staat nergens anders: de lijst met beslissingen bewaart alleen wat er nu geldt.
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://raw.githubusercontent.com/KBNLwikimedia/delpher-entities-workbench/refs/heads/main/assets/media/15-correcties.png"><img src="assets/media/15-correcties.png" alt="Alle beslissingen van het project op een rij"></a>
<br><b>15 &middot; Alles wat er ooit besloten is</b><br>
Elke beslissing die iemand ooit nam, gegroepeerd op soort en te sorteren. Per regel staat hoe ver hij reikt en wanneer hij genomen is — en je kunt hem hier weer intrekken.
</td>
<td width="50%" valign="top">
<a href="https://raw.githubusercontent.com/KBNLwikimedia/delpher-entities-workbench/refs/heads/main/assets/media/16-geschiedenis.png"><img src="assets/media/16-geschiedenis.png" alt="Het logboek van het project"></a>
<br><b>16 &middot; Het logboek, op volgorde van tijd</b><br>
Hetzelfde verhaal maar dan chronologisch: wat er gebeurd is, wanneer, en door wie. Er wordt alleen aan toegevoegd en nooit in geschrapt, dus je kunt altijd terugzien hoe iets zo gekomen is.
</td>
</tr>
</table>
<!-- GALERIJ:EINDE -->

## Waar de code staat

**Voorlopig niet hier.** Het is onderzoeksgereedschap dat volop in ontwikkeling
is, op één computer, samen met het opgehaalde krantenmateriaal en alle
beslissingen die er inmiddels in zitten. Of de code openbaar wordt, is een
keuze voor later.

## Waar deze repo dan wél voor is

**Het meldpunt.** Fouten, wensen en open vragen worden verzameld bij
[Issues](https://github.com/KBNLwikimedia/delpher-entities-workbench/issues).
Dat is op dit moment het hele doel van deze repo, dus een melding is welkom —
ook al kun je de code waar hij over gaat nog niet inzien.

## Het materiaal

De artikelteksten, de scans en de automatisch uitgelezen tekst komen van
Delpher en de KB. Daarvoor gelden
[de gebruiksvoorwaarden van Delpher zelf](https://www.delpher.nl/over-delpher/gebruiksvoorwaarden);
de afbeeldingen hierboven laten dat materiaal in die context zien. De namen die
eruit komen worden gekoppeld aan Wikidata, en dat is CC0 — vrij te gebruiken.

## Licentie

De code valt onder de voorwaarden in [LICENSE](LICENSE). Het opgehaalde
materiaal blijft onder de voorwaarden van Delpher en de KB vallen.

---

<!-- LAATST-GEWIJZIGD -->
<sub>Laatst bijgewerkt: 2026-08-11 · de afbeeldingen hierboven zijn van die datum.</sub>
