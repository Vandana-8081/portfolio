import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FiArrowUp, FiMail } from "react-icons/fi";
import { profile } from "@/data/portfolio";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © {year} {profile.name}. Built with Next.js.
        </p>

        <ul className={styles.socials}>
          <li>
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FiMail />
            </a>
          </li>
        </ul>

        <a href="#main" className={styles.top}>
          <FiArrowUp aria-hidden="true" />
          Back to top
        </a>
      </div>
    </footer>
  );
}
