# Cliniko — cliniko.in

Next.js 15 (App Router) · React 19 · Framer Motion 12 · plain CSS design system.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where things live

| What | File |
| --- | --- |
| Contact email, socials, **package prices**, testimonials, film links | `content/site.ts` |
| Design tokens (colours, type, radii, shadows) + all styles | `app/globals.css` |
| Homepage section order | `app/page.tsx` |
| Sections | `components/sections/*` |
| Shared UI (logo, icons, reveal motion) | `components/ui/*` |
| Photography | `public/images/*` (originals in `raw/`, git-ignored) |

## Content rules

- **Prices:** set `price` on a package (e.g. `"₹45,000"`); `null` shows "Tailored quote".
- **Testimonials:** only entries with `verified: true` render. Until then the section shows the Cliniko promise — never invented quotes.
- **Films:** add `src` (an mp4 URL) to a film to make its play button open the video; without one it opens a "private preview" state.
- Photography is AI-generated art direction. Replace it with real client photography as engagements are completed.
