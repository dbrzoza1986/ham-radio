/* Frequency catalog for Find Band / Pasma tables.
   Educational reference only. National rules (UKE) override IARU band plans.

   Sources (checked 2026-08-19):
   - IARU Region 1 HF band plan, effective 16 Oct 2020
     https://www.iaru-r1.org/wp-content/uploads/2021/06/hf_r1_bandplan.pdf
   - IARU R1 VHF Managers Handbook (PK-UKF band plans)
     https://pk-ukf.pl/band-plany/
   - ITU amateur allocations by region (Wikipedia summary of ITU RR)
   - ECC Decision (11)03: CB 26.960–27.410 MHz
   - ECC Decision (15)05: PMR446 446.0–446.2 MHz
   - ERC/REC 70-03 Annex 1: SRD 433.05–434.79 MHz and 863–870 MHz
   - ITU Radio Regulations Appendix 18: marine VHF, ch 16 = 156.800 MHz
   - ICAO Annex 10 Vol. V: air-ground 117.975–137 MHz, emergency 121.500 MHz
   - ITU Region 1 FM broadcasting 87.5–108.0 MHz
   - Poland 4 m: Dz.U. 2017 poz. 920 — 70.000–70.300 MHz, 20 W e.i.r.p.
   - Poland 6 m: KTPC POL.30 — 50–52 MHz, max 100 W e.i.r.p., no F3E (FM)
   - WSJT-X default FT8 dial frequencies (FrequencyList.cpp)
*/

const KIND_ORDER = ['amateur', 'amateur-other', 'license-free', 'ism', 'professional', 'broadcast'];

const KIND_LABELS = {
    amateur: 'Amateur service (licensed)',
    'amateur-other': 'Amateur in another IARU region',
    'license-free': 'Licence-exempt / general authorisation',
    ism: 'ISM / short-range device',
    professional: 'Professional service (not amateur)',
    broadcast: 'Broadcasting'
};

const KIND_LABELS_PL = {
    amateur: 'Służba amatorska (pozwolenie)',
    'amateur-other': 'Amatorskie w innym regionie IARU',
    'license-free': 'Bez pozwolenia indywidualnego',
    ism: 'ISM / urządzenia małej mocy (SRD)',
    professional: 'Służba profesjonalna (nie amatorska)',
    broadcast: 'Radiodyfuzja'
};

/* FT8 USB dial frequencies from WSJT-X defaults. */
const FT8_DIALS = [
    { khz: 1840, band: '160 m' },
    { khz: 3573, band: '80 m' },
    { khz: 5357, band: '60 m' },
    { khz: 7074, band: '40 m' },
    { khz: 10136, band: '30 m' },
    { khz: 14074, band: '20 m' },
    { khz: 18100, band: '17 m' },
    { khz: 21074, band: '15 m' },
    { khz: 24915, band: '12 m' },
    { khz: 28074, band: '10 m' },
    { khz: 50313, band: '6 m' },
    { khz: 50323, band: '6 m DX' },
    { khz: 70154, band: '4 m' },
    { khz: 144174, band: '2 m' },
    { khz: 432174, band: '70 cm' }
];

/* City centres (WGS-84). Locators are computed, not hard-coded. */
const PL_CITIES = [
    { name: 'Warszawa', lat: 52.2297, lon: 21.0122 },
    { name: 'Kraków', lat: 50.06143, lon: 19.93658 },
    { name: 'Gdańsk', lat: 54.3520, lon: 18.6466 },
    { name: 'Wrocław', lat: 51.1079, lon: 17.0385 },
    { name: 'Poznań', lat: 52.4064, lon: 16.9252 },
    { name: 'Bydgoszcz', lat: 53.1235, lon: 18.0084 },
    { name: 'Łódź', lat: 51.7592, lon: 19.4560 },
    { name: 'Szczecin', lat: 53.4285, lon: 14.5528 },
    { name: 'Katowice', lat: 50.2649, lon: 19.0238 },
    { name: 'Białystok', lat: 53.1325, lon: 23.1688 },
    { name: 'Lublin', lat: 51.2465, lon: 22.5684 },
    { name: 'Rzeszów', lat: 50.0374, lon: 22.0049 }
];

