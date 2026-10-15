// ─────────────────────────────────────────────────────────────
//  Saara content isi ek file me hai.
//  Kuch bhi badalna ho (text, links, projects) — bas yahan edit karein.
// ─────────────────────────────────────────────────────────────

export const site = {
  // Deploy karne ke baad apna final domain yahan daalein (SEO, sitemap, OG image ke liye)
  url: "https://vandana8081.netlify.app",
  title: "Vandana | MERN Stack Developer",
  description:
    "Vandana is a MERN stack developer from Unnao, Uttar Pradesh who builds full-stack web apps with React, Node.js, Express and MongoDB.",
  keywords: [
    "Vandana",
    "MERN stack developer",
    "React developer",
    "Node.js developer",
    "Full stack developer Lucknow",
    "Web developer Unnao",
    "Fresher full stack developer",
    "Vandana portfolio",
    "MERN developer Unnao",
    "React Node.js MongoDB projects",
  ],
};

export const profile = {
  name: "Vandana",
  role: "MERN Stack Developer",
  // Hero me ye lines ek-ek karke type hongi
  roles: ["MERN stack developer", "React developer", "Node.js developer"],
  location: "Unnao, Uttar Pradesh",
  intro:
    "I build full-stack web apps end to end: React interfaces, REST APIs with Node.js and Express, and MongoDB data models, with JWT auth holding it together.",
  // Apni photo public/images/ folder me "vandana.png" naam se rakhein
  photo: "/images/vandana.png",
  resume: "/resume/Vandana-Resume.pdf",
  email: "vandanavairy2004@gmail.com",
  phone: "+91-8081511145",
  socials: {
    github: "https://github.com/Vandana-8081",
    linkedin: "https://www.linkedin.com/in/vandana-098181330/",
    instagram: "https://www.instagram.com/6793vandana/",
  },
};

export const about = {
  paragraphs: [
    "I'm a Computer Science graduate (B.Tech, 2026) from M.G. Institute of Management & Technology, Lucknow. Most of my time goes into the MERN stack: shaping data in MongoDB, exposing it through Express APIs, and turning it into responsive React screens.",
    "Two internships taught me how real projects run: reusable components, clean API contracts, debugging under deadlines and shipping to production. I like features that touch every layer, like auth, carts and image uploads, because that's where the stack has to work as one.",
  ],
  facts: [
    { label: "Based in", value: "Unnao, Uttar Pradesh" },
    { label: "Degree", value: "B.Tech CSE, 2026 (CGPA 8.23)" },
    { label: "Focus", value: "MERN stack, REST APIs" },
    // Agar job dhoondh rahi hain to ye rehne dein, warna hata dein
    { label: "Open to", value: "Full-time roles & internships" },
  ],
};

export const experience = [
  {
    role: "Full Stack Trainee",
    company: "CodeTech IT Solution Pvt. Ltd.",
    location: "Lucknow",
    period: "Jun 2026 – Aug 2026",
    points: [
      "Developed full-stack web applications on the MERN stack.",
      "Built RESTful APIs and integrated MongoDB for CRUD operations and scalable data handling.",
      "Designed responsive React interfaces and improved application performance.",
    ],
  },
  {
    role: "MERN Stack Development Intern",
    company: "Techpile Technology Pvt. Ltd.",
    location: "Lucknow",
    period: "Jun 2025 – Aug 2025",
    points: [
      "Built responsive UIs and dynamic components wired to backend APIs to ship complete features.",
      "Managed state and side effects with React Hooks (useState, useEffect, useContext) and the Context API.",
      "Followed component-driven architecture for reusable, maintainable frontend code.",
      "Helped with testing, debugging and deploying projects.",
    ],
  },
];

export const projects = [
  {
    title: "ShopSmart",
    tagline: "Full-stack e-commerce app with separate user and admin panels",
    // public/projects/ me screenshot rakhein, jaise "shopsmart.png". Na ho to null rehne dein.
    image: "/projects/shopsmart.png",
    category: "Full-stack",
    // Card par dikhne wale 3 chhote highlights
    highlights: [
      { label: "Panels", value: "User & Admin" },
      { label: "Auth", value: "JWT, role-based" },
      { label: "API", value: "REST + Mongoose" },
    ],
    points: [
      "Product catalogue, shopping cart and order management for customers",
      "Admin panel with full CRUD over products and orders",
      "JWT authentication with role-based access for users and admins",
      "REST APIs in Express with Mongoose models, consumed through Axios",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    // Project ka GitHub repo aur live link yahan daalein
    github: "https://github.com/Vandana-8081",
    live: "https://smartshop-frontend-three.vercel.app/",
  },
  {
    title: "Real-Estate Web",
    tagline: "Property listing platform with secure accounts and image uploads",
    image: "/projects/real-estate.png",
    category: "Full-stack",
    highlights: [
      { label: "Auth", value: "JWT, role-based" },
      { label: "Media", value: "Cloudinary uploads" },
      { label: "UI", value: "Mobile-responsive" },
    ],
    points: [
      "Secure sign-up and login, with restricted features behind role-based JWT auth",
      "Cloudinary integration for fast property image upload and storage",
      "Mobile-responsive UI built from reusable React components",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    github: "https://github.com/Vandana-8081",
    live: "https://real-e-state-frontend-d3gv5c44l-smartshop1.vercel.app/",
  },
];

// "layer" se hero ke stack diagram aur skills ke colours match hote hain
export const skills = [
  {
    group: "Frontend",
    layer: "client",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    group: "Backend",
    layer: "server",
    items: ["Node.js", "Express.js", "REST APIs", "C++"],
  },
  {
    group: "Database",
    layer: "data",
    items: ["MongoDB", "SQL"],
  },
  {
    group: "Auth & security",
    layer: "server",
    items: ["JWT", "Bcrypt"],
  },
  {
    group: "Tools",
    layer: "tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Excel", "MS Word"],
  },
];

export const education = [
  {
    school: "M.G. Institute of Management & Technology",
    place: "Lucknow",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2022 – 2026",
    score: "CGPA 8.23",
  },
  {
    school: "RRVNS IC Inter College",
    place: "Unnao",
    degree: "Class XII",
    period: "2021 – 2022",
    score: "80.2%",
  },
];

export const certifications = [
  "MERN Stack Development certification, with hands-on React, Node.js, Express and MongoDB projects (2025)",
  "Appreciation certificates for MERN stack and full-stack development work",
];

// Hero ke "live request" demo me chalne wale requests (aapke projects se liye gaye)
export const demoRequests = [
  {
    method: "GET",
    path: "/api/products",
    client: "ShopSmart loads the catalogue",
    server: "router.get('/products', listProducts)",
    data: "Product.find({ inStock: true })",
    response: "200 OK, 24 products",
  },
  {
    method: "POST",
    path: "/api/auth/login",
    client: "User submits the login form",
    server: "bcrypt.compare() → jwt.sign()",
    data: "User.findOne({ email })",
    response: "200 OK, token issued",
  },
  {
    method: "POST",
    path: "/api/properties",
    client: "Agent uploads a listing photo",
    server: "verifyToken → cloudinary.upload()",
    data: "Property.create({ images })",
    response: "201 Created, listing live",
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
