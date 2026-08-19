/* =========================================
   Krótkofalarstwo — skrypt strony
   - Kody Q (tabela + filtr)
   - Alfabet fonetyczny
   - Skróty CW
   - Porównanie loggerów
   - Słownik radioamatora
   - Menu mobilne + rok w stopce
   ========================================= */

/* ---------- KODY Q ---------- */
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

/* ---------- ALFABET FONETYCZNY ---------- */
const PHONETIC = [
    ['A','Alpha','AL-FAH','Adam'], ['B','Bravo','BRAH-VOH','Barbara'],
    ['C','Charlie','CHAR-LEE','Celina'], ['D','Delta','DELL-TAH','Dorota'],
    ['E','Echo','ECK-OH','Ewa'], ['F','Foxtrot','FOKS-TROT','Franciszek'],
    ['G','Golf','GOLF','Grażyna'], ['H','Hotel','HO-TELL','Halina'],
    ['I','India','IN-DEE-AH','Irena'], ['J','Juliet','JEW-LEE-ETT','Jadwiga'],
    ['K','Kilo','KEY-LOH','Karol'], ['L','Lima','LEE-MAH','Ludwik'],
    ['M','Mike','MIKE','Maria'], ['N','November','NO-VEM-BER','Natalia'],
    ['O','Oscar','OSS-CAH','Olga'], ['P','Papa','PAH-PAH','Paweł'],
    ['Q','Quebec','KEH-BECK','Kubuś'], ['R','Romeo','ROW-ME-OH','Roman'],
    ['S','Sierra','SEE-AIR-RAH','Stefan'], ['T','Tango','TANG-GO','Tadeusz'],
    ['U','Uniform','YOU-NEE-FORM','Urszula'], ['V','Victor','VIK-TAH','Violetta'],
    ['W','Whiskey','WISS-KEY','Wacław'], ['X','X-ray','ECKS-RAY','Xawery'],
    ['Y','Yankee','YANG-KEY','Ypsylon'], ['Z','Zulu','ZOO-LOO','Zofia'],
    ['0','Zero','ZEE-ROH','Zero'], ['1','One','WUN','Jeden'],
    ['2','Two','TOO','Dwa'], ['3','Three','TREE','Trzy'],
    ['4','Four','FOW-ER','Cztery'], ['5','Five','FIFE','Pięć'],
    ['6','Six','SIX','Sześć'], ['7','Seven','SEV-EN','Siedem'],
    ['8','Eight','AIT','Osiem'], ['9','Niner','NIN-ER','Dziewięć']
];

/* ---------- SKRÓTY CW ---------- */
const CW_ABBR = [
    ['AGN','again — jeszcze raz'],
    ['ANT','antenna — antena'],
    ['AR','end of transmission — koniec transmisji'],
    ['B4','before — wcześniej'],
    ['BK','break — wtrącam się'],
    ['CFM','confirm — potwierdzam'],
    ['CPY','copy — odbieram'],
    ['CQ','wywołanie ogólne'],
    ['CUL','see you later — do usłyszenia'],
    ['DE','from / od (przed własnym znakiem)'],
    ['DX','distance / distant station — DX'],
    ['ES','and — i'],
    ['FB','fine business — bardzo dobrze'],
    ['GA','good afternoon — dzień dobry (po południu)'],
    ['GB','goodbye — żegnaj'],
    ['GE','good evening — dobry wieczór'],
    ['GL','good luck — powodzenia'],
    ['GM','good morning — dzień dobry (rano)'],
    ['GN','good night — dobranoc'],
    ['HI','śmiech (CW „hahaha”)'],
    ['HR','here — tutaj'],
    ['HRD','heard — słyszałem'],
    ['K','over — odbiór'],
    ['KN','over to you only — tylko do Ciebie'],
    ['NR','number — numer'],
    ['OB','old boy — stary druhu'],
    ['OM','old man — kolega operator'],
    ['OP','operator — operator'],
    ['PSE','please — proszę'],
    ['PWR','power — moc'],
    ['R','roger / received — zrozumiano'],
    ['RIG','radio / stacja'],
    ['RPT','repeat — powtórz'],
    ['RST','raport sygnału'],
    ['SK','silent key — koniec QSO / śp.'],
    ['TKS','thanks — dzięki'],
    ['TNX','thanks — dzięki'],
    ['TU','thank you — dziękuję'],
    ['UR','your / you are — twój / jesteś'],
    ['VY','very — bardzo'],
    ['WX','weather — pogoda'],
    ['XYL','ex-YL (żona)'],
    ['YL','young lady — operatorka'],
    ['73','pozdrowienia'],
    ['88','uściski (do YL)']
];

