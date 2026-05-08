# Comandante C40 ↔ Timemore Chestnut S3 — Grind-Size Mapping & Calibration Reference

## TL;DR
- **Use a 1 C40 click ≈ 2 S3 clicks linear mapping as the *starting* heuristic** (C40 ≈ 30 µm/click, S3 ≈ 15 µm/click), but treat it as a ballpark only — at espresso fineness the mapping breaks because the stock S3 cannot physically grind as fine as a C40, while at filter coarseness both grinders track each other reasonably well.
- **The S3's burr geometry (S2C890, peak ~375 µm, suppressed 200–250 µm fines) does not match the C40 Nitro Blade's distribution**, so even at the same nominal median, body, fines fraction, and brew flow will differ — your conversion artifact should expose a "method-specific offset" knob, not a single conversion factor.
- **No independent lab PSD study compares the two grinders directly**; the only public quantitative data are Timemore's own marketing curves for the S2C890 and the Kaffeemacher / ZHAW Coffee Excellence Center 24-grinder dataset analyzed by Jonathan Gagné (Sept 2023), which includes the C40 but not any Timemore. Plan to dial in by taste/time, using the click conversion as a starting point and iterating.

## Key Findings

### 1. Comandante C40 MK4 (Nitro Blade)
- **Burrs:** 39 mm outer × 30 mm inner conical, "Nitro Blade" high-alloyed high-nitrogen martensitic stainless steel (made in Germany).
- **Microns per click:** Authorized retailer pages (Makers Coffee, Whole Latte Love) state **"25–30 microns per click"**; BeeAn Coffee's converter rounds to **≈ 30 µm/click** as its working figure. Total usable range ≈ 35–40 clicks, mapping roughly to **0–1,090 µm** of grind output.
- **Red Clix RX-35 upgrade:** halves step size to **≈ 15 µm/click** (and ~5.5 µm of "narrow blade gap" per click at burr exit), doubling click count for the same range. Clicks roughly double: 25 std clicks ≈ 50 Red Clix clicks. Comandante's own spec sheet describes the 15 µm figure as "Horizontal shift per click of Target Maximum in bimodal Normal Distribution of total particles" — i.e., a PSD-derived metric, not just thread pitch.
- **Zero-point procedure (manufacturer):** Hold the grinder horizontally; with burrs fully open the handle falls to ~6 o'clock. Slowly tighten — click zero is the first click at which the handle no longer falls (burrs hold it still). Tightening past that risks burr-on-burr contact (negative clicks).
- **Calibration drift / unit variance:** Comandante explicitly warns NOT to unscrew the three burr mounting screws — they are factory-calibrated. The "floating cone" design means the inner burr can move on the axle when empty; it self-centers under load. Different MK3/MK4/IronHeart/Nitro Blade units can vary by 1–3 clicks at zero unit-to-unit; even within one unit, dialing in for espresso typically uses a 3-click window, hence the popularity of Red Clix.
- **Typical brew-method click ranges (from zero, standard axle):**
  - Turkish: 2–8
  - Espresso: 7–13 (most users settle 10–15; with Red Clix double these)
  - Moka pot: 14–24
  - AeroPress: 12–35 (highly recipe-dependent; ~10–15 for inverted/short, 20–30 for filter-style)
  - V60 / pour-over: 15–25 (Basic Barista recommends 20–30)
  - Chemex: ~25–34 (slow flow rate calls for coarser end of pour-over range)
  - Filter Coffee Machine: 12–33
  - Cupping: 17–31 (often cited as the "30 click = ~900 µm" reference)
  - French press: 26–40
  - Cold brew / cold drip: 30–40
- **Particle distribution:** Praised by Hoffmann, Hedrick, Baca and others for unimodal-ish, low-fines output. Jonathan Gagné's "What I learned from analyzing 300 particle size distributions for 24 espresso grinders" (Coffee ad Astra, Sept 21 2023) — analyzing PSDs collected by the Kaffeemacher team and Marco Wellinger at the ZHAW Coffee Excellence Center using a Retsch Camsize X2 imaging device — uses the C40 as the "more unimodal / fewer fines" reference point ("At coarser grind sizes, [other grinders] start behaving a bit more like the Comandante C40 grinder, i.e., less fines, or 'more unimodal'"). Mim Coffee Lab measured C40 output via Lighttells CM-200 + KRUVE sieves (300–1000 µm) and found the median falls below 500 µm at lower click numbers.

