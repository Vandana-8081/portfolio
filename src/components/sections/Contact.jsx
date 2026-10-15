import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/ui/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/portfolio";
import styles from "./Contact.module.css";

export default function Contact() {
  const phoneHref = `tel:${profile.phone.replace(/[^+\d]/g, "")}`;
  const cards = [
    { Icon: FiPhone, label: "Direct phone", value: profile.phone, href: phoneHref },
    { Icon: FiMail, label: "Direct mail", value: profile.email, href: `mailto:${profile.email}` },
    {
      Icon: FiMapPin,
      label: "Location",
      value: profile.location,
      href: `https://www.google.com/maps/search/${encodeURIComponent(profile.location)}`,
    },
  ];

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className={`container ${styles.grid}`}>
        <div>
          <SectionHeading
            id="contact-title"
            title="Let's work together"
            lead="Hiring for a developer role, or have a project in mind? Send me a message and I'll get back to you."
          />

          <ul className={styles.cards}>
            {cards.map(({ Icon, label, value, href }, i) => (
              <Reveal as="li" key={label} delay={i * 100}>
                <a href={href} className={styles.card} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  <span className={styles.icon} aria-hidden="true">
                    <Icon />
                  </span>
                  <span className={styles.cardText}>
                    <span className={styles.label}>{label}</span>
                    <span className={styles.value}>{value}</span>
                  </span>
                  <FiArrowUpRight className={styles.go} aria-hidden="true" />
                </a>
              </Reveal>
            ))}
          </ul>

          <ul className={styles.socials}>
            <li>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
