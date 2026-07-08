# Assets

Source images, re-optimized at build by `astro:assets` (large source files are fine).

```
assets/
├─ hero/          # full-bleed hero backgrounds (CSS background-image, optimized to WebP)
├─ services/      # one photo per service (slug-named); used on cards + service pages
└─ maps/          # static map art if you ever drop the live embeds
```

Service photos are best at **3:2 landscape** (they're cropped to 3:2 on city-page cards and
shown at natural ratio on the homepage rows). Drop in large files freely — `astro:assets`
resizes/compresses them at build; only the optimized variants ship.

## Images are AI-generated

The current images were generated with OpenAI `gpt-image-1` via `scripts/generate_images.mjs` (see `ATTRIBUTION.md` for prompts). They are synthetic, license-clean, and illustrative — they depict no real person, business, vehicle, or job site. Regenerate with the script; keep the same filenames (or update the `import`s in `src/config/services.ts`). `public/og.jpg` is cropped from `hero/hero.jpg`.

### Where each image is referenced

| File | Used by |
|---|---|
| `hero/hero.jpg` | site-wide default hero (`src/lib/images.ts` → `defaultHero`) + source for `public/og.jpg` |
| `services/septic-services.jpg` | `septic-services` service (hub catch-all) |
| `services/septic-tank-pumping.jpg` | `septic-tank-pumping` service |
| `services/septic-tank-cleaning.jpg` | `septic-tank-cleaning` service |
| `services/septic-system-repair.jpg` | `septic-system-repair` service |
| `services/septic-inspections.jpg` | `septic-inspections` service |
| `services/drain-field-repair.jpg` | `drain-field-repair` service |
| `services/emergency-septic-service.jpg` | `emergency-septic-service` service (emergency) |

Service photos are imported at the top of `src/config/services.ts`. Per-city overrides go in
`city.serviceImages` / `city.heroImage` in `src/config/cities.ts`.

### Favicons

This site ships **no favicon on purpose** (see `BaseLayout.astro`) — search engines fall back to a
generic icon and there are no favicon files to maintain. If you want a brand mark later, add the
favicon files to `public/` and the `<link>` tags to `BaseLayout.astro`.
