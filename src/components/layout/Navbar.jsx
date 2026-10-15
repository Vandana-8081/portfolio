"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "@/components/ui/ThemeToggle";
import useActiveSection from "@/hooks/useActiveSection";
import { navLinks, profile } from "@/data/portfolio";
import styles from "./Navbar.module.css";

const sectionIds = navLinks.map((link) => link.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu khula ho to Escape se band ho
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.scrolled : ""}`}>
      <nav className={`container ${styles.nav}`} aria-label="Main">
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          {profile.name}
          <span className={styles.logoDot} aria-hidden="true" />
        </Link>

        <ul id="nav-menu" className={`${styles.links} ${open ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`${styles.link} ${active === link.id ? styles.current : ""}`}
                aria-current={active === link.id ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className={styles.mobileOnly}>
            <a href={profile.resume} className="btn btn-primary" download>
              <FiDownload aria-hidden="true" />
              Download resume
            </a>
          </li>
        </ul>

        <div className={styles.actions}>
          <ThemeToggle />
          <a href={profile.resume} className={`btn btn-sm btn-primary ${styles.desktopOnly}`} download>
            <FiDownload aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            className={styles.menuBtn}
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
}
