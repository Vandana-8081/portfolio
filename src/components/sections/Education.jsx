import { FiAward, FiBookOpen, FiCalendar, FiMapPin } from "react-icons/fi";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications, education } from "@/data/portfolio";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className="section section-alt" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading id="education-title" title="Education" />

        <div className={styles.grid}>
          <ul className={styles.list}>
            {education.map((item, i) => (
              <Reveal as="li" key={item.school} delay={i * 120} className={styles.entry}>
                <span className={styles.dot} aria-hidden="true" />
                <div className={styles.item}>
                  <div className={styles.top}>
                    <span className={styles.icon} aria-hidden="true">
                      <FiBookOpen />
                    </span>
                    <h3 className={styles.degree}>{item.degree}</h3>
                    <span className={styles.score}>{item.score}</span>
                  </div>
                  <p className={styles.school}>{item.school}</p>
                  <div className={styles.meta}>
                    <span>
                      <FiMapPin aria-hidden="true" /> {item.place}
                    </span>
                    <span>
                      <FiCalendar aria-hidden="true" /> {item.period}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200} className={styles.certWrap}>
            <div className={styles.certBox}>
              <h3 className={styles.certTitle}>Certifications</h3>
              <ul className={styles.certs}>
                {certifications.map((cert) => (
                  <li key={cert}>
                    <span className={styles.certIcon} aria-hidden="true">
                      <FiAward />
                    </span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
