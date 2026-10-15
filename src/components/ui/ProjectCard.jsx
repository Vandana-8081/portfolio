import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import TechIcon from "@/components/ui/TechIcon";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.category}>{project.category}</span>
          <span className={styles.tag}>Featured</span>
        </div>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.tagline}>{project.tagline}</p>

        {project.highlights && (
          <dl className={styles.highlights}>
            {project.highlights.map((h) => (
              <div key={h.label} className={styles.highlight}>
                <dt>{h.label}</dt>
                <dd>{h.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <ul className={styles.stack} aria-label="Built with">
          {project.stack.map((tech) => (
            <li key={tech}>
              <TechIcon name={tech} />
              {tech}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.live}>
              View Live
              <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.source}>
              <FaGithub aria-hidden="true" />
              Source
            </a>
          )}
        </div>
      </div>

      <div className={styles.visual}>
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(max-width: 860px) 100vw, 640px"
            className={styles.shot}
          />
        ) : (
          // Screenshot na ho to project ka naam aur stack dikhega
          <div className={styles.placeholder}>
            <p className={styles.placeholderTitle}>{project.title}</p>
            <div className={styles.placeholderIcons} aria-hidden="true">
              {project.stack.map((tech) => (
                <TechIcon key={tech} name={tech} />
              ))}
            </div>
          </div>
        )}
        <span className={styles.fade} aria-hidden="true" />
      </div>
    </article>
  );
}
