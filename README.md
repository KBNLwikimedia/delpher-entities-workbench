# Delpher entities workbench

[![Issues](https://img.shields.io/github/issues/KBNLwikimedia/delpher-entities-workbench?label=issues&color=00857b)](https://github.com/KBNLwikimedia/delpher-entities-workbench/issues)
[![Licence](https://img.shields.io/badge/licence-MIT-00857b)](LICENSE)
[![Data](https://img.shields.io/badge/data-Delpher%20%2F%20KB-01415b)](https://www.delpher.nl)
[![Reconciled with](https://img.shields.io/badge/reconciled%20with-Wikidata-990000)](https://www.wikidata.org)
[![Prepared for](https://img.shields.io/badge/prepared%20for-hackaLOD%202026-b23a53)](https://netwerkdigitaalerfgoed.nl/hackalod/)

<p align="center">
  <a href="https://www.delpher.nl" title="Delpher"><picture>
    <source media="(prefers-color-scheme: dark)" srcset="readme-assets/delpher-logo-dark.svg">
    <img src="readme-assets/delpher-logo.svg" alt="Delpher" height="54">
  </picture></a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://www.kb.nl" title="KB, nationale bibliotheek"><picture>
    <source media="(prefers-color-scheme: dark)" srcset="readme-assets/kb-logo-dark.svg">
    <img src="readme-assets/kb-logo.svg" alt="KB, nationale bibliotheek" height="46">
  </picture></a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://netwerkdigitaalerfgoed.nl/hackalod/" title="hackaLOD 2026, Middelburg"><img src="readme-assets/hackalod-logo.jpg" alt="hackaLOD 2026" height="56"></a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://www.wikidata.org" title="Powered by Wikidata"><img src="readme-assets/wikidata-stamp.png" alt="Powered by Wikidata" height="52"></a>
</p>

Finding named entities — people, ships, species, places, organisations — in
[Delpher](https://www.delpher.nl), the digitised newspaper, book and magazine
portal of the [KB, national library of the Netherlands](https://www.kb.nl);
matching them against [Wikidata](https://www.wikidata.org); and letting a human
review every one of those judgements.

It harvests a Delpher search into a local collection (full OCR text, page
scans, word positions), extracts entities from the text, proposes a Wikidata
item for each, and puts the result in a browsable workbench where you confirm,
correct, merge, split, rename or link them. Every decision is recorded, dated
and reversible.

Built as preparation for [hackaLOD 2026](https://netwerkdigitaalerfgoed.nl/hackalod/)
(Middelburg), the Dutch cultural-heritage / Linked Open Data hackathon run by
Netwerk Digitaal Erfgoed. Its first corpus is the **Siboga expeditie**, the
1899–1900 Dutch marine research expedition through the Indonesian archipelago.

## What it looks like

![The gallery: facets on the left, harvested articles as cards, each card
carrying the confirmed entities found in it](readme-assets/screenshot-gallery.png)

Every article is a card with its own page scan, the passage that matched, and
the entities a human has confirmed in it — coloured by kind, and carrying
Wikidata's own mark where the identity is settled. The column on the left
filters by newspaper, year, kind of item and which Delpher search brought it
in. Opening a card gives the full scan beside the OCR text, with every entity
outlined where it occurs.

## Where the code is

**Not here, for now.** It is a research tool under active development on one
machine, together with the harvested material and the corrections ledger it
has accumulated. Publishing it is a decision for later.

## What this repo is for

**The issue tracker.** Bugs, feature requests and open questions are collected
at [Issues](https://github.com/KBNLwikimedia/delpher-entities-workbench/issues).
That is the whole purpose of this repo today, so an issue is welcome even
though you cannot read the code it is about.

## Data

Article text, scans and OCR come from Delpher / KB and remain subject to
[Delpher's own terms of use](https://www.delpher.nl/over-delpher/gebruiksvoorwaarden);
the screenshot above shows them in that context. Entity data is reconciled
against Wikidata, which is CC0.

## Licence

Code is [MIT](LICENSE). Harvested content remains subject to Delpher/KB's terms.
