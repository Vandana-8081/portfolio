"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "light");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* storage blocked: theme still switches for this visit */
    }
    setTheme(next);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
    >
      {/* theme null hone tak (first paint) icon chhupa rahega */}
      <span className={styles.icon} style={{ opacity: theme ? 1 : 0 }}>
        {isDark ? <FiSun /> : <FiMoon />}
      </span>
    </button>
  );
}