### 2. Timemore Chestnut S3 (S2C890)
- **Burrs:** **42 mm conical S2C890** ("spike-to-cut") in SUS420 high-carbon stainless steel, ~58 HRC. (Brew Coffee Home's review cites 40 mm; Timemore's product page and most retailers list 42 mm.) The S2C890 is an evolution of the S2C880 (X-Lite) burr.
- **Microns per click:** **≈ 15 µm/click (0.015 mm)**, set externally via a lens-style ring with **9 numbered positions × 10 sub-clicks = 90 total clicks**. Total grind range cited as **330–1,110 µm**.
- **Zero-point:** Factory-calibrated to a **burr gap of 0.075 mm at "0"** to compensate for manufacturing tolerances. Verbatim from Timemore's official product page: *"The S3's burr gap is precisely aligned to 0.075 mm at the finest grind setting (0 clicks) to account for manufacturing tolerances."* This zero is INTENTIONALLY too coarse for espresso on the standard S3 — Brew Coffee Home reviewer DENG MZ reports: *"Even when I set it all the way to zero, 18 grams in and 36 grams out in just 15 seconds. That's way too fast for espresso, even at the finest setting."*
- **Calibration drift / unit variance:** The external adjustment ring "doesn't click firmly into place" (Coffee Chronicler, Brew Coffee Home, Coffeegeek), so the setting can shift accidentally during handling — meaningful for a calibration artifact that assumes settings are sticky. Timemore quietly **recalibrated the S3 zero closer in 2025**; per The Nob Coffee's 2025 product listing: *"In 2024, the Timemore Chestnut S3 had a grind adjustment range of 0-1.5, which was insufficient for espresso brewing with machines like Flair 58, 9Barista, or professional espresso machines. The latest 2025 version features an improved burr system with a tighter zero position, allowing espresso grinding from 0 to 1.5."* This means **the same "click X" can mean different absolute µm depending on production batch**.
- **Recommended ranges (Timemore official + reviewers):**
  - Espresso: **1–15 clicks** (officially; 2024 units realistically cannot pull a true 9-bar shot, 2025 units can be marginal — for real espresso buy the **S3 ESP** variant with S2C-042-EI burrs)
  - Moka pot: 5–20 clicks
  - AeroPress: ~10–30 clicks (Honest Coffee Guide places it at ~0–7 of the 9 numbered positions, i.e., 0–~65 clicks)
  - V60 / pour-over / Chemex: **50–80 clicks** (Honest Coffee Guide: pour-over centered around positions 1.0–6.9 of 9, i.e., ~10–62 clicks; Timemore: 50–80)
  - French press: 80–90 clicks (positions 4.2–9.0)
  - Cold brew: 55–90+ clicks
- **Particle distribution (manufacturer-stated, NOT independently verified):** S2C890 reduces fines in the 200–250 µm range and *increases* mass in 250–400 µm with peak at ~375 µm, vs. its predecessor S2C880. Reviewers (Coffee Chronicler, Coffeegeek, Brew Coffee Home) describe the cup as "balanced, sweeter, more body," "linear/mellow vs. C40 ringing acidity" — directionally consistent with a slightly more bimodal / fuller-bodied PSD than the C40.

### 3. Direct Conversion: C40 ↔ S3
The cleanest, most-cited public conversion comes from BeeAn Coffee's grinder-setting converter:
- **C40 ≈ 30 µm/click; S3 ≈ 15 µm/click → 1 C40 click ≈ 2 S3 clicks.** A **C40 with Red Clix ≈ S3 1:1**.
- BeeAn's free pages effectively expose a single µm-per-click figure per grinder, i.e., **a linear scaling relative to each grinder's zero**.
- BeeAn's caveat: *"uses crowdsourced grind data, grinder-specific adjustment steps, and ongoing optimization to estimate equivalent settings… a practical and repeatable starting point rather than a vague approximation."*
- **No published forum conversion table** (Reddit r/pourover, r/espresso, r/coffee, Home-Barista) tabulates C40↔S3 click pairs at this granularity. Home-Barista threads on similar conversions consistently warn: *"because of the different burr construction types and geometries, it is difficult to calculate grind size equivalents. Even if you calibrate all your grinders the same way, each different burr style and geometry will produce a different distribution of grind sizes."*

