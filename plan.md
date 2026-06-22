# Coffee brewing, grind size, and bean-variable research plan

## Goal

Research how coffee brewing recipes and grind sizes relate to brewer type,
processing method, altitude, and roast profile. The output should guide future
Dialer/calibrator decisions without changing app behavior yet.

## Evidence summary

- **Brewer type sets the hard grind boundary.** Honest Coffee Guide lists
  Comandante C40 MK4 method bands across espresso, V60, AeroPress, moka, French
  press, and cold brew, and states the grinder spans roughly 0-1090 microns.
  With the repo's C40 basis of 30 um/click, those method bands justify using
  brewer-specific micron ranges as the first constraint.
  Source: <https://honestcoffeeguide.com/comandante-c40-mk4-grind-settings/>
- **Grind, ratio, time, and temperature are coupled.** SCA Standard 310-2021
  tests home filter brewers at 55 g/kg, 90-96 C slurry temperature, and defined
  grind distributions: 425-850 um for conical baskets and 589-1168 um for flat
  baskets. This supports treating grind recommendations as recipe-dependent,
  not as standalone bean facts.
  Source: <https://sca.coffee/s/SCA_Standard_310-2021.pdf>
- **Extraction direction is stable.** Finer grind, hotter water, and longer
  contact generally raise extraction; too fine can produce bitterness, clogging,
  or uneven flow, while too coarse can taste weak.
  Sources: <https://en.wikipedia.org/wiki/Coffee_preparation#Grinding>,
  <https://en.wikipedia.org/wiki/Coffee_extraction>
- **Very fine grinding can backfire in percolation.** Lee, Smith, and Arshad's
  "Uneven Extraction in Coffee Brewing" models why grinding finer past a cutoff
  can reduce extraction by encouraging uneven flow paths.
  Source: <https://arxiv.org/abs/2206.12373>
- **Processing affects cup balance more than brewer mechanics.** Washed coffees
  tend cleaner, lighter-bodied, and brighter; natural coffees tend fuller,
  sweeter/fruitier, and often lower in perceived acidity; honey processing sits
  between them.
  Sources: <https://en.wikipedia.org/wiki/Coffee_production#Semi-dry_process>,
  <https://en.wikipedia.org/wiki/Geisha_(coffee)#Growing_and_Processing>
- **Roast profile changes density, porosity, and solubility.** Roasting reduces
  mass, expands the bean, and lowers density. Dark roasts usually extract more
  easily and become bitter faster; light roasts often need more extraction
  energy.
  Sources: <https://en.wikipedia.org/wiki/Coffee_roasting>,
  <https://www.foodandwine.com/light-roast-vs-dark-roast-coffee-8624941>
- **Altitude is a weak proxy.** High-grown coffees are often treated as denser
  and more acidity-forward, but altitude is less reliable than actual roast
  level, measured density, variety, processing, and roaster intent. Use it as a
  small nudge only.

## Recipe baselines by brewer

| Brewer | Typical ratio | Contact / target time | Grind relationship | Bean-variable sensitivity |
|---|---:|---:|---|---|
| Espresso | 1:2-2.5 beverage yield | 25-30 s | Finest band. Flow resistance is the recipe control, so small grind moves matter. | Light roasts usually need finer grind / hotter brew temp; dark or heavily fermented coffees often need coarser grind or shorter ratio. |
| Moka pot | 1:7-10 brew chamber ratio | Until sputter begins | Fine-to-medium, coarser than espresso to avoid choking the basket. | Dark roasts and naturals can become heavy quickly; start slightly coarser or remove from heat early. |
| AeroPress | 1:13-16 standard, 1:10-13 bypass/inverted | 1:00-2:30 before press | Wide band because immersion, agitation, paper/metal filter, and bypass vary. | Strong candidate for bean-variable compensation: fine/hot for light washed; coarser/cooler for dark, natural, or infused coffees. |
| V60 / conical pour-over | 1:15-17 | 2:30-3:30 drawdown | Medium-fine to medium. Grind controls both extraction and drawdown. | High-altitude washed coffees can tolerate finer/hotter; natural/experimental coffees often present better a little coarser. |
| Chemex | 1:15-17 | 4:00-5:00 drawdown | Coarser than V60 because thicker paper and larger bed slow flow. | Light/high-density coffees may need hotter water or more agitation before moving much finer. |
| French press | 1:15-17 | 4:00 classic; 9:00+ for skim-and-settle recipes | Coarse-to-medium-coarse. Time is long, so grind can stay coarse unless using a cleaner-cup recipe. | Roast/process changes are usually handled with time and decanting more than large grind shifts. |
| Cold brew | 1:8-10 concentrate | 12-18 h, up to 24 h | Coarsest band. Cold water slows extraction, so time and ratio carry the recipe. | Dark/fermented coffees can become boozy or bitter with very long steeps; use the coarse half of the band or shorter steep. |

## Recommended model for future implementation

1. Start from brewer/method micron range.
2. Choose an in-band position from processing and altitude.
3. Apply roast as a small modifier, not a new method band:
   - light: 20-30 um finer and about +1 C.
   - medium: no shift.
   - dark: 25-35 um coarser and about -2 C.
4. Clamp back to the brewer range so bean metadata never recommends the wrong
   method grind.

## Implementation cautions

- Do not change `METHOD_MICRON_RANGES` from bean research alone. Those are
  brewer/grinder compatibility bands.
- Keep bean-variable modifiers small. Large deterministic offsets would look
  precise but behave falsely.
- Prefer measured inputs if they become available: roast color/Agtron, bean
  density, measured extraction, or user dial-in feedback should outrank altitude.
- Add app/UI behavior only after deciding how roast profile should be represented
  in the product; this research alone should not change the live recommendations.
