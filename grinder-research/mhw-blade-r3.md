# MHW-3BOMBER Blade R3 — Grinder Research

## TL;DR

- **Hardware:** Manual conical burr grinder with Rapidity-3 48 mm burrs and an external adjustment dial.
- **HCG range:** Honest Coffee Guide lists the Blade R3 as covering **165-1180 microns**.
- **Effective step:** `(1180 - 165) / 180 = 5.6 µm/click`. MHW's published 16 µm/click figure is treated as burr travel, not effective particle-size movement, matching the approach used for K-Ultra, K6, C2, C3, and Q Air.
- **Dial notation:** HCG displays settings as rotation + number + tick, for example `2+4.3`. In the app this is rendered with the existing R.N.T formatter as `2.4.3`.
- **Config:** `maxClick: 180`, `zeroOffset: 165`, `micronsPerClick: 5.6`, `clicksPerRotation: 60`, `clicksPerNumber: 5`.

## HCG Method Ranges

HCG's exact Blade R3 rows are converted into absolute clicks for `methodOverrides`.

| App method | HCG setting | Absolute clicks |
|---|---:|---:|
| Espresso | 0.3-7.3 | 3-38 |
| Moka | 7-1+5.2 | 35-87 |
| AeroPress | 5.3-2+4 | 28-140 |
| V60 | 8.2-1+6.4 | 42-94 |
| French Press | 1+6.4-3+0 | 94-180 |
| Cold Brew | 1+10.3-3+0 | 113-180 |

HCG does not publish a Blade R3 Chemex row, so the app keeps using the shared micron-derived Chemex range for this grinder.

## Notes

The branch that first added Blade R3 used `clicksPerNumber: 6`. HCG settings such as `1+10.3` and `1+11.2` show that the dial has 12 numbered positions per 60-click rotation, so the correct app value is `clicksPerNumber: 5`.

## Sources

- Honest Coffee Guide Blade R3 grind settings: https://honestcoffeeguide.com/mhw-3bomber-blade-r3-grind-settings/
- MHW-3BOMBER product information: https://mhw3bomber.com/products/mhw-3bomber-blade-r3-manual-coffee-grinder-1
