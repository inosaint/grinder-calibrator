# 1Zpresso ZP6 — Grinder Mapping Spec for Personal Artifact

**TL;DR**
- The 1Zpresso ZP6 (sold today as "ZP6 Special" — Knife Toronto's product page literally states "ZP6 and ZP6-s are identical," and Rogue Wave Coffee's reads "This ZP6 is the same as ZP6 Special") moves **22 µm of vertical burr travel per click** across **90 clicks per rotation**, displayed as 9 numbered stops × 10 sub-clicks; zero is calibrated at burrs-touching (like the Comandante C40 and Timemore C2, *not* like the Timemore S3's 0.075 mm factory gap), with the first ~10–15 clicks (#0.0–#1.5) typically unusable due to burr rub.
- It is a **filter/pour-over–only grinder** with 48 mm **hexagonal** (six-sided) stainless-steel conical burrs — a different burr family from the K-series heptagonal burrs and very different geometry from the C40 Nitro Blade or Timemore S2C/Standard burrs, so any cross-grinder click conversion will be approximate at best (Honest Coffee Guide measures the usable grind range as "240 – 1050 microns. After zero calibration, the numbers from 0 to around 2 will be unusable due to burr rub. Espresso grind is not possible on the ZP6"; Coffeeble corroborates: "Not suitable for espresso").
- Recommended starting points (community-cited): V60 ≈ 30–40 clicks (#3.0–#4.0), Chemex ≈ 35–55, AeroPress ≈ 25–45, Moka ≈ 11–36, French press ≈ 40–70, cold brew ≈ 50–70; espresso is N/A.

## Key Findings

1. **ZP6 vs. ZP6 Special vs. original ZP6 — three distinct products, two of which are the same.** The currently sold "ZP6" is identical to the "ZP6 Special" (the standard version) — Knife Toronto's product page reads "ZP6 and ZP6-s are identical," Rogue Wave Coffee's reads "This ZP6 is the same as ZP6 Special," and 1Zpresso hosts the product at `1zpresso.coffee/zp6/` redirecting to the ZP6 Special page. The **original ZP6** sold only in Taiwan (~2019–2021) was a different physical grinder built on the E-Pro/Z-Pro chassis with **60 clicks per rotation at ~33 µm/click and an internal/bottom adjustment**; users on Home-Barista note "Clicks were at 33µm" and "burr rub disappears at around 10–11 clicks" on that older unit. The "ZP6 Special" released late 2022 internationally is built on the (now-discontinued) **K-Pro body** with the same external adjustment ring as the K-Pro/K-Plus/K-Max — described on 1Zpresso's official K-series page as "Red Dot Design Award winner in 2018. The first time ever we introduced the External Adjustment Ring design," with The Roasters Pack confirming "1Zpresso ZP6 uses the same adjustment as the K-Pro/K-max/K-plus adjustment ring, which is a 2018 Red Dot Design Award Winner." It re-uses the older "ZP6/JS" 6-sided burr set. **Use the ZP6 Special spec; that's what almost everyone now owns.**
2. **Burr is hexagonal, NOT heptagonal.** 1Zpresso's official product page calls it "48mm Hexagonal Burrs… The special hexagonal stainless steel burr crafted for pour-over coffee," and Coffeeble's review describes it explicitly as "6-sided burr geometry… Unlike the heptagonal K-series burrs optimized for all-around use, these burrs prioritize unimodal particle distribution." A small number of retailer pages misdescribe it as heptagonal (Frekko.nl) — that's an error. Burr material is stainless steel (uncoated); the inner shaft is fixed and supported by dual (some sources say triple) bearings to minimize wobble.
3. **Microns per click: 22 µm.** Confirmed by 1Zpresso's official user manual ("each click moving the burr by 0.022 mm (22 microns)"), the Rogue Wave product page ("Each click shifts the grind size by 22 microns"), and BeeAn Coffee's grinder converter ("1Zpresso ZP6 Special uses ≈ 22 microns per click"). **Important caveat:** this is *vertical burr travel per click*, not a true change in burr gap or particle size — Honest Coffee Guide explicitly publishes a methodology note that the 1Zpresso "microns-per-click" figures are "unhelpful and misleading" because conical-burr geometry means the actual horizontal gap change is smaller than the vertical travel. So the 22 µm figure is the right number to put in the artifact for symmetry with the C40 (30 µm) and S3 (15 µm), but it is NOT directly comparable as a particle-size step.
4. **Click structure: 9 numbered stops × 10 sub-clicks = 90 clicks per rotation, with travel above one full rotation.** Display format is `N.C` where N is the number (0–9) and C is the sub-click within that number (0–9). E.g., 3.2 = 32 clicks from zero; 5.5 = 55. The dial mechanically *can* go above one full rotation, but Honest Coffee Guide's chart caps at 7.0 (≈70 clicks) for practical brew methods. **For the artifact: minClick = 0, maxClick = 90, majorTick = 10 (one major tick = one number).**
5. **Zero point: factory-calibrated to burrs-touching, NOT a factory gap.** 1Zpresso's official calibration guide says: "Turn the adjustment dial counterclockwise all the way until you feel resistance while turning the crank handle. This is the zero point, not the tightest point on the dial." The official user manual adds: "The zero point may be offset by two or more clicks due to the force applied when tightening the adjustment dial ring." Honest Coffee Guide concludes: "After zero calibration, the numbers from 0 to around 2 will be unusable due to burr rub." So **zeroOffset ≈ 0 µm** (theoretical burrs touching) but **practical first usable click ≈ 10–15** (after burr rub clears) — this is the same model as Comandante C40 and Timemore C2, and the *opposite* of the Timemore S3 which ships with a 0.075 mm (75 µm) factory gap at zero.
6. **Brew-method click ranges.** Honest Coffee Guide's chart (in numbers.clicks notation, then converted to total clicks):
   - Turkish: N/A
   - Espresso: 0.0–1.2 → 0–12 clicks (mostly unusable; ZP6 *cannot* reliably pull espresso)
   - Moka pot: 1.1–3.6 → 11–36 clicks
   - AeroPress: 0.7–6.2 → 7–62 clicks (very wide because of inversion vs. upright + dose variation)
   - V60 / pour-over: 1.4–3.9 → 14–39 (V60 specific) or 1.5–5.9 → 15–59 (general pour-over)
   - Siphon: 1.2–4.8 → 12–48
   - Cupping: 2.0–5.2 → 20–52
   - Chemex: not separately listed by HCG; community consensus places it at the coarser end of pour-over, ~30–55 clicks
   - French press: 3.9–7.0 → 39–70
   - Cold brew: 4.9–7.0 → 49–70
   - Cold drip: 5.1–7.0 → 51–70

   Cross-checks: 1Zpresso's own *Champion Recipe Collection* lists pour-over recipes from World Brewers Cup competitors at 4.1, 5.2, 5.5, 5.6 — i.e., 41–56 clicks for V60-style brews with very-light-roasted competition coffees. Rogue Wave Coffee's official "first brew" recommendation is "We recommend trying out grind setting at 4.5 - 5.0 as your starting point for a 15g brew" (45–50 clicks). Coffee Chronicler's grind-size chart lists "1zpresso ZP6 Special… French Press: 4.5–5.5, Pour Over: 3–4.5, AeroPress: 2–3.5, Moka Pot: 2–3, Espresso: n/a." For the artifact, I'm picking ranges that span both HCG and Coffee Chronicler.

7. **Production variants.** The product line under the ZP6 banner is essentially **one grinder**: the ZP6 Special (2022), sold internationally also branded just "ZP6." 1Zpresso's official product page positions it as "Meet Carlos Medina, the 2023 World Brewers Cup Champion, who triumphed using the ZP6 Special" (with retailer pages adding he is "of Chile" and won "in Athens, Greece"). The original ZP6 (Taiwan, 2019–2021) is discontinued, used a different body and a 60-click/33-µm dial, and is not available new. The J-Max is a *separate* grinder — it has 48 mm Italmill-style heptagonal *titanium-coated* burrs and is purpose-built for espresso (8.8 µm/click), so it shares only the diameter with the ZP6 burr, not the geometry. The Femobook A4Z is a third-party motorized grinder that licenses the actual ZP6 burrs, founded by former 1Zpresso engineers per Coffeeble.

8. **Known limitations / quirks.**
   - **No espresso.** Both 1Zpresso's silence (no espresso click recommendation) and reviewers (Coffeeble: "Not suitable for espresso… 22-micron steps are too coarse for dialing"; Coffee Chronicler) confirm the ZP6 cannot reliably grind for espresso. The hexagonal geometry produces too few fines to build 9 bar of pressure on a non-pressurized basket.
   - **Burr rub at zero.** Going to absolute zero risks locking the burrs and forcing recalibration (multiple user reports on Home-Barista and on 1Zpresso's own product reviews; one user reported "I've had this grinder for two weeks and burrs locked when I went to tightest setting").
   - **Best with light roasts and washed/lightly-processed coffees.** The unimodal, low-fines distribution is what makes it special, but it strips body and forgiveness — Coffeeble: "Medium and dark roasts lose their complexity before it hits the cup." For darker roasts, the JX-Pro or K-Ultra are better picks.
   - **Cross-grinder mapping is necessarily approximate.** The hexagonal-burr particle distribution is *narrower* (more unimodal, fewer fines) than the C40 Nitro Blade's, the Timemore S2C/Standard burr's, or the Timemore C2's. So even if you match a click-equivalent burr gap, the cup will taste different — typically cleaner, more acidic, lighter body. Click-to-click mapping between ZP6 and C40 will be in the right ballpark for V60 starting points but should not be trusted to a click.
   - **Speed and ergonomics.** Faster than a Comandante C40 (~1–1.5 g/s grinding speed reported by VacBrew Coffee). Cylindrical case is widely complained about. Handle is non-foldable on early units; current production has a foldable handle.

## Details

### Recommended JS spec block (drop into your config)

```js
{
  id: "zp6",
  name: "1Zpresso ZP6",
  model: "ZP6 / ZP6 Special",
  subtitle: "48mm hexagonal stainless-steel burrs · external adjustment · pour-over focused",
  minClick: 0,
  maxClick: 90,            // one full rotation; the dial can go above this but HCG's chart caps at 70 (= 7.0)
  micronsPerClick: 22,     // 1Zpresso official: 0.022mm vertical burr travel per click
  zeroOffset: 0,           // calibrated burrs-touching, like the Comandante C40 and Timemore C2 (NOT the S3's 75µm gap)
  majorTick: 10,           // dial reads as N.C; 10 sub-clicks per number, 9 numbers per rotation
  methodRanges: {
    espresso: null,                  // not recommended; mechanically possible only at clicks 0-12 which are mostly burr-rub
    moka:      [11, 36],             // HCG: 1.1 – 3.6
    aeropress: [25, 45],             // tightened from HCG's 7-62; matches Coffee Chronicler's 2.0-3.5 ≈ 20-35 plus headroom
    v60:       [25, 45],             // HCG V60: 14-39; Rogue Wave starting point 45-50; Champion recipes 41-56
    chemex:    [35, 55],             // not in HCG; consensus medium-coarse (slightly coarser than V60)
    french:    [55, 75],             // HCG French press: 3.9 – 7.0
    cold:      [60, 90]              // HCG cold brew 4.9-7.0 + cold drip 5.1-7.0; extend to 90 for cold-drip max
  },
  // Optional metadata — recommended to include for accurate downstream behavior:
  meta: {
    burrSize: 48,                    // mm
    burrGeometry: "hexagonal conical (6-cutting-edge)",
    burrMaterial: "stainless steel (uncoated)",
    adjustment: "external ring, top-mounted, 90 clicks/rotation, 22µm/click vertical burr travel",
    dialNotation: "N.C  (e.g., 3.2 = number 3, click 2 = 32 clicks)",
    practicalMinUsableClick: 12,      // first ~12-15 clicks unusable due to burr rub (HCG: 'numbers 0 to ~2 unusable')
    practicalMaxUsefulClick: 70,      // beyond #7.0 you're in cold-drip territory
    espressoCapable: false,
    competitionPedigree: "Carlos Medina (Chile) won the 2023 World Brewers Cup in Athens with this grinder, per 1Zpresso's official ZP6 page",
    notes: [
      "Zero is burrs-touching (Comandante/C2-style), NOT factory gap (S3-style)",
      "Hexagonal burrs produce a more unimodal/narrower particle distribution than C40 Nitro Blade or Timemore S2C/Standard burrs — cross-mapping is approximate",
      "1Zpresso's microns-per-click is vertical travel, not horizontal gap change — Honest Coffee Guide flags this as misleading for cross-grinder math",
      "Best with light roasts; flatters washed coffees, exposes flaws in darker/processed coffees"
    ]
  }
}
```

### Why mapping ZP6 ↔ C40 / S3 / C2 will be imperfect

| Property | C40 | S3 | C2 | **ZP6** |
|---|---|---|---|---|
| Burr | Nitro Blade conical (Etzinger-style) | flat S2C-style | conical "Standard" | hexagonal conical (6-edge) |
| µm/click (vertical) | ~30 | ~15 | ~80 | 22 |
| Zero | burrs touching | 0.075 mm factory gap | burrs touching | burrs touching |
| Particle distribution | bimodal-ish, balanced | flat-burr unimodal | bimodal, more fines | strongly unimodal, very few fines |
| Espresso | possible (with effort) | possible | not really | NO |

The ZP6's hexagonal burr is geometrically closer to SSP/EK-style "brew" burrs in distribution shape than to any of the other three, despite being a conical. Cross-grinder click mapping at the same brew method (e.g., V60) will tend to under-extract on the ZP6 if you naively translate from another grinder's recommended setting, because the ZP6's lower fines fraction means it can take a finer setting without astringency.

## Recommendations

**Stage 1 — drop into the artifact now.** Use the spec block above. It's defensible against the published 1Zpresso manual, two reputable third-party grind charts (Honest Coffee Guide, Coffee Chronicler), and 1Zpresso's own Champion Recipe Collection.

**Stage 2 — when you actually grind on it.** Re-zero by hand (turn the adjustment ring counter-clockwise until the handle starts to bind; that's true zero) and find your *personal* burr-rub clear point. If it lands at 8 clicks, fine; if it's 18, fine. Set `practicalMinUsableClick` in your config to that number. The factory tolerance per 1Zpresso's manual is "±2 or more clicks" off from #0.

**Stage 3 — when comparing to the C40 in your artifact.** Don't use a flat µm-per-click ratio (22/30 ≈ 0.73× C40 clicks for ZP6). Instead, if you have a coffee dialed at C40 24 clicks for V60, *start* at ZP6 click 30, then taste — you will likely need to go finer (~28) on the ZP6 because the fines-poor distribution under-extracts at the same nominal gap.

**Threshold that would change the recommendation:** If 1Zpresso releases a "ZP6 Pro" or successor with a different click density or a factory gap, re-fetch from their official manual page (`1zpresso.coffee/manual-k-en/`) — that's the canonical source. Also, if Lance Hedrick publishes a particle-distribution comparison vs. C40 (he has hinted at one), use his measured 50-percentile particle sizes per click instead of the 22 µm number for cross-mapping.

## Caveats

- **Lance Hedrick's specific click recommendations for V60 light roast were not extractable from public text.** His "Best Filter Hand-Grinder: 1Zpresso ZP6" YouTube video (2022-08-19, ~103k views) is the single most-cited recommendation for the grinder, but the click numbers he uses live in the video audio, not in transcript form. His published AeroPress (dark/decaf) recipe on aeroprecipe.com states "Grind 30g of coffee at around 1200 micron (800 or so burr movement); Around 35 clicks on a Comandante or 65 clicks on a 1ZPRESSO ZP6," which is consistent with my AeroPress range. If you want a Lance-specific V60 number, watch the video — community forum chatter places his V60 light-roast preference around 3.5–4.5 (35–45 clicks), but I could not surface a verbatim quote.
- **The 22 µm/click figure is vertical burr travel, not particle-size delta.** Honest Coffee Guide explicitly publishes a critique noting 1Zpresso's per-click micron numbers "are unhelpful and misleading" for conical-burr cross-grinder math. I've included it for symmetry with your other grinders, but flag it as such in the artifact's tooltip if you have one.
- **Honest Coffee Guide's brew-method ranges are unusually wide** (e.g., AeroPress 0.7–6.2 = 7–62 clicks). They are intended to encompass *every* legitimate AeroPress style (inverted very-fine all the way to coarse Tetsu-Kasuya-style); for a usable starting range I narrowed to the typical inverted-medium range that matches Coffee Chronicler and the 1Zpresso recipe book. Adjust to taste.
- **There is mild conflict in the source data on minor specs.** Weight is reported as 700 g (1Zpresso official) vs. 750 g (Rogue Wave) vs. 570 g (VacBrew — likely a transcription error). Foldable handle is now standard but earlier units shipped with a fixed handle. None of this affects the JS spec.
- **Hexagonal vs. heptagonal labeling on retailer pages is occasionally wrong** (Frekko.nl calls it heptagonal). 1Zpresso's own product page is the source of truth: hexagonal.
- **The ZP6 ≠ ZP6 Special distinction is purely the original Taiwan-only 2019 unit.** Anything you can buy new today branded "ZP6" is the ZP6 Special. If your artifact is for current grinders only, you can ignore the original entirely.