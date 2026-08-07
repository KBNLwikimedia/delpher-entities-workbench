# Delpher entities workbench

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

Built at [hackaLOD 2026](https://netwerkdigitaalerfgoed.nl/hackalod/)
(Middelburg), the Dutch cultural-heritage / Linked Open Data hackathon run by
Netwerk Digitaal Erfgoed. Its first corpus is the **Siboga expeditie**, the
1899–1900 Dutch marine research expedition through the Indonesian archipelago.

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
[Delpher's own terms of use](https://www.delpher.nl/over-delpher/gebruiksvoorwaarden).
Entity data is reconciled against Wikidata, which is CC0.

## Licence

Code is [MIT](LICENSE). Harvested content remains subject to Delpher/KB's terms.
