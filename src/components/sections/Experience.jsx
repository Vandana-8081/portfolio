import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/portfolio";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          id="experience-title"
          title="Experience"
          lead="Two industry stints in Lucknow, both on the MERN stack."
        />

        <ol className={styles.timeline}>
          {experience.map((job, i) => (
            <Reveal as="li" key={job.company} delay={i * 80} className={styles.item}>
              <div className={styles.meta}>
                <p className={styles.period}>{job.period}</p>
                <p className={styles.place}>{job.location}</p>
              </div>
              <div className={styles.body}>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.company}>{job.company}</p>
                <ul className={styles.points}>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
