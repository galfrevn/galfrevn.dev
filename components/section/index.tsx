import styles from 'components/section/section.module.css';

interface SectionProps {
  heading?: string;
  description?: string;
  children?: React.ReactNode;
}

export const Section = ({ heading, description, children }: SectionProps) => {
  return (
    <section className={styles.root}>
      {heading && (
        <header className={styles.heading}>
          <h2 style={{ fontWeight: 600 }}>{heading}</h2>
          {description && <p>{description}</p>}
        </header>
      )}

      {children}
    </section>
  );
};
