# Fiorenzato Pietro M-Modal — Grinder Research

## TL;DR

- **Recommended config:** separate Pietro M-Modal / ProBrewing entry. Do not merge with B-Modal; HCG gives different micron floors and brew-method ranges.
- **HCG range:** Honest Coffee Guide lists Fiorenzato Pietro (M-Modal Burrs) as **230-980 microns**.
- **Effective app fit:** `zeroOffset: 230`, `micronsPerClick: 7.5`, `minClick: 0`, `maxClick: 100`.
- **Hardware spec discrepancy:** Pietro says the 360 degree dial has approximately **15 microns per click**. HCG's published 230-980 micron range over `0-10.0` implies `(980 - 230) / 100 = 7.5 µm/click`. Follow HCG for the calibrator, as with B-Modal and the other HCG-backed configs.
- **Dial notation:** HCG uses two-part `N.C` settings, e.g. `2.3`, read as number + step. In the app this is `dialNotation: 'numbered'`, `majorTick: 10`, with no multi-rotation fields.

## Key findings

### Hardware

- **Grinder:** Fiorenzato Pietro manual grinder, sold with either B-Modal / MultiPurpose or M-Modal / ProBrewing burrs.
- **Burrs:** 58 mm vertical flat burrs, M340 food-grade steel, manufactured in-house by Fiorenzato. Pietro describes M-Modal / ProBrewing as a unimodal geometry that reduces fines and targets clearer aromatics for brewing.
- **Adjustment:** one 360 degree numbered dial from `0` to `10.0`; HCG describes settings as Number + steps. The official page says each click is approximately 15 microns.
- **Capacity / body:** 60 g bean capacity, 1.5 kg body, food-grade plastic and aluminium body, silicone grip, neodymium magnets.
- **Zero point:** HCG's grinder-specific page expresses the usable grind-size range as 230-980 microns across `0-10.0`; use that as a 230 µm effective zero offset for the app. Pietro's public product page does not document a separate burrs-touching zero procedure.

### HCG M-Modal click ranges

Source: <https://honestcoffeeguide.com/fiorenzato-pietro-m-modal-burrs-grind-settings/>. HCG settings are converted to absolute clicks with `N.C = N * 10 + C`.

| App method | HCG setting | Absolute clicks |
|---|---:|---:|
| Espresso | 0-2.0 | 0-20 |
| Moka | 1.8-5.7 | 18-57 |
| AeroPress | 1.2-9.7 | 12-97 |
| V60 | 2.3-6.2 | 23-62 |
| French Press | 6.2-10.0 | 62-100 |
| Cold Brew | 7.6-10.0 | 76-100 |

HCG does not publish a Chemex-specific Pietro row. The app can keep Chemex derived from the shared micron model, which maps to `[69, 100]` after clamping.

## Back-fit Check

Using HCG's published total range:

```js
micronsPerClick = (980 - 230) / 100 // 7.5
zeroOffset = 230
```

The shared app micron ranges then produce close espresso alignment but imperfect direct brew bands, so the implementer should use HCG `methodOverrides` for the published methods:

| App method | Shared micron range | Linear derived clicks | HCG clicks |
|---|---:|---:|---:|
| Espresso | 210-390 | 0-21 | 0-20 |
| Moka | 420-720 | 25-65 | 18-57 |
| AeroPress | 360-1050 | 17-100 | 12-97 |
| V60 | 450-750 | 29-69 | 23-62 |
| French Press | 780-1200 | 73-100 | 62-100 |
| Cold Brew | 900-1200 | 89-100 | 76-100 |

Range-slope checks from HCG method spans cluster around the same 7.5-8.1 µm/click through moka, V60, and AeroPress:

| Method | µm range | HCG click range | Span slope |
|---|---:|---:|---:|
| Moka | 420-720 | 18-57 | 300/39 = 7.69 |
| V60 | 450-750 | 23-62 | 300/39 = 7.69 |
| AeroPress | 360-1050 | 12-97 | 690/85 = 8.12 |

Espresso is clamped at zero and coarse methods are clamped at `10.0`, so the total-range fit is the cleanest stable config: `micronsPerClick: 7.5`, `zeroOffset: 230`.

## Recommended Config

```js
pietro_m_modal: {
  id: 'pietro_m_modal',
  name: 'Fiorenzato Pietro',
  model: 'M-Modal',
  subtitle: 'M-Modal · 58mm flat',
  minClick: 0,
  maxClick: 100,
  // HCG publishes 230-980 µm across 0-10.0. Pietro's official 15 µm/click
  // is treated as hardware travel; HCG back-fits to 7.5 µm/click.
  micronsPerClick: 7.5,
  zeroOffset: 230,
  majorTick: 10,
  accentColor: '<choose a distinct color>',
  dialNotation: 'numbered',
  methodOverrides: {
    espresso: [0, 20],
    moka:     [18, 57],
    aeropress:[12, 97],
    v60:      [23, 62],
    french:   [62, 100],
    cold:     [76, 100],
  },
}
```

## Caveats

- **M-Modal and B-Modal are separate configs.** The burrs are interchangeable, but HCG gives M-Modal a 230-980 µm range and B-Modal a 170-920 µm range, plus different brew-method click ranges.
- **Espresso is listed by HCG but not the burr's design target.** Pietro positions M-Modal / ProBrewing as cleaner, clearer brewing burrs. The app should not exclude espresso because HCG publishes an espresso range, but users should treat it as a starting point rather than an all-method burr recommendation.
- **Chemex:** HCG has "Pour Over" but no Chemex row for Pietro. Leave Chemex derived from shared microns unless user data suggests a direct override.
- **No variants:** Colorways and burr swaps do not make M-Modal a variant of B-Modal for app purposes; this config is specifically for Pietro fitted with M-Modal / ProBrewing burrs.

## Do not confuse with

- **Fiorenzato Pietro B-Modal / MultiPurpose** — same grinder body and adjustment dial, different 58 mm burr geometry. HCG lists B-Modal at 170-920 µm and gives different method ranges. Already covered separately as `pietro_b_modal`.
- **Fiorenzato AllGround / electric flat-burr grinders** — same parent manufacturer, different grinder class and adjustment system. Not covered.

## Sources

- Honest Coffee Guide, Fiorenzato Pietro (M-Modal Burrs) grind settings: https://honestcoffeeguide.com/fiorenzato-pietro-m-modal-burrs-grind-settings/
- Honest Coffee Guide, Fiorenzato Pietro (B-Modal Burrs) grind settings: https://honestcoffeeguide.com/fiorenzato-pietro-b-modal-burrs-grind-settings/
- Pietro product page: https://pietrogrinders.com/shop/en/products/pietro-manual-coffee-grinder.html
- Pietro ProBrewing (M-Modal) burrs: https://pietrogrinders.com/shop/en/accessories/probrewing-m-modal-burrs.html
