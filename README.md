# Krótkofalarstwo — kompendium wiedzy

Statyczna strona internetowa (HTML + CSS + JS, bez zależności) — kompendium wiedzy
o krótkofalarstwie + zestaw kalkulatorów działających w przeglądarce.
Działa również offline (PWA).

**Live demo (GitHub Pages):** `https://<twoj-login>.github.io/ham-radio/`

## Co zawiera

### Treść merytoryczna
- **Kody Q** — ponad 50 pozycji z filtrem (QRA…QUM + skróty typu 73/88, CQ, DX, YL, RST, K/KN/SK).
- **Alfabet fonetyczny** ICAO/NATO + wersja polska (Adam, Barbara…).
- **RST** + ponad 40 **skrótów CW** (AGN, FB, TNX, GM/GA/GE, HI HI, OP, PWR…).
- **Pasma KF / VHF / UHF / SHF** — tabele zakresów IARU Region 1 (plus pasma tylko R2),
  zsynchronizowane z katalogiem `freq-catalog.js`.
- **Znajdź pasmo** — amatorskie R1/R2/R3, segmenty emisji, plus CB CEPT, PMR446,
  SRD 433/868, ISM 2.4 GHz, marine VHF, airband, FM/MW/LW broadcast.
- **Częstotliwości w Polsce** — wywoławcze, alarmowe (IARU R1 Emergency CoA), simpleks,
  przemienniki, sieci cyfrowe (DMR TG 260, D-STAR, Echolink), CB, PMR446, FT8 (lista WSJT-X).
- **Nasłuch służb** — receive-only starter kit: amateur calling/repeaters, CB/PMR, marine
  (ITU ch 16 + Polish Rescue Radio MSI), airband AM (121.500 + AIP examples), DCF77,
  NAVTEX, analogue Police VHF FM scan ranges (164.525–168.475 and 172–174 MHz, no TETRA),
  plus a skip list (TETRA/EDACS/cellular/private PMR). Band edges, not a per-station channel dump.
- **Locator Maidenhead** — budowa + tabela polskich miast (liczona ze współrzędnych).
- **DXCC** — prefiksy polskie + popularne kraje + okręgi wywoławcze SP1–SP9.
- **Emisje** — CW, SSB, FM, AM, RTTY, PSK31, FT8/FT4, JS8, VARA, DMR, D-STAR, C4FM.
- **Programy dyplomowe** — SOTA, POTA, IOTA, WWFF, WCA, WWB, DXCC, WAS, WAZ, WAC.
- **QRZ.com i dzienniki łączności** — pełny przewodnik: rejestracja, biografia, logbook,
  XML API, porównanie 12 loggerów, LoTW/eQSL/ClubLog, ADIF, Cabrillo.
- **Sprzęt dla początkujących** — od Baofeng UV-5R po Icom IC-7300 + anteny.
- **BHP** — napięcia, prąd RF, burze, praca na wysokości.
- **Słownik radioamatora** — 40 pojęć: rig, paddle, SWR, balun, pile-up, split…
- **Kluby krótkofalarskie** w Polsce — PZK + 11 klubów z głównych miast.
- **Historia** krótkofalarstwa w Polsce (1898 – dziś).

### Narzędzia interaktywne
- **Kalkulator długości dipola** — `L = (c / 2f) × k ≈ 150 / f × k`.
- **Konwerter Locator ↔ lat/lon** (Maidenhead 2–8 znaków).
- **Azymut i odległość** między dwoma lokatorami (haversine; azymut powrotny = bearing DX→Ty).
- **Znajdź pasmo** — częstotliwość → służba, segment IARU, CB/PMR/SRD/marine/airband.
- **SWR** — z impedancji rezystancyjnej lub z mocy padającej/odbitej.
- **Shift przemiennika** — 2 m −600 kHz, 70 cm −7.6 MHz.
- **Wyszukiwarka globalna** — kody Q, fonetyczny, CW, słownik, loggery, pasma, FT8, nasłuch, miasta.
- **Filtry kategorii** kodów Q (QR/QS/QT/QU/skróty).
- **Click-to-copy** — kliknij dowolną częstotliwość, kopiuje się do schowka.

### PWA / UX
- **Działa offline** — service worker cache'uje statykę.
- **Instalowalna** — „Dodaj do ekranu głównego" na mobile.
- **Tryb drukowania** — `Ctrl+P` generuje ściągę A4 nadającą się do nadruku.
- **Dark mode** z akcentami kolorystycznymi per pasmo.
- **Responsywna** — działa na telefonie, tablecie, laptopie.
- **Dostępność** — semantyczny HTML, widoczne focus state, kontrast WCAG.
- **SEO** — Open Graph, Twitter Card, JSON-LD (Schema.org).

## Struktura plików

```
ham_radio/
├── index.html                  # page structure and copy
├── styles.css                  # dark theme, print, responsive
├── script.js                   # UI, calculators, search
├── freq-catalog.js             # IARU / CEPT / ITU frequency catalog
├── sw.js                       # service worker (PWA)
├── manifest.json               # PWA manifest
├── favicon.svg                 # icon
├── robots.txt
├── sitemap.xml
├── CONTRIBUTING.md
├── README.md
└── .github/
```

## Uruchomienie lokalne

### Najprościej

Kliknij dwukrotnie `index.html`. Wszystko działa z `file://` (service worker działa
tylko z HTTP, ale strona jako taka — tak).

### Z lokalnym serwerem (zalecane, włącza PWA)

```powershell
cd C:\Users\dawibrze\Downloads\cursorAI\ham_radio\www
python -m http.server 8080
```

Otwórz <http://localhost:8080>.

Alternatywnie Node:

```powershell
npx --yes serve -l 8080 .
```

## Deploy na GitHub Pages

1. Wrzuć repo na GitHub:
   ```powershell
   cd C:\Users\dawibrze\Downloads\cursorAI\ham_radio\www
   git init
   git add .
   git commit -m "Kompendium krótkofalarskie"
   git branch -M main
   git remote add origin https://github.com/<login>/ham-radio.git
   git push -u origin main
   ```
2. W repo: **Settings → Pages → Source: GitHub Actions** (workflow `deploy.yml`
   zrobi resztę) lub **Deploy from a branch → main / root**.
3. Po minucie strona pod `https://<login>.github.io/ham-radio/`.

## Przemienniki

- https://przemienniki.net/
- https://mapy73.pl/
- https://www.repeaterbook.com/
- https://brandmeister.network/

## Uwagi

- Dane mają charakter **informacyjny / edukacyjny**. W razie wątpliwości regulacyjnych
  sprawdzaj aktualne dokumenty **UKE**, **PZK** i **IARU Region 1**.
- W nagłych wypadkach dzwoń pod **112** — pasma amatorskie są uzupełnieniem.

## Licencja

Projekt edukacyjny — używaj swobodnie. Uznanie autorstwa mile widziane.

73!