const FREQ_CATALOG = [
    /* ---- Amateur LF / MF / HF (IARU) ---- */
    {
        id: 'ham-2200m', name: '2200 m', group: 'LF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [135.7, 137.8], R2: [135.7, 137.8], R3: [135.7, 137.8] },
        notes: 'LF. Narrow CW / digital. ITU amateur allocation 135.7–137.8 kHz.',
        segments: [{ from: 135.7, to: 137.8, modes: 'CW, narrow digital' }]
    },
    {
        id: 'ham-630m', name: '630 m', group: 'MF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [472, 479], R2: [472, 479], R3: [472, 479] },
        notes: 'MF. CW and digital. ITU amateur allocation 472–479 kHz.',
        segments: [{ from: 472, to: 479, modes: 'CW, narrow digital' }]
    },
    {
        id: 'ham-160m', name: '160 m', group: 'HF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [1810, 2000], R2: [1800, 2000], R3: [1800, 2000] },
        notes: 'Top band. Night DX. IARU R1 starts at 1.810 MHz; R2/R3 often 1.800 MHz.',
        segments: [
            { from: 1810, to: 1838, modes: 'CW' },
            { from: 1838, to: 1843, modes: 'Narrow digital (FT8 1.840)' },
            { from: 1843, to: 2000, modes: 'SSB / all modes (LSB)' }
        ]
    },
    {
        id: 'ham-80m', name: '80 m', group: 'HF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [3500, 3800], R2: [3500, 4000], R3: [3500, 3900] },
        notes: 'Regional / night DX. IARU R1 and Poland: 3.500–3.800 MHz. R2 continues to 4.000 MHz (75 m). PL SSB calling 3.760.',
        segments: [
            { from: 3500, to: 3570, modes: 'CW' },
            { from: 3570, to: 3600, modes: 'Narrow digital (FT8 3.573)' },
            { from: 3600, to: 3800, modes: 'SSB / all modes (LSB). Calling 3.760' }
        ]
    },
    {
        id: 'ham-60m', name: '60 m', group: 'HF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [5351.5, 5366.5], R2: [5351.5, 5366.5], R3: [5351.5, 5366.5] },
        notes: 'WRC-15 worldwide secondary 5.3515–5.3665 MHz (15 kHz). USB for voice. Some countries have extra channels.',
        segments: [
            { from: 5351.5, to: 5354, modes: 'CW, narrow digital' },
            { from: 5354, to: 5366, modes: 'All modes, USB recommended (FT8 5.357)' },
            { from: 5366, to: 5366.5, modes: 'Weak-signal narrow modes' }
        ]
    },
    {
        id: 'ham-40m', name: '40 m', group: 'HF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [7000, 7200], R2: [7000, 7300], R3: [7000, 7200] },
        notes: 'Day/night DX. IARU R1: 7.000–7.200 MHz. R2: to 7.300 MHz. PL SSB calling 7.090.',
        segments: [
            { from: 7000, to: 7040, modes: 'CW (QRP 7.030)' },
            { from: 7040, to: 7050, modes: 'Narrow digital' },
            { from: 7050, to: 7200, modes: 'All modes / SSB LSB (FT8 7.074, calling 7.090)' }
        ]
    },
    {
        id: 'ham-30m', name: '30 m', group: 'HF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [10100, 10150], R2: [10100, 10150], R3: [10100, 10150] },
        notes: 'WARC. CW and digital only — no contests. SSB only in real emergencies.',
        segments: [
            { from: 10100, to: 10130, modes: 'CW (QRP 10.116)' },
            { from: 10130, to: 10150, modes: 'Narrow digital (FT8 10.136)' }
        ]
    },
    {
        id: 'ham-20m', name: '20 m', group: 'HF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [14000, 14350], R2: [14000, 14350], R3: [14000, 14350] },
        notes: 'Primary DX band. IARU R1 CoA emergency 14.300. FT8 14.074. SSB QRP 14.285.',
        segments: [
            { from: 14000, to: 14070, modes: 'CW (QRP 14.060)' },
            { from: 14070, to: 14099, modes: 'Narrow digital (FT8 14.074)' },
            { from: 14099, to: 14101, modes: 'Beacons only' },
            { from: 14101, to: 14350, modes: 'All modes / SSB USB (emergency CoA 14.300)' }
        ]
    },
    {
        id: 'ham-17m', name: '17 m', group: 'HF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [18068, 18168], R2: [18068, 18168], R3: [18068, 18168] },
        notes: 'WARC. No contests. Emergency CoA 18.160. FT8 18.100.',
        segments: [
            { from: 18068, to: 18095, modes: 'CW' },
            { from: 18095, to: 18109, modes: 'Narrow digital (FT8 18.100)' },
            { from: 18109, to: 18111, modes: 'Beacons only' },
            { from: 18111, to: 18168, modes: 'All modes / SSB USB (emergency CoA 18.160)' }
        ]
    },
    {
        id: 'ham-15m', name: '15 m', group: 'HF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [21000, 21450], R2: [21000, 21450], R3: [21000, 21450] },
        notes: 'Opens in high solar activity. Emergency CoA 21.360. FT8 21.074.',
        segments: [
            { from: 21000, to: 21070, modes: 'CW' },
            { from: 21070, to: 21149, modes: 'Narrow digital (FT8 21.074)' },
            { from: 21149, to: 21151, modes: 'Beacons only' },
            { from: 21151, to: 21450, modes: 'All modes / SSB USB (emergency CoA 21.360)' }
        ]
    },
    {
        id: 'ham-12m', name: '12 m', group: 'HF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [24890, 24990], R2: [24890, 24990], R3: [24890, 24990] },
        notes: 'WARC. No contests. FT8 24.915.',
        segments: [
            { from: 24890, to: 24915, modes: 'CW / FT8 24.915' },
            { from: 24915, to: 24929, modes: 'Narrow digital' },
            { from: 24929, to: 24931, modes: 'Beacons only' },
            { from: 24931, to: 24990, modes: 'All modes / SSB USB' }
        ]
    },
    {
        id: 'ham-10m', name: '10 m', group: 'HF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [28000, 29700], R2: [28000, 29700], R3: [28000, 29700] },
        notes: 'Sporadic-E. FM simplex 29.600. FT8 28.074.',
        segments: [
            { from: 28000, to: 28070, modes: 'CW' },
            { from: 28070, to: 28190, modes: 'Narrow digital (FT8 28.074)' },
            { from: 28190, to: 28225, modes: 'Beacons' },
            { from: 28225, to: 29200, modes: 'SSB USB / all modes' },
            { from: 29200, to: 29700, modes: 'FM, repeaters, satellites. FM calling 29.600' }
        ]
    },
    {
        id: 'ham-6m', name: '6 m', group: 'VHF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [50000, 52000], R2: [50000, 54000], R3: [50000, 54000] },
        notes: 'Magic band (Es). Poland: 50–52 MHz, max 100 W e.i.r.p., F3E (FM) not permitted (KTPC POL.30). DX calling 50.110. FT8 50.313 / 50.323.',
        segments: [
            { from: 50000, to: 50100, modes: 'CW / beacons' },
            { from: 50100, to: 50300, modes: 'SSB / CW. DX calling 50.110' },
            { from: 50300, to: 50400, modes: 'MGM / FT8 50.313, DX 50.323' },
            { from: 50400, to: 50500, modes: 'Beacons' },
            { from: 50500, to: 52000, modes: 'All modes except FM in Poland' }
        ]
    },
    {
        id: 'ham-4m', name: '4 m', group: 'VHF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [70000, 70500], R2: null, R3: null },
        notes: 'Poland: 70.000–70.300 MHz secondary, max 20 W e.i.r.p. (Dz.U. 2017 poz. 920). IARU R1 plan continues to 70.500 MHz in some CEPT countries. CW/SSB calling 70.200. FT8 70.154.',
        segments: [
            { from: 70000, to: 70100, modes: 'CW / beacons' },
            { from: 70100, to: 70250, modes: 'CW / SSB / MGM (FT8 70.154, calling 70.200)' },
            { from: 70250, to: 70300, modes: 'AM / FM calling 70.260 — Poland upper edge 70.300' },
            { from: 70300, to: 70500, modes: 'FM channels in some CEPT countries (not Poland)' }
        ]
    },
    {
        id: 'ham-2m', name: '2 m', group: 'VHF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [144000, 146000], R2: [144000, 148000], R3: [144000, 148000] },
        notes: 'IARU R1: 144–146 MHz. R2/R3: 144–148 MHz. FM calling 145.500, SSB 144.300, APRS 144.800, FT8 144.174. Repeaters −600 kHz.',
        segments: [
            { from: 144000, to: 144150, modes: 'CW / EME' },
            { from: 144150, to: 144400, modes: 'SSB / CW. Calling 144.300. FT8 144.174' },
            { from: 144400, to: 144491, modes: 'Beacons' },
            { from: 144500, to: 144794, modes: 'All modes' },
            { from: 144794, to: 144963, modes: 'APRS 144.800 / digital' },
            { from: 144975, to: 145194, modes: 'FM repeater inputs (shift −600 kHz)' },
            { from: 145206, to: 145563, modes: 'FM simplex. Calling 145.500' },
            { from: 145575, to: 145794, modes: 'FM repeater outputs' },
            { from: 145806, to: 146000, modes: 'Satellite' }
        ]
    },
    {
        id: 'ham-125cm', name: '1.25 m', group: 'VHF', kind: 'amateur', pasma: 'R2',
        alloc: { R1: null, R2: [222000, 225000], R3: null },
        notes: 'IARU Region 2 only (222–225 MHz; 219–220 MHz also used in some countries). Not allocated in Poland / IARU R1.'
    },
    {
        id: 'ham-70cm', name: '70 cm', group: 'UHF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [430000, 440000], R2: [420000, 450000], R3: [430000, 440000] },
        notes: 'IARU R1: 430–440 MHz, shared in Poland with other services. FM calling 433.500, SSB 432.200. Repeaters −7.6 MHz. Overlaps SRD/ISM 433.05–434.79.',
        segments: [
            { from: 430000, to: 432000, modes: 'FM repeaters / digital (national plan)' },
            { from: 432000, to: 432400, modes: 'CW / SSB. Calling 432.200. FT8 432.174' },
            { from: 432400, to: 432490, modes: 'Beacons' },
            { from: 433000, to: 433400, modes: 'Repeater inputs (some systems)' },
            { from: 433400, to: 433588, modes: 'FM simplex. Calling 433.500' },
            { from: 433600, to: 434000, modes: 'Digital / ATV. ISM centre ~433.92' },
            { from: 434000, to: 440000, modes: 'ATV, repeater outputs, satellite' }
        ]
    },
    {
        id: 'ham-33cm', name: '33 cm', group: 'UHF', kind: 'amateur', pasma: 'R2',
        alloc: { R1: null, R2: [902000, 928000], R3: null },
        notes: 'IARU Region 2 only (902–928 MHz). Not an amateur allocation in IARU R1 / Poland.'
    },
    {
        id: 'ham-23cm', name: '23 cm', group: 'UHF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [1240000, 1300000], R2: [1240000, 1300000], R3: [1240000, 1300000] },
        notes: 'ATV, satellites, narrowband near 1296 MHz. Secondary in many countries; check UKE before transmitting.'
    },
    {
        id: 'ham-13cm', name: '13 cm', group: 'UHF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [2300000, 2450000], R2: [2300000, 2450000], R3: [2300000, 2450000] },
        notes: 'Amateur microwaves. 2400–2483.5 MHz is also ISM / Wi-Fi — expect interference above 2400 MHz.'
    },
    {
        id: 'ham-9cm', name: '9 cm', group: 'SHF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [3400000, 3475000], R2: [3300000, 3500000], R3: [3300000, 3500000] },
        notes: 'IARU R1 typical 3400–3475 MHz. Parts of 3.4 GHz are being withdrawn for 5G in some CEPT countries — verify current UKE table.'
    },
    {
        id: 'ham-6cm', name: '6 cm', group: 'SHF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [5650000, 5850000], R2: [5650000, 5925000], R3: [5650000, 5850000] },
        notes: 'Amateur microwaves. Overlaps 5.8 GHz ISM / Wi-Fi near the top of the band.'
    },
    {
        id: 'ham-3cm', name: '3 cm', group: 'SHF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [10000000, 10500000], R2: [10000000, 10500000], R3: [10000000, 10500000] },
        notes: '10 GHz amateur / SAT. Wideband experiments and rain-scatter.'
    },
    {
        id: 'ham-12mm', name: '1.2 cm', group: 'SHF', kind: 'amateur', pasma: 'R1',
        alloc: { R1: [24000000, 24250000], R2: [24000000, 24250000], R3: [24000000, 24250000] },
        notes: '24 GHz amateur allocation (24.000–24.250 GHz).'
    },

    /* ---- Licence-exempt and adjacent services ---- */
    {
        id: 'cb-cept', name: 'CB 27 MHz (CEPT)', group: 'HF', kind: 'license-free',
        from: 26960, to: 27410, channel: 'cb',
        notes: 'ECC Decision (11)03: 26.960–27.410 MHz, 10 kHz channels, licence-exempt. Ch 9 = 27.065 MHz (distress tradition). Ch 19 = 27.185 MHz (road). Not an amateur band.'
    },
    {
        id: 'pmr446', name: 'PMR446', group: 'UHF', kind: 'license-free',
        from: 446000, to: 446200, channel: 'pmr',
        notes: 'ECC Decision (15)05: 446.0–446.2 MHz, integral antenna, licence-exempt. 16 analogue channels from 446.00625 MHz, 12.5 kHz. Channel 1 is widely used in Polish mountains.'
    },
    {
        id: 'srd-433', name: 'SRD / LPD 433 MHz', group: 'UHF', kind: 'ism',
        from: 433050, to: 434790,
        notes: 'ERC/REC 70-03 Annex 1 (g1–g3): 433.05–434.79 MHz, typically ≤10 mW e.r.p. Overlaps amateur 70 cm. Weather stations, key fobs, LPD. Centre ~433.92 MHz.'
    },
    {
        id: 'srd-868', name: 'SRD / LoRa 868 MHz', group: 'UHF', kind: 'ism',
        from: 863000, to: 870000,
        notes: 'ERC/REC 70-03: 863–870 MHz non-specific SRD (LoRaWAN, alarms, telemetry). Not amateur.'
    },
    {
        id: 'ism-24', name: 'ISM / Wi-Fi 2.4 GHz', group: 'UHF', kind: 'ism',
        from: 2400000, to: 2483500,
        notes: 'ITU ISM 2400–2483.5 MHz (Wi-Fi, Bluetooth, microwave ovens). Overlaps amateur 13 cm above 2400 MHz.'
    },
    {
        id: 'marine-vhf', name: 'Maritime VHF', group: 'VHF', kind: 'professional',
        from: 156000, to: 162050,
        notes: 'ITU RR Appendix 18. Distress/calling ch 16 = 156.800 MHz. DSC ch 70 = 156.525 MHz. AIS1 161.975 / AIS2 162.025. Requires a maritime licence — not amateur.'
    },
    {
        id: 'airband', name: 'VHF airband (AM)', group: 'VHF', kind: 'professional',
        from: 117975, to: 137000,
        notes: 'ICAO Annex 10 Vol. V: air-ground 117.975–137 MHz, AM. Emergency 121.500 MHz (guard). Not amateur. Listening may be restricted by national law.'
    },
    {
        id: 'fm-bc', name: 'FM broadcasting', group: 'VHF', kind: 'broadcast',
        from: 87500, to: 108000,
        notes: 'ITU Region 1 sound broadcasting 87.5–108.0 MHz. Not amateur.'
    },
    {
        id: 'mw-bc', name: 'MW broadcasting', group: 'MF', kind: 'broadcast',
        from: 526.5, to: 1606.5,
        notes: 'ITU medium-wave broadcasting 526.5–1606.5 kHz (9 kHz channels in R1).'
    },
    {
        id: 'lw-bc', name: 'LW broadcasting', group: 'LF', kind: 'broadcast',
        from: 148.5, to: 283.5,
        notes: 'ITU Region 1 long-wave broadcasting 148.5–283.5 kHz.'
    }
];

