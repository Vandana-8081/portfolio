"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SiExpress, SiMongodb, SiNodedotjs, SiReact } from "react-icons/si";
import { FiCheckCircle, FiSend } from "react-icons/fi";
import { demoRequests } from "@/data/portfolio";
import styles from "./StackFlow.module.css";

/*
  Hero ka interactive demo: ek API request React → Express/Node → MongoDB jaati hai
  aur response wapas aata hai. "Send next request" dabane par agla example chalta hai.
*/

// [kaunsi layer active hai, kaunsa connector chal raha hai, direction, duration ms]
const STEPS = [
  { active: "client", ms: 450 },
  { connector: 0, dir: "forward", ms: 520 },
  { active: "server", ms: 550 },
  { connector: 1, dir: "forward", ms: 520 },
  { active: "data", ms: 650 },
  { connector: 1, dir: "back", ms: 520 },
  { active: "server", ms: 450 },
  { connector: 0, dir: "back", ms: 520 },
  { active: "client", done: true, ms: 0 },
];

const LAYERS = [
  {
    key: "client",
    name: "React client",
    icons: [SiReact],
    field: "client",
  },
  {
    key: "server",
    name: "Express API on Node.js",
    icons: [SiExpress, SiNodedotjs],
    field: "server",
  },
  {
    key: "data",
    name: "MongoDB",
    icons: [SiMongodb],
    field: "data",
  },
];

export default function StackFlow() {
  const [reqIndex, setReqIndex] = useState(0);
  const [step, setStep] = useState(-1); // -1 = abhi shuru nahi hua
  const [run, setRun] = useState(0); // har nayi request par badhta hai (animation restart)
  const rootRef = useRef(null);
  const started = useRef(false);

  const req = demoRequests[reqIndex];
  const current = step >= 0 ? STEPS[step] : null;
  const done = current?.done === true;

  const start = useCallback(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setRun((r) => r + 1);
    setStep(reduce ? STEPS.length - 1 : 0);
  }, []);

  // Pehli request tab chalegi jab panel screen par dikhe
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          setTimeout(start, 500);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [start]);

  // Steps ko aage badhata hai
  useEffect(() => {
    if (step < 0 || step >= STEPS.length - 1) return;
    const timer = setTimeout(() => setStep((s) => s + 1), STEPS[step].ms);
    return () => clearTimeout(timer);
  }, [step, run]);

  const sendNext = () => {
    setReqIndex((i) => (i + 1) % demoRequests.length);
    start();
  };

  return (
    <div ref={rootRef} className={styles.panel}>
      <div className={styles.head}>
        <p className={styles.request}>
          <span className={styles.method} data-method={req.method}>
            {req.method}
          </span>
          <code className={styles.path}>{req.path}</code>
        </p>
        <button type="button" className={`btn btn-sm btn-outline ${styles.send}`} onClick={sendNext}>
          <FiSend aria-hidden="true" />
          Send next request
        </button>
      </div>

      <ol className={styles.flow} aria-label="How one request moves through the MERN stack">
        {LAYERS.map((layer, i) => {
          const isActive = current?.active === layer.key;
          return (
            <li key={layer.key} className={styles.item}>
              <div
                className={`${styles.layer} ${isActive ? styles.active : ""}`}
                data-layer={layer.key}
              >
                <div className={styles.layerTop}>
                  <span className={styles.icons} aria-hidden="true">
                    {layer.icons.map((Icon, n) => (
                      <Icon key={n} />
                    ))}
                  </span>
                  <span className={styles.layerName}>{layer.name}</span>
                </div>
                <code className={styles.code}>{req[layer.field]}</code>
              </div>

              {i < LAYERS.length - 1 && (
                <div className={styles.connector} aria-hidden="true">
                  <span className={styles.track} />
                  {current?.connector === i && (
                    <span
                      key={`${run}-${step}`}
                      className={`${styles.packet} ${
                        current.dir === "forward" ? styles.forward : styles.back
                      }`}
                      style={{ animationDuration: `${current.ms}ms` }}
                    />
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <p className={`${styles.response} ${done ? styles.responseDone : ""}`} aria-live="polite">
        {done ? (
          <>
            <FiCheckCircle aria-hidden="true" />
            <span>
              Response: <strong>{req.response}</strong>
            </span>
          </>
        ) : (
          <span>{step < 0 ? "Ready to send a request" : "Waiting for response…"}</span>
        )}
      </p>
    </div>
  );
}
