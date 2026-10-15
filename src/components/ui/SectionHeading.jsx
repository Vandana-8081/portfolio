import styles from "./SectionHeading.module.css";

export default function SectionHeading({ id, title, lead }) {
  return (
    <header className={styles.heading}>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {lead && <p className={styles.lead}>{lead}</p>}
    </header>
  );
}
