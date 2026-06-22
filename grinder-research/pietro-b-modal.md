# Fiorenzato Pietro B-Modal — Grinder Research

## TL;DR

- **Recommended first Pietro config:** B-Modal / MultiPurpose, because it is the all-method burr set. Pietro describes B-Modal as suitable from espresso to filter; M-Modal / ProBrewing is the cleaner, filter-focused burr.
- **HCG range:** Honest Coffee Guide lists Fiorenzato Pietro (B-Modal Burrs) as **170-920 microns**.
- **Effective app fit:** `zeroOffset: 170`, `micronsPerClick: 7.5`, `minClick: 0`, `maxClick: 100`.
- **Hardware spec discrepancy:** Pietro says the 360 degree dial has approximately **15 microns per click**. HCG's published 170-920 micron range over `0-10.0` implies `(920 - 170) / 100 = 7.5 µm/click`. Follow HCG for the calibrator, as with C2/C3/K-Ultra/K6/Q Air/Blade R3.
- **Dial notation:** HCG uses two-part `N.C` settings, e.g. `3.1`, read as number + step. In the app this is `dialNotation: 'numbered'`, `majorTick: 10`, with no multi-rotation fields.

## HCG Method Ranges

HCG settings are converted to absolute clicks with `N.C = N * 10 + C`.

| App method | HCG setting | Absolute clicks |
|---|---:|---:|
| Espresso | 0.2-2.8 | 2-28 |
| Moka | 2.6-6.5 | 26-65 |
| AeroPress | 2.0-10.0 | 20-100 |
| V60 | 3.1-7.0 | 31-70 |
| French Press | 7.0-10.0 | 70-100 |
| Cold Brew | 8.4-10.0 | 84-100 |

HCG does not publish a Chemex-specific Pietro row. The app keeps using the shared micron-derived Chemex range, which maps near the coarse end of this grinder.

## Back-fit Check

Using only HCG's total range:

```js
micronsPerClick = (920 - 170) / 100 // 7.5
zeroOffset = 170
```

The shared app micron ranges then produce plausible but imperfect direct ranges:

| App method | Shared micron range | Linear derived clicks | HCG clicks |
|---|---:|---:|---:|
| Espresso | 210-390 | 5-29 | 2-28 |
| Moka | 420-720 | 33-73 | 26-65 |
| AeroPress | 360-1050 | 25-100 | 20-100 |
| V60 | 450-750 | 37-77 | 31-70 |
| French Press | 780-1200 | 81-100 | 70-100 |
| Cold Brew | 900-1200 | 97-100 | 84-100 |

Because the app already uses `methodOverrides` for external-dial grinders where HCG's brew bands diverge from a single linear model, the Pietro B-Modal should carry direct HCG overrides for the published methods.

## Recommended Config

```js
pietro_b_modal: {
  id: 'pietro_b_modal',
  name: 'Fiorenzato Pietro',
  model: 'B-Modal',
  subtitle: 'B-Modal · 58mm flat',
  minClick: 0,
  maxClick: 100,
  // HCG publishes 170-920 µm across 0-10.0. Pietro's official 15 µm/click
  // is treated as hardware travel; HCG back-fits to 7.5 µm/click.
  micronsPerClick: 7.5,
  zeroOffset: 170,
  majorTick: 10,
  accentColor: '#8f8a63',
  dialNotation: 'numbered',
  methodOverrides: {
    espresso: [2, 28],
    moka:     [26, 65],
    aeropress:[20, 100],
    v60:      [31, 70],
    french:   [70, 100],
    cold:     [84, 100],
  },
}
```

## Caveats

- **B-Modal and M-Modal are separate configs.** The burrs are interchangeable, but HCG gives them different micron floors and method ranges. Do not merge them as variants.
- **M-Modal / ProBrewing:** HCG lists the M-Modal range as 230-980 microns, with V60 at `2.3-6.2` and cold brew at `7.6-10.0`. Add it later as `pietro_m_modal` if filter-focused Pietro coverage is wanted.
- **Chemex:** HCG has "Pour Over" but no Chemex row for Pietro. Leave Chemex derived from shared microns unless user data suggests a direct override.

## Sources

- Honest Coffee Guide, Fiorenzato Pietro (B-Modal Burrs) grind settings: https://honestcoffeeguide.com/fiorenzato-pietro-b-modal-burrs-grind-settings/
- Honest Coffee Guide, Fiorenzato Pietro (M-Modal Burrs) grind settings: https://honestcoffeeguide.com/fiorenzato-pietro-m-modal-burrs-grind-settings/
- Pietro product page: https://pietrogrinders.com/shop/en/products/pietro-manual-coffee-grinder.html
- Pietro MultiPurpose (B-Modal) burrs: https://pietrogrinders.com/shop/en/accessories/multipurpose-b-modal-burrs.html
- Pietro ProBrewing (M-Modal) burrs: https://pietrogrinders.com/shop/en/accessories/probrewing-m-modal-burrs.html
