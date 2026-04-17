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
    renderCWAbbr();
    renderLoggers();
    renderGlossary();
    initDipoleCalc();
    initWavelengthCalc();
    initLocatorConv();
    initAzimuth();
    initFindBand();
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
        })
    );
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
        const total = (142.5 / freq) * kk;
        const half = total / 2;
        const lambda = 300 / freq;
        document.getElementById('dip-total').textContent = `${total.toFixed(2)} m`;
        document.getElementById('dip-half').textContent = `${half.toFixed(2)} m`;
        document.getElementById('dip-lambda').textContent = `${lambda.toFixed(2)} m`;
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
    if (!/^[A-R]{2}(\d{2}([A-X]{2})?)?$/.test(s)) return null;
    // Field (A-R, 20°x10°)
    let lon = (s.charCodeAt(0) - 65) * 20 - 180;
    let lat = (s.charCodeAt(1) - 65) * 10 - 90;
    // Square (0-9, 2°x1°)
    if (s.length >= 4) {
        lon += parseInt(s[2], 10) * 2;
        lat += parseInt(s[3], 10) * 1;
    }
    // Subsquare (a-x, 5'x2.5')
    if (s.length >= 6) {
        lon += (s.charCodeAt(4) - 65) * (2 / 24);
        lat += (s.charCodeAt(5) - 65) * (1 / 24);
        // Center of subsquare
        lon += (2 / 24) / 2;
        lat += (1 / 24) / 2;
    } else if (s.length >= 4) {
        lon += 1; lat += 0.5; // center of square
    } else {
        lon += 10; lat += 5; // center of field
    }
    return { lat, lon };
}

function latLonToLocator(lat, lon) {
    if (!isFinite(lat) || !isFinite(lon)) return '';
    lat = Math.max(-90, Math.min(90, lat));
    lon = ((lon + 180) % 360 + 360) % 360 - 180;
    const adjLon = lon + 180;
    const adjLat = lat + 90;
    const fieldLon = Math.floor(adjLon / 20);
    const fieldLat = Math.floor(adjLat / 10);
    const sqLon = Math.floor((adjLon % 20) / 2);
    const sqLat = Math.floor((adjLat % 10) / 1);
    const subLon = Math.floor(((adjLon - fieldLon * 20 - sqLon * 2) * 24) / 2);
    const subLat = Math.floor(((adjLat - fieldLat * 10 - sqLat * 1) * 24) / 1);
    return (
        String.fromCharCode(65 + fieldLon) +
        String.fromCharCode(65 + fieldLat) +
        sqLon + sqLat +
        String.fromCharCode(97 + subLon) +
        String.fromCharCode(97 + subLat)
    );
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
        if (!isFinite(lat) || !isFinite(lon)) { el.textContent = '—'; return; }
        el.textContent = latLonToLocator(lat, lon);
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
        const rev = (br + 180) % 360;
        dEl.textContent = `${d.toFixed(0)} km`;
        bEl.textContent = `${br.toFixed(1)}°`;
        rEl.textContent = `${rev.toFixed(1)}°`;
    };
    a.addEventListener('input', upd);
    b.addEventListener('input', upd);
    upd();
}

/* ---- Znajdź pasmo ---- */
const BANDS = [
    { name: '2200 m',  from: 135.7,     to: 137.8,      notes: 'LF — tylko CW, bardzo wąskie.' },
    { name: '630 m',   from: 472,       to: 479,        notes: 'MF — CW, cyfrowe.' },
    { name: '160 m',   from: 1810,      to: 2000,       notes: 'KF „Top band” — nocne DX.' },
    { name: '80 m',    from: 3500,      to: 3800,       notes: 'KF — SSB (LSB), CW. PL SSB wywoławcza 3.760.' },
    { name: '60 m',    from: 5351.5,    to: 5366.5,     notes: 'KF — pasmo ograniczone (15 kHz).' },
    { name: '40 m',    from: 7000,      to: 7200,       notes: 'KF — DX dzień/noc. PL wywoławcza 7.090.' },
    { name: '30 m',    from: 10100,     to: 10150,      notes: 'KF · WARC · tylko CW i cyfrowe.' },
    { name: '20 m',    from: 14000,     to: 14350,      notes: 'Król pasm DX. FT8 14.074.' },
    { name: '17 m',    from: 18068,     to: 18168,      notes: 'KF · WARC · bez zawodów.' },
    { name: '15 m',    from: 21000,     to: 21450,      notes: 'KF — aktywne w maksimum słonecznym.' },
    { name: '12 m',    from: 24890,     to: 24990,      notes: 'KF · WARC.' },
    { name: '10 m',    from: 28000,     to: 29700,      notes: 'KF — sporadic-E, FM simplex 29.600.' },
    { name: '6 m',     from: 50000,     to: 52000,      notes: 'VHF — „magic band”, Es. FT8 50.313.' },
    { name: '4 m',     from: 70000,     to: 70300,      notes: 'VHF — w PL pozwolenie indywidualne.' },
    { name: '2 m',     from: 144000,    to: 146000,     notes: 'VHF — FM, SSB. Wywoławcze 144.300 / 145.500.' },
    { name: '70 cm',   from: 430000,    to: 440000,     notes: 'UHF — FM, DMR, D-STAR. Wywoławcze 432.200 / 433.500.' },
    { name: '23 cm',   from: 1240000,   to: 1300000,    notes: 'UHF — ATV, satelity.' },
    { name: '13 cm',   from: 2300000,   to: 2450000,    notes: 'Mikrofale amatorskie.' },
    { name: '9 cm',    from: 3400000,   to: 3475000,    notes: 'Mikrofale.' },
    { name: '6 cm',    from: 5650000,   to: 5850000,    notes: 'Mikrofale.' },
    { name: '3 cm',    from: 10000000,  to: 10500000,   notes: 'Mikrofale.' }
];

function findBand(freqKHz) {
    return BANDS.find(b => freqKHz >= b.from && freqKHz <= b.to);
}

function initFindBand() {
    const f = document.getElementById('fb-freq');
    const u = document.getElementById('fb-unit');
    if (!f || !u) return;
    const upd = () => {
        const v = parseFloat(f.value);
        const band = document.getElementById('fb-band');
        const seg = document.getElementById('fb-segment');
        const notes = document.getElementById('fb-notes');
        if (!isFinite(v) || v <= 0) { band.textContent = seg.textContent = notes.textContent = '—'; return; }
        const khz = u.value === 'MHz' ? v * 1000 : v;
        const hit = findBand(khz);
        if (!hit) {
            band.textContent = 'Poza pasmami amatorskimi (IARU R1)';
            seg.textContent = '—';
            notes.textContent = '—';
            return;
        }
        band.textContent = hit.name;
        seg.textContent = `${(hit.from / 1000).toFixed(3)} – ${(hit.to / 1000).toFixed(3)} MHz`;
        notes.textContent = hit.notes;
    };
    f.addEventListener('input', upd);
    u.addEventListener('change', upd);
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
