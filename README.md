# jr-portfolio

Personal portfolio of Jacopo Rossi — [jacoporossi.com](https://www.jacoporossi.com).

Static Astro site, bilingual (Italian at `/`, English at `/en/`), styled with Tailwind CSS and deployed on Vercel.

## Structure

```
src/
├── i18n/content.ts        # every piece of copy, in IT and EN, plus links
├── components/            # Header, Hero, Projects, About (log + stack), Contact, Footer
├── layouts/Layout.astro   # <head>: SEO, hreflang, Content-Security-Policy, fonts
├── pages/index.astro      # Italian home
├── pages/en/index.astro   # English home
└── styles/global.css      # design tokens (colors, fonts)
public/cv/                 # the CV linked by the "Download CV" button
```

To change a text, edit `src/i18n/content.ts` — both languages live side by side. To add a project, add an entry to `projects.list` in each language.

## Commands

| Command           | Action                                  |
| :---------------- | :-------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Dev server at `localhost:4321`          |
| `npm run build`   | Build the static site into `./dist/`    |
| `npm run preview` | Preview the build locally               |

A `Dockerfile` (nginx) is also provided for self-hosting.
