import styles from "./home_section.styles.module.css";

interface SectionProps {
  title: string;
  subtitle: React.ReactNode | null;
  children: React.ReactNode;
}

export function HomeSection({ title, subtitle, children }: SectionProps) {
  return (
    <article className={styles.container}>
      <section className={styles.titleContainer}>
        <h2>{title}</h2>
        {subtitle}
      </section>

      <div className={styles.divider}></div>

      <div>{children}</div>
    </article>
  );
}
