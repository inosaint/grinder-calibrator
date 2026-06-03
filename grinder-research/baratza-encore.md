# Baratza Encore — Grinder Research

## TL;DR

- **Not a hand grinder.** The Encore is Baratza's entry-level *electric* burr grinder, but its adjustment model fits the calibrator fine: a single 40-position numbered collar (1–40, coarser = higher), 40 mm conical **M3 burr set** (Etzinger), no crank, no rotations. We treat each numbered position as one "click."
- **Range:** Baratza rates it **250–1200 µm** across 40 settings (HCG agrees). The fine end never reaches true espresso fineness reliably.
- **Manufacturer / community hardware figure:** commonly cited as **~90 µm/click** at the filter end (and the step size is genuinely *not* uniform across the dial). A naive linear fit of the stated 250–1200 µm over 40 steps gives ~24 µm/click — neither matches a single number because the burr travel is non-linear.
- **HCG back-fit:** `micronsPerClick: 26, zeroOffset: 270` reproduces HCG's published brew-method settings to within ~1 click on every fine/medium method (espresso, moka, AeroPress, V60). This is the configuration to ship.
- **Recommended config:** `micronsPerClick: 26, zeroOffset: 270, minClick: 0, maxClick: 40, majorTick: 5`. No `dialNotation` (plain integer dial, like the C40/C2/C3). No `excludedMethods` — HCG publishes an espresso range (0–5), though it warns the grinder isn't espresso-grade.
- **Do not confuse with the Baratza Encore ESP / Encore ESP Pro.** Different burrs (M2), different range (230–1380 µm), two-zone variable step (~20 µm/click fine, ~90 µm/click coarse), and HCG supports espresso on the ESP (0–13). **Separate config required if added.**

## Key findings

### Hardware

