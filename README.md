# Frontend Developer Hiring Assignment – Kovon Landing Page

This repository contains my submission for the Frontend Developer Hiring Assignment.

The objective of this task was to build a responsive, production-ready landing page replicating the homepage UI of Kovon.io using the required modern frontend technology stack.

---

## Project Overview

A pixel-accurate and fully responsive landing page built with:

- Next.js (App Router)
- React.js
- TypeScript
- Material UI
- Tailwind CSS

The implementation focuses on clean component architecture, reusable UI sections, styling consistency, and TypeScript best practices.

---

## Sections Implemented

- Header (Sticky navigation with mobile hamburger menu)
- Hero Section (Headline, subheading, call-to-action)
- Features / Services Section (Feature cards with hover effects)
- How It Works Section (Step-based layout)
- Footer (Quick links and social icons UI)

---

## Technology Stack

- Next.js 14+
- React 18+
- TypeScript (No `any` usage)
- Material UI (Latest)
- Tailwind CSS

---

## Folder Structure

```bash
src/
 ├── app/
 │     ├── layout.tsx
 │     ├── page.tsx
 │     └── globals.css
 │
 ├── components/
 │     ├── header/
 │     │     └── Header.tsx
 │     ├── hero/
 │     │     └── HeroSection.tsx
 │     ├── features/
 │     │     ├── FeatureCard.tsx
 │     │     └── FeaturesSection.tsx
 │     ├── how-it-works/
 │     │     └── HowItWorks.tsx
 │     ├── services/
 │     │     └── Services.tsx
 │     └── footer/
 │           └── Footer.tsx
 │
 ├── constants/
 │     └── content.ts
 │
 ├── theme/
 │     └── theme.ts
 │
 └── types/
       └── index.ts

README.md
package.json
tailwind.config.ts
tsconfig.json
next-env.d.ts
postcss.config.js
.env.example

```
## Setup Instructions

### 1: Clone the Repository
        git clone https://github.com/priyaltiwari02/kovon_assignment.git

### 2: Navigate into the Project Directory
        cd kovon_assignment

### 3: Install Dependencies
        npm install

### 4: Start the Development Server
        npm run dev


### The project will run at:

    http://localhost:3000

 ```
```
## Deployed Live Version

   https://kovon-assignment.vercel.app/
```
```
## Walkthrough Recording

   https://www.loom.com/share/f8b26d35ebdf47fbb0c464e5cb5610dd

```
```
## Design Decisions

- Built each section as a reusable functional component
- Used TypeScript interfaces for clean prop handling
- Combined Tailwind utilities with Material UI for consistent styling
- Ensured responsiveness across mobile, tablet, and desktop breakpoints
- Maintained clean folder organization and naming conventions
```
```
## Submission Details

- Next.js Version Used: 14+
- UI Reference: https://www.kovon.io
- Repository: https://github.com/priyaltiwari02/kovon_assignment
- Deployed URL: https://kovon-assignment.vercel.app/
```
```

## Author

Priyal Tiwari

