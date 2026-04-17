/* =========================================
   Krótkofalarstwo — skrypt strony
   - Tabela kodów Q (dane + filtr)
   - Menu mobilne
   - Aktualny rok w stopce
   ========================================= */

const Q_CODES = [
    { code: 'QRA', q: 'Jaki jest Twój znak (nazwa stacji)?',                                a: 'Mój znak (nazwa stacji) to…' },
    { code: 'QRB', q: 'W jakiej odległości ode mnie jesteś?',                               a: 'Odległość wynosi… km.' },
    { code: 'QRG', q: 'Jaka jest moja dokładna częstotliwość?',                             a: 'Twoja dokładna częstotliwość to… kHz/MHz.' },
    { code: 'QRH', q: 'Czy moja częstotliwość się zmienia?',                                a: 'Twoja częstotliwość się zmienia / dryfuje.' },
    { code: 'QRI', q: 'Jaki jest ton mojego sygnału?',                                      a: 'Ton Twojego sygnału jest (1 – czysty, 2 – zmienny, 3 – zły).' },
    { code: 'QRK', q: 'Jaka jest zrozumiałość moich sygnałów?',                             a: 'Zrozumiałość Twoich sygnałów wynosi … (1–5).' },
    { code: 'QRL', q: 'Czy jesteś zajęty? / Czy częstotliwość jest zajęta?',                a: 'Jestem zajęty. Proszę nie przeszkadzać.' },
    { code: 'QRM', q: 'Czy masz zakłócenia (od innych stacji)?',                            a: 'Mam zakłócenia QRM … (1 – brak, 5 – bardzo silne).' },
    { code: 'QRN', q: 'Czy przeszkadzają Ci zakłócenia atmosferyczne?',                     a: 'Mam zakłócenia atmosferyczne (QRN).' },
    { code: 'QRO', q: 'Czy mam zwiększyć moc nadawania?',                                   a: 'Zwiększ moc nadawania (duża moc).' },
    { code: 'QRP', q: 'Czy mam zmniejszyć moc nadawania?',                                  a: 'Zmniejsz moc nadawania (mała moc, ≤ 5 W).' },
    { code: 'QRQ', q: 'Czy mam nadawać szybciej?',                                          a: 'Nadawaj szybciej (… znaków na minutę).' },
    { code: 'QRS', q: 'Czy mam nadawać wolniej?',                                           a: 'Nadawaj wolniej.' },
    { code: 'QRT', q: 'Czy mam przerwać nadawanie?',                                        a: 'Zaprzestań nadawania (koniec pracy).' },
    { code: 'QRU', q: 'Czy masz coś dla mnie?',                                             a: 'Nie mam nic dla Ciebie.' },
    { code: 'QRV', q: 'Czy jesteś gotowy?',                                                 a: 'Jestem gotowy (gotów do pracy).' },
    { code: 'QRX', q: 'Kiedy mnie ponownie wywołasz?',                                      a: 'Wywołam Cię ponownie o… (czekaj na mnie).' },
    { code: 'QRZ', q: 'Kto mnie wywołuje?',                                                 a: 'Wywołuje Cię stacja… (lub: kto mnie woła?).' },
    { code: 'QSA', q: 'Jaka jest siła moich sygnałów?',                                     a: 'Siła Twoich sygnałów wynosi … (1–5).' },
    { code: 'QSB', q: 'Czy moje sygnały zanikają (fading)?',                                a: 'Twoje sygnały zanikają (QSB).' },
    { code: 'QSD', q: 'Czy moja manipulacja jest prawidłowa?',                              a: 'Twoja manipulacja jest nieprawidłowa.' },
    { code: 'QSK', q: 'Czy możesz słyszeć mnie między swoimi sygnałami?',                   a: 'Mogę Cię słyszeć między moimi znakami (tryb break-in).' },
    { code: 'QSL', q: 'Czy potwierdzisz odbiór?',                                           a: 'Potwierdzam odbiór (QSL). Karta QSL zostanie wysłana.' },
    { code: 'QSO', q: 'Czy możesz się komunikować z… bezpośrednio?',                        a: 'Łączność / rozmowa z daną stacją.' },
    { code: 'QSP', q: 'Czy przekażesz wiadomość do…?',                                      a: 'Przekażę wiadomość (retransmisja).' },
    { code: 'QST', q: 'Wiadomość ogólna dla wszystkich.',                                   a: 'Uwaga, wiadomość dla wszystkich radioamatorów.' },
    { code: 'QSX', q: 'Czy będziesz słuchać stacji… na częstotliwości…?',                   a: 'Słucham stacji… na częstotliwości… kHz.' },
    { code: 'QSY', q: 'Czy mam zmienić częstotliwość?',                                     a: 'Zmień częstotliwość na… kHz/MHz.' },
    { code: 'QSZ', q: 'Czy mam powtarzać każde słowo?',                                     a: 'Powtarzaj każde słowo dwa razy (lub więcej).' },
    { code: 'QTC', q: 'Ile masz dla mnie depesz?',                                          a: 'Mam dla Ciebie… depesz.' },
    { code: 'QTH', q: 'Jaka jest Twoja pozycja / lokalizacja?',                             a: 'Moja pozycja / QTH to…' },
    { code: 'QTR', q: 'Która jest godzina?',                                                a: 'Jest godzina… UTC.' },
    { code: 'QTX', q: 'Czy utrzymasz stację otwartą dla dalszej łączności?',                a: 'Utrzymam stację otwartą dla Ciebie do godz…' },
    { code: 'QUA', q: 'Czy masz wiadomości o…?',                                            a: 'Mam wiadomość o… (stacji).' },
    { code: 'QUM', q: 'Czy można wznowić pracę normalną?',                                  a: 'Pracę można wznowić normalnie.' },

    // Skróty i pozdrowienia (nieformalne, często używane)
    { code: '73',  q: '(nie stawia się znaku zapytania)',                                   a: 'Pozdrowienia / serdeczności między operatorami.' },
    { code: '88',  q: '(nie stawia się znaku zapytania)',                                   a: 'Uściski — tradycyjnie kierowane do operatorek.' },
    { code: '55',  q: '(nieformalne)',                                                      a: 'Powodzenia (rzadziej używane).' },
    { code: '51',  q: '(nieformalne)',                                                      a: 'Pozdrowienia — używane w niektórych krajach.' },
    { code: 'CQ',  q: 'Wywołanie ogólne',                                                   a: '„Wywołuję wszystkich” — zaproszenie do łączności.' },
    { code: 'DX',  q: 'Dalekie łączności',                                                  a: 'Stacja DX-owa (odległa, rzadka).' },
    { code: 'OM',  q: 'Old Man',                                                            a: 'Starszy kolega, operator (zwrot koleżeński).' },
    { code: 'YL',  q: 'Young Lady',                                                         a: 'Operatorka.' },
    { code: 'XYL', q: 'Ex-YL',                                                              a: 'Małżonka operatora (żona krótkofalowca).' },
    { code: 'RST', q: 'System raportu',                                                     a: 'Readability / Signal strength / Tone (np. 599).' },
    { code: 'DE',  q: '„od” (z francuskiego)',                                              a: '„De” — „od” — używane przed własnym znakiem.' },
    { code: 'K',   q: 'End of message',                                                     a: 'Koniec przekazu — odbiór, zapraszam do odpowiedzi.' },
    { code: 'KN',  q: 'End — only you',                                                     a: 'Koniec — odpowiada tylko wywołana stacja.' },
    { code: 'SK',  q: 'Silent Key / Stop',                                                  a: 'Koniec łączności / zmarły krótkofalowiec (kontekst).' },
    { code: 'BK',  q: 'Break',                                                              a: 'Wtrącam się / przerwa.' },
    { code: 'AR',  q: 'End of transmission',                                                a: 'Koniec transmisji.' }
];