/* ---------- LOGGERY ---------- */
const LOGGERS = [
    { name:'Log4OM',      os:'Windows',        lotw:'✅', eqsl:'✅', qrz:'✅', clublog:'✅', cat:'✅', type:'Ogólny, darmowy' },
    { name:'N1MM+',       os:'Windows',        lotw:'✅', eqsl:'✅', qrz:'✅', clublog:'✅', cat:'✅', type:'Contest, darmowy' },
    { name:'DXLab Suite', os:'Windows',        lotw:'✅', eqsl:'✅', qrz:'✅', clublog:'✅', cat:'✅', type:'Zestaw DX, darmowy' },
    { name:'Ham Radio Deluxe', os:'Windows',   lotw:'✅', eqsl:'✅', qrz:'✅', clublog:'✅', cat:'✅', type:'Komercyjny' },
    { name:'HAMRS',       os:'Win/Mac/Linux',  lotw:'✅ (ADIF)', eqsl:'—', qrz:'✅', clublog:'—', cat:'—', type:'Prosty, terenowy' },
    { name:'CQRLOG',      os:'Linux',          lotw:'✅', eqsl:'✅', qrz:'✅', clublog:'✅', cat:'✅', type:'Linux, darmowy' },
    { name:'MacLoggerDX', os:'macOS',          lotw:'✅', eqsl:'✅', qrz:'✅', clublog:'✅', cat:'✅', type:'macOS, komercyjny' },
    { name:'WSJT-X',      os:'Win/Mac/Linux',  lotw:'✅ (ADIF)', eqsl:'—', qrz:'ADIF', clublog:'—', cat:'✅', type:'FT8/FT4/JT' },
    { name:'JTDX',        os:'Win/Mac/Linux',  lotw:'ADIF', eqsl:'—', qrz:'ADIF', clublog:'—', cat:'✅', type:'FT8 (fork)' },
    { name:'QRZ Logbook', os:'WWW',            lotw:'✅', eqsl:'✅', qrz:'✅', clublog:'✅', cat:'—', type:'Online' },
    { name:'Cloudlog',    os:'WWW (self-host)',lotw:'✅', eqsl:'✅', qrz:'✅', clublog:'✅', cat:'—', type:'Self-hosted PHP' },
    { name:'SWISSLOG',    os:'Windows',        lotw:'✅', eqsl:'✅', qrz:'✅', clublog:'✅', cat:'✅', type:'Komercyjny' }
];

/* ---------- SŁOWNIK RADIOAMATORA ---------- */
const GLOSSARY = [
    ['Rig', 'Radiostacja (transceiver) — główne urządzenie operatora.'],
    ['TRX / Transceiver', 'Nadajnik + odbiornik w jednym urządzeniu.'],
    ['PA (Power Amplifier)', 'Wzmacniacz końcowy mocy, np. 1 kW lampowy.'],
    ['Paddle', 'Klucz elektroniczny z dwiema dźwigniami (iambic) do CW.'],
    ['Bug', 'Półautomatyczny klucz mechaniczny (Vibroplex).'],
    ['Keyer', 'Elektroniczny kodowalnik Morse’a, generuje kropki/kreski.'],
    ['Tuner (ATU)', 'Dopasowanie impedancji anteny — ręczne lub automatyczne.'],
    ['Balun', 'Transformator symetrii (balanced-unbalanced), np. 1:1, 4:1.'],
    ['Unun', 'Transformator impedancji asymetryczny (np. 9:1 dla EFHW).'],
    ['SWR (WFS)', 'Współczynnik fali stojącej — im bliżej 1:1 tym lepiej.'],
    ['Dummy Load', 'Sztuczne obciążenie 50 Ω — do testów bez nadawania do anteny.'],
    ['Pile-up', 'Tłok stacji wywołujących rzadką (DX) — wyzwanie operatorskie.'],
    ['Split', 'Nadawanie i odbiór na różnych częstotliwościach — typowe dla pile-up DX.'],
    ['QRP', 'Praca małą mocą (≤ 5 W CW / 10 W SSB).'],
    ['QRO', 'Praca dużą mocą (pełna legalna, np. 1 kW).'],
    ['CQ DX', 'Wywołanie ukierunkowane na stacje dalekie.'],
    ['Working split', 'Praca w trybie split — częsta informacja w DX („UP 5”).'],
    ['UP / DOWN', 'Odbiór powyżej / poniżej nominalnej częstotliwości (split).'],
    ['Locator', 'Zapis pozycji w systemie Maidenhead, np. JO91.'],
    ['Grid', 'Kwadrat lokatora — 2°×1° (też: „squares”).'],
    ['Pile-up technika', 'Zasady pracy z tłokiem: słuchaj, nadawaj tylko gdy DX wywołuje.'],
    ['DX Cluster', 'System spotów (kto, gdzie, kiedy) w czasie rzeczywistym.'],
    ['Spot', 'Ogłoszenie w klastrze, że dana stacja jest „na paśmie”.'],
    ['Pile', 'Skrót od pile-up.'],
    ['Lid', 'Marny operator nieznający zasad (pejoratywnie).'],
    ['Elmer', 'Mentor, bardziej doświadczony krótkofalowiec pomagający nowicjuszom.'],
    ['HI HI', 'Śmiech na CW (brzmi jak szybkie di-di-di-di-di-dit).'],
    ['EME', 'Earth-Moon-Earth — łączności odbiciowe od Księżyca.'],
    ['MS', 'Meteor scatter — odbicie od śladów meteorów.'],
    ['TEP / Es / F2', 'Typy propagacji jonosferycznej.'],
    ['Tropo', 'Propagacja troposferyczna (VHF/UHF).'],
    ['Contest', 'Zawody — rywalizacja w liczbie łączności w danym czasie.'],
    ['Sprint', 'Krótki kontest, zwykle 1–4 h.'],
    ['Sked', 'Umówiona łączność („schedule”).'],
    ['Net', 'Regularne spotkanie na paśmie prowadzone przez „Net Control”.'],
    ['NCS', 'Net Control Station — operator prowadzący net.'],
    ['APRS', 'Automatic Packet Reporting System — pozycje + wiadomości na 144.800.'],
    ['EchoLink', 'Sieć VoIP łącząca krótkofalowców i przemienniki.'],
    ['Gateway', 'Brama pomiędzy radiem a Internetem (IRLP, EchoLink, DMR...).']
];

