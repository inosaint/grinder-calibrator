# CLAUDE.md

Project context for Claude Code when working in this repo.

## What this is

A single-file static site (`index.html`) that maps grind settings between hand grinders. Pure React via CDN + Babel standalone, Tailwind via CDN, no build step. Hosted at `kenneth.dsouza.im/grinder-calibrator/` via GitHub Pages.

Built by @filtercoffeeconnoisseur in collaboration with Claude. The audience is hobbyist coffee people who own one grinder and need to translate a recipe written for another. The tone of every user-facing string is "approximate, trust your taste" — the tool's job is to give a defensible starting click count, not a guaranteed match.

## Design principles

- **Microns are the bridge, but coffee is the test.** The conversion is mathematically linear in microns; reality is not. Always frame outputs as starting points and note that taste / extraction behaviour will diverge between grinders even at matched µm.
- **Don't add features the user didn't ask for.** This codebase has been intentionally restrained — no per-method fine-tune sliders, no preset library, no recipe import. Ask before introducing one.
- **Visual restraint.** Earthy, desaturated palette. No icons added without a reason. The dial is the hero; everything else stays out of its way.

## Architecture you must understand before editing

**Microns are the source of truth.** `METHOD_MICRON_RANGES` in `index.html` is one map of brew method → recommended µm range, derived from Honest Coffee Guide's Comandante C40 click ranges × 30 µm/click. Every grinder's click range is computed on the fly via `getMethodClickRange(grinder, methodId)` using its own `micronsPerClick` and `zeroOffset`. Cross-grinder mapping (one dial drives the other) goes click → microns → click.

**Do not change `METHOD_MICRON_RANGES` casually.** It's load-bearing across all grinders. If you think the truth ranges should change, raise it with the user — don't unilaterally adjust.

**HCG community ranges are the validation target, not the input.** Manufacturer hardware specs for µm/click can disagree with HCG/community brew-method ranges. The C2 is the canonical example: Timemore documents 80 µm/click; HCG's C2 brew-method click ranges back-fit to ~35 µm/click. We use the back-fit. Trust HCG, document discrepancies in the research file.

**Per-grinder schema** (each entry in `GRINDERS`):

```js
<id>: {
  id, name, model, subtitle,
  minClick, maxClick, micronsPerClick, zeroOffset, majorTick,
  accentColor,
  variants?,            // long string for the dropdown if the same config covers sibling models
  excludedMethods?,     // array of method ids this grinder physically can't do (e.g., ZP6 espresso)
  dialNotation?,        // 'numbered' for grinders that read N.C / R.N.C / R.CC; omit for plain integer click counts
  clicksPerRotation?,   // set for multi-rotation dials (K-Ultra: 100, Q Air: 30, K6: 60); omit for ZP6/S3
  clicksPerNumber?,     // set when the rotation has numbered sub-positions (K-Ultra: 10, Q Air: 3); omit for K6 R.CC format
}
```

Dial notation summary: plain integers (C40/C2/C3) → no `dialNotation`; single-rotation N.C (ZP6/S3) → `dialNotation:'numbered'` only; multi-rotation R.N.T/R.N.C (K-Ultra/Q Air) → also `clicksPerRotation` + `clicksPerNumber`; multi-rotation R.CC (K6) → also `clicksPerRotation` only.

**Existing accent colours** (avoid clashes when adding new grinders):
- `#c89d6a` Comandante C40 (warm gold)
- `#9bb086` Timemore S3 (muted green)
- `#b89a7c` Timemore C2 (warm tan)
- `#7ab4d0` 1Zpresso ZP6 (steel blue)
- `#a98aa5` 1Zpresso K-Ultra (dusty plum)
- `#a07850` KINGrinder K6 (muted bronze)
- `#c47a5a` 1Zpresso Q Air (terracotta)
- `#8aab9b` Timemore C3 (sage)

## Conventions

- All ranges, configs, and recommendations are HCG-aligned. The README's footer credits HCG; the on-page disclaimer links to it.
- Do not run browser/UI verification; I will verify UI manually. Use build/unit checks only unless explicitly requested.
- The C2 entry covers the C2/C2 Max/C2S/C2 Fold (same Standard burrs, mechanism, step). The `variants` field carries that string for the dropdown.
- Grinder-specific UI disclaimers are gated on `grinder.id === '<id>'` inside the `GrinderDisclaimer` component (see ZP6's espresso/hex-burr note). Don't add new disclaimers without the user explicitly asking.
- Fonts (DM Mono, Bodoni Moda) are loaded via `<link>` in `<head>`, not via `@import` inside React-rendered styles — Safari ignores the latter.
- Favicons live in `favicon/` (ico for Safari, svg for Chrome/Firefox).

## Adding a new grinder

Use the two subagents in `.claude/agents/`:

1. **`grinder-researcher` (Opus)** — given a grinder name, does the web research, writes a research markdown to `grinder-research/`, updates the README's grinders table, and hands off.
2. **`grinder-implementer` (Sonnet)** — reads the research file and adds the new entry to `GRINDERS` in `index.html`.

The researcher invokes the implementer at the end of its run. You only need to invoke the researcher.

## Files

- `index.html` — the entire app
- `favicon/` — ico, svg, png
- `grinder-research/` — per-grinder research markdown (one file per grinder)
- `README.md` — public-facing doc; supported-grinders table is the index of grinders
- `.claude/agents/` — subagent definitions
- `grinder-v1.png` — README hero image

## Things to avoid

- Don't change `METHOD_MICRON_RANGES` without raising it.
- Don't trust manufacturer µm/click figures over HCG community brew ranges. Back-fit when they disagree.
- Don't add tracking-[…] values larger than 0.12em — DM Mono renders tighter than the values originally tuned in the Claude.ai artifact, and over-tracked text was the most-reported issue in iteration.
- Don't move font loading back into a React `<style>` tag with `@import` — Safari won't apply it.
- Don't add disclaimers in the UI without the user asking; the existing footer + ZP6 note are intentional.
