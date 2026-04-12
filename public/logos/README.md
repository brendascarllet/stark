# Partner / Manufacturer Logos

This folder holds the brand logos shown in the footer "Premium Brands We Install" strip
(component: `src/components/PartnerLogos.tsx`).

## Required filenames

Drop the logo files here using these **exact** names:

| File                  | Brand        | Where it shows           |
|-----------------------|--------------|--------------------------|
| `gaf.png`             | GAF          | Roofing — Certified      |
| `malarkey.png`        | Malarkey     | Roofing — Installer      |
| `certainteed.png`     | CertainTeed  | Roofing — Installer      |
| `james-hardie.png`    | James Hardie | Siding                   |
| `velux.png`           | VELUX        | Skylights                |
| `bulldog.png`         | Bulldog      | Gutters                  |

## Format guidance

- **PNG with transparent background** is best (SVG also works — change the
  extension in `PartnerLogos.tsx` if you go SVG).
- The strip displays logos on a **dark navy** background. The component
  applies `filter: brightness(0) invert(1)` so any colored logo gets
  forced to **pure white**. If a brand requires its full-color logo, edit
  `PartnerLogos.tsx` and remove `filter brightness-0 invert` from the
  `<img>` className for that brand.
- Recommended height: **80–120px** at 2× resolution (so ~160–240px tall PNG).

## Fallback behavior

If a file is missing, the tile falls back to a clean styled wordmark of the
brand name — the strip will never look broken. Just drop the real PNG in
and refresh; no code changes needed.