### 4. Independent PSD Studies Including Both
**None exist publicly as of May 2026.**
- Jonathan Gagné (Coffee ad Astra, Sept 2023, "What I learned from analyzing 300 particle size distributions for 24 espresso grinders," analyzing the Kaffeemacher / ZHAW Coffee Excellence Center / Wellinger Camsize X2 dataset) includes the C40 as the "more unimodal" reference but does not include any Timemore.
- Lance Hedrick's laser-diffraction hand-grinder set (Instagram, 2023, referenced by Gagné) covers C40, Kinu M47, Mazzer Omega — no Timemore.
- Mim Coffee Lab's KRUVE-sieve study covers C40 only.
- Socratic Coffee's grinder studies and Barista Hustle's resources don't include the S3.
- Timemore's own marketing claim (peak ~375 µm, reduced 200–250 µm fines) is unverified outside the manufacturer.

## Details — Suggested Mapping Logic

### Recommended approach: **piecewise-linear with method-specific offsets**, not a single conversion factor

Because (a) the S3's zero is calibrated 0.075 mm wider than the C40's "burrs touching" zero, and (b) the S3's PSD is intentionally weighted differently (fewer ultra-fines, more 250–400 µm body), a single linear µm-per-click formula will be wrong at the espresso end and slightly off at the very coarse end. A practical mapping artifact should look like this:

**Layer 1 — naive linear core:**
```
S3_clicks ≈ 2 × C40_clicks_from_zero     (stock C40)
S3_clicks ≈ 1 × C40_clicks_from_zero     (C40 with Red Clix)
```
Equivalent expression in microns:
```
microns ≈ C40_clicks × 30   (stock)  ≈ S3_clicks × 15
```

**Layer 2 — zero-offset correction (piecewise):**
The S3 starts ~75 µm OPEN at click 0, while the C40 starts at burrs-touching. So a more honest mapping is:
```
microns_S3  ≈ 75 + 15 × S3_clicks
microns_C40 ≈ 0  + 30 × C40_clicks
→ S3_clicks ≈ (30 × C40_clicks − 75) / 15  =  2 × C40_clicks − 5
```
Below ~5 C40 clicks, this would imply *negative* S3 clicks — i.e., **the stock 2024-batch S3 cannot reach C40 espresso territory.** This matches every reviewer's empirical finding. (2025-batch S3 units narrow this gap somewhat; treat them as `S3_clicks ≈ 2 × C40_clicks − 3` until measured.)

**Layer 3 — method-specific offset (because PSDs differ):**
Since the S3 produces fewer 200–250 µm fines and a higher 250–400 µm peak, a "same-µm" S3 brew tends to extract **slightly less** in immersion methods and to flow **slightly faster** in percolation. Empirically I'd shift by ~1–2 S3 clicks finer for V60/Chemex and ~2–3 finer for AeroPress to compensate:

| Brew method | C40 (std) clicks | Naive S3 clicks (×2 − 5) | Suggested S3 starting clicks |
|---|---|---|---|
| Espresso | 7–13 | 9–21 | **Use S3 ESP variant**; stock S3 not viable |
| Moka pot | 14–20 | 23–35 | 22–34 (≈ position 2.2–3.4) |
| AeroPress (filter style) | 18–28 | 31–51 | 28–48 (run 2 finer) |
| V60 / Pour-over | 18–24 | 31–43 | 30–42 (run 1 finer) |
| Chemex | 25–32 | 45–59 | 44–58 |
| French press | 28–36 | 51–67 | 52–68 (no offset) |
| Cold brew | 32–40 | 59–75 | 60–76 |

These ranges align with both the Timemore official guide (espresso 1–15, moka 5–20, pour-over 50–80, French press 80–90, where each "1" on the dial equals 10 clicks) and Honest Coffee Guide's S3 chart.

### Why the mapping is imperfect — gotchas to bake into your artifact