document.addEventListener('DOMContentLoaded', () => {
    initYear();
    initNav();
    renderQCodes();
    initQSearch();
});

/* ---------- rok w stopce ---------- */
function initYear() {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
}

/* ---------- menu mobilne ---------- */
function initNav() {
    const toggle = document.querySelector('.nav-toggle');
    const list = document.getElementById('nav-list');
    if (!toggle || !list) return;

    toggle.addEventListener('click', () => {
        const open = list.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
    });

    list.querySelectorAll('a').forEach(a =>
        a.addEventListener('click', () => {
            list.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        })
    );
}

/* ---------- tabela kodów Q ---------- */
function renderQCodes(filter = '') {
    const body = document.getElementById('qtable-body');
    const count = document.getElementById('qcount');
    const total = document.getElementById('qtotal');
    if (!body) return;

    const term = filter.trim().toLowerCase();
    const filtered = term
        ? Q_CODES.filter(
              row =>
                  row.code.toLowerCase().includes(term) ||
                  row.q.toLowerCase().includes(term) ||
                  row.a.toLowerCase().includes(term)
          )
        : Q_CODES;

    if (!filtered.length) {
        body.innerHTML = `
            <tr>
                <td colspan="3" style="text-align:center; padding:1.5rem; color: var(--text-muted);">
                    Brak wyników dla „${escapeHTML(filter)}”. Spróbuj innej frazy.
                </td>
            </tr>`;
    } else {
        body.innerHTML = filtered
            .map(
                row => `
                <tr>
                    <td>${escapeHTML(row.code)}</td>
                    <td>${escapeHTML(row.q)}</td>
                    <td>${escapeHTML(row.a)}</td>
                </tr>`
            )
            .join('');
    }

    if (count) count.textContent = filtered.length;
    if (total) total.textContent = Q_CODES.length;
}

function initQSearch() {
    const input = document.getElementById('qsearch');
    if (!input) return;
    let t;
    input.addEventListener('input', e => {
        clearTimeout(t);
        t = setTimeout(() => renderQCodes(e.target.value), 80);
    });
}

/* ---------- util ---------- */
function escapeHTML(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
