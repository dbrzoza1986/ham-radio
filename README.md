# Krótkofalarstwo — lokalna strona informacyjna

Statyczna strona internetowa (HTML + CSS + JS, bez żadnych zależności) z informacjami
o krótkofalarstwie: **kody Q**, **pasma KF / VHF / UHF**, **najpopularniejsze częstotliwości
w Polsce** (w tym alarmowe i wywołanie ogólne) oraz **kluby krótkofalarskie**.

## Struktura plików

```
ham_radio/www/
├── index.html     # szkielet strony i cała treść merytoryczna
├── styles.css     # style (ciemny motyw, responsywny, akcenty kolorystyczne per pasmo)
├── script.js      # dane kodów Q + filtr wyszukiwania + menu mobilne
└── README.md      # ten plik
```

## Jak uruchomić lokalnie (Windows / PowerShell)

### Opcja 1 — Otwórz plik w przeglądarce (najprościej)

Kliknij dwukrotnie plik `index.html`, albo z PowerShell:

```powershell
Start-Process "C:\Users\dawibrze\Downloads\cursorAI\ham_radio\www\index.html"
```

Strona działa w pełni z `file://` — bez serwera. JS nie ładuje niczego zdalnie.

### Opcja 2 — Lokalny serwer HTTP (zalecane)

Dzięki serwerowi masz „prawdziwe" adresy `http://localhost` i aktywne URL-e.

#### Python (wbudowany, jeśli masz Pythona)

```powershell
cd C:\Users\dawibrze\Downloads\cursorAI\ham_radio\www
python -m http.server 8080
```

Otwórz: <http://localhost:8080>

#### Node.js (jeżeli używasz Node)

```powershell
cd C:\Users\dawibrze\Downloads\cursorAI\ham_radio\www
npx --yes serve -l 8080 .
```

Otwórz: <http://localhost:8080>

#### PowerShell — minimalistyczny serwer (bez zależności)

```powershell
$root = "C:\Users\dawibrze\Downloads\cursorAI\ham_radio\www"
$port = 8080
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Serwer działa na http://localhost:$port"
try {
    while ($listener.IsListening) {
        $ctx = $listener.GetContext()
        $rel = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath.TrimStart('/'))
        if (-not $rel) { $rel = "index.html" }
        $path = Join-Path $root $rel
        if (Test-Path $path -PathType Leaf) {
            $bytes = [IO.File]::ReadAllBytes($path)
            switch -Regex ($path) {
                '\.html?$' { $ctx.Response.ContentType = "text/html; charset=utf-8" }
                '\.css$'   { $ctx.Response.ContentType = "text/css; charset=utf-8" }
                '\.js$'    { $ctx.Response.ContentType = "application/javascript; charset=utf-8" }
                default    { $ctx.Response.ContentType = "application/octet-stream" }
            }
            $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $ctx.Response.StatusCode = 404
        }
        $ctx.Response.Close()
    }
} finally { $listener.Stop() }
```

Zatrzymasz go kombinacją **Ctrl + C**.

## Co znajdziesz na stronie

- **Hero** — szybkie skróty i statystyki.
- **Kody Q** — ponad 50 pozycji (QRA…QUM + skróty typu 73/88, CQ, DX, YL, RST).
  - Wyszukiwarka filtrująca na żywo.
- **Pasma KF / VHF / UHF** — tabele zakresów zgodne z IARU Region 1.
- **Częstotliwości w Polsce**:
  - wywołanie ogólne (FM 145.500 / 433.500, SSB 3.760 / 7.090 / 14.285),
  - **częstotliwości alarmowe IARU R1** (3.760, 7.110, 14.300, 18.160, 21.360) oraz CB K9,
  - simpleks 2 m / 70 cm, przemienniki (shift −600 kHz / −7.6 MHz),
  - sieci cyfrowe (DMR BrandMeister TG 260, D-STAR, Echolink),
  - CB, PMR446, mody cyfrowe (FT8 na każdym paśmie).
- **Kluby krótkofalarskie** — PZK + 11 klubów z głównych miast Polski.

## Uwagi

- Dane mają charakter **informacyjny / edukacyjny**. W razie wątpliwości regulacyjnych
  sprawdzaj aktualne dokumenty **UKE**, **PZK** i **IARU Region 1**.
- W nagłych wypadkach zawsze dzwoń pod **112** — pasma amatorskie są uzupełnieniem.

73 de SP!