function allocRange(entry, region) {
    if (entry.alloc) return entry.alloc[region] || null;
    if (entry.from != null && entry.to != null) return [entry.from, entry.to];
    return null;
}

function formatKHz(khz) {
    const n = Number(khz);
    if (!isFinite(n)) return '—';
    if (n >= 1000000) return `${(n / 1e6).toFixed(3)} GHz`;
    if (n >= 1000) {
        const m = n / 1000;
        const rounded = Math.round(m * 1e5) / 1e5;
        const text = Number.isInteger(rounded * 1000) ? rounded.toFixed(3) : String(rounded);
        return `${text} MHz`;
    }
    return `${n} kHz`;
}

function formatRangeKHz(from, to) {
    return `${formatKHz(from)} – ${formatKHz(to)}`;
}

function buildCbChannels() {
    const skip = new Set([26995, 27045, 27095, 27145, 27195]);
    const out = [];
    let ch = 1;
    for (let f = 26965; f <= 27405; f += 10) {
        if (skip.has(f)) continue;
        let hint = '';
        if (ch === 3) hint = 'tradycja GOPR / góry (PL)';
        else if (ch === 9) hint = 'kanał ratunkowy (tradycja)';
        else if (ch === 11) hint = 'wywołanie ogólne';
        else if (ch === 19) hint = 'drogowy / TIR';
        else if (ch === 28) hint = 'turystyczny (tradycja PL)';
        out.push({ ch, khz: f, hint });
        ch += 1;
    }
    return out;
}

