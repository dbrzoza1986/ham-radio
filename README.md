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
- **Pasma KF / VHF / UHF** — tabele zakresów zgodne z IARU Region 1 + pasma WARC.
- **Częstotliwości w Polsce** — wywoławcze, alarmowe (IARU R1 Emergency CoA), simpleks,
  przemienniki, sieci cyfrowe (DMR TG 260, D-STAR, Echolink), CB, PMR446, FT8.
- **Locator Maidenhead** — budowa + tabela polskich miast.
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
- 📐 **Kalkulator długości dipola** — `L = 142,5 / f × k`.
- 📍 **Konwerter Locator ↔ lat/lon** (Maidenhead w obie strony).
- 🧭 **Azymut i odległość** między dwoma lokatorami (haversine).
- 🔍 **Znajdź pasmo** — wpisz częstotliwość → pasmo, segment, emisje, uwagi.
- 🔎 **Wyszukiwarka globalna** — przeszukuje kody Q, fonetyczny, CW, słownik, loggery, częstotliwości.
- 🏷️ **Filtry kategorii** kodów Q (QR/QS/QT/QU/skróty).
- 📋 **Click-to-copy** — kliknij dowolną częstotliwość, kopiuje się do schowka.

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
ham_radio/www/
├── index.html                  # cała strona (wszystkie sekcje)
├── styles.css                  # style (dark mode, print, responsywność)
├── script.js                   # dane + narzędzia + wyszukiwarka
├── sw.js                       # service worker (PWA)
├── manifest.json               # manifest PWA
├── favicon.svg                 # ikona
├── robots.txt                  # reguły dla crawlerów
├── sitemap.xml                 # mapa strony
├── CONTRIBUTING.md             # jak współtworzyć
├── README.md                   # ten plik
└── .github/
    ├── workflows/
    │   ├── deploy.yml          # auto-deploy na GitHub Pages
    │   └── validate.yml        # walidacja HTML + JS syntax
    └── ISSUE_TEMPLATE/
        ├── klub.yml            # szablon: dodaj klub
        ├── blad.yml            # szablon: błąd/nieaktualne dane
        └── feature.yml         # szablon: propozycja funkcji
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
