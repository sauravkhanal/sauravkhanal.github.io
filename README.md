# Saurav Khanal — Portfolio

Personal portfolio website built with a **Neobrutalist** design aesthetic.

## Stack

| Tool | Purpose |
|---|---|
| [Nunjucks](https://mozilla.github.io/nunjucks/) | HTML templating |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling |
| Vanilla JS | Modal, focus trap, dynamic year |
| [Formspree](https://formspree.io/) | Contact form backend |

## Project Structure

```
neo/
├── build.js              ← Nunjucks build script
├── global.css            ← Tailwind source + custom utilities
├── output.css            ← Generated (do not edit)
├── index.html            ← Generated (do not edit)
└── src/
    ├── data.json         ← All content data
    ├── index.njk         ← Entry point template
    ├── layouts/
    │   └── base.njk      ← HTML shell, <head>, scripts
    └── partials/
        ├── navbar.njk
        ├── hero.njk
        ├── about.njk
        ├── experience.njk
        ├── projects.njk
        ├── skills.njk
        ├── footer.njk
        └── modal.njk
```

## Commands

```bash
# Install dependencies
npm install

# Development (watches both HTML templates and CSS)
npm run dev

# One-time production build
npm run build

# Build HTML only
npm run build:html

# Build CSS only
npm run build:css
```

## Updating Content

All content lives in **`src/data.json`** — no HTML editing needed:

- **Personal info** (name, email, phone, social links)
- **Experience** entries
- **Projects** with highlights and tech tags
- **Skills** grouped by category
- **Education** entries

After editing `src/data.json`, run `npm run build:html` to regenerate `index.html`.