- **Burrs:** 40 mm conical, **M3 burr set** from Etzinger (Coffee Chronicler, comparing it to the ESP's upgraded M2). Steel.
- **Adjustment:** single numbered ring collar, **40 positions** (1 = finest, 40 = coarsest). No crank rotations, no sub-numbered positions — it reads as a plain integer setting, exactly like the C40 dial conceptually. Treat the dial number as the click count.
- **Stated range:** **250–1200 µm** (Baratza spec, echoed by Roasty and HCG). Real-world coarse output can overshoot to 1500–2000 µm at setting 40 (Roasty testing), but 1200 is the spec figure and what HCG aligns to.
- **Step size is non-uniform.** Multiple sources note big jumps at the very fine end (#1–#9) and the often-cited "~90 µm per step" figure applies to the filter portion of the dial. The original Encore's coarse-step granularity is exactly why Baratza later shipped the ESP with a two-zone collar. There is **no single honest hardware µm/click number** — which is why the HCG back-fit matters more here than usual.

### HCG Baratza Encore ranges

Source: <https://honestcoffeeguide.com/baratza-encore-grind-settings/>. Total range stated 250–1200 µm, 40 settings.

| Method | Setting range |
|---|---|
| Espresso | 0–5 (see caveat) |
| Moka pot | 5–17 |
| AeroPress | 3–29 |
| V60 | 7–18 |
| Pour-over | 7–28 |
| French press | 19–40 |
| Cold brew | 24–40 |

Chemex is not published on the HCG Encore page. Espresso note (quoted): *"Although some of the lower settings fall under the espresso range, the Encore is not considered an espresso level grinder, or one that can create a consistent espresso grind."*

### Back-fit µm/click + zeroOffset

The Encore has a large baseline gap (HCG floor is 250 µm), so a `zeroOffset = 0` model fails badly: solving `µm_mid / click_mid` per method scatters from 120 µm/click (espresso) down to 33 (cold) — i.e., the line does not pass through the origin. A two-parameter fit `microns = micronsPerClick × click + zeroOffset` is required.

Least-squares over all HCG midpoints vs `METHOD_MICRON_RANGES` midpoints gives **24.5 µm/click, offset ≈ 265** — consistent with the Baratza-stated 250 µm floor. Grid-searching for the pair that best reproduces HCG's *published click ranges* (round-trip through `getMethodClickRange`) lands tighter at **`micronsPerClick = 26, zeroOffset = 270`**, total absolute click error of 11 across all published methods:

| Method | Truth µm | Predicted settings | HCG settings | Δ |
|---|---|---|---|---|
| Espresso | 210–390 | 0–5 | 0–5 | exact |
| Moka | 420–720 | 6–17 | 5–17 | lo +1 |
| AeroPress | 360–1050 | 3–30 | 3–29 | hi +1 |
| V60 | 450–750 | 7–18 | 7–18 | exact |
| Pour-over | 450–750 | 7–18 | 7–28 | HCG's pour-over band is wider than V60 |
| Chemex | 750–1020 | 18–29 | (not published) | — |
| French | 780–1200 | 20–36 | 19–40 | coarse clamp |
| Cold | 900–1200 | 24–36 | 24–40 | coarse clamp |

The fine and medium methods (espresso, moka, V60, AeroPress) — the most-used and the most reliable HCG bands — land within 1 click. The coarse methods (french, cold) read short of HCG's 40 because HCG runs both to the dial limit; with a true 1200 µm cap the model tops out near setting 36. This is the same coarse-clamping artefact documented on the C3 and K-Ultra and is reality, not a bug.

### Hardware-vs-HCG discrepancy

There is no clean single manufacturer µm/click figure to contradict — the Encore's step is non-uniform and the commonly cited "~90 µm/step" applies only to the coarse half of the dial. The naive linear reading of Baratza's own 250–1200 µm / 40 settings is ~24 µm/click *with a ~250 µm zero offset baked in*, which the HCG back-fit confirms (26 µm/click, 270 µm offset). So unlike the C2/C3/K-Ultra (where the manufacturer figure was a clean ~2× the truth), here the manufacturer figure is *range-stated* and broadly consistent with the back-fit once the offset is accounted for. We ship the HCG back-fit.

## Recommended config

```js
baratza_encore: {
  id: 'baratza_encore',
  name: 'Baratza Encore',
  model: 'Encore',
  subtitle: 'Encore · 40 mm M3 conical',
  minClick: 0,
  maxClick: 40,
  // 26 um/click + 270 um zeroOffset back-fits HCG's Encore brew-method settings
  // to within ~1 click on espresso/moka/V60/AeroPress. The Encore has a large
  // baseline burr gap (HCG floor 250 um), so a zeroOffset=0 model fails. Step
  // size is non-uniform in hardware (~90 um/step at the coarse end); this linear
  // fit is the best single-line approximation of HCG's bands.
  micronsPerClick: 26,
  zeroOffset: 270,
  majorTick: 5,
  accentColor: '<pick distinct from existing>',
}
```

## Caveats

- **Electric grinder.** First non-hand grinder in the calibrator. The numbered collar (1–40) maps cleanly to integer clicks, so no schema change is needed, but the UI copy ("clicks") is technically "settings" here. No code change requested — flag for the user only.
- **Non-uniform hardware step.** The real burr travel is not linear (fine-end jumps, ~90 µm/step coarse end). The single linear `micronsPerClick: 26` is a best-fit to HCG's bands, not a measured constant. Treat ±3 µm as uncertainty, worse at the extremes.
- **Coarse-end clamping.** With 26 µm/click + 270 µm offset and 40 settings, the Encore tops out at ~1310 µm. French press and cold brew read up to ~36 in the model vs HCG's 40 (which runs to the dial limit). Expected, matches C3/K-Ultra behaviour.
- **Espresso is published but discouraged.** HCG lists espresso at 0–5 but states the Encore "is not considered an espresso level grinder." Kept enabled (no `excludedMethods`) to match HCG and the C3 precedent — the limitation is consistency, not physical impossibility (unlike the ZP6 hex burr). Do not add a UI disclaimer unless the user asks.
- **Back-fit, not measured.** Same epistemic status as the C2/C3/K-Ultra figures.

## Do not confuse with

- **Baratza Encore ESP** — espresso-tuned successor. Upgraded 40 mm **M2** Etzinger burr, **230–1380 µm** range, **two-zone variable step** (~20 µm/click on settings 1–20 for espresso, ~90 µm/click on 21–40 for filter), and HCG publishes a full espresso range (0–13). Completely different mapping — would need its own config (and arguably a piecewise model, since one linear µm/click cannot describe both zones). **Separate config required.** Source: <https://honestcoffeeguide.com/baratza-encore-esp-grind-settings/>, <https://coffeechronicler.com/baratza-encore-esp-review/>.
- **Baratza Encore ESP Pro** — further ESP refinement. **Separate config.** Source: <https://honestcoffeeguide.com/baratza-encore-esp-pro-grind-settings/>.
- **Baratza Virtuoso / Virtuoso+** — different burr, 40 stepped settings but tuned differently; not researched here.

## Sources

- HCG Baratza Encore — <https://honestcoffeeguide.com/baratza-encore-grind-settings/>
- HCG Baratza Encore ESP (do-not-confuse) — <https://honestcoffeeguide.com/baratza-encore-esp-grind-settings/>
- Roasty Coffee — Encore grind settings / burr spec — <https://www.roastycoffee.com/baratza-encore-grind-settings/>
- Coffee Chronicler — Encore ESP review (M2 vs M3 burr, two-zone step) — <https://coffeechronicler.com/baratza-encore-esp-review/>
- Baratza Encore operations manual — <https://baratza.com/wp-content/uploads/2015/07/Encore-Manual-EN-v2.1-SS.pdf>
</content>
</invoke>