const CB_CHANNELS = buildCbChannels();

function buildPmrChannels() {
    const out = [];
    for (let i = 0; i < 16; i += 1) {
        out.push({ ch: i + 1, khz: 446006.25 + i * 12.5 });
    }
    return out;
}

const PMR_CHANNELS = buildPmrChannels();

function nearestChannel(khz, list, windowKHz) {
    let best = null;
    let bestD = Infinity;
    list.forEach((row) => {
        const d = Math.abs(row.khz - khz);
        if (d < bestD) { bestD = d; best = row; }
    });
    if (!best || bestD > windowKHz) return null;
    return { ...best, delta: bestD };
}

function segmentFor(entry, khz) {
    if (!entry.segments) return null;
    return entry.segments.find((s) => khz >= s.from && khz <= s.to) || null;
}

function ft8Near(khz) {
    return FT8_DIALS.find((d) => Math.abs(d.khz - khz) <= 0.6) || null;
}

function lookupFrequencies(khz, region) {
    const hits = [];
    FREQ_CATALOG.forEach((entry) => {
        if (entry.alloc) {
            const selected = allocRange(entry, region);
            if (selected && khz >= selected[0] && khz <= selected[1]) {
                hits.push({
                    entry,
                    matchKind: 'amateur',
                    range: selected,
                    region
                });
                return;
            }
            const others = [];
            ['R1', 'R2', 'R3'].forEach((reg) => {
                if (reg === region) return;
                const rng = entry.alloc[reg];
                if (rng && khz >= rng[0] && khz <= rng[1]) others.push(reg);
            });
            if (others.length) {
                const rng = entry.alloc[others[0]];
                hits.push({
                    entry,
                    matchKind: 'amateur-other',
                    range: rng,
                    otherRegions: others
                });
            }
            return;
        }
        if (khz >= entry.from && khz <= entry.to) {
            hits.push({
                entry,
                matchKind: entry.kind,
                range: [entry.from, entry.to]
            });
        }
    });

    hits.sort((a, b) => {
        const ia = KIND_ORDER.indexOf(a.matchKind);
        const ib = KIND_ORDER.indexOf(b.matchKind);
        return ia - ib;
    });
    return hits;
}

function catalogByPasma(group, pasma) {
    return FREQ_CATALOG.filter((e) => e.kind === 'amateur' && e.group === group && e.pasma === pasma);
}

function countAmateurHfR1() {
    return FREQ_CATALOG.filter((e) => e.kind === 'amateur' && e.group === 'HF' && e.alloc && e.alloc.R1).length;
}
