# Hand Grinder Calibrator

![](./grinder-v1.png)

A browser-based tool for mapping grind settings between hand grinders. Dial in a click count on one grinder and see the equivalent setting on another, based on each grinder's microns-per-click and zero-offset values. Includes brew method presets (V60, Espresso, AeroPress, Moka, Chemex, French Press, Cold Brew) with highlighted recommended ranges and haptic-style click audio feedback.

No build step required — open `index.html` directly or host on GitHub Pages.

## Supported grinders

| Grinder | Notes | Research |
|---|---|---|
| Comandante C40 MK4 Nitro Blade | 30 µm/click, 0–40 clicks | [Research](grinder-research/compass_artifact_wf-733156ec-01ef-46af-a5bd-6f575d5c01bc_text_markdown.md) |
| Timemore Chestnut S3 | 15 µm/click, 0.075 mm factory zero offset, 0–90 clicks | [Research](grinder-research/compass_artifact_wf-733156ec-01ef-46af-a5bd-6f575d5c01bc_text_markdown.md) |
| Timemore Chestnut C2 | 80 µm/click, 0–36 clicks | [Research](grinder-research/compass_artifact_wf-78d91def-6395-4c3b-a306-51ddc9e5e76c_text_markdown.md) |
| 1Zpresso ZP6 Special | 22 µm/click, 0–90 clicks, pour-over only (no espresso) | [Research](grinder-research/compass_artifact_wf-9b051b00-1fb6-4ac0-89c9-ef55db886859_text_markdown.md) |

## License

MIT License

Copyright (c) 2026

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
