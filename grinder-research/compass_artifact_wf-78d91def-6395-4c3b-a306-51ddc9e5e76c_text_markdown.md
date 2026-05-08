# Timemore Chestnut C2 — Grinder Mapping Spec

## TL;DR
- The Timemore Chestnut C2 ships with **38 mm stainless-steel "Standard" conical burrs** and a single un-numbered stepped ring giving **~36 clicks total from a burrs-touching zero**, with each click ≈ **80 µm (0.08 mm)** — Timemore does not publish a C2-specific micron/click figure, but its English service-center burr-resolution table lists "Standard Burrs" (the family used in the C2/G1/Slim/Nano) at 0.08 mm/click, and Beean's converter independently states "Timemore C2 uses ≈ 80 microns per click."
- There is **no factory-calibrated zero gap** like the S3's documented 0.075 mm offset (Timemore's S3 page: *"every Chestnut S3 leaves the factory with a burr gap of just 0.075 mm — narrower than the width of a human hair"*). The C2 zeroes by burrs-touching — turn the dial fully clockwise until the crank stops — the same paradigm as the Comandante C40.
- The "standard" C2 most people own is the **original 25 g Chestnut C2** (plastic adjustment dial pre-2022, metal dial 2022+); the C2 Max (30 g), C2S (full-metal unibody), and C2 Fold (foldable crank) all share the same 38 mm Standard burrs, ~36-click mechanism, and ~80 µm/click step, so a single mapping covers every C2 variant.

## Key Findings

### Spec block (drop-in JS)

