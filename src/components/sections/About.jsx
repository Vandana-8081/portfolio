import { FiAward, FiBriefcase, FiLayers, FiMapPin } from "react-icons/fi";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { about } from "@/data/portfolio";
import styles from "./About.module.css";

const ICONS = [FiMapPin, FiAward, FiLayers, FiBriefcase];

export default function About() {
  return (
    <section id="about" className="section section-alt" aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        <div>
          <SectionHeading id="about-title" title="About me" />
          <div className={styles.text}>
            {about.paragraphs.map((p, i) => (
              <Reveal as="p" key={p.slice(0, 24)} delay={i * 120}>
                {p}
              </Reveal>
            ))}
          </div>
        </div>

        <div className={styles.facts}>
          {about.facts.map((fact, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={fact.label} delay={i * 100}>
                <div className={styles.fact}>
                  <span className={styles.icon} aria-hidden="true">
                    <Icon />
                  </span>
                  <dl>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </dl>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
