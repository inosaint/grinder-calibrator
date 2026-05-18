# Release notes

## v1.1 — 2026-05-18

### New features

**Dialer (beta)** — bean-based grind starting points  
New tab alongside the Calibrator. Select processing type, roast profile, and altitude; pick a grinder; get a recommended click range + brew temperature. Density (low/high) is derived from the roast and altitude inputs. Mixed signals show both Low and High result cards side by side. Ranges grounded in SCA Golden Cup Standard and Jonathan Gagné / Coffee Ad Astra.

**iOS-style tab toggle in header**  
"Calibrator" and "Dialer β" live in a segmented pill in the sticky header. Switching tabs preserves the Calibrator's dial state.

**R.N.C / R.N.T / R.CC multi-rotation dial notation**  
Grinders with multi-rotation dials now display and accept settings in the correct format:
- 1Zpresso Q Air / Q2: `R.N.C` (30 clicks/rotation, 3 clicks/number) — e.g. `1.2.0`
- 1Zpresso K-Ultra: `R.N.T` (100 clicks/rotation, 10/number) — e.g. `0.5.3`
- KINGrinder K6: `R.CC` (60 clicks/rotation) — e.g. `1.42`

**Method auto-detection**  
Turning the source dial into a brew method's recommended range automatically selects that method pill (narrowest matching range wins on overlaps).

### Grinders added

None in this release.

### Bug fixes

- Q Air dial showed N.C format (`4.8`) instead of R.N.C (`1.2.0`) — fixed with `clicksPerRotation` + `clicksPerNumber` config fields
- K-Ultra and K6 dial notation similarly corrected
- Bean Guide click range for grinders with `methodOverrides` (S3, ZP6, K-Ultra) now anchors on the V60 override rather than the inaccurate linear µm/click approximation
- "Q Air Q Air" duplicate in grinder name plate — fixed by separating `name` and `model` fields

### Meta / SEO

- Added `<meta name="description">`, Open Graph, and Twitter Card tags
- Added `<link rel="canonical" href="https://grindsize.in/" />`
- Updated page title to "Grind Size — Coffee Grinder Settings Calculator"
- Added JSON-LD `WebApplication` structured data for SEO / AEO

---

## v1.0 — 2026-04 (initial public release)

- Calibrator with C40, S3, C2, C3, ZP6, K-Ultra, K6, Q Air
- Micron-based cross-grinder mapping via HCG-aligned method ranges
- Brew method pills: V60, Espresso, AeroPress, Moka, Chemex, French Press, Cold Brew
- Haptic-style click audio, conversion history, PostHog analytics
- Custom domain grindsize.in

---

## Deployment

The site is a single static file (`index.html`) hosted on GitHub Pages from the `main` branch.  
Custom domain: `grindsize.in` (CNAME in repo root).

**To release:**
1. Merge the feature branch into `main` via PR.
2. GitHub Pages redeploys automatically within ~1 minute.
3. Verify at https://grindsize.in.

**To add a grinder:**  
Run the `grinder-researcher` subagent (see `.claude/agents/`). It researches, writes `grinder-research/<name>.md`, updates the README table, and hands off to `grinder-implementer` to wire it into `index.html`.