```js
TIMEMORE_C2: {
  model: "Timemore Chestnut C2",
  variant_assumed: "Original Chestnut C2, 25g capacity (mapping also valid for C2 Max / C2S / C2 Fold — same burrs & step)",

  // ---- Step size ----
  micronsPerClick: 80,                       // 0.08 mm
  micronsPerClick_confidence: "medium",      // inferred, not C2-published
  micronsPerClick_source:
    "Timemore Service Center burr-resolution table (timemore.cn/en) lists 'Standard Burrs' family (G1/Slim/Nano/G1 Plus/Slim Plus, same burrs as C2) at 0.08 mm = 80 µm/click. " +
    "Beean grinder converter (beeancoffee.com/timemore-c2-grind-settings/): 'Timemore C2 uses ≈ 80 microns per click.' " +
    "Home-Barista forum threads on Timemore conical-dial mechanics reference 0.08 mm/click. " +
    "NOT to be confused with the Timemore C3 at 0.083 mm/click — that is the S2C660 burr family, not the C2.",

  // ---- Click structure ----
  clickStructure: "Single un-numbered ring; each click is one detent. No major/minor sub-clicks like the S3.",
  totalClicks: { min: 0, max: 36 },
  totalClicks_source:
    "Timemore official C2 Max product page (timemore.com): 'Easily adjust the grind size with approximately 36 levels of coarseness.' " +
    "Sip Coffee House, Brew Coffee Home, and The Coffee Folk all report 36 clicks. " +
    "Upper end is a physical end — past max, the adjustment dial unscrews off the threaded shaft (Workshop Coffee).",

  // ---- Zero point ----
  zeroPoint: "burrs-touching (no factory gap)",
  factoryGapMm: 0,
  zeroPoint_method:
    "Turn adjustment dial fully clockwise until crank handle ceases to rotate. This is click 0. Count clicks counter-clockwise to desired setting. " +
    "Contrast with S3, which has a Timemore-documented 0.075 mm pre-set gap at click 0.",

  // ---- Burrs ----
  burrs: {
    type: "conical",
    diameter_mm: 38,
    material: "420 stainless steel, HRC 55–58, 5-axis CNC machined",
    designation: "'Standard Burrs' (Timemore's own internal name, per their service-center burr table)",
    geometry_note:
      "Smooth pre-cutting cone with cutting only along the burr's lower edge. " +
      "NOT S2C660 (that's the C3) and NOT S2C890 (Chestnut X / S3). Faster than S2C on coarse grinds; produces more fines on fine grinds."
  },

  // ---- Total micron range ----
  totalRangeMicrons: { min: 0, max: 950 },
  totalRangeMicrons_source:
    "Honest Coffee Guide (honestcoffeeguide.com/timemore-c2-grind-settings/): 'The Timemore C2 can grind coffee between a range of 0 – 950 microns.'",

  // ---- Brew-method click ranges (consensus across Timemore manual, Workshop Coffee, HCG, Coffee Chronicler, Tasting Grounds) ----
  recommendedClicks: {
    turkish:        { min: 2,  max: 6,  best: 4,
                      source: "Honest Coffee Guide chart" },
    espresso:       { min: 6,  max: 12, best: 10,
                      source: "Timemore in-box manual: 10 clicks; Honest Coffee Guide 6–12; Coffee Chronicler 8; Tasting Grounds 7–10",
                      unrecommended: true,
                      note: "C2 is not a real espresso grinder — see limitations." },
    mokaPot:        { min: 9,  max: 15, best: 14,
                      source: "Timemore manual: 14 clicks; Coffee Chronicler 9–15" },
    aeropress:      { min: 11, max: 19, best: 16,
                      source: "Workshop Coffee: 16 (1-min steep) / 19 (2-min steep); Honest Coffee Guide 11–30; Coffee Chronicler 10–17" },
    v60_pourover:   { min: 15, max: 22, best: 18,
                      source: "Workshop Coffee: V60 1-cup 15g = 18, 2-cup 30g = 22; Coffee Chronicler 15–20" },
    chemex:         { min: 24, max: 32, best: 27,
                      source: "Workshop Coffee: Chemex 1L = 32; sits between French press and high-coarse pourover band" },
    frenchPress:    { min: 22, max: 30, best: 26,
                      source: "Workshop Coffee: 24 (500g) / 27 (1L); Honest Coffee Guide 22–30; Timemore manual: 24" },
    coldBrew:       { min: 26, max: 36, best: 30,
                      source: "Honest Coffee Guide 26–30; Tasting Grounds '29+'; can run to dial-end" }
  },

  // ---- Variants ----
  variants_known: [
    { name: "Chestnut C2",      capacity_g: 25, year: "2020",
      notes: "Original. Pre-2022: plastic adjustment dial. 2022+: metal dial. The 'standard' C2 most owners have." },
    { name: "Chestnut C2 Max",  capacity_g: 30, year: "2021",
      notes: "~1 inch taller body, larger hopper. Same 38mm Standard burrs, same ~36-click mechanism, same ~80 µm step." },
    { name: "Chestnut C2S",     capacity_g: 25, year: "2022",
      notes: "Full-metal unibody upgrade. Same burrs, same step." },
    { name: "Chestnut C2 Fold", capacity_g: 25, year: "2022",
      notes: "Foldable crank handle, twill exterior. Same internals." }
  ],
  variants_NOT_C2: [
    "C3 / C3S / C3 Pro / C3 Max — different burrs (S2C660 spike-to-cut), 0.083 mm/click, ~36 clicks. Distinct burr geometry → distinct mapping.",
    "C3 ESP / C3 ESP Pro — espresso-tuned, 30 clicks/rev, 0.023 mm (23 µm) per click. Different mapping entirely.",
    "Chestnut S3 — 42mm S2C890 burrs, 0–90 clicks (9×10 sub-clicks), 15 µm/click, factory 0.075mm zero gap.",
    "Chestnut X — 42mm S2C890 burrs, dual-dial 80µm/15µm. Different class."
  ],

  // ---- Limitations ----
  limitations: [
    "ESPRESSO: technically reaches espresso fineness, but burr geometry has poor traction at fine settings — Coffee Chronicler (Asser Christensen, Q-Grader) reports 'it took more than 3 minutes of frustrating grinding' for a single espresso dose. The 80 µm step is also too coarse for clean espresso dial-in. Coffee Chronicler, The Coffee Folk, and Sip Coffee House all explicitly recommend AGAINST using the C2 for espresso.",
    "Honest Coffee Guide warns: 'Avoid using settings below 6 clicks, as these settings may dull the burrs.'",
    "No numbered indicators on the dial — must zero-and-count every adjustment (unlike S3's 9 numbered positions × 10 sub-clicks).",
    "Plastic internal stabilizers (PCTG) and pre-2022 plastic adjustment knob; 2022+ moved the dial to metal but stabilizers are still plastic. Not drop-proof.",
    "Stock Standard burrs produce more fines and a wider distribution than the C3's S2C burrs. Community heptagonal burr swap (~$20 on AliExpress) is a popular upgrade — Home-Barista users report distribution comparable to the 1Zpresso Q2 after the swap."
  ],

  // ---- Cross-grinder mapping caveats ----
  mapping_caveats: [
    "C2-to-C40 (linear µm): C2 ≈ 80 µm/click, C40 ≈ 25–30 µm/click (Makers Coffee C40 MK4 page: 'Precise stepped grind adjustments are adjustable by 25-30 microns per click'; Beean: ≈30 µm/click). So 1 C2 click ≈ 2.7 C40 clicks. Empirical Tasting Grounds mapping is closer to 1.4× (C40 21–25 ↔ C2 16–20) — this discrepancy is because both grinders have brew-method bands wider than their step, and the C40 zeroes burrs-touching like the C2 (so no offset correction needed).",
    "C2-to-S3 with offset: target_S3_clicks ≈ (C2_clicks × 80 − 75) / 15. The 75 µm subtraction accounts for the S3's factory burr gap. Example: C2 18 (V60) → S3 ≈ (1440−75)/15 = 91, which exceeds S3's 0–90 range — meaning the S3 dialed to ~85–90 is in the right ballpark for V60.",
    "Burr geometry differences (Standard vs S2C890 vs Comandante Nitro Blade) mean equal-micron settings still produce different particle distributions. Mappings are a starting point — expect to adjust ±2 clicks by taste.",
    "The 80 µm/click figure is INFERRED (Timemore burr-family doc + Beean converter), not C2-published. Treat ±10 µm as uncertainty."
  ]
}
```

