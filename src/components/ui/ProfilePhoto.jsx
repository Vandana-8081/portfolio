"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiArrowUpRight, FiDatabase, FiLayout } from "react-icons/fi";
import styles from "./ProfilePhoto.module.css";

/**
 * Profile card: photo + title + Frontend/Backend tiles.
 * Photo na mile to naam ka pehla akshar (monogram) dikhega, taaki layout na toote.
 */
export default function ProfilePhoto({ src, name }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef(null);

  // Agar image hydration se pehle hi fail ho chuki ho, onError nahi chalta. Ye check us case ko pakadta hai.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className={styles.card}>
      <figure className={styles.frame}>
        {failed ? (
          <div className={styles.fallback} role="img" aria-label={name}>
            {name.charAt(0)}
          </div>
        ) : (
          <Image
            ref={imgRef}
            src={src}
            alt={`${name}, MERN stack developer from Unnao, Uttar Pradesh`}
            fill
            sizes="(max-width: 860px) 80vw, 400px"
            className={styles.img}
            loading="eager"
            fetchPriority="high"
            onError={() => setFailed(true)}
          />
        )}
      </figure>

      <div className={styles.head}>
        <div>
          <p className={styles.title}>Full Stack</p>
          <p className={styles.sub}>MERN Developer</p>
        </div>
        <FiArrowUpRight className={styles.arrow} aria-hidden="true" />
      </div>

      <ul className={styles.tiles}>
        <li>
          <FiLayout aria-hidden="true" /> Frontend
        </li>
        <li>
          <FiDatabase aria-hidden="true" /> Backend
        </li>
      </ul>
    </div>
  );
}
