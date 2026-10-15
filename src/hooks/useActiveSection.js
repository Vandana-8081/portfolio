"use client";

import { useEffect, useState } from "react";

/** Batata hai abhi screen par kaunsa section hai, taaki navbar me woh link highlight ho. */
export default function useActiveSection(ids) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // Section tab "active" mana jayega jab woh screen ke upar-beech wale hisse me ho
      { rootMargin: "-35% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