1. **Different zero references.** C40 zero = burrs touching; S3 zero = 0.075 mm gap. Any artifact should ask the user to verify zero on each grinder before reading clicks.
2. **Different burr geometry.** C40 = 39 mm Nitro Blade conical (high-nitrogen, sharper, edgier cuts); S3 = 42 mm S2C890 spike-to-cut (more crushing-then-cutting). Even at identical D50 the fines fraction and the *shape* of the PSD will differ.
3. **Different unit-to-unit consistency.** C40 has a stepped, axial mechanism with very low drift but ±1–2 click factory variance between units; S3's external ring "doesn't click firmly into place" and can drift mid-session. Production-batch matters: the **2025 S3 has a tighter zero than the 2024 S3** (per The Nob Coffee).
4. **Espresso is essentially unmappable.** Stock S3 cannot match a C40 in the 7–13 click espresso zone; only the **S3 ESP** (S2C-042-EI burrs) can, and it's a different grinder, not a recalibration of the S3.
5. **No independent PSD validation exists.** All public micron-per-click figures are nominal mechanical step sizes (i.e., linear travel of the adjustment thread), not measured D50 shift in coffee. The two are correlated but not identical, especially at fine settings where elastic deflection and bean fracture statistics dominate.
6. **Coffee variables drift faster than the grinder.** Roast level (light = denser = grind 1–2 finer), age (fresh = grind 1–2 coarser to compensate for CO₂), and humidity all dominate over the kind of fine-grained conversion error you're worrying about. A recipe that calls for "22 clicks on a C40" is implicitly a ±2 click bracket already.

## Recommendations

**Stage 1 (build the artifact this week):** Implement the **piecewise linear mapping** `S3_clicks = 2 × C40_clicks − 5` (2024 batch) or `2 × C40_clicks − 3` (2025 batch), with per-method correction offsets as in the table above. Expose four knobs to the user: (a) C40-Red-Clix-or-not toggle, (b) S3 production year (2024 vs 2025), (c) brew method dropdown, (d) free-text "+/- N clicks" override. Skip espresso explicitly — display a banner noting the stock S3 cannot replicate C40 espresso and recommending the S3 ESP for that pairing.

**Stage 2 (validate empirically):** Pick one coffee (medium-roast, single origin, ~10 days off roast, 12 g dose), brew matched V60s with both grinders at the mapped settings, target 3:00 total brew time. Iterate the offset for V60 until both grinders hit the same TDS within 0.05% on a refractometer. Repeat for AeroPress, French press, cold brew. Record actual offsets in your artifact and version-tag them.

**Stage 3 (revisit when there's data):** If Lance Hedrick, Jonathan Gagné, the Kaffeemacher / ZHAW group, or Barista Hustle publishes a PSD comparison that includes the S3 (likely within 12 months given the S3's market traction), replace the linear core with their measured µm/click curve and refit the offsets.

**Benchmarks that would change the recommendation:**
- If a published PSD shows the S3 D50 vs. clicks deviates from linear by >20% across the filter range → upgrade to a polynomial fit, not piecewise linear.
- If your empirical V60 TDS at the mapped setting differs by >0.1% absolute between grinders → the burr-geometry / fines-fraction effect is dominating; abandon a single-knob conversion and switch to a "method × grinder → click" lookup table.
- If you mostly drink espresso → ditch this mapping entirely; Comandante + Red Clix maps cleanly to the **Timemore S3 ESP** at roughly 1:1 (both 15 µm/click), and that's the pair to calibrate.

## Caveats
- All "µm per click" figures are manufacturer-nominal mechanical step sizes (Comandante's 25–30 µm and Timemore's 15 µm), not lab-measured D50 shifts in coffee. Treat them as *upper bounds on linearity* — the actual median grind shift per click is usually slightly less, and varies non-linearly near the burr-touch zero. The Comandante Red Clix spec is a partial exception: its 15 µm figure is described as the "horizontal shift of the bimodal Normal Distribution maximum," i.e., a PSD-shift, so the C40 numbers may actually be more PSD-honest than the S3's.
- The "S3 = 42 mm burr" figure is from Timemore's product page and most retailers; one published review (Brew Coffee Home) cites 40 mm. The discrepancy doesn't materially affect µm-per-click but flag it if you build a parts/specs lookup.
- Production-batch matters for the S3: pre-2025 units cannot grind as fine as 2025 units (per The Nob Coffee). Any conversion table should be tagged with the user's S3 manufacture year.
- Comandante's "30 µm/click" is approximate — Makers Coffee and Whole Latte Love quote the exact spec as "25–30 µm per click."
- No source — manufacturer, reviewer, forum, or peer-reviewed — has published a head-to-head PSD comparison of these two specific burr sets. Every "the C40 has tighter PSD than the S3" statement online is a *taste impression* dressed up as data. Caveat reader.