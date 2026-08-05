# Stormpine brand assets

Official Stormpine logo files. This folder is the **canonical source** for the wordmark.

## Files

| File | Variant | Use on |
|------|---------|--------|
| `stormpine-logo-black.svg` | Black wordmark | Light backgrounds |
| `stormpine-logo-white.svg` | White wordmark (fill `#fff`) | Dark backgrounds |

- Both are the full lowercase **"stormpine"** wordmark, `viewBox="0 0 500 104.65"` (≈500×105), vector (scales cleanly to any size).
- Use these standalone files for **external / embedded** use (email, decks, third-party sites, favicons, exports).

## On-site use (preferred): the theme-adaptive inline version

For the marketing site itself, do **not** hardcode the black or white file. The header and footer use the `LOGO`
constant in [`../app.js`](../app.js) (~line 29): the same wordmark as a single `<svg fill="currentColor" class="brand-mark">`.
Because it inherits `currentColor`, it recolours automatically with the active light/dark theme (near-black in light,
near-white in dark), so one copy covers both themes.

If you edit the wordmark, update **all three** in sync: `stormpine-logo-black.svg`, `stormpine-logo-white.svg`, and the
`LOGO` constant in `app.js`.

## Adding a new / updated logo

Drop the new file into this folder and update this table. (An AI assistant cannot save an image pasted into chat to
disk, so a new logo has to be placed here as an actual file or shared as a path/URL.)

See also: [`../../WEBSITE.md`](../../WEBSITE.md) §4 (Design system) for how the logo is wired into the site.
