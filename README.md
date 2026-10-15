# Vandana — Portfolio (Next.js)

Next.js (App Router) portfolio. Saara content ek hi file `src/data/portfolio.js` me hai.

## Folder structure

```
vandana-portfolio/
├── public/
│   ├── images/
│   │   └── vandana.jpg            ← apni profile photo yahan rakhein
│   ├── projects/                  ← project screenshots (optional)
│   └── resume/
│       └── Vandana-Resume.pdf     ← "Download resume" button isi ko download karta hai
│
├── src/
│   ├── app/                       ← Next.js App Router
│   │   ├── layout.js              ← fonts, SEO metadata, theme script, Navbar + Footer
│   │   ├── page.js                ← homepage: saare sections yahan jude hain
│   │   ├── globals.css            ← colours (light/dark), buttons, common styles
│   │   ├── not-found.js           ← 404 page
│   │   ├── icon.svg               ← favicon
│   │   ├── opengraph-image.js     ← link share karne par dikhne wali image
│   │   ├── robots.js              ← /robots.txt
│   │   └── sitemap.js             ← /sitemap.xml
│   │
│   ├── components/
│   │   ├── layout/                ← har page par dikhne wale hisse
│   │   │   ├── Navbar.jsx         (+ Navbar.module.css)
│   │   │   └── Footer.jsx         (+ Footer.module.css)
│   │   ├── sections/              ← homepage ke sections (ek file = ek section)
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Education.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/                    ← chhote reusable components
│   │       ├── StackFlow.jsx      ← hero ka live "API request" demo
│   │       ├── TypingText.jsx     ← typing animation
│   │       ├── ProfilePhoto.jsx   ← photo (na ho to "V" monogram)
│   │       ├── ProjectCard.jsx
│   │       ├── TechIcon.jsx       ← skill name → icon
│   │       ├── ContactForm.jsx
│   │       ├── ThemeToggle.jsx    ← light / dark
│   │       ├── ScrollProgress.jsx
│   │       ├── Reveal.jsx         ← scroll par fade-in
│   │       └── SectionHeading.jsx
│   │
│   ├── data/
│   │   └── portfolio.js           ← ★ SAARA TEXT / LINKS / PROJECTS YAHAN ★
│   │
│   └── hooks/
│       └── useActiveSection.js    ← navbar me current section highlight
│
├── .env.example                   ← contact form key ka example
├── jsconfig.json                  ← "@/..." import alias
├── next.config.mjs
└── package.json
```

Har component ke saath uski `.module.css` file hai, isliye styles us component tak hi seemit rehte hain.

## Chalane ka tarika

Node.js 20.9 ya usse naya chahiye.

```bash
npm install
npm run dev
```

Browser me http://localhost:3000 kholein.

## Pehle ye 4 kaam karein

1. **Photo:** apni photo `public/images/vandana.jpg` naam se rakhein.
2. **Project links:** `src/data/portfolio.js` me har project ka `github` (repo ka link) aur `live` (deployed link) daalein. `live: null` ho to "Open live site" button nahi dikhega.
3. **Screenshots (optional):** `public/projects/shopsmart.png` jaisi file rakhein aur project me `image: "/projects/shopsmart.png"` likhein.
4. **Domain:** deploy ke baad `site.url` me apna final URL daalein (SEO ke liye zaroori).

## Contact form

Bina setup ke form visitor ka email app kholta hai. Message seedha inbox me chahiye to:

1. https://web3forms.com par apna email daal kar free access key lein.
2. `.env.example` ko `.env.local` naam se copy karke key paste karein.
3. Vercel/Netlify par bhi yahi variable (`NEXT_PUBLIC_WEB3FORMS_KEY`) add karein.

## Deploy

- **Vercel:** GitHub par push karein → vercel.com par "Import project" → Deploy.
- **Netlify:** "Add new site" → GitHub repo choose karein. Netlify Next.js ko khud detect kar leta hai.

Deploy ke baad Google Search Console me `https://<aapka-domain>/sitemap.xml` submit kar dein.
