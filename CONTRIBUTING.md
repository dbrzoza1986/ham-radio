# Jak pomóc w rozwoju strony

Dzięki za zainteresowanie! Ta strona jest projektem edukacyjnym — każda poprawka,
nawet drobna (nowy klub, zaktualizowana częstotliwość, literówka), jest mile widziana.

## Co możesz zgłaszać

- **Nowy klub krótkofalarski** — dopisz do sekcji „Kluby" w `index.html`.
- **Błędna lub nieaktualna częstotliwość** — np. zmiana shiftu przemiennika, nowe CTCSS.
- **Nowe kody Q / skróty CW** — dopisz do tablic w `script.js`.
- **Nowy locator miasta** / poprawka w tabelach DXCC.
- **Literówka, niezrozumiały opis**.
- **Nowa propozycja funkcjonalności** — otwórz issue.

## Sposób wnoszenia zmian

### Opcja A — Issue (najłatwiej)

1. Wejdź w zakładkę **Issues** i wybierz szablon:
   - *Dodaj klub krótkofalarski*
   - *Błąd / nieaktualne dane*
   - *Propozycja nowej funkcji*
2. Wypełnij formularz → **Submit**.

### Opcja B — Pull request

1. Fork repo → edytuj pliki → `git commit -m "opis"` → `git push`.
2. Otwórz **Pull request** do gałęzi `main`.
3. Opisz zmiany w paru zdaniach.
4. Poczekaj na review — zmiany są deploy'owane automatycznie po merge.

## Konwencje

- **Strona jest statyczna** (HTML + CSS + JS, bez zależności). Nie dodawaj biblioteki/frameworków.
- **Dane trzymaj w tablicach w `script.js`** — nie w statycznym HTML (żeby dało się filtrować).
- **Polskie znaki** — używaj UTF-8, nie html entities.
- **Cudzysłowy** — preferuj polskie „ " wewnątrz tekstu, a apostrofy `'...'` jako delimitery łańcuchów JS (żeby uniknąć konfliktu).
- **Commit message** po polsku lub po angielsku — byle zwięźle.

## Plik po pliku

- `index.html` — struktura i cała treść merytoryczna.
- `styles.css` — motyw, responsywność.
- `script.js` — dane (kody Q, fonetyczny, CW, loggery, słownik) + logika narzędzi.
- `sw.js` — service worker (PWA / offline).
- `manifest.json` — manifest PWA.
- `favicon.svg` — ikona.
- `.github/workflows/` — CI (deploy, walidacja HTML).

## Kontakt

73 de SP — dobrej łączności!
