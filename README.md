# Portfolio - Degia Parlopa

Personal portfolio website built with **React 19**, **Vite 7**, and **Tailwind CSS 4**. Showcases my work as a Data Engineer & Data Analyst.

## Features

- **Space-themed animated UI** — starfield background with meteors, glassmorphism nav, dark/light mode
- **About** — experience summary and role highlights (Data Analyst, IT Operations)
- **Skills** — filterable skill bars with proficiency levels across 5 categories
- **Projects** — 12+ projects with live demos and source code links
- **Certificates** — 17 professional certificates filterable by domain
- **Contact** — social links and message form

## Tech Stack

| | |
|---|---|
| **Framework** | React 19 |
| **Build Tool** | Vite 7 (rolldown-vite) |
| **Styling** | Tailwind CSS 4 |
| **Routing** | React Router DOM 7 |
| **Animation** | Framer Motion, Animate.css, AOS |
| **Icons** | Lucide React |
| **Analytics** | @vercel/analytics |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production (`dist/`) |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Root with router
├── index.css             # Tailwind + theme vars
├── components/           # UI components (Navbar, Hero, About, Skills, Projects, etc.)
├── pages/                # Home, NotFound
├── data/                 # Skills, projects, certificates data
├── lib/                  # cn() utility
└── assets/               # Static images
```

Deployed at [portfolio-gia1.vercel.app](https://portfolio-gia1.vercel.app).
