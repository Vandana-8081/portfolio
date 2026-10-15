"use client";

import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

/**
 * Cursor ke peeche chalne wala glowing dot. Sirf mouse (fine pointer) par chalta hai,
 * touch devices aur reduced-motion par kuch nahi dikhta.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // Mouse + desktop width par hi chalta hai. Mobile/tablet (ya devtools mobile view) me band.
    const mq = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 861px)",
    );
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let teardown = null;

    const sync = () => {
      const shouldRun = mq.matches && !reduced.matches;
      if (shouldRun && !teardown) teardown = start();
      if (!shouldRun && teardown) {
        teardown();
        teardown = null;
      }
    };

    const start = () => {
      const dot = dotRef.current;
      const glow = glowRef.current;
      const root = document.documentElement;
      root.classList.add("has-custom-cursor");

      let x = -100;
      let y = -100;
      let gx = x;
      let gy = y;
      let raf = 0;

      const render = () => {
        gx += (x - gx) * 0.16;
        gy += (y - gy) * 0.16;
        dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        glow.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
        raf = requestAnimationFrame(render);
      };

      const onMove = (e) => {
        x = e.clientX;
        y = e.clientY;
        dot.dataset.on = "1";
        glow.dataset.on = "1";
        const interactive = e.target.closest?.(
          "a, button, [role='button'], summary, label",
        );
        glow.dataset.hover = interactive ? "1" : "0";
      };
      const onLeave = () => {
        dot.dataset.on = "0";
        glow.dataset.on = "0";
      };
      const onDown = () => (glow.dataset.press = "1");
      const onUp = () => (glow.dataset.press = "0");

      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("mousedown", onDown);
      window.addEventListener("mouseup", onUp);
      document.addEventListener("mouseleave", onLeave);
      raf = requestAnimationFrame(render);

      return () => {
        dot.dataset.on = "0";
        glow.dataset.on = "0";
        cancelAnimationFrame(raf);
        root.classList.remove("has-custom-cursor");
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mousedown", onDown);
        window.removeEventListener("mouseup", onUp);
        document.removeEventListener("mouseleave", onLeave);
      };
    };

    sync();
    mq.addEventListener("change", sync);
    reduced.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
      if (teardown) teardown();
    };
  }, []);

  return (
    <div aria-hidden="true">
      <span ref={glowRef} className={styles.glow} />
      <span ref={dotRef} className={styles.dot} />
    </div>
  );
}