/* ============ INIT ============ */
document.addEventListener('DOMContentLoaded', () => {
    initYear();
    initNav();
    renderQCodes();
    initQSearch();
    initQFilters();
    renderPhonetic();
    initSpellingTool();
    renderCWAbbr();
    renderLoggers();
    renderGlossary();
    renderBandTables();
    renderCityLocators();
    renderFt8List();
    renderListenGuide();
    initHeroStats();
    initDipoleCalc();
    initWavelengthCalc();
    initLocatorConv();
    initAzimuth();
    initFindBand();
    initSwrCalc();
    initRepeaterShift();
    initClickToCopy();
    initGlobalSearch();
    initBackToTop();
});

function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    const onScroll = () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    onScroll();
}

function initYear() {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
}

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
            list.querySelectorAll('details.nav-group').forEach((d) => { d.open = false; });
        })
    );

    list.querySelectorAll('details.nav-group').forEach((details) => {
        details.addEventListener('toggle', () => {
            if (!details.open) return;
            list.querySelectorAll('details.nav-group').forEach((other) => {
                if (other !== details) other.open = false;
            });
        });
    });
}

/* ---------- KODY Q ---------- */
let Q_CATEGORY = 'all'; // all | QR | QS | QT | QU | misc

function renderQCodes(filter = '') {
    const body = document.getElementById('qtable-body');
    const count = document.getElementById('qcount');
    const total = document.getElementById('qtotal');
    if (!body) return;

    const term = filter.trim().toLowerCase();
    const base = Q_CODES.filter(r => matchQCategory(r.code, Q_CATEGORY));
    const filtered = term
        ? base.filter(r =>
              r.code.toLowerCase().includes(term) ||
              r.q.toLowerCase().includes(term) ||
              r.a.toLowerCase().includes(term)
          )
        : base;

    if (!filtered.length) {
        body.innerHTML = `
            <tr><td colspan="3" style="text-align:center;padding:1.5rem;color:var(--text-muted)">
                Brak wyników dla „${escapeHTML(filter)}”. Spróbuj innej frazy.
            </td></tr>`;
    } else {
        body.innerHTML = filtered
            .map(r => `<tr>
                <td>${escapeHTML(r.code)}</td>
                <td>${escapeHTML(r.q)}</td>
                <td>${escapeHTML(r.a)}</td>
            </tr>`).join('');
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

function matchQCategory(code, cat) {
    if (cat === 'all') return true;
    if (cat === 'misc') return !code.startsWith('Q');
    return code.startsWith(cat);
}

function initQFilters() {
    const btns = document.querySelectorAll('.chip-filters [data-qfilter]');
    if (!btns.length) return;
    btns.forEach(b => b.addEventListener('click', () => {
        btns.forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        Q_CATEGORY = b.dataset.qfilter;
        const input = document.getElementById('qsearch');
        renderQCodes(input ? input.value : '');
    }));
}

/* ---------- ALFABET FONETYCZNY ---------- */
function renderPhonetic() {
    const body = document.getElementById('phonetic-body');
    if (!body) return;
    body.innerHTML = PHONETIC.map(([l, icao, pron, pl]) => `
        <tr>
            <td style="font-family:var(--font-mono);color:var(--accent);font-weight:700">${l}</td>
            <td><strong>${icao}</strong></td>
            <td class="muted">${pron}</td>
            <td>${pl}</td>
        </tr>`).join('');
}

/* ---------- LITEROWANIE PL / NATO ---------- */
function initSpellingTool() {
    const input = document.getElementById('spell-input');
    const outPL = document.getElementById('spell-pl');
    const outNato = document.getElementById('spell-nato');
    if (!input || !outPL || !outNato) return;

    const map = new Map(PHONETIC.map(([symbol, nato, _pron, pl]) => [
        symbol.toUpperCase(),
        { nato, pl }
    ]));

    const normalizedPolish = {
        'Ą': 'A',
        'Ć': 'C',
        'Ę': 'E',
        'Ł': 'L',
        'Ń': 'N',
        'Ó': 'O',
        'Ś': 'S',
        'Ź': 'Z',
        'Ż': 'Z'
    };

    const spellText = (text) => {
        const natoWords = [];
        const plWords = [];
        for (const rawChar of text.toUpperCase()) {
            if (rawChar === ' ') {
                natoWords.push('/');
                plWords.push('/');
                continue;
            }
            const char = normalizedPolish[rawChar] || rawChar;
            const hit = map.get(char);
            if (!hit) continue;
            natoWords.push(hit.nato);
            plWords.push(hit.pl);
        }
        return {
            nato: natoWords.join(' '),
            pl: plWords.join(' ')
        };
    };

    const update = () => {
        const value = input.value.trim();
        if (!value) {
            outPL.textContent = 'Wpisz tekst powyżej, aby zobaczyć literowanie.';
            outNato.textContent = 'Wpisz tekst powyżej, aby zobaczyć literowanie.';
            outPL.classList.add('muted');
            outNato.classList.add('muted');
            return;
        }
        const spelled = spellText(value);
        outPL.textContent = spelled.pl || 'Brak obsługiwanych znaków.';
        outNato.textContent = spelled.nato || 'Brak obsługiwanych znaków.';
        outPL.classList.toggle('muted', !spelled.pl);
        outNato.classList.toggle('muted', !spelled.nato);
    };

    input.addEventListener('input', update);
    update();
}

/* ---------- SKRÓTY CW ---------- */
function renderCWAbbr() {
    const body = document.getElementById('cw-body');
    if (!body) return;
    body.innerHTML = CW_ABBR.map(([k, v]) => `
        <tr>
            <td style="font-family:var(--font-mono);color:var(--accent);font-weight:700;width:90px">${k}</td>
            <td>${escapeHTML(v)}</td>
        </tr>`).join('');
}

/* ---------- LOGGERY ---------- */
function renderLoggers() {
    const body = document.getElementById('loggers-body');
    if (!body) return;
    body.innerHTML = LOGGERS.map(l => `
        <tr>
            <td><strong>${escapeHTML(l.name)}</strong></td>
            <td class="muted">${escapeHTML(l.os)}</td>
            <td>${l.lotw}</td>
            <td>${l.eqsl}</td>
            <td>${l.qrz}</td>
            <td>${l.clublog}</td>
            <td>${l.cat}</td>
            <td class="muted">${escapeHTML(l.type)}</td>
        </tr>`).join('');
}

/* ---------- SŁOWNIK ---------- */
function renderGlossary() {
    const body = document.getElementById('slownik-body');
    if (!body) return;
    body.innerHTML = GLOSSARY.map(([k, v]) => `
        <tr>
            <td style="font-weight:700;color:var(--accent);white-space:nowrap">${escapeHTML(k)}</td>
            <td>${escapeHTML(v)}</td>
        </tr>`).join('');
}

/* ========================================
   NARZĘDZIA INTERAKTYWNE (sesja 2)
   ======================================== */

/* ---- Kalkulator dipola ---- */
function initDipoleCalc() {
    const f = document.getElementById('dip-freq');
    const k = document.getElementById('dip-k');
    if (!f || !k) return;
    const upd = () => {
        const freq = parseFloat(f.value);
        const kk = parseFloat(k.value);
        if (!isFinite(freq) || freq <= 0 || !isFinite(kk) || kk <= 0) return;
        // Free-space half-wave is c/(2f) ≈ 150/f metres. Typical wire VF/end-effect ≈ 0.95
        // so L = 150/f × k. Do not also use 142.5/f (that already embeds 0.95).
        const C = 299792458;
        const lambda = C / (freq * 1e6);
        const freeHalf = lambda / 2;
        const total = freeHalf * kk;
        const half = total / 2;
        document.getElementById('dip-total').textContent = `${total.toFixed(2)} m`;
        document.getElementById('dip-half').textContent = `${half.toFixed(2)} m`;
        document.getElementById('dip-lambda').textContent = `${lambda.toFixed(2)} m`;
        const freeEl = document.getElementById('dip-free');
        if (freeEl) freeEl.textContent = `${freeHalf.toFixed(2)} m`;
    };
    f.addEventListener('input', upd);
    k.addEventListener('input', upd);
    upd();
}

/* ---- Długość fali (λ = c / f) ---- */
function initWavelengthCalc() {
    const f = document.getElementById('wl-freq');
    const u = document.getElementById('wl-unit');
    if (!f || !u) return;
    const C = 299792458; // m/s
    const upd = () => {
        const v = parseFloat(f.value);
        if (!isFinite(v) || v <= 0) {
            ['wl-full','wl-half','wl-quarter','wl-58'].forEach(id => {
                document.getElementById(id).textContent = '— cm';
            });
            return;
        }
        const mult = u.value === 'kHz' ? 1e3 : u.value === 'GHz' ? 1e9 : 1e6;
        const hz = v * mult;
        const lambdaM = C / hz;
        const lambdaCm = lambdaM * 100;
        const fmt = (cm) => {
            if (cm >= 100000) return `${(cm / 100000).toFixed(3)} km (${cm.toFixed(0)} cm)`;
            if (cm >= 100)    return `${(cm / 100).toFixed(3)} m (${cm.toFixed(1)} cm)`;
            if (cm >= 1)      return `${cm.toFixed(2)} cm`;
            return `${cm.toFixed(3)} cm (${(cm * 10).toFixed(2)} mm)`;
        };
        document.getElementById('wl-full').textContent    = fmt(lambdaCm);
        document.getElementById('wl-half').textContent    = fmt(lambdaCm / 2);
        document.getElementById('wl-quarter').textContent = fmt(lambdaCm / 4);
        document.getElementById('wl-58').textContent      = fmt(lambdaCm * 5 / 8);
    };
    f.addEventListener('input', upd);
    u.addEventListener('change', upd);
    upd();
}

/* ---- Maidenhead ↔ lat/lon ---- */
function locatorToLatLon(loc) {
    const s = String(loc || '').trim().toUpperCase();
    if (!/^[A-R]{2}(\d{2}([A-X]{2}(\d{2})?)?)?$/.test(s)) return null;
    let lon = (s.charCodeAt(0) - 65) * 20 - 180;
    let lat = (s.charCodeAt(1) - 65) * 10 - 90;
    let lonW = 20;
    let latH = 10;
    if (s.length >= 4) {
        lon += parseInt(s[2], 10) * 2;
        lat += parseInt(s[3], 10) * 1;
        lonW = 2;
        latH = 1;
    }
    if (s.length >= 6) {
        lon += (s.charCodeAt(4) - 65) * (2 / 24);
        lat += (s.charCodeAt(5) - 65) * (1 / 24);
        lonW = 2 / 24;
        latH = 1 / 24;
    }
    if (s.length >= 8) {
        lon += parseInt(s[6], 10) * (lonW / 10);
        lat += parseInt(s[7], 10) * (latH / 10);
        lonW /= 10;
        latH /= 10;
    }
    lon += lonW / 2;
    lat += latH / 2;
    return { lat, lon };
}

function latLonToLocator(lat, lon, len = 6) {
    if (!isFinite(lat) || !isFinite(lon)) return '';
    lat = Math.max(-90, Math.min(90, lat));
    lon = ((lon + 180) % 360 + 360) % 360 - 180;
    let adjLon = lon + 180;
    let adjLat = lat + 90;
    const fieldLon = Math.min(17, Math.max(0, Math.floor(adjLon / 20)));
    const fieldLat = Math.min(17, Math.max(0, Math.floor(adjLat / 10)));
    adjLon -= fieldLon * 20;
    adjLat -= fieldLat * 10;
    const sqLon = Math.min(9, Math.max(0, Math.floor(adjLon / 2)));
    const sqLat = Math.min(9, Math.max(0, Math.floor(adjLat / 1)));
    adjLon -= sqLon * 2;
    adjLat -= sqLat * 1;
    const subLon = Math.min(23, Math.max(0, Math.floor(adjLon * 12)));
    const subLat = Math.min(23, Math.max(0, Math.floor(adjLat * 24)));
    adjLon -= subLon / 12;
    adjLat -= subLat / 24;
    const extLon = Math.min(9, Math.max(0, Math.floor(adjLon * 120)));
    const extLat = Math.min(9, Math.max(0, Math.floor(adjLat * 240)));
    let out =
        String.fromCharCode(65 + fieldLon) +
        String.fromCharCode(65 + fieldLat) +
        sqLon + sqLat;
    if (len >= 6) {
        out += String.fromCharCode(97 + subLon) + String.fromCharCode(97 + subLat);
    }
    if (len >= 8) {
        out += String(extLon) + String(extLat);
    }
    return out;
}

function initLocatorConv() {
    const locIn = document.getElementById('loc-input');
    const latIn = document.getElementById('ll-lat');
    const lonIn = document.getElementById('ll-lon');
    if (!locIn || !latIn || !lonIn) return;

    const updLoc = () => {
        const out = locatorToLatLon(locIn.value);
        const el = document.getElementById('loc-latlon');
        if (!out) { el.textContent = locIn.value ? 'Nieprawidłowy locator' : '—'; return; }
        el.textContent = `${out.lat.toFixed(4)}°, ${out.lon.toFixed(4)}°`;
    };
    const updLL = () => {
        const lat = parseFloat(latIn.value);
        const lon = parseFloat(lonIn.value);
        const el = document.getElementById('ll-locator');
        if (!isFinite(lat) || !isFinite(lon)) {
            el.textContent = '—';
            const el8 = document.getElementById('ll-locator8');
            if (el8) el8.textContent = '—';
            return;
        }
        el.textContent = latLonToLocator(lat, lon, 6);
        const el8 = document.getElementById('ll-locator8');
        if (el8) el8.textContent = latLonToLocator(lat, lon, 8);
    };
    locIn.addEventListener('input', updLoc);
    latIn.addEventListener('input', updLL);
    lonIn.addEventListener('input', updLL);
    updLoc();
}

/* ---- Azymut + odległość ---- */
function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const toRad = d => d * Math.PI / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
              Math.sin(dLon / 2) ** 2;
    return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function bearing(lat1, lon1, lat2, lon2) {
    const toRad = d => d * Math.PI / 180;
    const toDeg = r => r * 180 / Math.PI;
    const dLon = toRad(lon2 - lon1);
    const y = Math.sin(dLon) * Math.cos(toRad(lat2));
    const x = Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) -
              Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(dLon);
    return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

function initAzimuth() {
    const a = document.getElementById('az-loc1');
    const b = document.getElementById('az-loc2');
    if (!a || !b) return;
    const upd = () => {
        const p1 = locatorToLatLon(a.value);
        const p2 = locatorToLatLon(b.value);
        const dEl = document.getElementById('az-dist');
        const bEl = document.getElementById('az-bearing');
        const rEl = document.getElementById('az-rev');
        if (!p1 || !p2) { dEl.textContent = '—'; bEl.textContent = '—'; rEl.textContent = '—'; return; }
        const d = haversine(p1.lat, p1.lon, p2.lat, p2.lon);
        const br = bearing(p1.lat, p1.lon, p2.lat, p2.lon);
        const rev = bearing(p2.lat, p2.lon, p1.lat, p1.lon);
        dEl.textContent = `${d.toFixed(0)} km`;
        bEl.textContent = `${br.toFixed(1)}°`;
        rEl.textContent = `${rev.toFixed(1)}°`;
    };
    a.addEventListener('input', upd);
    b.addEventListener('input', upd);
    upd();
}

/* ---- Znajdź pasmo ---- */
function toKHz(value, unit) {
    if (unit === 'kHz') return value;
    if (unit === 'GHz') return value * 1e6;
    return value * 1000; // MHz
}

function extraChannelNote(khz, entry) {
    if (entry.channel === 'cb') {
        const hit = nearestChannel(khz, CB_CHANNELS, 4);
        if (!hit) return '';
        const extra = hit.hint ? ` — ${hit.hint}` : '';
        return `Kanał CEPT ${hit.ch} (${formatKHz(hit.khz)})${extra}.`;
    }
    if (entry.channel === 'pmr') {
        const hit = nearestChannel(khz, PMR_CHANNELS, 4);
        if (!hit) return '';
        return `Kanał analogowy PMR446 ${hit.ch} (${formatKHz(hit.khz)}).`;
    }
    return '';
}

function renderFindBandHits(khz, region) {
    const host = document.getElementById('fb-hits');
    if (!host) return;
    if (!isFinite(khz) || khz <= 0) {
        host.innerHTML = '<p class="muted small">Wpisz częstotliwość.</p>';
        return;
    }
    const hits = lookupFrequencies(khz, region);
    const ft8 = ft8Near(khz);
    if (!hits.length) {
        host.innerHTML = `<div class="fb-hit fb-hit-empty">
            <strong>Brak wpisu w katalogu</strong>
            <p>To nie jest pasmo amatorskie IARU ${escapeHTML(region)} ani żadna z usług z katalogu (CB, PMR446, SRD, morskie, lotnicze, broadcast). Sprawdź jednostkę (kHz vs MHz).</p>
        </div>`;
        return;
    }
    host.innerHTML = hits.map((h) => {
        const kind = h.matchKind;
        const label = KIND_LABELS_PL[kind] || kind;
        const range = formatRangeKHz(h.range[0], h.range[1]);
        const seg = segmentFor(h.entry, khz);
        const ch = extraChannelNote(khz, h.entry);
        const other = h.otherRegions
            ? `Przydział amatorski w ${h.otherRegions.join(', ')} — nie w ${region} / Polsce.`
            : '';
        const ft8Line = ft8 && kind === 'amateur'
            ? `Konwencjonalny dial FT8: ${formatKHz(ft8.khz)} (${ft8.band}, WSJT-X).`
            : '';
        return `<article class="fb-hit kind-${kind}">
            <header>
                <h4>${escapeHTML(h.entry.name)}</h4>
                <span class="chip">${escapeHTML(label)}</span>
            </header>
            <p class="fb-range">${escapeHTML(range)}</p>
            ${seg ? `<p><span class="label">Segment / emisje</span> ${escapeHTML(formatRangeKHz(seg.from, seg.to))} — ${escapeHTML(seg.modes)}</p>` : ''}
            ${ch ? `<p>${escapeHTML(ch)}</p>` : ''}
            ${other ? `<p>${escapeHTML(other)}</p>` : ''}
            ${ft8Line ? `<p>${escapeHTML(ft8Line)}</p>` : ''}
            <p class="muted small">${escapeHTML(h.entry.notes || '')}</p>
        </article>`;
    }).join('');
}

function initFindBand() {
    const f = document.getElementById('fb-freq');
    const u = document.getElementById('fb-unit');
    const r = document.getElementById('fb-region');
    if (!f || !u) return;
    const upd = () => {
        const v = parseFloat(f.value);
        const region = r ? r.value : 'R1';
        if (!isFinite(v) || v <= 0) {
            renderFindBandHits(NaN, region);
            return;
        }
        renderFindBandHits(toKHz(v, u.value), region);
    };
    f.addEventListener('input', upd);
    u.addEventListener('change', upd);
    if (r) r.addEventListener('change', upd);
    upd();
}

function initHeroStats() {
    const q = document.getElementById('hero-q-count');
    const hf = document.getElementById('hero-hf-count');
    if (q) q.textContent = `${Q_CODES.filter((c) => c.code.startsWith('Q')).length}+`;
    if (hf) hf.textContent = String(countAmateurHfR1());
}

function renderBandTables() {
    const groups = [
        { id: 'bands-lfmf-body', groups: ['LF', 'MF'], pasma: 'R1' },
        { id: 'bands-hf-body', groups: ['HF'], pasma: 'R1' },
        { id: 'bands-vhf-body', groups: ['VHF'], pasma: 'R1' },
        { id: 'bands-uhf-body', groups: ['UHF'], pasma: 'R1' },
        { id: 'bands-shf-body', groups: ['SHF'], pasma: 'R1' },
        { id: 'bands-r2-body', groups: null, pasma: 'R2' }
    ];
    groups.forEach(({ id, groups: gset, pasma }) => {
        const body = document.getElementById(id);
        if (!body) return;
        const rows = FREQ_CATALOG.filter((e) => {
            if (e.kind !== 'amateur' || e.pasma !== pasma) return false;
            if (gset && !gset.includes(e.group)) return false;
            return true;
        });
        body.innerHTML = rows.map((e) => {
            const rng = pasma === 'R2'
                ? (e.alloc && (e.alloc.R2 || e.alloc.R1))
                : (e.alloc && (e.alloc.R1 || e.alloc.R2));
            const range = rng ? formatRangeKHz(rng[0], rng[1]) : '—';
            const short = (e.notes || '').split('.')[0] + '.';
            return `<tr><td>${escapeHTML(e.name)}</td><td>${escapeHTML(range)}</td><td>${escapeHTML(short)}</td></tr>`;
        }).join('');
    });
}

function renderCityLocators() {
    const body = document.getElementById('locator-cities-body');
    if (!body || typeof latLonToLocator !== 'function') return;
    body.innerHTML = PL_CITIES.map((c) => {
        const loc6 = latLonToLocator(c.lat, c.lon, 6);
        const loc4 = loc6.slice(0, 4);
        return `<tr><td>${escapeHTML(c.name)}</td><td><code>${escapeHTML(loc4)}</code> / <code>${escapeHTML(loc6)}</code></td></tr>`;
    }).join('');
}

function renderFt8List() {
    const list = document.getElementById('ft8-list');
    if (!list) return;
    list.innerHTML = FT8_DIALS.map((d) =>
        `<li><span class="freq">${escapeHTML(formatKHz(d.khz))}</span><span class="desc">FT8 — ${escapeHTML(d.band)}</span></li>`
    ).join('');
}

function renderListenGuide() {
    const root = document.getElementById('listen-guide');
    if (!root || typeof LISTEN_SPOTS === 'undefined') return;
    const grouped = {};
    LISTEN_SPOTS.forEach((s) => {
        (grouped[s.group] ||= []).push(s);
    });
    const order = (typeof LISTEN_GROUP_ORDER !== 'undefined')
        ? LISTEN_GROUP_ORDER
        : Object.keys(grouped);
    root.innerHTML = order.filter((g) => grouped[g] && grouped[g].length).map((group) => {
        const title = (LISTEN_GROUP_PL && LISTEN_GROUP_PL[group]) || group;
        const hint = (LISTEN_GROUP_HINT_PL && LISTEN_GROUP_HINT_PL[group]) || '';
        const cardClass = group === 'starter' ? 'freq-card highlight'
            : group === 'skip' ? 'freq-card alert'
            : 'freq-card';
        const items = grouped[group].map((s) => `
            <li>
                <div class="listen-head">
                    <span class="freq clickable" title="Kliknij, aby skopiować">${escapeHTML(s.freq)}</span>
                    <span class="listen-mode">${escapeHTML(s.mode)}</span>
                </div>
                <span class="desc"><strong>${escapeHTML(s.titlePl)}</strong> — ${escapeHTML(s.descPl)}</span>
            </li>`).join('');
        return `
            <article class="${cardClass}">
                <h3>${escapeHTML(title)}</h3>
                ${hint ? `<p class="listen-hint">${escapeHTML(hint)}</p>` : ''}
                <ul class="freq-list listen-list">${items}</ul>
            </article>`;
    }).join('');
}

function initSwrCalc() {
    const z0 = document.getElementById('swr-z0');
    const zl = document.getElementById('swr-zl');
    const pf = document.getElementById('swr-pf');
    const pr = document.getElementById('swr-pr');
    if (!z0 || !zl) return;
    const upd = () => {
        const z0v = parseFloat(z0.value);
        const zlv = parseFloat(zl.value);
        const out = document.getElementById('swr-from-z');
        if (out) {
            if (isFinite(z0v) && z0v > 0 && isFinite(zlv) && zlv > 0) {
                const rho = Math.abs((zlv - z0v) / (zlv + z0v));
                const swr = rho >= 1 ? Infinity : (1 + rho) / (1 - rho);
                out.textContent = isFinite(swr) ? `${swr.toFixed(2)} : 1` : '∞';
            } else {
                out.textContent = '—';
            }
        }
        if (pf && pr) {
            const fwd = parseFloat(pf.value);
            const ref = parseFloat(pr.value);
            const outP = document.getElementById('swr-from-p');
            if (!outP) return;
            if (isFinite(fwd) && fwd > 0 && isFinite(ref) && ref >= 0) {
                const ratio = Math.sqrt(ref / fwd);
                const swr = ratio >= 1 ? Infinity : (1 + ratio) / (1 - ratio);
                outP.textContent = isFinite(swr) ? `${swr.toFixed(2)} : 1` : '∞';
            } else if (outP) {
                outP.textContent = '—';
            }
        }
    };
    [z0, zl, pf, pr].forEach((el) => el && el.addEventListener('input', upd));
    upd();
}

function initRepeaterShift() {
    const out = document.getElementById('rep-out');
    const mode = document.getElementById('rep-band');
    if (!out || !mode) return;
    const upd = () => {
        const f = parseFloat(out.value);
        const inEl = document.getElementById('rep-in');
        const shEl = document.getElementById('rep-shift');
        const nEl = document.getElementById('rep-notes');
        if (!isFinite(f) || f <= 0) {
            if (inEl) inEl.textContent = '—';
            if (shEl) shEl.textContent = '—';
            if (nEl) nEl.textContent = '—';
            return;
        }
        let shift = 0;
        let note = '';
        const sel = mode.value;
        if (sel === 'auto') {
            if (f >= 145.6 && f <= 145.8) { shift = -0.6; note = 'IARU R1 2 m FM: wyjście 145.600–145.7875, shift −600 kHz.'; }
            else if (f >= 144.0 && f <= 146.0) { shift = -0.6; note = 'Standard 2 m FM shift −600 kHz (sprawdź, czy to naprawdę wyjście przemiennika).'; }
            else if (f >= 438.5 && f <= 439.5) { shift = -7.6; note = 'IARU R1 / PL 70 cm FM: wyjście ~438.5–439.425, shift −7.6 MHz.'; }
            else if (f >= 430 && f <= 440) { shift = -7.6; note = 'Standard 70 cm FM w PL: −7.6 MHz. Potwierdź w przemienniki.net.'; }
            else { shift = 0; note = 'Nie rozpoznano pasma 2 m / 70 cm. Wybierz pasmo ręcznie.'; }
        } else if (sel === '2m') {
            shift = -0.6;
            note = 'IARU R1 2 m: shift −600 kHz.';
        } else if (sel === '70cm') {
            shift = -7.6;
            note = 'IARU R1 / PL 70 cm: shift −7.6 MHz.';
        }
        if (inEl) inEl.textContent = shift ? `${(f + shift).toFixed(4)} MHz` : '—';
        if (shEl) shEl.textContent = shift ? `${shift} MHz` : '—';
        if (nEl) nEl.textContent = note;
    };
    out.addEventListener('input', upd);
    mode.addEventListener('change', upd);
    upd();
}

/* ---- Click to copy częstotliwości ---- */
function initClickToCopy() {
    document.addEventListener('click', async (e) => {
        const el = e.target.closest('.freq');
        if (!el) return;
        const text = el.textContent.trim();
        try {
            await navigator.clipboard.writeText(text);
            showToast(`Skopiowano: ${text}`);
        } catch {
            showToast('Nie udało się skopiować (brak uprawnień schowka).', true);
        }
    });
    // Wizualnie oznaczamy klikalność
    document.querySelectorAll('.freq').forEach(el => {
        el.classList.add('clickable');
        el.setAttribute('title', 'Kliknij, aby skopiować');
    });
}

function showToast(msg, isError = false) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.toggle('toast-error', !!isError);
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 1800);
}