## Details

### 1. Microns per click — best estimate ~80 µm (0.08 mm), inferred not published
Timemore does not publish a C2-specific µm/click number on its product pages, in the box manual, or in any English-language datasheet I could find. The supporting evidence chain:

- **Timemore's own service-center burr-resolution table** (timemore.cn/en) lists grinders by burr family. The "Standard Burrs" family (G1, Slim, Nano, G1 Plus, Slim Plus) is documented at **0.08 mm = 80 µm per click**. The C2 uses the exact same Standard Burrs and adjustment thread, so 80 µm is the derived figure for the C2.
- **Beean Coffee's grinder converter**: "Timemore C2 uses ≈ 80 microns per click."
- **Home-Barista forum** discussions on Timemore conical-dial mechanics reference 0.08 mm/click as the standard Timemore single-dial step.

Importantly, the Timemore C3 is at 0.083 mm/click — that is the **S2C660** burr family, NOT the C2. Don't conflate them.

### 2. Total click range — approximately 0 to 36
Timemore's own English C2 Max product page (timemore.com) states: *"Easily adjust the grind size with approximately 36 levels of coarseness. Simply turn the grinding knob: clockwise for finer grinds and counterclockwise for coarser grinds."* Multiple reviewers (Sip Coffee House, Brew Coffee Home, The Coffee Folk) confirm 36 clicks. The dial does not free-spin past max — Workshop Coffee notes that continuing to spin past the coarsest setting eventually unscrews the adjustment dial off the threaded shaft. Compared with the S3's structured 0–90 (9 numbered × 10 sub-clicks), the C2 is a single un-numbered ring; you zero and count every time.

### 3. Zero point — burrs-touching, no factory gap
The procedure documented in every C2 review and in Timemore's own user manual: turn the adjustment dial fully clockwise until the crank ceases to rotate; this is click 0 (burrs in contact). This is the same as the Comandante C40, and **different from the Timemore S3**, where Timemore's official product page states *"every Chestnut S3 leaves the factory with a burr gap of just 0.075 mm — narrower than the width of a human hair … precisely aligned to 0.075 mm at the finest grind setting (0 clicks) to account for manufacturing tolerances."* When converting C2↔S3 settings, the 75 µm offset matters and is captured in the conversion formula above.

### 4. Burr type and size
38 mm stainless-steel conical, 420-grade steel at HRC 55–58, 5-axis CNC machined. Timemore's internal name is **"Standard Burrs"** (vs. the C3's S2C660 spike-to-cut and the Chestnut X / S3's S2C890). The C2's Standard Burrs are smooth-cone with cutting along only the burr's lower edge — fast on coarse grinds (Coffee Chronicler measured close to 1 g/sec for French-press range) but produces more fines than S2C burrs at fine settings.

### 5. Recommended click ranges (consensus)

| Brew method | Best single click | Range | Sources |
|---|---|---|---|
| Turkish | 4 | 2–6 | Honest Coffee Guide |
| Espresso (not advised) | 10 | 6–12 | Timemore manual (10); HCG 6–12; Tasting Grounds 7–10 |
| Moka pot | 14 | 9–15 | Timemore manual (14); Coffee Chronicler 9–15 |
| AeroPress (1-min) | 16 | 11–19 | Workshop Coffee 16 (1 min) / 19 (2 min) |
| V60 (15 g 1-cup) | 18 | 15–22 | Workshop Coffee 18; 22 for 2-cup 30 g |
| Chemex (1 L) | 32 | 24–32 | Workshop Coffee 32 (1 L) |
| French press (500 g) | 24 | 22–30 | Workshop Coffee 24/27; HCG 22–30; CC 20–25 |
| Cold brew | 30 | 26–36 | HCG 26–30; Tasting Grounds "29+" |

