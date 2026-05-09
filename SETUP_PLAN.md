# 🎬 Daiana Dominguez Portfolio - React Redesign Setup Plan

**Status:** Ready for Implementation  
**Tech Stack:** React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion  
**Deployment:** Vercel  
**Timeline:** 4-6 weeks  
**Date Created:** May 8, 2026

---

## 📋 TABLE OF CONTENTS

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Folder Structure](#folder-structure)
4. [Extracted Content](#extracted-content)
5. [Setup Instructions (Phase 0)](#setup-instructions)
6. [Implementation Phases](#implementation-phases)
7. [Cinema Color System](#cinema-color-system)
8. [Vercel Deployment](#vercel-deployment)

---

## 🎯 PROJECT OVERVIEW

**Portfolio Type:** Cinematographer & Director of Photography  
**Target Audience:** Producers, companies, studios  
**Primary Goal:** Get hired / Collaboration inquiries  

**Key Requirements:**
- ✅ Mobile-first responsive design (VERY important)
- ✅ Films & Documentaries showcase (primary focus, ignore Photography)
- ✅ YouTube embedded videos (muted autoplay)
- ✅ Image gallery with lightbox modal
- ✅ Scorsese-primary cinema color palette (MAIN)
- ✅ Toggle between 4 cinema-inspired themes (Scorsese, Wes Anderson, Matrix, Film Noir)
- ✅ Minimal design (content-focused, show the material)
- ✅ Meta tags for SEO (add og:image for social sharing)
- ✅ NO Google Analytics
- ✅ Fresh start in new directory

---

## 🛠️ TECH STACK

```
Frontend Framework:     React 18.x with TypeScript
Build Tool:            Vite (fast, modern, HMR)
Styling:               Tailwind CSS + custom theme
Animations:            Framer Motion
Routing:               React Router v6
Video Handling:        YouTube Embed API (iframe, muted autoplay)
Image Gallery:         Lightbox modal + Lazy Loading
Deployment:            Vercel (auto-deploy from GitHub)
Version Control:       Git + GitHub
```

---

## 📁 FOLDER STRUCTURE (Final)

```
daiana-portfolio-react/
│
├── .git/                          # Git repository
├── .gitignore                     # Ignore rules
├── node_modules/                  # Dependencies (auto-generated)
├── dist/                          # Build output (auto-generated)
│
├── public/                        # Static assets
│   └── images/
│       ├── films/
│       │   ├── matar-al-cuco/
│       │   │   ├── matar-al-cuco-01.jpg through 09.jpg
│       │   │   └── matar-al-cuco-thumb.jpg
│       │   ├── vista-al-lago/
│       │   │   ├── vista-al-lago-01.jpg through 08.jpg
│       │   │   └── vista-al-lago-thumb.jpg
│       │
│       ├── documentaries/
│       │   ├── jesus-para-algunos/
│       │   │   ├── jesus-para-algunos-01.jpg through 08.jpg
│       │   │   └── jesus-para-algunos-thumb.jpg
│       │   ├── festin/
│       │   │   ├── festin-01.jpg through 08.jpg
│       │   │   └── festin-thumb.jpg
│       │   ├── apuntes-sobre-la-memoria/
│       │   │   ├── apuntes-sobre-la-memoria-01.jpg through 10.jpg
│       │   │   └── apuntes-sobre-la-memoria-thumb.jpg
│       │
│       └── og/
│           └── og-image.jpg
│
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectGallery.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── VideoPlayer.tsx
│   │   ├── ImageGallery.tsx
│   │   ├── PaletteToggle.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Films.tsx
│   │   ├── Documentaries.tsx
│   │   └── ProjectDetail.tsx
│   ├── hooks/
│   │   ├── usePalette.ts
│   │   ├── useMediaQuery.ts
│   │   └── useImageGallery.ts
│   ├── styles/
│   │   ├── themes.ts
│   │   ├── global.css
│   │   └── animations.css
│   ├── data/
│   │   ├── projects.ts
│   │   ├── palettes.ts
│   │   └── constants.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── index.html                     # HTML with meta tags
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.cjs
├── tsconfig.json
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 📊 EXTRACTED CONTENT

### **FILMS (2 projects)**

| Title | YouTube ID | Frames |
|-------|-----------|--------|
| Matar al Cuco | `zllUsSke4xc` | 9 |
| Vista al Lago | `t4m-nWNq-Q0` | 8 |

### **DOCUMENTARIES (3 projects)**

| Title | YouTube ID | Frames |
|-------|-----------|--------|
| Jesús Para Algunos | `7Y0VaCQBmvQ` | 8 |
| Festín | `ggRWaFmsgkQ` | 8 |
| Apuntes Sobre la Memoria | `0R2QZB2m2cc` | 10 |

### **SOCIAL LINKS**
- LinkedIn: https://www.linkedin.com/in/daiana-dominguez12/
- Instagram: https://www.instagram.com/daianadominguez.12/
- Email: daidominguez1208@gmail.com

---

## 🚀 SETUP INSTRUCTIONS (Phase 0)

### **0.1 Create New Project Directory**

```bash
mkdir E:\Tomi\Documentos\Proyectos\daiana-portfolio-react
cd E:\Tomi\Documentos\Proyectos\daiana-portfolio-react
```

### **0.2 Initialize Git Repository**

```bash
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### **0.3 Create React + Vite Project**

```bash
npm create vite@latest . -- --template react-ts
npm install
```

### **0.4 Install Additional Dependencies**

```bash
# Core dependencies
npm install react-router-dom framer-motion

# Dev dependencies
npm install -D tailwindcss postcss autoprefixer
```

### **0.5 Initialize Tailwind CSS**

```bash
npx tailwindcss init -p
```

### **0.6 Create Folder Structure**

```bash
mkdir -p src/components src/hooks src/styles src/data src/pages src/types
mkdir -p public/images/films public/images/documentaries public/images/og
```

### **0.7 Create .gitignore File**

Create file `.gitignore` with content:

```
node_modules/
dist/
.env
.env.local
.DS_Store
*.log
.vscode/settings.json
```

### **0.8 Verify Setup Works**

```bash
npm run dev
```

Should see: `Local: http://localhost:5173/`

---

## 📋 IMPLEMENTATION PHASES

### **PHASE 1: Design System & Configuration (3-4 days)**

**Files to Create:**
- `src/styles/themes.ts` - Cinema color palettes
- `src/styles/global.css` - Global styles
- `src/data/palettes.ts` - Palette definitions
- `src/hooks/usePalette.ts` - Theme management
- Update `tailwind.config.ts`

**Features:**
- 4 cinema-inspired color palettes
- localStorage persistence
- Smooth 0.3s transitions
- CSS custom properties for cascade

---

### **PHASE 2: Core Components (1 week)**

**Components to Create:**
1. Navigation.tsx - Header with palette toggle
2. Hero.tsx - Main title section
3. ProjectCard.tsx - Individual project card
4. ProjectGallery.tsx - Responsive grid
5. VideoPlayer.tsx - YouTube wrapper
6. ImageGallery.tsx - Lightbox modal
7. PaletteToggle.tsx - Theme selector
8. Footer.tsx - Social links
9. Layout.tsx - Main layout wrapper

---

### **PHASE 3: Data & Projects (3-4 days)**

**Files to Create:**
- `src/data/projects.ts` - All 5 projects with YouTube IDs
- `src/types/index.ts` - TypeScript interfaces
- `src/data/constants.ts` - Social links, metadata

---

### **PHASE 4: Pages & Routing (3-4 days)**

**Pages to Create:**
- `Home.tsx` - Films + Documentaries grids
- `Films.tsx` - Films-only gallery
- `Documentaries.tsx` - Documentaries-only gallery
- `ProjectDetail.tsx` - Individual project detail

**Routes:**
```
/ (Home)
/films
/documentaries
/project/:id
```

---

### **PHASE 5: Responsive Design (1 week)**

**Breakpoints:**
```
sm: 640px (mobile)
md: 768px (tablet)
lg: 1024px (laptop)
xl: 1280px (desktop)
```

**Mobile-First:**
- 1 column → 2 columns → 3-4 columns
- Hamburger menu on mobile
- Fluid typography
- Lazy loading images

---

### **PHASE 6: SEO & Meta Tags (2-3 days)**

**Update `index.html`:**
```html
<meta name="description" content="...">
<meta property="og:title" content="...">
<meta property="og:image" content="...">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
```

**Create:**
- `public/robots.txt`
- `public/sitemap.xml`

---

### **PHASE 7: Animations & Polish (3-4 days)**

**Features:**
- Page transitions (Framer Motion)
- Hover effects
- Smooth theme switching
- Scroll animations

---

### **PHASE 8: Testing & Optimization (3-4 days)**

**Checklist:**
- Lighthouse audit (90+ score)
- Image optimization
- Cross-browser testing
- Accessibility (a11y)
- Bundle size analysis

---

### **PHASE 9: Vercel Deployment (1-2 days)**

**Steps:**
1. Push to GitHub
2. Connect to Vercel
3. Auto-deploy on push
4. Configure custom domain (optional)

---

## 🎨 CINEMA COLOR SYSTEM

### **SCORSESE (Primary - Default)**
```
Primary Red:      #d62828
Primary Gold:     #f77f00
Dark:             #1a1a1a
Accent Light:     #fcbf49
Text Primary:     #f5f5f5
Text Secondary:   #d0d0d0
Border:           #444
Background:       #1a1a1a
```

### **WES ANDERSON**
```
Pink:    #ff6b9d
Cyan:    #00d4ff
Yellow:  #ffd700
Light:   #fff8dc
Dark:    #2c3e50
```

### **THE MATRIX**
```
Neon Green:  #00ff00
Black:       #000000
Dark Gray:   #0d0d0d
Accent:      #00ff00
```

### **FRENCH FILM NOIR**
```
White:       #ffffff
Black:       #000000
Gray:        #808080
Red Accent:  #b31b1b
```

---

## 🚀 VERCEL DEPLOYMENT

### **Before Deploy:**
1. Create GitHub account
2. Create repository
3. Push project to GitHub

### **Deploy:**
1. Go to https://vercel.com
2. Click "New Project"
3. Import GitHub repository
4. Vercel auto-detects Vite
5. Click "Deploy"
6. Done! Get URL: `https://yourdomain.vercel.app`

### **Custom Domain (Optional):**
1. Vercel Dashboard → Settings → Domains
2. Add custom domain
3. Update DNS records
4. Domain linked in ~24 hours

---

## 📝 QUICK COMMANDS

```bash
# Development
npm run dev                 # Start dev server

# Build
npm run build              # Create production build

# Git
git add .
git commit -m "message"
git push origin main

# Install packages
npm install package-name
npm install -D package     # Dev dependency
```

---

## ✅ CHECKLIST

### Before Starting:

- [ ] Node.js installed (v18+): `node --version`
- [ ] npm installed: `npm --version`
- [ ] GitHub account created
- [ ] Vercel account created
- [ ] Terminal/PowerShell ready

### Phase 0 Completion:

- [ ] Directory created
- [ ] `npm create vite` completed
- [ ] Dependencies installed
- [ ] Folder structure created
- [ ] `npm run dev` works
- [ ] Ready for Phase 1

---

## 🎯 NEXT STEPS

1. **Run Phase 0 commands** (setup)
2. **Tell me** when Phase 0 is complete
3. **I'll create** all components and files (Phases 1-8)
4. **You test** locally with `npm run dev`
5. **Deploy** to Vercel

---

## ⚠️ IMPORTANT NOTES

✅ **No Google Analytics** - Per your request  
✅ **Muted autoplay** - YouTube videos auto-play muted  
✅ **Mobile-first** - Design starts with mobile breakpoints  
✅ **Meta tags** - Included for SEO and social sharing  
✅ **Fresh start** - Completely new project directory  
✅ **Vercel subdomain** - Ready for Vercel auto-deployment  
✅ **5 projects** - Films (2) + Documentaries (3)  
✅ **Scorsese primary** - Warm red/gold palette by default  

---

## 📞 HELP

If you need clarification on any step:
- Ask about Phase 0 commands
- Ask about folder structure
- Ask about dependencies
- Ask about deployment steps

**Ready? Start Phase 0 and let me know when finished!** 🚀
