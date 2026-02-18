# Frontend Developer Hiring Assignment – Kovon Landing Page

This repository contains my submission for the **Frontend Developer Hiring Assignment**.

The task was to build a responsive, production-ready landing page replicating the homepage UI of **Kovon.io**, using the required modern frontend stack.

---

## 📌 Project Overview

A pixel-accurate, fully responsive landing page built with:

- Next.js (App Router)
- React.js
- TypeScript
- Material UI
- Tailwind CSS

The implementation focuses on clean component architecture, responsiveness, reusable UI sections, and TypeScript best practices.

---

## ✅ Sections Implemented

- Header (Sticky navbar + Mobile hamburger menu)
- Hero Section (Headline, CTA, gradient background)
- Services / Features Section (4 feature cards with hover effects)
- How It Works Section (Step-based layout)
- Footer (Quick links + Social icons UI)

---

## 🛠️ Technology Stack

- **Next.js 14+**
- **React 18+**
- **TypeScript (No `any` used)**
- **Material UI (Latest)**
- **Tailwind CSS**

---

## 📂 Folder Structure

```bash
app/
 ├── layout.tsx
 ├── page.tsx

components/
 ├── header/
 │     └── Header.tsx
 ├── hero/
 │     └── HeroSection.tsx
 ├── features/
 │     ├── FeatureCard.tsx
 │     └── FeaturesSection.tsx
 ├── how-it-works/
 │     └── HowItWorks.tsx
 └── footer/
       └── Footer.tsx

constants/
 └── content.ts

types/
 └── index.ts
⚙️ Setup Instructions

To run this project locally:

1. Clone the repository
git clone https://github.com/Priyaltiwari02/kovon_assignment.git

2. Navigate into the project directory
cd kovon_assignment

3. Install dependencies
npm install

4. Start the development server
npm run dev


The project will run at:

http://localhost:3000

🌐 Deployed Live Version

Live URL: https://kovon-assignment.vercel.app/


