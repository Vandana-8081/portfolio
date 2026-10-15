import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/portfolio";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className="section section-alt" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          title="Projects"
          lead="Full-stack apps where I built every layer, from the database schema to the last button."
        />

        <div className={styles.list}>
          {projects.map((project, i) => (
            // Har card sticky hai, isliye scroll karte waqt ek ke upar doosra stack hota jata hai
            <Reveal key={project.title} className={styles.item} style={{ "--i": i }}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
