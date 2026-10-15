"use client";

import { useEffect, useState } from "react";
import styles from "./TypingText.module.css";

/** Roles ko ek-ek karke type aur erase karta hai. Reduced-motion users ko static text dikhta hai. */
export default function TypingText({ words, typeSpeed = 70, deleteSpeed = 35, pause = 1700 }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce && words.length > 1) setAnimate(true);
  }, [words.length]);

  useEffect(() => {
    if (!animate) return;
    const word = words[index];
    let timer;

    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timer = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timer);
  }, [animate, text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={styles.wrap}>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        <span className={`${styles.caret} ${animate ? styles.blink : ""}`} />
      </span>
    </span>
  );
}