/* ---- Wyszukiwarka globalna ---- */
function buildSearchIndex() {
    const idx = [];
    Q_CODES.forEach(r => idx.push({
        cat: 'Kod Q', label: r.code, desc: r.a,
        href: '#kody-q'
    }));
    PHONETIC.forEach(([l, icao, pron, pl]) => idx.push({
        cat: 'Fonetyczny', label: `${l} — ${icao}`, desc: `${pron} · PL: ${pl}`,
        href: '#fonetyczny'
    }));
    CW_ABBR.forEach(([k, v]) => idx.push({
        cat: 'Skrót CW', label: k, desc: v, href: '#rst-cw'
    }));
    GLOSSARY.forEach(([k, v]) => idx.push({
        cat: 'Słownik', label: k, desc: v, href: '#slownik'
    }));
    LOGGERS.forEach(l => idx.push({
        cat: 'Logger', label: l.name, desc: `${l.os} · ${l.type}`, href: '#qrz'
    }));
    FREQ_CATALOG.forEach(e => idx.push({
        cat: 'Pasmo / służba',
        label: e.name,
        desc: e.notes || '',
        href: e.kind === 'amateur' ? '#pasma'
            : (e.kind === 'professional' || e.kind === 'broadcast' || e.kind === 'license-free')
                ? '#nasluch'
                : '#narzedzia'
    }));
    if (typeof LISTEN_SPOTS !== 'undefined') {
        LISTEN_SPOTS.forEach((s) => idx.push({
            cat: 'Nasłuch',
            label: s.freq,
            desc: `${s.titlePl} — ${s.descPl}`,
            href: '#nasluch'
        }));
    }
    FT8_DIALS.forEach(d => idx.push({
        cat: 'FT8',
        label: formatKHz(d.khz),
        desc: `FT8 — ${d.band}`,
        href: '#czestotliwosci-pl'
    }));
    PL_CITIES.forEach(c => idx.push({
        cat: 'Locator',
        label: c.name,
        desc: latLonToLocator(c.lat, c.lon, 6),
        href: '#locator'
    }));
    // Częstotliwości z DOM
    document.querySelectorAll('#czestotliwosci-pl .freq-list li').forEach(li => {
        const f = li.querySelector('.freq');
        const d = li.querySelector('.desc');
        if (f && d) idx.push({ cat: 'Częstotliwość', label: f.textContent.trim(), desc: d.textContent.trim(), href: '#czestotliwosci-pl' });
    });
    return idx;
}

