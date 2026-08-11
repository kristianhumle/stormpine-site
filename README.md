# Stormpine marketing site

Static, no-build marketing prototype for **Stormpine** (a Personal Career CRM). Plain HTML/CSS/JS: dark-first with a light toggle, tokens sampled 1:1 from the live product.

**Full design/build documentation:** see [`../WEBSITE.md`](../WEBSITE.md) in the project root. This README is just the dev/deploy quickref.

## Live
- Site: https://kristianhumle.github.io/stormpine-site/
- Host: GitHub Pages (`main` branch root, `.nojekyll`).

## Local preview
```bash
# from the project root (~/Weaver), not from website/:
python3 -m http.server 8747 --bind 127.0.0.1
# open http://127.0.0.1:8747/website/index.html
```
All links are relative, so opening `index.html` directly (`file://`) also works.

## Deploy
```bash
git push origin main    # auto-deploys via GitHub Pages (~1 min)
```
🚦 **Always confirm with the maintainer before pushing**: the push is the deploy. Auth is HTTPS + macOS keychain token (not SSH, not an MCP connector). This repo is intentionally separate from `kristianhumle/investinfo`; never mix them.

## Structure
- `index.html`: homepage (animated hero model, walkthrough, feature sections).
- `product.html`, `who-its-for.html`, `pricing.html`, `organisations.html`, `trust.html`: stubs.
- `styles.css`: the whole design system (tokens + components + the `.pg` hero model).
- `app.js`: injects the shared header (Materials bar + mega-nav) + footer; theme toggle, mobile nav, scroll-reveal, scrollspy walkthrough.
- `stormpine-website-direction.html` (Moodboard), `stormpine-hero-concepts.html`, `stormpine-page-element-concepts.html`: internal design "Materials" pages, linked by the Materials menu (not in the public marketing nav).

## Notes
- **Concepts don't auto-sync:** the hero/element concepts are authored elsewhere and copied in. If you refresh one from source, re-add the Materials menu block to its header before pushing.
- Editing the shared nav/footer? Do it in `app.js` (injected everywhere), not per-page.
