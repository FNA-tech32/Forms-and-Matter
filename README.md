# Form&Matter — Digital Studio & Web Architecture

[![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.19-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![i18next](https://img.shields.io/badge/i18next-25.2_(EN_|_RU_|_HE)-26A69A?logo=i18next&logoColor=white)](https://www.i18next.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A flagship, multilingual promotional landing page for **Form&Matter** — a next-generation digital studio crafting high-converting websites, architectural UI/UX design systems, interactive portfolios, QR-price lists, digital business cards, and turnkey visual branding.

Built with **React 19**, **Vite 6 (SWC)**, **Framer Motion 12**, and **i18next** with real-time **LTR / RTL** bidirectional layout adaptation.

---

## Brand & Studio Overview

**Form&Matter** merges artificial intelligence, architectural UI/UX design, and turnkey content production into a single seamless digital pipeline. Every digital space is engineered with editorial glassmorphism, mathematical precision, and high-conversion routing.

### Official Studio Contact & Channels
- **Brand**: `Form&Matter`
- **Primary Studio Line**: `+1 (555) 019-2834`
- **Alternative / Direct Line**: `+1 (555) 019-2835`
- **Studio Inquiries & Direct Email**: [hello@formandmatter.studio](mailto:hello@formandmatter.studio)
- **Studio HQ**: Innovation & Design District, Suite 400
- **WhatsApp Direct Connect**: [wa.me/15550192834](https://wa.me/15550192834)
- **Telegram Connect**: [t.me/formandmatter](https://t.me/formandmatter)
- **Socials**:
  - Instagram: [@formandmatter](https://instagram.com/formandmatter)
  - LinkedIn: [company/formandmatter](https://linkedin.com/company/formandmatter)
  - GitHub: [github.com/formandmatter](https://github.com/formandmatter)

---

## Tech Stack

### Core & Build Tooling
- **React 19** (`react`, `react-dom`) — Modern React features with concurrent rendering and hooks.
- **Vite 6** + **@vitejs/plugin-react-swc** — Ultra-fast Hot Module Replacement (HMR) and SWC production compilation.
- **ESLint 9** — Modern flat configuration with React hooks and React Refresh validation.

### Internationalization (i18n & RTL)
- **i18next** & **react-i18next** — Client-side localization with dynamic translations in **English (`en`)**, **Russian (`ru`)**, and **Hebrew (`he`)**.
- **i18next-http-backend** — Asynchronous JSON translation loading from `/public/locales/{{lng}}/translation.json`.
- **i18next-browser-languagedetector** — Persistent language preference stored in `localStorage` with browser fallback.
- **Dynamic Bidirectional RTL/LTR** — Synchronizes `document.documentElement.dir` (`rtl` vs `ltr`) and `lang` attribute dynamically when switching languages (e.g. Hebrew RTL support).

### Animation, UI & Architecture
- **Framer Motion 12** — Scroll-triggered reveals (`whileInView`), text cycling transitions (`AnimatePresence`), spring physics, and animated accordion heights.
- **Interactive 3D Tilt Cards** — Real-time mouse-tracking perspective transforms (`perspective(950px) rotateX / rotateY`) across showcase, service, and team cards.
- **Modern Glassmorphic CSS3** — CSS custom properties, neon glow accent orbs, backdrop blur filters, and logical properties (`margin-inline-start`, `inset-inline-start`) for seamless RTL flipping.
- **React Icons (`react-icons/fa`)** — Optimized SVG vector icons for WhatsApp, Telegram, email, phone, and features.

---

## Key Features & Sections

1. **Custom Mouse Cursor (`CustomCursor`)**
   - Hardware-accelerated (`translate3d`) fluid cursor with trailing follower and magnetic hover states.
   - Automatically disabled on touch screens for optimal mobile performance.

2. **Responsive Header & Language Switcher (`NavBar`, `LanguageSwitcher`)**
   - Glassmorphic backdrop with scroll-based elevation and active section highlighting.
   - Integrated language switcher supporting instant EN / RU / עב switching.
   - Accessible mobile drawer menu with animated hamburger toggle.

3. **Video Hero & 3D Interactive Studio Stage (`HeroSection`)**
   - Full-bleed background video (`/bghero1.mp4`) with dark atmospheric gradients.
   - Cycling animated value propositions with `AnimatePresence`.
   - Interactive 3D Digital Studio Stage with 3 switchable operating modes (*AI Engine*, *UI/UX System*, *Turnkey Deploy*), telemetry progress gauges, and capability chips.
   - Dual primary WhatsApp and secondary scroll CTAs.
   - Continuous marquee capabilities ticker.

4. **Why Form&Matter (`GlassCardShowcase`)**
   - 3D interactive glass cards highlighting core studio pillars: *AI + Code*, *Design that Sells*, and *Turnkey Content*.
   - Live benchmark gauges and hover light spotlight effect.

5. **Our Services (`Services`)**
   - 6 modular service packages:
     - **Selling Website** (Custom UI/UX • SEO Ready • WhatsApp Lead Flow)
     - **Interactive Portfolio** (Media Gallery • Fast CDN • Smooth Motion)
     - **Smart QR-Price List** (Custom QR • Instant Load • Easy Updates)
     - **Digital Business Card** (1-Tap Contact • Branded UI • Social Hub)
     - **Visual Brand Style** (Design System • AI Media • Brand Book)
     - **Lead & CRM Forms** (WhatsApp API • Smart Forms • Auto-Notify)
   - 1-click WhatsApp project configuration per service.

6. **About Us & 4-Stage Execution Pipeline (`AboutUs`)**
   - Studio mission, engineering approach, and full-stack team overview.
   - Interactive 4-step execution pipeline console: *Brief & Strategy*, *UI/UX & Content*, *AI + Code Build*, *Launch & Growth*.

7. **Interactive Knowledge Base (`FAQ`)**
   - Animated accessible accordion answering critical onboarding, pricing, delivery timeline (7–14 days), and SLA questions.

8. **Direct Connect Contact Section (`ContactSection`)**
   - Interactive project focus configurator chips.
   - **Comprehensive Contact Details**:
     - Primary Phone: `+1 (555) 019-2834`
     - Alternative Direct Line: `+1 (555) 019-2835`
     - Direct Email: `hello@formandmatter.studio`
     - Studio Location: `Innovation & Design District, Suite 400`
   - Dual action CTAs: Direct WhatsApp Chat and Email Inquiry.

9. **Studio Footer (`Footer`)**
   - Brand identity with status telemetry pill (`ALL SYSTEMS OPERATIONAL`).
   - Contacts with WhatsApp and Telegram instant connect buttons.
   - Studio navigation, showcase cross-links, and social profiles.
   - Smooth back-to-top scroll button.

---

## Project Structure

```text
Form-and-Matter/
├── public/
│   ├── locales/
│   │   ├── en/translation.json      # English translations (LTR)
│   │   ├── ru/translation.json      # Russian translations (LTR)
│   │   └── he/translation.json      # Hebrew translations (RTL)
│   ├── bghero1.mp4                  # Hero background video asset
│   └── maestro-icon.png             # Studio favicon & social share asset
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx / .css       # Studio mission, approach & 4-step pipeline console
│   │   ├── ContactSection.jsx / .css# Interactive contact section, alt phone & email CTA
│   │   ├── CustomCursor.jsx / .css  # Fluid hardware-accelerated cursor
│   │   ├── FAQ.jsx / .css           # Accessible animated accordion
│   │   ├── Footer.jsx / .css        # Multi-column footer, socials & Telegram/WhatsApp
│   │   ├── GlassCardShowcase.jsx    # "Why Form&Matter" 3D tilt cards
│   │   ├── HeroSection.jsx / .css   # Video hero & interactive 3D studio window stage
│   │   ├── LanguageSwitcher.jsx     # EN / RU / HE selector
│   │   ├── NavBar.jsx / .css        # Responsive navigation bar & mobile menu
│   │   └── Services.jsx / .css      # 6 service modules with 3D tilt & chip badges
│   ├── App.jsx                      # App root with dynamic document dir/lang sync
│   ├── i18n.js                      # i18next configuration & detector
│   ├── index.css                    # Design tokens, neon glow orbs & global styles
│   └── main.jsx                     # Application entry point
├── eslint.config.js                 # ESLint 9 flat configuration
├── index.html                       # HTML5 template with Schema.org JSON-LD
├── package.json                     # Dependencies and npm scripts
└── vite.config.js                   # Vite + SWC build configuration
```

---

## Getting Started

### Prerequisites
- **Node.js** 18.x or 20.x+
- **npm** 9.x+ (or `pnpm` / `yarn`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/formandmatter/Form-and-Matter.git
   cd Form-and-Matter
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Run code linting:**
   ```bash
   npm run lint
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```
   Production-ready files will be bundled into the `/dist` directory.

6. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## Localization & RTL Customization

Translations are organized by language codes in `/public/locales`:
- English: [`public/locales/en/translation.json`](public/locales/en/translation.json)
- Russian: [`public/locales/ru/translation.json`](public/locales/ru/translation.json)
- Hebrew: [`public/locales/he/translation.json`](public/locales/he/translation.json)

When a user switches to Hebrew (`he`), the application automatically toggles `document.documentElement.dir = 'rtl'`, adapting text alignment, margins, chevron directions, and layout orientation without page reloads.

---

## License

This project is licensed under the [MIT License](LICENSE).