Source-by-source variation runs ±3–5 clicks — normal for a grinder with no numbered scale and a coarse 80 µm step. Workshop Coffee's numbers come from cupping with their own roasts; Coffee Chronicler from a Q-Grader; Honest Coffee Guide from years of crowdsourced data.

### 6. Production variants
- **Chestnut C2 (2020, original)**: 25 g capacity. Plastic adjustment dial pre-2022, metal dial 2022+. **This is the "standard" C2.**
- **Chestnut C2 Max (2021)**: ~1 inch taller, 30 g capacity. Same Standard burrs, same mechanism, same ~80 µm/click.
- **Chestnut C2S**: full-metal unibody upgrade. Otherwise identical.
- **Chestnut C2 Fold (2022)**: adds foldable crank handle, twill exterior. Internals identical.

All four share burrs and step size, so one mapping serves all.

### 7. Known limitations
- **Espresso**: Coffee Chronicler (Asser Christensen, Q-Grader): *"I did it one time, and it took more than 3 minutes of frustrating grinding."* Sip Coffee House: the C2's "any espresso setting … won't be consistent enough to make espresso fans happy." Brew Coffee Home: "If you live on the espresso, this hand grinder is not suitable for you."
- **Below 6 clicks**: Honest Coffee Guide: "Avoid using settings below 6 clicks, as these settings may dull the burrs."
- **No numbered dial**: must re-zero and count every adjustment.
- **Plastic stabilizers and pre-2022 plastic dial**: not drop-proof; build is a step below all-metal grinders like the Comandante.
- **Mapping to S3 or C40 is approximate**: even at matched microns, particle distribution differs because the burr geometries differ.

## Recommendations

1. **Encode the C2 in the artifact with `micronsPerClick: 80` and `clicks: {min: 0, max: 36}`**, plus a `confidence: "medium"` flag and a `source` note that the per-click figure is inferred from Timemore's burr-family service doc, not a C2-specific publication. This matches how you'd want to flag any inferred spec.

2. **For C2↔C40 conversions**, store both a linear-µm formula and an empirical-band table.
   - Linear: `c2_clicks ≈ c40_clicks × (30/80)` for a target-micron path.
   - Empirical (from Tasting Grounds): C40 11–15 ↔ C2 7–10; 16–20 ↔ 11–15; 21–25 ↔ 16–20; 26–30 ↔ 21–23; 31–35 ↔ 24–28; 36+ ↔ 29+. Use this when crossing brew-method bands rather than micron targets.

3. **For C2↔S3 conversions, apply the 0.075 mm offset**: `s3_clicks ≈ (c2_clicks × 80 − 75) / 15`. Without this correction, S3 settings derived from C2 numbers will be ~5 clicks too coarse.

4. **Mark the C2's espresso range as `unrecommended: true`** so any UI doesn't push users into the 0–6 click burr-dulling zone.

5. **Threshold to revisit**: bump `confidence` to "high" and update `micronsPerClick` if either (a) Timemore publishes a C2-specific µm/click value, or (b) a third independent measured source (e.g., a Home-Barista user with calipers measuring actual gap-per-click) contradicts the 80 µm figure by more than ±10 µm.

## Caveats

- **The 80 µm/click number is inferred, not C2-published**. It is supported by Timemore's own service-center burr-family table (which lists the C2's "Standard Burrs" family at 0.08 mm/click), Beean's converter, and Home-Barista forum consensus — but Timemore has never put a µm-per-click value on a C2 product page or manual. Treat ±10 µm as uncertainty.
- **"36 clicks" is also approximate** — Timemore's exact wording is "approximately 36 levels of coarseness," and the dial unscrews off the shaft past the maximum rather than hitting a hard stop at click 36. Different users count slightly different totals.
- **Brew-method click ranges vary by source** by ±3–5 clicks. The synthesis table above is a reasonable starting point, not authoritative.
- **Burr geometry differences mean the C2 will not produce the same in-cup result as a C40 or S3 even at matched microns**. Fines content, distribution width, and extraction kinetics differ. Mappings give a starting point, not equivalence.
- **The C2 has been functionally superseded by the C3 series since 2022**, but Timemore still ships C2 stock and the installed base is enormous. The C2 Max is currently listed as "Limited Stock" on Timemore's English store, suggesting eventual EOL — your artifact may want a `legacy: true` flag in a future revision.
- **The "C2" name on Timemore's English store now sometimes redirects to the C2 Max**. If users buying "a C2" today actually receive a C2 Max, that's still covered by the same mapping (same burrs, step, and click count), but the capacity field changes from 25 g to 30 g.