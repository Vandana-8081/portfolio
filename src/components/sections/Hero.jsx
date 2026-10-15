import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FiDownload, FiMail, FiMapPin } from "react-icons/fi";
import ProfilePhoto from "@/components/ui/ProfilePhoto";
import StackFlow from "@/components/ui/StackFlow";
import TypingText from "@/components/ui/TypingText";
import { profile } from "@/data/portfolio";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.location}>
            <FiMapPin aria-hidden="true" />
            {profile.location}
          </p>

          <h1 id="hero-title" className={styles.title}>
            Hi, I&apos;m {profile.name}.
          </h1>

          <p className={styles.role}>
            I&apos;m a <TypingText words={profile.roles} />
          </p>

          <p className={styles.intro}>{profile.intro}</p>

          <div className={styles.ctas}>
            <a href="#projects" className="btn btn-primary">
              See my projects
            </a>
            <a href={profile.resume} className="btn btn-outline" download>
              <FiDownload aria-hidden="true" />
              Download resume
            </a>
          </div>

          <ul className={styles.socials}>
            <li>
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
                <FaGithub aria-hidden="true" />
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn aria-hidden="true" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram aria-hidden="true" />
                Instagram
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`}>
                <FiMail aria-hidden="true" />
                Email
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.photo}>
          <ProfilePhoto src={profile.photo} name={profile.name} />
        </div>
      </div>

      <div className={`container ${styles.flow}`}>
        <StackFlow />
      </div>
    </section>
  );
}
