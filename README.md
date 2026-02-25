<div align="center">

# ruthvik.tech

### Personal Portfolio — Aspiring AI/ML Engineer & Developer

[![Live Site](https://img.shields.io/badge/🌐_Live-ruthvik.tech-B8860B?style=for-the-badge)](https://ruthvik.tech)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-P--Ruthvik-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/p-ruthvik)
[![GitHub](https://img.shields.io/badge/GitHub-ruthvik--01-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ruthvik-01)

<br />

<img src="https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white" />

</div>

---

## 📸 Overview

A sleek, modern single-page portfolio built with **Next.js 16** and **React 19**, featuring smooth Framer Motion animations, a canvas particle network background, and a warm off-white & dark gold design language.

<br />

## ✨ Features

| Feature               | Description                                                                             |
| --------------------- | --------------------------------------------------------------------------------------- |
| 🎯 **Hero Section**   | Full-screen intro with animated name reveal, "Open to Work" badge, and scroll indicator |
| 🧑‍💻 **About**          | Bio with academic background and areas of interest                                      |
| 💼 **Projects**       | Interactive project cards with live demo & GitHub links, filterable by tech stack       |
| 🛠️ **Skills**         | Three-column categorized skill grid with animated pill tags                             |
| 🎓 **Education**      | Vertical timeline with highlighted current entry                                        |
| 🏆 **Hackathons**     | Grid showcase of hackathon participations                                               |
| 📜 **Certifications** | 16 certification cards linked to PDF proofs                                             |
| 📬 **Contact**        | CTA with mailto, LinkedIn & GitHub quick links                                          |
| 🎠 **Marquee**        | Infinite scrolling motivational text with gold diamond separators                       |
| 🔝 **Back to Top**    | One-click smooth scroll from the footer                                                 |

<br />

## 🎨 Visual Effects

- **Particle Network** — 60-node canvas animation with connecting lines, fixed behind content
- **Floating Orbs** — Three large blurred circles drifting slowly at low opacity
- **Grain Texture** — Subtle animated vertical-line overlay on the hero
- **Scroll Animations** — Section-by-section reveal powered by Framer Motion `useInView`
- **Micro-interactions** — Hover fills, tap springs, staggered list reveals
- **Responsive Navbar** — Scroll-aware blur backdrop with animated hamburger → X morph

<br />

## 🏗️ Tech Stack

| Layer          | Technology                                                      |
| -------------- | --------------------------------------------------------------- |
| **Framework**  | [Next.js 16](https://nextjs.org/) (App Router)                  |
| **UI Library** | [React 19](https://react.dev/)                                  |
| **Language**   | [TypeScript 5](https://www.typescriptlang.org/)                 |
| **Styling**    | [Tailwind CSS 4](https://tailwindcss.com/)                      |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/)              |
| **Icons**      | [React Icons](https://react-icons.github.io/react-icons/)       |
| **Font**       | [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts) |
| **SEO**        | OpenGraph, Twitter Cards, Sitemap, Robots.txt                   |
| **Deployment** | [Vercel](https://vercel.com/)                                   |

<br />

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css        # Design tokens, custom properties & animations
│   ├── layout.tsx         # Root layout with metadata & fonts
│   ├── page.tsx           # Home page composing all sections
│   ├── robots.ts          # Search engine crawler rules
│   └── sitemap.ts         # XML sitemap generation
├── components/
│   ├── Navbar.tsx          # Fixed responsive navigation
│   ├── Hero.tsx            # Landing hero section
│   ├── About.tsx           # Bio & introduction
│   ├── Projects.tsx        # Project showcase cards
│   ├── Skills.tsx          # Categorized skills grid
│   ├── Education.tsx       # Academic timeline
│   ├── Hackathons.tsx      # Hackathon participation grid
│   ├── Certifications.tsx  # Certification cards with PDF links
│   ├── Contact.tsx         # Contact CTA section
│   ├── Marquee.tsx         # Infinite scrolling text banner
│   ├── Footer.tsx          # Footer with back-to-top
│   ├── FloatingOrbs.tsx    # Ambient background orbs
│   └── ParticleBackground.tsx  # Canvas particle network
public/
└── certifications/         # PDF certificate files
```

<br />

## 🎨 Color Palette

| Token        | Hex       | Preview                                                      | Usage                      |
| ------------ | --------- | ------------------------------------------------------------ | -------------------------- |
| Background   | `#EDEDEA` | ![#EDEDEA](https://via.placeholder.com/12/EDEDEA/EDEDEA.png) | Page background            |
| Foreground   | `#1A1A1A` | ![#1A1A1A](https://via.placeholder.com/12/1A1A1A/1A1A1A.png) | Primary text               |
| Accent       | `#B8860B` | ![#B8860B](https://via.placeholder.com/12/B8860B/B8860B.png) | Links, highlights, accents |
| Accent Light | `#DAA520` | ![#DAA520](https://via.placeholder.com/12/DAA520/DAA520.png) | Hover states               |
| Dark BG      | `#111111` | ![#111111](https://via.placeholder.com/12/111111/111111.png) | About & Contact sections   |
| Muted        | `#6B6B6B` | ![#6B6B6B](https://via.placeholder.com/12/6B6B6B/6B6B6B.png) | Secondary text             |

<br />

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/ruthvik-01/ruthvik-portfolio.git
cd ruthvik-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

### Available Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start development server with hot reload |
| `npm run build` | Create optimized production build        |
| `npm run start` | Serve the production build               |
| `npm run lint`  | Run ESLint checks                        |

<br />

## 🌐 Deployment

The site is deployed on **Vercel** with automatic deployments on push.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ruthvik-01/ruthvik-portfolio)

<br />

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

<br />

---

<div align="center">

**Built with ☕ and curiosity by [Ruthvik Pitchika](https://ruthvik.tech)**

</div>
