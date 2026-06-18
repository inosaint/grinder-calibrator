    const { useState, useRef, useEffect, useCallback, useMemo } = React;

    // ========== ICONS ==========
    function HistoryIcon({ size = 24 }) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
          <path d="M3 3v5h5"/>
          <path d="M12 7v5l4 2"/>
        </svg>
      );
    }
    function Volume2Icon({ size = 24 }) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
        </svg>
      );
    }
    function VolumeXIcon({ size = 24 }) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <line x1="23" y1="9" x2="17" y2="15"/>
          <line x1="17" y1="9" x2="23" y2="15"/>
        </svg>
      );
    }
    function ChevronDownIcon({ size = 24, className = '' }) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      );
    }
    function BookmarkIcon({ size = 24 }) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-1px)', flexShrink: 0 }}>
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
        </svg>
      );
    }
    function LockIcon({ size = 24 }) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-1px)', flexShrink: 0 }}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      );
    }
    function UnlockIcon({ size = 24 }) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-1px)', flexShrink: 0 }}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
        </svg>
      );
    }
    function PlayIcon({ size = 24 }) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <polygon points="5 3 19 12 5 21 5 3"/>
        </svg>
      );
    }
    function PauseIcon({ size = 24 }) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
        </svg>
      );
    }
    function RotateCcwIcon({ size = 24 }) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
          <path d="M3 3v5h5"/>
        </svg>
      );
    }
    function ArrowLeftIcon({ size = 24 }) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"/>
          <polyline points="12 19 5 12 12 5"/>
        </svg>
      );
    }
    function ChevronRightIcon({ size = 24 }) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      );
    }
    function ShareIcon({ size = 24 }) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
          <polyline points="16 6 12 2 8 6"/>
          <line x1="12" y1="2" x2="12" y2="15"/>
        </svg>
      );
    }
    function CheckIcon({ size = 24 }) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      );
    }

    // ========== BREW METHOD RANGES (single source of truth, in microns) ==========
    // Derived from Honest Coffee Guide's Comandante C40 ranges × 30 µm/click.
    // Every grinder maps to these via its own micronsPerClick + zeroOffset.
    const METHOD_MICRON_RANGES = {
      espresso:  [210, 390],
      moka:      [420, 720],
      aeropress: [360, 1050],
      v60:       [450, 750],
      chemex:    [750, 1020],
      french:    [780, 1200],
      cold:      [900, 1200],
    };

    const DIALER_METHOD_RANGES = {
      espresso:     [210, 390],
      moka:         [420, 720],
      aeropress:    [360, 1050],
      v60:          [450, 750],
      chemex:       [750, 1020],
      french_press: [780, 1200],
      cold_brew:    [800, 1200],
    };

    // ========== GRINDER CONFIG ==========
    const GRINDERS = {
      commandante: {
        id: 'commandante',
        name: 'Comandante',
        model: 'C40',
        subtitle: 'MK4 Nitro Blade',
        minClick: 0,
        maxClick: 40,
        micronsPerClick: 30,
        zeroOffset: 0,
        majorTick: 5,
        accentColor: '#c89d6a',
      },
      timemore_s3: {
        id: 'timemore_s3',
        name: 'Timemore Chestnut',
        model: 'S3',
        subtitle: 'S3 · S2C890',
        minClick: 0,
        maxClick: 90,
        micronsPerClick: 15,
        zeroOffset: 75,
        majorTick: 10,
        accentColor: '#9bb086',
        dialNotation: 'numbered',
        // External-dial grinder: HCG/Timemore publish dial-position ranges directly,
        // and burr geometry makes the linear µm/click derivation underestimate the
        // physical V60/pour-over position. These match Timemore's manual + HCG.
        methodOverrides: {
          espresso: [1, 15],
          moka:     [5, 20],
          aeropress:[28, 48],
          v60:      [50, 80],
          chemex:   [50, 80],
          french:   [80, 90],
          cold:     [55, 90],
        },
      },
      timemore_c2: {
        id: 'timemore_c2',
        name: 'Timemore Chestnut',
        model: 'C2',
        variants: 'C2/C2 Max/C2S/C2 Fold',
        subtitle: 'C2 · Standard',
        minClick: 0,
        maxClick: 36,
        // 35 µm/click empirically back-fits HCG's C2 brew-method ranges across
        // espresso/V60/moka/aeropress. Timemore's 80 µm/click hardware figure is
        // inconsistent with HCG's 0–950 µm total range claim (36 × 80 = 2880).
        micronsPerClick: 35,
        zeroOffset: 0,
        majorTick: 6,
        accentColor: '#b89a7c',
      },
      timemore_c3: {
        id: 'timemore_c3',
        name: 'Timemore Chestnut',
        model: 'C3',
        variants: 'C3/C3S',
        subtitle: 'C3 · S2C660',
        minClick: 0,
        maxClick: 25,
        // 41 µm/click empirically back-fits HCG's C3/C3S brew-method ranges to
        // within 1 click across espresso/moka/V60/aeropress. Brew Coffee Home
        // cites Timemore's ~83 µm/click hardware figure, but that implies a
        // >2 mm range — HCG caps at 950 µm. Same shape as the C2 discrepancy.
        // C3 (2021) and C3S (2023 refresh) share burrs, dial, and HCG ranges.
        micronsPerClick: 41,
        zeroOffset: 0,
        majorTick: 5,
        accentColor: '#8a7a6a',
      },
      zp6: {
        id: 'zp6',
        name: '1Zpresso ZP6',
        model: '',
        subtitle: 'ZP6 Special · Hex48',
        minClick: 0,
        maxClick: 90,
        micronsPerClick: 22,
        zeroOffset: 0,
        majorTick: 10,
        accentColor: '#7ab4d0',
        excludedMethods: ['espresso'],
        dialNotation: 'numbered',
        // External-dial grinder: hexagonal burrs produce a different effective
        // particle distribution than the C40, so HCG/community ranges don't match
        // the linear µm/click curve. Sources: Honest Coffee Guide ZP6 chart and
        // 1Zpresso Champion Recipe Collection.
        methodOverrides: {
          moka:     [11, 36],
          aeropress:[25, 45],
          v60:      [25, 45],
          chemex:   [35, 55],
          french:   [55, 75],
          cold:     [60, 90],
        },
      },
      k_ultra: {
        id: 'k_ultra',
        name: '1Zpresso',
        model: 'K-Ultra',
        subtitle: 'K-Ultra · Heptagonal 48mm',
        minClick: 0,
        maxClick: 100,
        // 7.6 µm/click + 40 µm factory zero back-fits HCG's K-Ultra brew ranges
        // across espresso/V60/moka within 1–4 clicks. Manufacturer's 20 µm/click
        // figure (1Zpresso, brewcoffeehome) implies a 2 mm total range that HCG's
        // own 0–760 µm chart and click placements both contradict.
        micronsPerClick: 7.6,
        zeroOffset: 40,
        majorTick: 10,
        clicksPerRotation: 100,
        clicksPerNumber: 10,
        accentColor: '#a98aa5',
        dialNotation: 'numbered',
        // External-dial grinder: HCG K-Ultra chart values used directly.
        // Cold brew and the top of French press are clamped at click 100
        // because HCG itself caps the dial there (see grinder-research/k-ultra.md).
        methodOverrides: {
          espresso: [24, 50],
          moka:     [48, 86],
          aeropress:[43, 100],
          v60:      [53, 92],
          french:   [91, 100],
          cold:     [95, 100],
        },
      },
      king_k6: {
        id: 'king_k6',
        name: 'KINGrinder',
        model: 'K6',
        subtitle: 'K6 · Heptagonal 48mm',
        minClick: 0,
        maxClick: 180,
        // 8.5 µm/click + 40 µm zero offset back-fits HCG's K6 brew ranges
        // across espresso/moka/V60/aeropress within 0–4 clicks. Manufacturer's
        // 16 µm/click figure implies a >2800 µm range inconsistent with HCG's
        // "0–1350 µm" claim and brew-method placements. Same discrepancy shape
        // as K-Ultra (20 vs 7.6) and C2 (80 vs 35) — follow HCG.
        micronsPerClick: 8.5,
        zeroOffset: 40,
        majorTick: 60,
        clicksPerRotation: 60,
        accentColor: '#a07850',
        dialNotation: 'numbered',
        // External-dial grinder: French press and cold brew use HCG overrides
        // because the linear model diverges at the coarse end (non-linear gap
        // expansion per click). Espresso/moka/V60/aeropress use linear model.
        methodOverrides: {
          french: [82, 154],
          cold:   [95, 160],
        },
      },
      zpresso_q_air: {
        id: 'zpresso_q_air',
        name: '1Zpresso',
        model: 'Q Air',
        variants: 'Q Air / Q2 (heptagonal)',
        subtitle: 'Q Air · Heptagonal 38mm',
        minClick: 0,
        maxClick: 120,
        // 12.5 µm/click back-fits HCG's Q Air brew ranges across espresso/
        // moka/AeroPress/V60 within 1–2 clicks. Manufacturer's 25 µm/click
        // figure (1Zpresso Q-series manual: 0.75 mm/rotation ÷ 30 clicks)
        // implies a 3000 µm range — contradicts HCG's 0–1360 µm total.
        // Exactly 2× discrepancy; same pattern as K-Ultra and C2 — follow HCG.
        micronsPerClick: 12.5,
        zeroOffset: 0,
        majorTick: 10,
        clicksPerRotation: 30,
        clicksPerNumber: 3,
        accentColor: '#c47a5a',
        dialNotation: 'numbered',
      },
      mhw_blade_r3: {
        id: 'mhw_blade_r3',
        name: 'MHW-3BOMBER',
        model: 'Blade R3',
        subtitle: 'Blade R3 · Rapidity-3 48mm',
        minClick: 0,
        maxClick: 180,
        // HCG publishes 165-1180 µm across 180 clicks. MHW's 16 µm/click
        // figure is burr travel; the effective particle-size step back-fits to
        // (1180 - 165) / 180 = 5.6 µm/click.
        micronsPerClick: 5.6,
        zeroOffset: 165,
        majorTick: 60,
        clicksPerRotation: 60,
        // HCG notation uses rotation + number + tick, e.g. 1+10.3. A rotation
        // is 60 clicks, with 12 numbered positions and 5 ticks per number.
        clicksPerNumber: 5,
        accentColor: '#c8a878',
        dialNotation: 'numbered',
        // HCG Blade R3 settings converted to absolute clicks:
        // 0.3-7.3, 7-1+5.2, 5.3-2+4, 8.2-1+6.4, 1+6.4-3+0, 1+10.3-3+0.
        methodOverrides: {
          espresso: [3, 38],
          moka:     [35, 87],
          aeropress:[28, 140],
          v60:      [42, 94],
          french:   [94, 180],
          cold:     [113, 180],
        },
      },
      baratza_encore: {
        id: 'baratza_encore',
        name: 'Baratza',
        model: 'Encore',
        subtitle: 'Encore · 40 mm M3 conical',
        minClick: 0,
        maxClick: 40,
        // 26 µm/click + 270 µm zeroOffset back-fits HCG's Encore brew-method settings
        // to within ~1 click on espresso/moka/V60/AeroPress. The Encore has a large
        // baseline burr gap (HCG floor ~250 µm), so a zeroOffset=0 model fails. Step
        // size is non-uniform in hardware (~90 µm/step at the coarse end); this linear
        // fit is the best single-line approximation of HCG's bands.
        micronsPerClick: 26,
        zeroOffset: 270,
        majorTick: 5,
        accentColor: '#7a8a94',
      },
    };

    function formatClickString(grinder, click) {
      if (grinder.clicksPerRotation) {
        const r = Math.floor(click / grinder.clicksPerRotation);
        const rem = click % grinder.clicksPerRotation;
        if (grinder.clicksPerNumber) {
          const n = Math.floor(rem / grinder.clicksPerNumber);
          const c = rem % grinder.clicksPerNumber;
          return `${r}.${n}.${c}`;
        }
        return `${r}.${String(rem).padStart(2, '0')}`;
      }
      if (grinder.dialNotation === 'numbered') {
        const mt = grinder.majorTick || 10;
        return `${Math.floor(click / mt)}.${click % mt}`;
      }
      return String(click).padStart(2, '0');
    }

    // Returns [lo, hi] click range for a method on a grinder, or null if
    // the method is excluded or its micron range falls outside the grinder.
    // External-dial grinders (S3, ZP6, K-Ultra, Blade R3) carry methodOverrides that
    // win over the linear µm-derived range — burr geometry breaks linearity
    // and we display whatever HCG/manufacturer says the dial reads.
    function getMethodClickRange(grinder, methodId) {
      if (grinder.excludedMethods && grinder.excludedMethods.indexOf(methodId) !== -1) return null;
      if (grinder.methodOverrides && grinder.methodOverrides[methodId]) {
        return grinder.methodOverrides[methodId];
      }
      const mr = METHOD_MICRON_RANGES[methodId];
      if (!mr) return null;
      const rawLo = (mr[0] - grinder.zeroOffset) / grinder.micronsPerClick;
      const rawHi = (mr[1] - grinder.zeroOffset) / grinder.micronsPerClick;
      if (rawHi <= grinder.minClick || rawLo >= grinder.maxClick) return null;
      const lo = Math.max(grinder.minClick, Math.round(rawLo));
      const hi = Math.min(grinder.maxClick, Math.round(rawHi));
      return [lo, hi];
    }

    const METHODS = [
      { id: 'v60', label: 'V60' },
      { id: 'espresso', label: 'Espresso' },
      { id: 'aeropress', label: 'AeroPress' },
      { id: 'moka', label: 'Moka' },
      { id: 'chemex', label: 'Chemex' },
      { id: 'french', label: 'French Press' },
      { id: 'cold', label: 'Cold Brew' },
    ];

    function detectMethodFromClick(grinder, click) {
      const hits = METHODS
        .map((m) => ({ id: m.id, range: getMethodClickRange(grinder, m.id) }))
        .filter(({ range }) => range && click >= range[0] && click <= range[1]);
      if (hits.length === 0) return null;
      hits.sort((a, b) => (a.range[1] - a.range[0]) - (b.range[1] - b.range[0]));
      return hits[0].id;
    }

    // ========== PROCESSING GUIDE DATA ==========
    const PROCESSING_GUIDE = [
      { id: 'washed',          label: 'Washed',
        low:  { um: [600,700],  temp: [92,93], pos: [0.30, 0.50] },
        high: { um: [700,800],  temp: [92,93], pos: [0.55, 0.72] } },
      { id: 'exp_washed',      label: 'Exp. Washed',
        low:  { um: [850,900],  temp: [92,93], pos: [0.40, 0.60] },
        high: { um: [700,800],  temp: [90,92], pos: [0.45, 0.65] } },
      { id: 'honey',           label: 'Honey',
        low:  { um: [650,700],  temp: [90,92], pos: [0.25, 0.45] },
        high: { um: [700,800],  temp: [90,92], pos: [0.45, 0.62] } },
      { id: 'exp_honey',       label: 'Exp./Ext. Honey',
        low:  { um: [600,700],  temp: [91,93], pos: [0.20, 0.40] },
        high: { um: [700,800],  temp: [90,92], pos: [0.40, 0.58] } },
      { id: 'classic_natural', label: 'Classic Natural',
        low:  { um: [700,750],  temp: [88,92], pos: [0.18, 0.38] },
        high: { um: [550,650],  temp: [90,92], pos: [0.42, 0.60] } },
      { id: 'exp_natural',     label: 'Exp./Ext. Natural',
        low:  { um: [550,650],  temp: [87,90], pos: [0.12, 0.32] },
        high: { um: [500,650],  temp: [90,91], pos: [0.35, 0.52] } },
      { id: 'infused',         label: 'Infused / Others',
        low:  { um: [550,650],  temp: [87,90], pos: [0.10, 0.28] },
        high: { um: [500,550],  temp: [88,92], pos: [0.30, 0.48] } },
    ];

    const BREW_GUIDE = [
      { id: 'v60', label: 'V60', recipes: [
        { name: 'Standard', ratio: '1:15–17', steps: [
          'Bloom with 2× water, wait 30 s',
          'Pour in slow spirals to 60% of total by 1:00',
          'Finish pouring by 1:30–1:45; target draw-down by 2:30–3:00',
        ]},
        { name: 'Hoffmann', ratio: '1:16.7', steps: [
          'Bloom with 50g water for 45 s, swirl gently',
          'Pour continuously to full weight, aiming for 3:30 total',
          'Swirl finished brew in server before pouring',
        ]},
      ]},
      { id: 'aeropress', label: 'AeroPress', recipes: [
        { name: 'Standard', ratio: '1:13–16', steps: [
          'Insert and rinse filter; set up in standard (non-inverted) position',
          'Add coffee; pour all water at once and stir 10 s',
          'Steep 1:00–1:30, then press slowly over 30 s',
          'Dilute with hot water to taste',
        ]},
        { name: 'Inverted', ratio: '1:10–13', steps: [
          'Invert brewer; add coffee and concentrated water',
          'Stir 10 s; cap with rinsed filter, steep 2:00',
          'Flip onto cup; press slowly and stop before hiss',
          'Dilute 1:1 with hot water in cup',
        ]},
      ]},
      { id: 'chemex', label: 'Chemex', recipes: [
        { name: 'Standard', ratio: '1:15–17', steps: [
          'Bloom with 2× water for 45 s',
          'Pour in slow spirals across 3–4 pours; finish by 4:00–4:30',
          'Let drain fully — do not stir or swirl',
        ]},
      ]},
      { id: 'french_press', label: 'French Press', recipes: [
        { name: 'Standard', ratio: '1:15–17', steps: [
          'Preheat press with hot water; discard',
          'Add coffee; pour all water at once, stir briefly',
          'Steep 4:00, then slowly press plunger',
          'Decant immediately to avoid over-extraction',
        ]},
        { name: 'Hoffmann', ratio: '1:17', steps: [
          'Add coffee; pour all water, stir top layer at 4:00',
          'Scoop foam and grounds from surface; let settle 5:00 more',
          'Pour gently without pressing — no plunger needed',
          'Result: sediment-free cup without bitterness from pressing',
        ]},
      ]},
      { id: 'espresso', label: 'Espresso', recipes: [
        { name: 'Classic', ratio: '1:2–2.5', steps: [
          'Pull a short test shot to check flow before committing',
          'Distribute evenly and tamp with ~15 kg pressure',
          'Pull shot: target 25–30 s for the listed ratio yield',
          'Too fast (<20 s)? Grind finer. Too slow (>35 s)? Grind coarser',
        ]},
        { name: 'Lungo', ratio: '1:3–4', steps: [
          'Same prep as classic — distribute and tamp evenly',
          'Pull for 35–45 s; expect more bitter, floral notes',
          'Best with lighter roasts that can handle longer extraction',
          'Adjust grind coarser if shot chokes before target yield',
        ]},
      ]},
      { id: 'moka', label: 'Moka Pot', recipes: [
        { name: 'Standard', ratio: '1:7–10', steps: [
          'Fill bottom chamber with hot water to the valve level',
          'Add coffee loosely — do not tamp',
          'Heat on medium-low; remove from heat when sputtering begins',
          'Dilute 1:1 with hot water if desired',
        ]},
      ]},
      { id: 'cold_brew', label: 'Cold Brew', recipes: [
        { name: 'Standard', ratio: '1:8–10', steps: [
          'Combine coffee and cold water; stir to wet all grounds',
          'Cover and refrigerate 12–18 h (up to 24 h for bolder)',
          'Strain through fine mesh or paper filter',
          'Dilute 1:1 with water or milk before serving',
        ]},
      ]},
    ];

    function deriveDensity(roast, altitude) {
      const highSignals = (roast === 'filter' ? 1 : 0) + (altitude === 'high' ? 1 : 0);
      const lowSignals  = (roast === 'espresso' ? 1 : 0) + (altitude === 'low' ? 1 : 0);
      if (highSignals > lowSignals) return 'high';
      if (lowSignals > highSignals) return 'low';
      return 'both';
    }

    function dialerMicrons(rec, brewMethodId) {
      if (!brewMethodId || !DIALER_METHOD_RANGES[brewMethodId] || !rec.pos) return rec.um;
      const [lo, hi] = DIALER_METHOD_RANGES[brewMethodId];
      const span = hi - lo;
      return [Math.round(lo + rec.pos[0] * span), Math.round(lo + rec.pos[1] * span)];
    }

    // ========== AUDIO ENGINE ==========
    class ClickAudio {
      constructor() {
        this.ctx = null;
        this.enabled = true;
        this.hapticEnabled = true;
      }
      haptic(variant = 'detent') {
        if (!this.hapticEnabled || !navigator.vibrate) return;
        const patterns = { detent: [12], edge: [8, 30, 8], snap: [20] };
        navigator.vibrate(patterns[variant] || [12]);
      }
      init() {
        if (!this.ctx) {
          try {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
          } catch (e) {}
        }
        if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
      }
      click(variant = 'detent') {
        this.haptic(variant);
        if (!this.enabled || !this.ctx) return;
        const t = this.ctx.currentTime;

        const bufSize = Math.floor(this.ctx.sampleRate * 0.04);
        const buffer = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufSize * 0.15));
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        const noiseFilter = this.ctx.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.value = variant === 'edge' ? 1200 : 2400;
        noiseFilter.Q.value = 2;

        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(variant === 'snap' ? 0.18 : 0.09, t);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

        noise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(this.ctx.destination);
        noise.start(t);
        noise.stop(t + 0.05);

        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(variant === 'snap' ? 180 : 90, t);
        osc.frequency.exponentialRampToValueAtTime(40, t + 0.05);
        const oscGain = this.ctx.createGain();
        oscGain.gain.setValueAtTime(0.06, t);
        oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);
        osc.connect(oscGain);
        oscGain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.07);

        if (variant === 'snap') {
          const chime = this.ctx.createOscillator();
          chime.type = 'triangle';
          chime.frequency.value = 1760;
          const chimeGain = this.ctx.createGain();
          chimeGain.gain.setValueAtTime(0.04, t);
          chimeGain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
          chime.connect(chimeGain);
          chimeGain.connect(this.ctx.destination);
          chime.start(t);
          chime.stop(t + 0.25);
        }
      }
    }

    // ========== MAPPING LOGIC ==========
    function clickToMicrons(grinder, click) {
      return grinder.zeroOffset + click * grinder.micronsPerClick;
    }
    function micronsToClick(grinder, microns) {
      const raw = (microns - grinder.zeroOffset) / grinder.micronsPerClick;
      return Math.max(grinder.minClick, Math.min(grinder.maxClick, Math.round(raw)));
    }
    // For Bean Guide: grinders with methodOverrides have non-linear physical behavior.
    // Anchor on the V60 override range (pour-over territory matches all PROCESSING_GUIDE µm).
    function micronsToClickGuide(grinder, microns) {
      if (grinder.methodOverrides && grinder.methodOverrides.v60) {
        const umR = METHOD_MICRON_RANGES.v60;
        const clkR = grinder.methodOverrides.v60;
        const frac = Math.max(0, Math.min(1, (microns - umR[0]) / (umR[1] - umR[0])));
        return Math.round(clkR[0] + frac * (clkR[1] - clkR[0]));
      }
      return micronsToClick(grinder, microns);
    }
    function mapClicks(fromGrinder, toGrinder, click, methodId) {
      // When both grinders have a recommended range for this method and the
      // source click sits inside its own range, map by relative position
      // within that range — so V60 mid on C40 lands on V60 mid on S3, even
      // when burr geometry breaks linear µm/click. Outside the range, fall
      // back to linear µm/click.
      if (methodId) {
        const fromRange = getMethodClickRange(fromGrinder, methodId);
        const toRange = getMethodClickRange(toGrinder, methodId);
        if (fromRange && toRange && click >= fromRange[0] && click <= fromRange[1]) {
          const span = fromRange[1] - fromRange[0];
          const frac = span === 0 ? 0 : (click - fromRange[0]) / span;
          const mapped = toRange[0] + frac * (toRange[1] - toRange[0]);
          return Math.max(toGrinder.minClick, Math.min(toGrinder.maxClick, Math.round(mapped)));
        }
      }
      const microns = clickToMicrons(fromGrinder, click);
      return micronsToClick(toGrinder, microns);
    }

    // ========== DIAL COMPONENT ==========
    function Dial({ grinder, click, setClick, methodId, audio, isSource }) {
      const dialRef = useRef(null);
      const dragRef = useRef({ active: false, startAngle: 0, startClick: 0 });
      const lastSoundClickRef = useRef(click);
      const range = getMethodClickRange(grinder, methodId);
      const totalClicks = grinder.maxClick - grinder.minClick;

      const clickToAngleDeg = (c) => {
        const t = (c - grinder.minClick) / totalClicks;
        return -90 + t * 270;
      };
      const angleDeg = clickToAngleDeg(click);

      const getAngleFromEvent = (e) => {
        const rect = dialRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const x = (e.touches ? e.touches[0].clientX : e.clientX) - cx;
        const y = (e.touches ? e.touches[0].clientY : e.clientY) - cy;
        return (Math.atan2(y, x) * 180) / Math.PI;
      };

      const handlePointerDown = (e) => {
        audio.init();
        e.preventDefault();
        dragRef.current = {
          active: true,
          startAngle: getAngleFromEvent(e),
          startClick: click,
        };
      };

      const handlePointerMove = useCallback(
        (e) => {
          if (!dragRef.current.active) return;
          const currentAngle = getAngleFromEvent(e);
          let delta = currentAngle - dragRef.current.startAngle;
          while (delta > 180) delta -= 360;
          while (delta < -180) delta += 360;
          const clickDelta = (delta / 270) * totalClicks;
          const newClick = Math.max(
            grinder.minClick,
            Math.min(grinder.maxClick, Math.round(dragRef.current.startClick + clickDelta))
          );
          setClick(newClick);
        },
        [grinder, setClick, totalClicks]
      );

      const handlePointerUp = () => {
        dragRef.current.active = false;
      };

      useEffect(() => {
        const move = (e) => handlePointerMove(e);
        const up = () => handlePointerUp();
        window.addEventListener('mousemove', move);
        window.addEventListener('mouseup', up);
        window.addEventListener('touchmove', move, { passive: false });
        window.addEventListener('touchend', up);
        return () => {
          window.removeEventListener('mousemove', move);
          window.removeEventListener('mouseup', up);
          window.removeEventListener('touchmove', move);
          window.removeEventListener('touchend', up);
        };
      }, [handlePointerMove]);

      useEffect(() => {
        if (lastSoundClickRef.current !== click) {
          const atEdge = click === grinder.minClick || click === grinder.maxClick;
          audio.click(atEdge ? 'edge' : 'detent');
          lastSoundClickRef.current = click;
        }
      }, [click, grinder, audio]);

      const adjustClick = (delta) => {
        audio.init();
        const newClick = Math.max(
          grinder.minClick,
          Math.min(grinder.maxClick, click + delta)
        );
        if (newClick !== click) setClick(newClick);
      };

      const knurlTicks = useMemo(() => {
        const ticks = [];
        for (let i = 0; i < 60; i++) ticks.push((i / 60) * 360);
        return ticks;
      }, []);

      const numberedTicks = useMemo(() => {
        const ticks = [];
        for (let c = grinder.minClick; c <= grinder.maxClick; c++) {
          const isMajor = c % grinder.majorTick === 0;
          ticks.push({ click: c, angle: clickToAngleDeg(c), isMajor });
        }
        return ticks;
      }, [grinder]);

      const polarToCartesian = (cx, cy, r, angleDeg) => {
        const rad = ((angleDeg - 90) * Math.PI) / 180;
        return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
      };
      const describeArc = (cx, cy, r, startAngle, endAngle) => {
        const start = polarToCartesian(cx, cy, r, endAngle + 90);
        const end = polarToCartesian(cx, cy, r, startAngle + 90);
        const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
        return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
      };

      const inRecommended = range ? click >= range[0] && click <= range[1] : false;

      return (
        <div className="flex flex-col items-center select-none">
          <div className="mb-3 px-3 py-1.5 rounded-md flex flex-col items-center"
            style={{
              background: 'linear-gradient(180deg, #1f1c1a 0%, #141211 100%)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 1px 2px rgba(0,0,0,0.6)',
              border: '1px solid #0a0908',
            }}>
            <div className="text-[11px] tracking-[0.05em] uppercase text-stone-200" style={{ fontFamily: '"DM Mono", "Courier New", monospace' }}>
              {grinder.name}{grinder.model ? ` ${grinder.model}` : ''}
            </div>
            <div className="text-[9px] tracking-[0.07em] uppercase mt-0.5" style={{ color: grinder.accentColor, fontFamily: '"DM Mono", monospace' }}>
              {grinder.subtitle}
            </div>
          </div>

          <div className="relative" style={{ width: 280, height: 280 }}>
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle at 30% 25%, #2a2724 0%, #0a0908 80%)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.7), 0 2px 4px rgba(0,0,0,0.5)',
              }}
            />

            <svg className="absolute inset-0" viewBox="0 0 280 280" style={{ pointerEvents: 'none' }}>
              <defs>
                <radialGradient id={`bezelGrad-${grinder.id}`} cx="30%" cy="40%">
                  <stop offset="0%" stopColor="#3a3530" />
                  <stop offset="60%" stopColor="#1a1715" />
                  <stop offset="100%" stopColor="#050403" />
                </radialGradient>
                <linearGradient id={`bezelHi-${grinder.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
                </linearGradient>
              </defs>

              <circle cx="140" cy="140" r="138" fill={`url(#bezelGrad-${grinder.id})`} />
              <circle cx="140" cy="140" r="138" fill={`url(#bezelHi-${grinder.id})`} />

              {/* range arc hidden — buggy behaviour, tracked in issue #11
              {range && (
                <path
                  d={describeArc(140, 140, 124, clickToAngleDeg(range[0]), clickToAngleDeg(range[1]))}
                  fill="none"
                  stroke={grinder.accentColor}
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity={inRecommended ? 0.95 : 0.5}
                  style={{
                    filter: inRecommended ? `drop-shadow(0 0 6px ${grinder.accentColor})` : 'none',
                    transition: 'opacity 0.3s, filter 0.3s',
                  }}
                />
              )} */}

              {numberedTicks.map((t) => {
                const rad = ((t.angle - 90) * Math.PI) / 180;
                const r1 = 116;
                const r2 = t.isMajor ? 106 : 112;
                const x1 = 140 + r1 * Math.cos(rad);
                const y1 = 140 + r1 * Math.sin(rad);
                const x2 = 140 + r2 * Math.cos(rad);
                const y2 = 140 + r2 * Math.sin(rad);
                return (
                  <line
                    key={t.click}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={t.isMajor ? '#d4ccc0' : '#6a625a'}
                    strokeWidth={t.isMajor ? 1.5 : 0.8}
                    opacity={0.8}
                  />
                );
              })}

              {numberedTicks.filter((t) => t.isMajor).map((t) => {
                const rad = ((t.angle - 90) * Math.PI) / 180;
                const r = 96;
                const x = 140 + r * Math.cos(rad);
                const y = 140 + r * Math.sin(rad);
                return (
                  <text
                    key={`num-${t.click}`}
                    x={x}
                    y={y}
                    fill="#a8a098"
                    fontSize="10"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{ fontFamily: '"DM Mono", monospace', fontWeight: 500 }}
                  >
                    {grinder.dialNotation === 'numbered' ? t.click / grinder.majorTick : t.click}
                  </text>
                );
              })}
            </svg>

            <div
              ref={dialRef}
              onMouseDown={handlePointerDown}
              onTouchStart={handlePointerDown}
              className="absolute rounded-full cursor-grab active:cursor-grabbing"
              style={{
                left: 50,
                top: 50,
                width: 180,
                height: 180,
                background: `radial-gradient(circle at 30% 25%, #4a4540 0%, #2a2520 35%, #0a0908 100%)`,
                boxShadow: `inset 0 2px 4px rgba(255,255,255,0.08), inset 0 -3px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.7)`,
                transform: `rotate(${angleDeg}deg)`,
                transition: dragRef.current.active ? 'none' : 'transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1)',
                touchAction: 'none',
              }}
            >
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 180 180" style={{ pointerEvents: 'none' }}>
                <defs>
                  <radialGradient id={`knurlGrad-${grinder.id}`} cx="50%" cy="50%">
                    <stop offset="80%" stopColor="rgba(0,0,0,0)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0.4)" />
                  </radialGradient>
                </defs>
                {knurlTicks.map((deg, i) => {
                  const rad = ((deg - 90) * Math.PI) / 180;
                  const r1 = 76;
                  const r2 = 86;
                  const x1 = 90 + r1 * Math.cos(rad);
                  const y1 = 90 + r1 * Math.sin(rad);
                  const x2 = 90 + r2 * Math.cos(rad);
                  const y2 = 90 + r2 * Math.sin(rad);
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={i % 2 === 0 ? '#5a534c' : '#1a1715'}
                      strokeWidth="1"
                    />
                  );
                })}
                <circle cx="90" cy="90" r="86" fill={`url(#knurlGrad-${grinder.id})`} />
                <circle cx="90" cy="22" r="4" fill={grinder.accentColor}
                  style={{ filter: `drop-shadow(0 0 4px ${grinder.accentColor})` }} />
                <circle cx="90" cy="90" r="58" fill="#0a0908" stroke="#000" strokeWidth="1.5" />
              </svg>
            </div>

            <div
              className="absolute rounded-full flex flex-col items-center justify-center"
              style={{
                left: 90,
                top: 90,
                width: 100,
                height: 100,
                background: 'radial-gradient(circle at 50% 30%, #1a2520 0%, #0a1410 70%, #050807 100%)',
                boxShadow: 'inset 0 3px 8px rgba(0,0,0,0.95), inset 0 -1px 2px rgba(255,255,255,0.05)',
                border: '1px solid #000',
                pointerEvents: 'none',
              }}
            >
              <div
                className="text-[8px] tracking-[0.08em] uppercase mb-0.5"
                style={{
                  color: grinder.accentColor,
                  opacity: 0.6,
                  fontFamily: '"DM Mono", monospace',
                  visibility: grinder.dialNotation === 'numbered' ? 'hidden' : 'visible',
                }}
              >
                Clicks
              </div>
              <div
                className="leading-none font-bold tabular-nums"
                style={{
                  color: grinder.accentColor,
                  fontFamily: '"DM Mono", monospace',
                  letterSpacing: '-0.02em',
                  fontSize: grinder.clicksPerRotation
                    ? (grinder.clicksPerNumber ? '30px' : '36px')
                    : '44px',
                }}
              >
                {(() => {
                  const dot = <span style={{ fontSize: '0.5em', margin: '0 -0.08em' }}>.</span>;
                  if (grinder.clicksPerRotation) {
                    const r = Math.floor(click / grinder.clicksPerRotation);
                    const rem = click % grinder.clicksPerRotation;
                    if (grinder.clicksPerNumber) {
                      const n = Math.floor(rem / grinder.clicksPerNumber);
                      const c = rem % grinder.clicksPerNumber;
                      return <>{r}{dot}{n}{dot}{c}</>;
                    }
                    return <>{r}{dot}{String(rem).padStart(2, '0')}</>;
                  }
                  if (grinder.dialNotation === 'numbered') {
                    const mt = grinder.majorTick || 10;
                    return <>{Math.floor(click / mt)}{dot}{click % mt}</>;
                  }
                  return String(click).padStart(2, '0');
                })()}
              </div>
              <div
                className="text-[8px] tracking-[0.06em] mt-0.5"
                style={{ color: grinder.accentColor, opacity: 0.5, fontFamily: '"DM Mono", monospace' }}
              >
                ≈{Math.round(clickToMicrons(grinder, click))}µm
              </div>
            </div>

            <div
              className="absolute -top-1 left-1/2 -translate-x-1/2 px-2 py-1 rounded-full text-[9px] tracking-[0.06em] uppercase leading-none flex items-center"
              style={{
                background: isSource ? grinder.accentColor : '#2a2520',
                color: isSource ? '#0a0908' : '#6a625a',
                fontFamily: '"DM Mono", monospace',
                fontWeight: 600,
                boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              {isSource ? 'Source' : 'Mapped'}
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <button
              onClick={() => adjustClick(-1)}
              disabled={click <= grinder.minClick}
              className="w-12 h-12 rounded-lg flex items-center justify-center text-stone-200 text-xl font-light disabled:opacity-30 active:translate-y-0.5 transition-transform"
              style={{
                background: 'linear-gradient(180deg, #2a2520 0%, #14110f 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 4px rgba(0,0,0,0.6), 0 1px 0 rgba(0,0,0,0.8)',
                border: '1px solid #0a0908',
                fontFamily: '"DM Mono", monospace',
              }}
            >
              −
            </button>
            <button
              onClick={() => adjustClick(1)}
              disabled={click >= grinder.maxClick}
              className="w-12 h-12 rounded-lg flex items-center justify-center text-stone-200 text-xl font-light disabled:opacity-30 active:translate-y-0.5 transition-transform"
              style={{
                background: 'linear-gradient(180deg, #2a2520 0%, #14110f 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 4px rgba(0,0,0,0.6), 0 1px 0 rgba(0,0,0,0.8)',
                border: '1px solid #0a0908',
                fontFamily: '"DM Mono", monospace',
              }}
            >
              +
            </button>
          </div>
        </div>
      );
    }

    // ========== GRINDER PICKER ==========
    function GrinderPicker({ value, onChange, nullable = false }) {
      const [open, setOpen] = useState(false);
      const options = Object.values(GRINDERS);
      const current = value ? GRINDERS[value] : null;

      return (
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="w-full px-3 py-2 rounded-md flex items-center justify-between text-xs tracking-wider"
            style={{
              background: 'linear-gradient(180deg, #1f1c1a 0%, #14110f 100%)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 1px 2px rgba(0,0,0,0.5)',
              border: '1px solid #0a0908',
              fontFamily: '"DM Mono", monospace',
              color: current ? '#e2e8f0' : '#6b7280',
            }}
          >
            <span className="uppercase">{current ? `${current.name}${(current.variants || current.model) ? ` ${current.variants || current.model}` : ''}` : 'None — show µm only'}</span>
            <ChevronDownIcon size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
          </button>
          {open && (
            <div
              className="absolute top-full left-0 right-0 mt-1 rounded-md overflow-hidden z-20"
              style={{
                background: '#14110f',
                boxShadow: '0 8px 24px rgba(0,0,0,0.7)',
                border: '1px solid #0a0908',
              }}
            >
              {nullable && (
                <button
                  onClick={() => { onChange(null); setOpen(false); }}
                  className="w-full px-3 py-2 text-left text-stone-500 text-xs tracking-wider uppercase hover:bg-stone-800 transition-colors"
                  style={{ fontFamily: '"DM Mono", monospace' }}
                >
                  None — show µm only
                </button>
              )}
              {options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    onChange(opt.id);
                    setOpen(false);
                  }}
                  className="w-full px-3 py-2 text-left text-stone-300 text-xs tracking-wider uppercase hover:bg-stone-800 transition-colors"
                  style={{ fontFamily: '"DM Mono", monospace' }}
                >
                  {opt.name}{(opt.variants || opt.model) ? ` ${opt.variants || opt.model}` : ''}
                </button>
              ))}
            </div>
          )}
        </div>
      );
    }

    function parseDialerHash() {
      const m = window.location.hash.match(/^#d\/([^/]+)\/([^/]+)\/([^/]+)\/([^/]+)\/([^/]+)(?:\/([^/]+))?$/);
      if (!m) return null;
      return {
        process: m[1], roast: m[2], altitude: m[3],
        brewMethod: m[4],
        grinderId: m[5] === 'none' ? null : m[5],
        recipeName: m[6] || null,
      };
    }

    function RecipeWorkflow({ brew, selectedRecipe, grinder, grindInfo, onClose }) {
      const totalSteps = selectedRecipe.steps.length;
      const [stepElapsed, setStepElapsed] = useState(() => new Array(totalSteps).fill(0));
      const [activeStep, setActiveStep] = useState(null);
      const [doneSteps, setDoneSteps] = useState(new Set());
      const [copied, setCopied] = useState(false);
      const intervalRef = useRef(null);

      const monoStyle = { fontFamily: '"DM Mono", monospace' };

      useEffect(() => {
        if (activeStep !== null) {
          intervalRef.current = setInterval(() => {
            setStepElapsed(e => e.map((v, i) => i === activeStep ? v + 1 : v));
          }, 1000);
        } else {
          clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
      }, [activeStep]);

      function toggleStep(i) {
        setActiveStep(prev => prev === i ? null : i);
      }

      function resetStep(i) {
        if (activeStep === i) setActiveStep(null);
        setStepElapsed(e => e.map((v, j) => j === i ? 0 : v));
      }

      function toggleDone(i) {
        if (activeStep === i) setActiveStep(null);
        setDoneSteps(prev => {
          const next = new Set(prev);
          if (next.has(i)) next.delete(i); else next.add(i);
          return next;
        });
      }

      function handleShare() {
        navigator.clipboard?.writeText(window.location.href).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }).catch(() => {});
      }

      function fmt(secs) {
        return `${String(Math.floor(secs / 60)).padStart(2, '0')}:${String(secs % 60).padStart(2, '0')}`;
      }

      return (
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 rounded-md transition-colors flex-shrink-0"
              style={{ background: '#1a1714', border: '1px solid #2a2520', color: '#a8a098' }}
            >
              <ArrowLeftIcon size={14} />
            </button>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] tracking-[0.08em] uppercase" style={{ color: '#6a8a7a', ...monoStyle }}>{brew.label}</div>
              <div className="text-[11px] tracking-[0.06em] uppercase truncate" style={{ color: '#c8c0b0', ...monoStyle }}>
                {selectedRecipe.name}
                <span style={{ color: '#3a3a34', margin: '0 0.4em' }}>·</span>
                {selectedRecipe.ratio}
              </div>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center justify-center w-8 h-8 rounded-md transition-all flex-shrink-0"
              style={{
                background: copied ? 'linear-gradient(180deg, #1a2a1a 0%, #101810 100%)' : '#1a1714',
                border: copied ? '1px solid #2a5030' : '1px solid #2a2520',
                color: copied ? '#9bb086' : '#6a6a64',
              }}
              title="Copy link"
            >
              {copied ? <CheckIcon size={14} /> : <ShareIcon size={14} />}
            </button>
          </div>

          {/* Grind context */}
          {grindInfo && (
            <div
              className="px-3 py-2.5 rounded-md flex items-center gap-4"
              style={{ background: 'linear-gradient(180deg, #141c14 0%, #0a100a 100%)', border: '1px solid #1a3020' }}
            >
              {grinder ? (
                <div className="flex-1 min-w-0">
                  <div className="text-[8px] tracking-[0.08em] uppercase mb-0.5" style={{ color: '#3a6040', ...monoStyle }}>Grinder</div>
                  <div className="text-[10px] tracking-[0.04em] truncate" style={{ color: '#9bb086', ...monoStyle }}>
                    {grinder.name} {grinder.model}
                  </div>
                </div>
              ) : (
                <div className="flex-1">
                  <div className="text-[8px] tracking-[0.08em] uppercase mb-0.5" style={{ color: '#3a6040', ...monoStyle }}>Grind</div>
                  <div className="text-[10px] tracking-[0.04em]" style={{ color: '#9bb086', ...monoStyle }}>
                    {grindInfo.um[0]}–{grindInfo.um[1]} µm
                  </div>
                </div>
              )}
              {grinder && grindInfo.clickRange && (
                <div>
                  <div className="text-[8px] tracking-[0.08em] uppercase mb-0.5" style={{ color: '#3a6040', ...monoStyle }}>Setting</div>
                  <div className="text-[10px] tracking-[0.04em]" style={{ color: '#9bb086', ...monoStyle }}>
                    {formatClickString(grinder, grindInfo.clickRange[0])} – {formatClickString(grinder, grindInfo.clickRange[1])}
                  </div>
                </div>
              )}
              <div>
                <div className="text-[8px] tracking-[0.08em] uppercase mb-0.5" style={{ color: '#3a6040', ...monoStyle }}>Temp</div>
                <div className="text-[10px] tracking-[0.04em]" style={{ color: '#9bb086', ...monoStyle }}>
                  {grindInfo.temp[0]}–{grindInfo.temp[1]}°C
                </div>
              </div>
            </div>
          )}

          {/* Steps */}
          <div className="space-y-2">
            {selectedRecipe.steps.map((text, i) => {
              const running = activeStep === i;
              const done = doneSteps.has(i);
              return (
                <div
                  key={i}
                  className="px-3 py-3 rounded-md"
                  style={{
                    background: done
                      ? 'linear-gradient(180deg, #0f0f0e 0%, #0a0a08 100%)'
                      : running
                        ? 'linear-gradient(180deg, #141c14 0%, #0a100a 100%)'
                        : 'linear-gradient(180deg, #141210 0%, #0c0a08 100%)',
                    border: done ? '1px solid #1a1a18' : running ? '1px solid #2a4020' : '1px solid #1e1a16',
                    transition: 'background 0.2s, border-color 0.2s',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => toggleDone(i)}
                      className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center mt-0.5 transition-all"
                      style={{
                        background: done ? '#1a3020' : '#1a1714',
                        border: done ? '1px solid #2a5030' : '1px solid #2a2520',
                        color: done ? '#6a9a7a' : '#4a4a44',
                      }}
                    >
                      {done
                        ? <CheckIcon size={10} />
                        : <span style={{ fontSize: 9, fontFamily: '"DM Mono", monospace', letterSpacing: '0.04em' }}>{i + 1}</span>
                      }
                    </button>
                    <div
                      className="flex-1 text-[12px] leading-relaxed"
                      style={{
                        color: done ? '#3a3a34' : '#c8c0b0',
                        textDecoration: done ? 'line-through' : 'none',
                        textDecorationColor: '#2a2a24',
                        ...monoStyle,
                      }}
                    >
                      {text}
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0 pt-0.5">
                      <span
                        className="text-[11px] tabular-nums w-10 text-right"
                        style={{ color: running ? '#9bb086' : '#3a3a34', ...monoStyle }}
                      >
                        {fmt(stepElapsed[i])}
                      </span>
                      <button
                        onClick={() => toggleStep(i)}
                        className="w-6 h-6 rounded flex items-center justify-center transition-all"
                        style={{
                          background: running
                            ? 'linear-gradient(180deg, #3a5030 0%, #243220 100%)'
                            : 'linear-gradient(180deg, #2a2520 0%, #1a1510 100%)',
                          border: running ? '1px solid #2a4020' : '1px solid #0a0908',
                          color: running ? '#9bb086' : '#6a6a64',
                        }}
                      >
                        {running ? <PauseIcon size={9} /> : <PlayIcon size={9} />}
                      </button>
                      {stepElapsed[i] > 0 && (
                        <button
                          onClick={() => resetStep(i)}
                          className="w-6 h-6 rounded flex items-center justify-center"
                          style={{ background: '#1a1714', border: '1px solid #0a0908', color: '#4a4a44' }}
                        >
                          <RotateCcwIcon size={9} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // ========== BEAN GUIDE ==========
    function BeanGuide() {
      const [process, setProcess] = useState(() => parseDialerHash()?.process || null);
      const [roast, setRoast]     = useState(() => parseDialerHash()?.roast || null);
      const [altitude, setAlt]    = useState(() => parseDialerHash()?.altitude || null);
      const [brewMethod, setBrewMethod] = useState(() => parseDialerHash()?.brewMethod || null);
      const [grinderId, setGrinderId] = useState(() => {
        const h = parseDialerHash();
        return (h?.grinderId) || localStorage.getItem('grindercal_last_grinder') || 'timemore_s3';
      });
      const grinder = grinderId ? GRINDERS[grinderId] : null;

      const density = (roast !== null && altitude !== null) ? deriveDensity(roast, altitude) : null;
      const guide   = process ? PROCESSING_GUIDE.find(p => p.id === process) : null;
      const brew = brewMethod ? BREW_GUIDE.find(b => b.id === brewMethod) : null;

      const [activeGrindInfo, setActiveGrindInfo] = useState(() => {
        const h = parseDialerHash();
        if (!h?.recipeName || !h.process || !h.roast || !h.altitude) return null;
        const g = PROCESSING_GUIDE.find(p => p.id === h.process);
        if (!g) return null;
        const d = deriveDensity(h.roast, h.altitude);
        const rec = g[d === 'both' ? 'low' : d];
        const um = dialerMicrons(rec, h.brewMethod);
        const gid = h.grinderId || localStorage.getItem('grindercal_last_grinder') || 'timemore_s3';
        const gr = gid ? GRINDERS[gid] : null;
        return { um, temp: rec.temp, clickRange: gr ? [micronsToClickGuide(gr, um[0]), micronsToClickGuide(gr, um[1])] : null };
      });
      const [activeRecipe, setActiveRecipe] = useState(() => {
        const h = parseDialerHash();
        if (!h?.recipeName) return null;
        const b = BREW_GUIDE.find(b => b.id === h.brewMethod);
        if (!b) return null;
        return b.recipes.find(r => r.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === h.recipeName) || null;
      });
      const [workflowActive, setWorkflowActive] = useState(() => {
        const h = parseDialerHash();
        return !!(h?.recipeName);
      });

      useEffect(() => {
        if (!process || !roast || !altitude) return;
        const t = setTimeout(() => {
          const g = PROCESSING_GUIDE.find(p => p.id === process);
          const d = deriveDensity(roast, altitude);
          const buildOutput = (rec) => {
            const um = dialerMicrons(rec, brewMethod);
            return {
              clicks: grinder ? [micronsToClickGuide(grinder, um[0]), micronsToClickGuide(grinder, um[1])] : null,
              clicks_formatted: grinder ? `${formatClickString(grinder, micronsToClickGuide(grinder, um[0]))} – ${formatClickString(grinder, micronsToClickGuide(grinder, um[1]))}` : null,
              microns: um,
              temp: rec.temp,
            };
          };
          const suggestion = d === 'both'
            ? { low: buildOutput(g.low), high: buildOutput(g.high) }
            : { [d]: buildOutput(g[d]) };
          posthog.capture('dialer_result_shown', {
            process,
            roast,
            altitude,
            grinder_id: grinderId,
            grinder_name: grinder ? `${grinder.name} ${grinder.model}`.trim() : null,
            density: d,
            combo: `${process}·${roast}·${altitude}`,
            suggestion,
            brew_method: brewMethod,
          });
        }, 800);
        return () => clearTimeout(t);
      }, [process, roast, altitude, grinderId, brewMethod]);

      const pillBase = {
        fontFamily: '"DM Mono", monospace',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 1px 2px rgba(0,0,0,0.5)',
        border: '1px solid #0a0908',
      };
      const pillActive = {
        fontFamily: '"DM Mono", monospace',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 2px 4px rgba(0,0,0,0.6)',
        border: '1px solid #5a4530',
        fontWeight: 600,
      };
      function Pill({ label, active, onClick }) {
        return (
          <button
            onClick={onClick}
            className="flex-shrink-0 px-3 py-1.5 rounded-full text-[10px] tracking-[0.06em] uppercase transition-all"
            style={active ? {
              ...pillActive,
              background: 'linear-gradient(180deg, #c89d6a 0%, #8a6a44 100%)',
              color: '#0a0807',
            } : {
              ...pillBase,
              background: 'linear-gradient(180deg, #1f1c1a 0%, #14110f 100%)',
              color: '#a8a098',
            }}
          >
            {label}
          </button>
        );
      }

      function ResultCard({ rec, densityLabel, grinder: cardGrinder }) {
        const um = dialerMicrons(rec, brewMethod);
        const lo = micronsToClickGuide(cardGrinder || grinder, um[0]);
        const hi = micronsToClickGuide(cardGrinder || grinder, um[1]);
        const g = cardGrinder || grinder;
        return (
          <div
            className="flex-1 px-4 py-3 rounded-md"
            style={{
              background: 'linear-gradient(180deg, #141c14 0%, #0a100a 100%)',
              border: '1px solid #1a3020',
            }}
          >
            <div className="text-[9px] tracking-[0.08em] uppercase mb-2" style={{ color: '#6a9a7a', fontFamily: '"DM Mono", monospace' }}>
              {densityLabel} density
            </div>
            {g && (
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-[11px] tracking-[0.06em] uppercase text-stone-400" style={{ fontFamily: '"DM Mono", monospace', minWidth: 52 }}>Grind</span>
                <span className="text-[18px] font-bold tabular-nums leading-none" style={{ color: '#9bb086', fontFamily: '"DM Mono", monospace', letterSpacing: '-0.02em' }}>
                  {formatClickString(g, lo)} – {formatClickString(g, hi)}
                </span>
              </div>
            )}
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="text-[11px] tracking-[0.06em] uppercase text-stone-400" style={{ fontFamily: '"DM Mono", monospace', minWidth: 52 }}>Microns</span>
              <span className="text-[13px] tabular-nums" style={{ color: '#c8c0b0', fontFamily: '"DM Mono", monospace' }}>{um[0]}–{um[1]} µm</span>
            </div>
            {brewMethod !== 'cold_brew' && (
              <div className="flex items-baseline gap-1.5">
                <span className="text-[11px] tracking-[0.06em] uppercase text-stone-400" style={{ fontFamily: '"DM Mono", monospace', minWidth: 52 }}>Temp</span>
                <span className="text-[13px] tabular-nums" style={{ color: '#c8c0b0', fontFamily: '"DM Mono", monospace' }}>{rec.temp[0]}–{rec.temp[1]}°C</span>
              </div>
            )}
            {brewMethod === 'cold_brew' && (
              <div className="flex items-baseline gap-1.5">
                <span className="text-[11px] tracking-[0.06em] uppercase text-stone-400" style={{ fontFamily: '"DM Mono", monospace', minWidth: 52 }}>Temp</span>
                <span className="text-[13px]" style={{ color: '#6a8a7a', fontFamily: '"DM Mono", monospace' }}>Cold / ambient</span>
              </div>
            )}
          </div>
        );
      }

      const showResult = guide && density;

      function openRecipe(r) {
        const d = density === 'both' ? 'low' : density;
        const rec = guide[d];
        const um = dialerMicrons(rec, brewMethod);
        const info = { um, temp: rec.temp, clickRange: grinder ? [micronsToClickGuide(grinder, um[0]), micronsToClickGuide(grinder, um[1])] : null };
        setActiveGrindInfo(info);
        setActiveRecipe(r);
        setWorkflowActive(true);
        const slug = r.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        window.history.replaceState(null, '', `#d/${process}/${roast}/${altitude}/${brewMethod}/${grinderId || 'none'}/${slug}`);
        posthog.capture('dialer_option_selected', { type: 'recipe', value: slug, label: r.name });
      }

      function closeRecipe() {
        setWorkflowActive(false);
        setActiveRecipe(null);
        setActiveGrindInfo(null);
        window.history.replaceState(null, '', '#dialer');
      }

      if (workflowActive && activeRecipe) {
        return (
          <RecipeWorkflow
            brew={brew || BREW_GUIDE.find(b => b.recipes.includes(activeRecipe))}
            selectedRecipe={activeRecipe}
            grinder={grinder}
            grindInfo={activeGrindInfo}
            onClose={closeRecipe}
          />
        );
      }

      return (
        <div className="space-y-4">
          {/* Process */}
          <div>
            <div className="text-[9px] tracking-[0.08em] uppercase text-stone-500 mb-2" style={{ fontFamily: '"DM Mono", monospace' }}>Processing</div>
            <div className="-mx-1 overflow-x-auto">
              <div className="flex gap-1.5 px-1">
                {PROCESSING_GUIDE.map(p => (
                  <Pill key={p.id} label={p.label} active={process === p.id} onClick={() => { setProcess(p.id); posthog.capture('dialer_option_selected', { type: 'process', value: p.id, label: p.label }); }} />
                ))}
              </div>
            </div>
          </div>

          {/* Roast */}
          <div>
            <div className="text-[9px] tracking-[0.08em] uppercase text-stone-500 mb-2" style={{ fontFamily: '"DM Mono", monospace' }}>Roast profile</div>
            <div className="flex gap-1.5">
              {[['filter','Filter / Omni'],['espresso','Espresso'],['unknown','Not listed']].map(([id, lbl]) => (
                <Pill key={id} label={lbl} active={roast === id} onClick={() => { setRoast(id); posthog.capture('dialer_option_selected', { type: 'roast', value: id, label: lbl }); }} />
              ))}
            </div>
          </div>

          {/* Altitude */}
          <div>
            <div className="text-[9px] tracking-[0.08em] uppercase text-stone-500 mb-2" style={{ fontFamily: '"DM Mono", monospace' }}>Altitude</div>
            <div className="flex gap-1.5">
              {[['high','High (>1400m)'],['low','Low (<1400m)'],['unknown','Not listed']].map(([id, lbl]) => (
                <Pill key={id} label={lbl} active={altitude === id} onClick={() => { setAlt(id); posthog.capture('dialer_option_selected', { type: 'altitude', value: id, label: lbl }); }} />
              ))}
            </div>
          </div>

          {/* Brewer */}
          <div>
            <div className="text-[9px] tracking-[0.08em] uppercase text-stone-500 mb-2" style={{ fontFamily: '"DM Mono", monospace' }}>Brewer</div>
            <div className="-mx-1 overflow-x-auto">
              <div className="flex gap-1.5 px-1">
                {BREW_GUIDE.map(b => (
                  <Pill key={b.id} label={b.label} active={brewMethod === b.id} onClick={() => {
                    setBrewMethod(brewMethod === b.id ? null : b.id);
                    posthog.capture('dialer_option_selected', { type: 'brew_method', value: b.id, label: b.label });
                  }} />
                ))}
              </div>
            </div>
          </div>

          {/* Grinder */}
          <div>
            <div className="text-[9px] tracking-[0.08em] uppercase text-stone-500 mb-2" style={{ fontFamily: '"DM Mono", monospace' }}>Grinder</div>
            <GrinderPicker value={grinderId} nullable={true} onChange={(id) => {
              setGrinderId(id);
              if (id) localStorage.setItem('grindercal_last_grinder', id);
              else localStorage.removeItem('grindercal_last_grinder');
              posthog.capture('dialer_option_selected', { type: 'grinder', value: id, label: id ? `${GRINDERS[id].name} ${GRINDERS[id].model}`.trim() : 'none' });
            }} />
          </div>

          {/* Result */}
          {showResult && (
            <div className="pt-2">
              <div className="text-[9px] tracking-[0.08em] uppercase text-stone-500 mb-2" style={{ fontFamily: '"DM Mono", monospace' }}>Recommendations <span className="normal-case" style={{ textTransform: 'none', letterSpacing: '0.02em' }}>(adjust ±1–2 clicks to taste)</span></div>
              <div className="flex gap-3">
                {density === 'both' ? (
                  <>
                    <ResultCard rec={guide.low}  densityLabel="Low"  grinder={grinder} />
                    <ResultCard rec={guide.high} densityLabel="High" grinder={grinder} />
                  </>
                ) : (
                  <ResultCard rec={guide[density]} densityLabel={density === 'high' ? 'High' : 'Low'} grinder={grinder} />
                )}
              </div>
              {brew && showResult && (
                <div className="mt-1.5 space-y-1.5">
                  {brew.recipes.map((r, i) => (
                    <button
                      key={i}
                      onClick={() => openRecipe(r)}
                      className="w-full px-4 py-2 rounded-md flex items-center justify-between transition-all"
                      style={{
                        background: 'linear-gradient(180deg, #141c14 0%, #0a100a 100%)',
                        border: '1px solid #1a3020',
                        fontFamily: '"DM Mono", monospace',
                      }}
                    >
                      <span className="text-[9px] tracking-[0.08em] uppercase" style={{ color: '#6a9a7a' }}>
                        {r.name}
                        <span style={{ color: '#2a4a34', margin: '0 0.4em' }}>·</span>
                        {r.ratio}
                      </span>
                      <span className="flex items-center gap-1" style={{ color: '#3a6040' }}>
                        <span className="text-[9px] tracking-[0.08em] uppercase">Start</span>
                        <PlayIcon size={8} />
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      );
    }

    // ========== GRINDER DISCLAIMER ==========
    function GrinderDisclaimer({ grinder, methodId }) {
      if (grinder.id !== 'zp6') return null;
      const isEspresso = methodId === 'espresso';
      return (
        <div
          className="mt-3 px-3 py-2 rounded-md text-[9px] leading-relaxed"
          style={{
            background: 'linear-gradient(180deg, #141c20 0%, #0a1014 100%)',
            border: `1px solid #1a3040`,
            color: '#7ab4d0',
            fontFamily: '"DM Mono", monospace',
            letterSpacing: '0.05em',
          }}
        >
          {isEspresso && (
            <div className="mb-1" style={{ color: '#d07a7a' }}>
              ⚠ Espresso not supported — hexagonal burrs cannot generate the particle distribution needed for 9-bar extraction. No recommended range exists for this method.
            </div>
          )}
          <div style={{ opacity: 0.8 }}>
            ◈ Mapping is approximate — hexagonal (6-edge) burrs produce a narrower, more unimodal distribution than the C40 Nitro Blade or Timemore burrs. At equivalent click settings expect a cleaner, lighter-bodied cup. Trend finer than the mapped value if under-extracting.
          </div>
          <div className="mt-1" style={{ opacity: 0.55 }}>
            22 µm/click is vertical burr travel, not particle-size delta.
          </div>
        </div>
      );
    }

    // ========== DISCLAIMER MODAL ==========
    function DisclaimerModal({ onClose }) {
      return (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: 'rgba(0,0,0,0.7)' }}
          onClick={onClose}
        >
          <div
            className="w-full max-w-sm rounded-lg px-5 py-5"
            style={{
              background: 'linear-gradient(180deg, #1a1714 0%, #110f0d 100%)',
              border: '1px solid #2a2520',
              boxShadow: '0 16px 48px rgba(0,0,0,0.8)',
              fontFamily: '"DM Mono", monospace',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="text-[9px] tracking-[0.1em] uppercase mb-3" style={{ color: '#6a8a7a' }}>About the mapping</div>
            <p className="text-[11px] leading-relaxed mb-3" style={{ color: '#a8a098', letterSpacing: '0.03em' }}>
              Ranges are adapted from{' '}
              <a href="https://honestcoffeeguide.com/" target="_blank" rel="noopener noreferrer"
                onClick={() => posthog.capture('link_clicked', { label: 'Honest Coffee Guide', href: 'https://honestcoffeeguide.com/' })}
                style={{ color: '#9bb086', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
                Honest Coffee Guide
              </a>{' '}
              community brew charts, not manufacturer µm/click specs.
            </p>
            <p className="text-[11px] leading-relaxed mb-4" style={{ color: '#a8a098', letterSpacing: '0.03em' }}>
              Different grinder designs measure different things — the mapping gives you a calibrated starting point, not a physical equivalent. Microns per click is vertical burr travel, not particle-size delta.
            </p>
            <button
              onClick={onClose}
              className="w-full py-2 rounded-md text-[10px] tracking-[0.06em] uppercase transition-colors"
              style={{
                background: '#2a2520',
                border: '1px solid #3a3530',
                color: '#6a6a64',
                fontFamily: '"DM Mono", monospace',
              }}
            >
              Close
            </button>
          </div>
        </div>
      );
    }

    // ========== MAIN APP ==========
    function App() {
      const audioRef = useRef(new ClickAudio());
      const [soundOn, setSoundOn] = useState(true);
      const [historyOpen, setHistoryOpen] = useState(false);
      const [disclaimerOpen, setDisclaimerOpen] = useState(false);
      const [tab, setTab] = useState(() => {
        const h = window.location.hash;
        return (h === '#dialer' || h.startsWith('#d/')) ? 'guide' : 'calibrate';
      });
      const [history, setHistory] = useState([]);
      const [methodId, setMethodId] = useState('v60');
      const [leftId, setLeftId] = useState(() => localStorage.getItem('grindercal_last_grinder') || 'commandante');
      const [rightId, setRightId] = useState('timemore_s3');
      const [leftClick, setLeftClick] = useState(20);
      const [rightClick, setRightClick] = useState(35);
      const [lockedSide, setLockedSide] = useState(null);
      const [activeSide, setActiveSide] = useState('left');
      const syncingRef = useRef(false);

      const leftGrinder = GRINDERS[leftId];
      const rightGrinder = GRINDERS[rightId];

      useEffect(() => {
        audioRef.current.enabled = soundOn;
        audioRef.current.hapticEnabled = soundOn;
      }, [soundOn]);

      useEffect(() => {
        const h = window.location.hash;
        if (tab === 'guide') {
          if (!h.startsWith('#d/') && h !== '#dialer') window.history.replaceState(null, '', '#dialer');
        } else {
          if (h !== '#calibrator') window.history.replaceState(null, '', '#calibrator');
        }
      }, [tab]);

      useEffect(() => {
        const onHashChange = () => {
          const h = window.location.hash;
          setTab((h === '#dialer' || h.startsWith('#d/')) ? 'guide' : 'calibrate');
        };
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
      }, []);

      useEffect(() => {
        const t = setTimeout(() => {
          posthog.capture('grind_mapped', {
            source_grinder_id: leftId,
            source_grinder_name: `${leftGrinder.name} ${leftGrinder.model}`.trim(),
            source_click: leftClick,
            target_grinder_id: rightId,
            target_grinder_name: `${rightGrinder.name} ${rightGrinder.model}`.trim(),
            target_click: rightClick,
            method_id: methodId,
            mapping_pair: `${leftId}→${rightId}`,
          });
        }, 1200);
        return () => clearTimeout(t);
      }, [leftId, rightId, leftClick, rightClick, methodId]);

      const handleLeftGrinderChange = (newId) => {
        const oldGrinder = GRINDERS[leftId];
        const newGrinder = GRINDERS[newId];
        posthog.capture('grinder_selected', { side: 'source', grinder_id: newId, grinder_name: newGrinder.name, grinder_model: newGrinder.model });
        syncingRef.current = true;
        setLeftId(newId);
        localStorage.setItem('grindercal_last_grinder', newId);
        const remapped = mapClicks(oldGrinder, newGrinder, leftClick, methodId);
        setLeftClick(remapped);
        if (lockedSide !== 'right') {
          setRightClick(mapClicks(newGrinder, GRINDERS[rightId], remapped, methodId));
        }
        setTimeout(() => { syncingRef.current = false; }, 50);
      };
      const handleRightGrinderChange = (newId) => {
        const oldGrinder = GRINDERS[rightId];
        const newGrinder = GRINDERS[newId];
        posthog.capture('grinder_selected', { side: 'target', grinder_id: newId, grinder_name: newGrinder.name, grinder_model: newGrinder.model });
        syncingRef.current = true;
        setRightId(newId);
        const remapped = mapClicks(oldGrinder, newGrinder, rightClick, methodId);
        setRightClick(remapped);
        if (lockedSide !== 'left') {
          setLeftClick(mapClicks(newGrinder, GRINDERS[leftId], remapped, methodId));
        }
        setTimeout(() => { syncingRef.current = false; }, 50);
      };

      const handleLeftChange = (newClick) => {
        if (syncingRef.current) return;
        setLeftClick(newClick);
        setActiveSide('left');
        const detected = detectMethodFromClick(leftGrinder, newClick);
        if (detected && detected !== methodId) setMethodId(detected);
        if (lockedSide === 'left') return;
        syncingRef.current = true;
        setRightClick(mapClicks(leftGrinder, rightGrinder, newClick, detected || methodId));
        setTimeout(() => { syncingRef.current = false; }, 50);
      };
      const handleRightChange = (newClick) => {
        if (syncingRef.current) return;
        setRightClick(newClick);
        setActiveSide('right');
        const detected = detectMethodFromClick(rightGrinder, newClick);
        if (detected && detected !== methodId) setMethodId(detected);
        if (lockedSide === 'right') return;
        syncingRef.current = true;
        setLeftClick(mapClicks(rightGrinder, leftGrinder, newClick, detected || methodId));
        setTimeout(() => { syncingRef.current = false; }, 50);
      };

      const handleMethodChange = (id) => {
        const label = METHODS.find((m) => m.id === id)?.label || id;
        posthog.capture('method_selected', { method_id: id, method_label: label });
        setMethodId(id);
        const lr = getMethodClickRange(leftGrinder, id);
        const rr = getMethodClickRange(rightGrinder, id);
        syncingRef.current = true;
        if (lr) setLeftClick(Math.round((lr[0] + lr[1]) / 2));
        if (rr) setRightClick(Math.round((rr[0] + rr[1]) / 2));
        setTimeout(() => { syncingRef.current = false; }, 50);
      };

      const saveSnapshot = () => {
        audioRef.current.init();
        const snap = {
          id: Date.now(),
          method: methodId,
          left: { id: leftId, click: leftClick, name: leftGrinder.name },
          right: { id: rightId, click: rightClick, name: rightGrinder.name },
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setHistory((h) => [snap, ...h].slice(0, 8));
        posthog.capture('snapshot_saved', {
          source_grinder_id: leftId,
          source_grinder_name: `${leftGrinder.name} ${leftGrinder.model}`.trim(),
          source_click: leftClick,
          target_grinder_id: rightId,
          target_grinder_name: `${rightGrinder.name} ${rightGrinder.model}`.trim(),
          target_click: rightClick,
          method_id: methodId,
          mapping_pair: `${leftId}→${rightId}`,
        });
        audioRef.current.click('snap');
      };

      const restoreSnapshot = (snap) => {
        posthog.capture('snapshot_viewed', {
          source_grinder_id: snap.left.id,
          source_grinder_name: snap.left.name,
          source_click: snap.left.click,
          target_grinder_id: snap.right.id,
          target_grinder_name: snap.right.name,
          target_click: snap.right.click,
          method_id: snap.method,
          mapping_pair: `${snap.left.id}→${snap.right.id}`,
        });
        setMethodId(snap.method);
        setLeftId(snap.left.id);
        setRightId(snap.right.id);
        syncingRef.current = true;
        setLeftClick(snap.left.click);
        setRightClick(snap.right.click);
        setHistoryOpen(false);
        setTimeout(() => { syncingRef.current = false; }, 50);
      };

      return (
        <div
          className="min-h-screen w-full overflow-x-hidden"
          style={{
            background: `radial-gradient(ellipse at top, #1a1715 0%, #0a0807 60%, #050403 100%)`,
            fontFamily: '"Inter", -apple-system, sans-serif',
          }}
        >
          <style>{`
            body { background: #050403; margin: 0; }
            .grain-overlay::before {
              content: '';
              position: fixed;
              inset: 0;
              pointer-events: none;
              opacity: 0.05;
              z-index: 100;
              background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
            }
          `}</style>
          <div className="grain-overlay" />

          <header
            className="sticky top-0 z-30 px-4 py-3 flex items-center justify-between"
            style={{
              background: 'linear-gradient(180deg, #14110f 0%, #0a0807 100%)',
              borderBottom: '1px solid #000',
              boxShadow: '0 2px 8px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            <button
              onClick={() => setHistoryOpen(!historyOpen)}
              className="w-9 h-9 rounded-md flex items-center justify-center text-stone-300 active:translate-y-0.5 transition-transform"
              style={{
                background: 'linear-gradient(180deg, #2a2520 0%, #14110f 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 1px 2px rgba(0,0,0,0.6)',
                border: '1px solid #0a0908',
              }}
            >
              <HistoryIcon size={16} />
            </button>

            <div
              className="flex items-center"
              style={{
                background: '#0a0908',
                borderRadius: 9999,
                padding: '3px',
                border: '1px solid #2a2520',
                gap: 2,
              }}
            >
              {[['calibrate','Calibrator',false],['guide','Dialer',true]].map(([id,lbl,beta]) => {
                const active = tab === id;
                return (
                  <button
                    key={id}
                    onClick={() => { setTab(id); posthog.capture('tab_switched', { tab: id }); }}
                    className="transition-all active:scale-95"
                    style={{
                      borderRadius: 9999,
                      padding: '5px 14px',
                      fontSize: 11,
                      fontFamily: '"DM Mono", monospace',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      background: active ? 'linear-gradient(180deg, #2a2520 0%, #1a1510 100%)' : 'transparent',
                      color: active ? '#d4c8b8' : '#6a625a',
                      boxShadow: active ? 'inset 0 1px 0 rgba(255,255,255,0.08), 0 1px 3px rgba(0,0,0,0.7)' : 'none',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    {lbl}
                    {beta && (
                      <span style={{
                        fontSize: 8,
                        letterSpacing: '0.04em',
                        color: active ? '#c89d6a' : '#4a4240',
                        background: active ? 'rgba(200,157,106,0.15)' : 'transparent',
                        padding: '1px 4px',
                        borderRadius: 4,
                        fontWeight: 600,
                      }}>beta</span>
                    )}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => {
                const next = !soundOn;
                setSoundOn(next);
                if (next) audioRef.current.init();
              }}
              className="w-9 h-9 rounded-md flex items-center justify-center text-stone-300 active:translate-y-0.5 transition-transform"
              style={{
                background: 'linear-gradient(180deg, #2a2520 0%, #14110f 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 1px 2px rgba(0,0,0,0.6)',
                border: '1px solid #0a0908',
              }}
            >
              {soundOn ? <Volume2Icon size={16} /> : <VolumeXIcon size={16} />}
            </button>
          </header>

          {historyOpen && (
            <div
              className="px-4 py-3 border-b"
              style={{
                background: '#0a0807',
                borderColor: '#000',
                boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.6)',
              }}
            >
              <div className="text-[10px] tracking-[0.08em] uppercase text-stone-500 mb-2" style={{ fontFamily: '"DM Mono", monospace' }}>
                Recent Settings
              </div>
              {history.length === 0 ? (
                <div className="text-xs text-stone-600 italic py-2" style={{ fontFamily: '"DM Mono", monospace' }}>
                  No saved settings yet — tap "Save Snapshot" below.
                </div>
              ) : (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {history.map((h) => (
                    <button
                      key={h.id}
                      onClick={() => restoreSnapshot(h)}
                      className="flex-shrink-0 px-3 py-2 rounded-md text-left"
                      style={{
                        background: 'linear-gradient(180deg, #1f1c1a 0%, #14110f 100%)',
                        border: '1px solid #2a2520',
                        minWidth: 140,
                      }}
                    >
                      <div className="text-[9px] tracking-[0.05em] uppercase text-stone-500" style={{ fontFamily: '"DM Mono", monospace' }}>
                        {h.time} · {h.method}
                      </div>
                      <div className="text-xs text-stone-200 mt-1 tabular-nums" style={{ fontFamily: '"DM Mono", monospace' }}>
                        {formatClickString(GRINDERS[h.left.id], h.left.click)} → {formatClickString(GRINDERS[h.right.id], h.right.click)}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <main className="px-4 pt-6 pb-20 max-w-md md:max-w-4xl mx-auto">
            {tab === 'guide' && <BeanGuide />}

            {tab === 'calibrate' && <>
            <div className="mb-6 -mx-1 overflow-x-auto">
              <div className="flex gap-1.5 px-1">
                {METHODS.map((m) => {
                  const active = m.id === methodId;
                  return (
                    <button
                      key={m.id}
                      onClick={() => handleMethodChange(m.id)}
                      className="flex-shrink-0 px-3 py-1.5 rounded-full text-[10px] tracking-[0.06em] uppercase transition-all"
                      style={{
                        background: active
                          ? 'linear-gradient(180deg, #c89d6a 0%, #8a6a44 100%)'
                          : 'linear-gradient(180deg, #1f1c1a 0%, #14110f 100%)',
                        color: active ? '#0a0807' : '#a8a098',
                        boxShadow: active
                          ? 'inset 0 1px 0 rgba(255,255,255,0.2), 0 2px 4px rgba(0,0,0,0.6)'
                          : 'inset 0 1px 0 rgba(255,255,255,0.05), 0 1px 2px rgba(0,0,0,0.5)',
                        border: active ? '1px solid #5a4530' : '1px solid #0a0908',
                        fontFamily: '"DM Mono", monospace',
                        fontWeight: active ? 600 : 400,
                      }}
                    >
                      {m.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start md:gap-6">

              {/* LEFT GRINDER */}
              <div className="flex-1 min-w-0">
                <div className="mb-3">
                  <GrinderPicker value={leftId} onChange={handleLeftGrinderChange} />
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <button
                    onClick={saveSnapshot}
                    className="text-[9px] tracking-[0.06em] uppercase text-stone-500 hover:text-stone-300 transition-colors flex items-center leading-none gap-1"
                    style={{ fontFamily: '"DM Mono", monospace' }}
                  >
                    <BookmarkIcon size={10} />
                    Save Snapshot
                  </button>
                  <button
                    onClick={() => setLockedSide(lockedSide === 'left' ? null : 'left')}
                    className="text-[9px] tracking-[0.06em] uppercase text-stone-500 hover:text-stone-300 transition-colors flex items-center leading-none gap-1"
                    style={{ fontFamily: '"DM Mono", monospace' }}
                  >
                    {lockedSide === 'left' ? <LockIcon size={10} /> : <UnlockIcon size={10} />}
                    {lockedSide === 'left' ? 'Locked' : 'Lock'}
                  </button>
                </div>
                <div className="flex justify-center mb-4">
                  <Dial
                    grinder={leftGrinder}
                    click={leftClick}
                    setClick={handleLeftChange}
                    methodId={methodId}
                    audio={audioRef.current}
                    isSource={activeSide === 'left'}
                  />
                </div>
                <GrinderDisclaimer grinder={leftGrinder} methodId={methodId} />
              </div>

              {/* CONNECTOR */}
              <div className="flex flex-col md:flex-row items-center my-2 md:my-0 md:self-center md:pt-16">
                <div className="w-px h-8 md:w-8 md:h-px" style={{ background: 'linear-gradient(to bottom, transparent, #2a2520, transparent)' }} />
              </div>

              {/* RIGHT GRINDER */}
              <div className="flex-1 min-w-0">
                <div className="mb-3">
                  <GrinderPicker value={rightId} onChange={handleRightGrinderChange} />
                </div>
                <div className="mb-2 flex items-center justify-end">
                  <button
                    onClick={() => setLockedSide(lockedSide === 'right' ? null : 'right')}
                    className="text-[9px] tracking-[0.06em] uppercase text-stone-500 hover:text-stone-300 transition-colors flex items-center leading-none gap-1"
                    style={{ fontFamily: '"DM Mono", monospace' }}
                  >
                    {lockedSide === 'right' ? <LockIcon size={10} /> : <UnlockIcon size={10} />}
                    {lockedSide === 'right' ? 'Locked' : 'Lock'}
                  </button>
                </div>
                <div className="flex justify-center">
                  <Dial
                    grinder={rightGrinder}
                    click={rightClick}
                    setClick={handleRightChange}
                    methodId={methodId}
                    audio={audioRef.current}
                    isSource={activeSide === 'right'}
                  />
                </div>
                <GrinderDisclaimer grinder={rightGrinder} methodId={methodId} />
              </div>

            </div>

            </>}

            <div
              className="mt-16 mb-2 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-0 text-[10px] text-stone-700"
              style={{ fontFamily: '"DM Mono", monospace', letterSpacing: '0.05em' }}
            >
              <span>
                made by{' '}
                <a href="https://www.instagram.com/filtercoffeeconnoisseur" target="_blank" rel="noopener noreferrer"
                  onClick={() => posthog.capture('link_clicked', { label: '@filtercoffeeconnoisseur', href: 'https://www.instagram.com/filtercoffeeconnoisseur' })}
                  style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
                  @filtercoffeeconnoisseur
                </a>
                {' '}with Claude
              </span>
              <span className="hidden sm:inline mx-2" style={{ color: '#3a3530' }}>·</span>
              <a href="https://github.com/inosaint/grinder-calibrator/issues" target="_blank" rel="noopener noreferrer"
                onClick={() => posthog.capture('link_clicked', { label: 'report a bug', href: 'https://github.com/inosaint/grinder-calibrator/issues' })}
                style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
                report a bug
              </a>
              <span className="hidden sm:inline mx-2" style={{ color: '#3a3530' }}>·</span>
              <button
                onClick={() => setDisclaimerOpen(true)}
                style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '2px', background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: '"DM Mono", monospace', fontSize: 'inherit', letterSpacing: 'inherit' }}
              >
                disclaimer
              </button>
            </div>
            {disclaimerOpen && <DisclaimerModal onClose={() => setDisclaimerOpen(false)} />}
          </main>
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
