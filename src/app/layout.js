import { Bricolage_Grotesque, DM_Sans, JetBrains_Mono, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { site, profile, projects } from "@/data/portfolio";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const heroTitle = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-hero-title",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${profile.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: profile.name, url: site.url }],
  creator: profile.name,
  applicationName: `${profile.name} Portfolio`,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: profile.name,
    locale: "en_IN",
  },
  formatDetection: { telephone: false },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f5f9" },
    { media: "(prefers-color-scheme: dark)", color: "#12152a" },
  ],
};

// Page paint hone se pehle sahi theme laga deta hai (flash nahi hota)
const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem("theme");
    var dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.theme = saved || (dark ? "dark" : "light");
  } catch (e) {}
})();
`;

// Google ke liye structured data: Person + WebSite + projects ki list (ek hi @graph me)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: profile.name,
      jobTitle: profile.role,
      description: site.description,
      url: site.url,
      image: `${site.url}${profile.photo}`,
      email: `mailto:${profile.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Unnao",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      alumniOf: "M.G. Institute of Management & Technology",
      knowsAbout: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "JavaScript"],
      sameAs: Object.values(profile.socials),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: `${profile.name} | Portfolio`,
      inLanguage: "en-IN",
      publisher: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "ItemList",
      name: "Projects",
      itemListElement: projects.map((project, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: project.tagline,
          author: { "@id": `${site.url}/#person` },
          ...(project.live && { url: project.live }),
          ...(project.image && { image: `${site.url}${project.image}` }),
        },
      })),
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${heroTitle.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