function initGlobalSearch() {
    const input = document.getElementById('global-search');
    const out = document.getElementById('global-search-results');
    if (!input || !out) return;
    const index = buildSearchIndex();

    const render = (term) => {
        const t = term.trim().toLowerCase();
        if (!t || t.length < 2) { out.hidden = true; out.innerHTML = ''; return; }
        const res = index.filter(r =>
            r.label.toLowerCase().includes(t) ||
            r.desc.toLowerCase().includes(t)
        ).slice(0, 40);
        if (!res.length) {
            out.innerHTML = `<p class="muted small" style="padding:0.8rem">Brak wyników dla „${escapeHTML(term)}”.</p>`;
            out.hidden = false;
            return;
        }
        // Grupowanie po kategorii
        const groups = {};
        res.forEach(r => { (groups[r.cat] ||= []).push(r); });
        out.innerHTML = Object.entries(groups).map(([cat, items]) => `
            <div class="gs-group">
                <h4>${escapeHTML(cat)} <span class="muted small">(${items.length})</span></h4>
                <ul>
                    ${items.map(r => `
                        <li>
                            <a href="${r.href}">
                                <strong>${escapeHTML(r.label)}</strong>
                                <span class="muted small">${escapeHTML(r.desc)}</span>
                            </a>
                        </li>`).join('')}
                </ul>
            </div>`).join('');
        out.hidden = false;
    };

    let t;
    input.addEventListener('input', e => {
        clearTimeout(t);
        t = setTimeout(() => render(e.target.value), 80);
    });
    input.addEventListener('focus', () => { if (input.value) render(input.value); });
    // Klik poza wyszukiwarką chowa wyniki
    document.addEventListener('click', e => {
        if (!e.target.closest('.global-search-wrap')) { out.hidden = true; }
    });
    out.addEventListener('click', e => {
        if (e.target.closest('a')) out.hidden = true;
    });
}

/* ---------- UTIL ---------- */
function escapeHTML(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
