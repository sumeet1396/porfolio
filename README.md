# Sumeet Rane — Portfolio

Developer terminal–style portfolio built with **Next.js**, **Framer Motion**, and **React Three Fiber**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Update content (no code changes)

Edit these JSON files and refresh:

| File | What to update |
|------|----------------|
| `src/data/profile.json` | Name, title, bio, email, social links |
| `src/data/skills.json` | Skills with icon URL and proficiency (0–100) |
| `src/data/experience.json` | Work history (company, role, period, highlights) |
| `src/data/projects.json` | Project cards (title, description, tech, links) |

### Skill entry shape

```json
{
  "id": "react",
  "name": "React.js",
  "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "proficiency": 95
}
```

`proficiency` is 0–100 (shown as progress bar). Labels: 90+ expert, 75+ advanced, 60+ intermediate.

### Experience entry shape

```json
{
  "id": "company-slug",
  "company": "Company Name",
  "role": "Job Title",
  "period": "Jan 2020 – Present",
  "description": "One-line company context.",
  "highlights": ["Achievement or responsibility."]
}
```

### Project entry shape

```json
{
  "id": "unique-id",
  "title": "Project Name",
  "description": "Short description.",
  "tech": ["Next.js", "Node.js"],
  "github": "https://github.com/...",
  "live": "https://demo-url.com",
  "featured": true
}
```

Set `"live": null` if there is no live demo.

## SEO

1. Copy `.env.example` to `.env.local`
2. Set `NEXT_PUBLIC_SITE_URL` to your deployed domain

Includes: metadata, Open Graph, Twitter cards, `sitemap.xml`, `robots.txt`, and JSON-LD structured data.

## Build & deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) or any Node host that supports Next.js.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Three Fiber / Three.js
