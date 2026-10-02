# Joshua Belleza — Client Freelancer Portfolio Website

A modern, high-converting freelance client portfolio website designed for **Joshua Belleza**, built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**, optimized for deployment on **Vercel**.

---

## 🌟 Live Demo & Portfolio Highlights

- **Subject / Profile**: Joshua Belleza — Freelance Quality Assurance & Software Testing Specialist
- **Color Theme**: 
  - **Dark Mode**: Formal Executive Navy Blue (`#070d1e`, `#0c1630`, `#0e172e`) with crisp white text and cyan/blue accents.
  - **Light Mode**: Clean White (`#ffffff`, `#f8fafc`) with dark slate/black text and crisp borders.
- **Client Conversion Elements**:
  - Catchy hero section with live status badge ("Open to Freelance & Contract Projects").
  - Value propositions highlighting an industrial zero-defect QA mindset (from JAE Philippines) combined with Computer Science academic rigor (from EARIST Cavite Campus).
  - Client Services cards with actionable deliverables.
  - Verified Skills with **animated progress indicators** (Microsoft Office Suite 95%, Attention to Detail 98%, QA/QC 92%, Software Testing 88%, UI/UX Design 85%, Basic HTML & Python 80%).
  - Chronological Experience & Academic Education timelines.
  - Interactive Client Project Inquiry Form + instant mailto fallback.
  - One-click copy buttons for email (`jmbelleza16@gmail.com`) and phone (`09218869520`).
  - Real-time Philippine Time (GMT+8) indicator for international client scheduling.
  - Fully responsive across mobile, tablet, laptop, and ultra-wide screens.

---

## 🚀 How to Run Locally

1. Open your terminal in this folder:
   ```bash
   cd "c:\Users\Joan Miles\Documents\joshua-belleza-portfolio"
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 🌐 How to Make It Public Through Vercel

### Option 1: Deploy via GitHub (Recommended — 2 Minutes)

1. **Initialize Git & Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Joshua Belleza client portfolio"
   ```
   Create a new repository on [GitHub](https://github.com/new) named `joshua-belleza-portfolio`, then link and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/joshua-belleza-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in (or sign up with your GitHub account).
   - Click the **"Add New..."** button in the top right and select **"Project"**.
   - Select your `joshua-belleza-portfolio` repository and click **"Import"**.
   - Vercel automatically detects Next.js. Keep all default build settings as they are.
   - Click **"Deploy"**.

3. **Your Website is Live!**
   - Vercel will build the application in under 45 seconds and provide you with a live public URL:
     `https://joshua-belleza.vercel.app`
   - You can also attach a custom domain (e.g., `joshuabelleza.com`) directly in the Vercel dashboard under **Settings > Domains**.

---

### Option 2: Deploy via Vercel CLI (Direct from Terminal)

1. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Log in and deploy:
   ```bash
   vercel
   ```
   Follow the interactive prompts (select defaults by pressing Enter).

3. To deploy directly to production:
   ```bash
   vercel --prod
   ```

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono (Google Fonts)
- **Deployment Platform**: Vercel

---

## 📂 Project Structure

```
joshua-belleza-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css              # Formal navy & white theme styles, custom scrollbar
│   │   ├── layout.tsx               # Root layout, Google fonts, metadata
│   │   └── page.tsx                 # Master page assembling all client sections
│   └── components/
│       ├── ThemeProvider.tsx        # Dark/Light mode context with persistence
│       ├── Navbar.tsx               # Sticky header with theme toggle & mobile menu
│       ├── HeroSection.tsx          # Client-focused hero with quick contacts & preview
│       ├── AboutSection.tsx         # Joshua's story, QA mindset & CS background
│       ├── ServicesSection.tsx      # Client freelance offerings & deliverables
│       ├── SkillsSection.tsx        # Skills with animated progress indicators & filters
│       ├── WhyChooseMeSection.tsx   # Trust factors, zero-defect standard & speed
│       ├── ExperienceEducationSection.tsx # JAE Philippines, EARIST, & PCU Manila
│       ├── ContactSection.tsx       # Live GMT+8 clock, quick copy & inquiry form
│       └── Footer.tsx               # Footer with Vercel deploy modal guide
├── public/                          # Static assets
├── package.json                     # Dependencies & build scripts
├── next.config.ts                   # Next.js configuration
└── README.md                        # Documentation & deployment guide
```

