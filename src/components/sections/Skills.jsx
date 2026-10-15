import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TechIcon from "@/components/ui/TechIcon";
import { skills } from "@/data/portfolio";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          title="Skills"
          lead="Grouped by the layer of the stack they live in, same colours as the request demo up top."
        />

        <div className={styles.groups}>
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 100}>
              <div className={styles.group} data-layer={group.layer}>
                <div className={styles.head}>
                  <h3 className={styles.groupName}>{group.group}</h3>
                  <span className={styles.count}>{String(group.items.length).padStart(2, "0")}</span>
                </div>
                <ul className={styles.items}>
                  {group.items.map((skill) => (
                    <li key={skill} className={styles.skill}>
                      <TechIcon name={skill} className={styles.icon} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
