"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { profile } from "@/data/portfolio";
import styles from "./ContactForm.module.css";

/*
  .env.local me NEXT_PUBLIC_WEB3FORMS_KEY ho to message seedha aapke email par aayega (web3forms.com).
  Key na ho to visitor ka email app khulega, message pehle se bhara hua.
*/
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    if (!ACCESS_KEY) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus({ state: "sent", message: "Your email app should open with the message filled in." });
      return;
    }

    setStatus({ state: "sending", message: "" });
    try {
      data.append("access_key", ACCESS_KEY);
      data.append("subject", `Portfolio enquiry from ${name}`);
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      form.reset();
      setStatus({ state: "sent", message: "Message sent. I'll get back to you soon." });
    } catch {
      setStatus({
        state: "error",
        message: `Message didn't go through. Please email me at ${profile.email}.`,
      });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <input name="name" type="text" required autoComplete="name" placeholder=" " />
        <span>Full name</span>
      </label>
      <label className={styles.field}>
        <input name="email" type="email" required autoComplete="email" placeholder=" " />
        <span>Email address</span>
      </label>
      <label className={styles.field}>
        <textarea name="message" rows={5} required placeholder=" " />
        <span>Your message</span>
      </label>
      {/* Spam bots ke liye trap, insaan ko nahi dikhta */}
      <input type="checkbox" name="botcheck" className="sr-only" tabIndex={-1} aria-hidden="true" />

      <div className={styles.actions}>
        <button type="submit" className={`btn btn-primary ${styles.send}`} disabled={status.state === "sending"}>
          <FiSend aria-hidden="true" />
          {status.state === "sending" ? "Sending…" : "Send message"}
        </button>
        <p
          className={`${styles.status} ${status.state === "error" ? styles.error : ""}`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </p>
      </div>
    </form>
  );
}
