import styles from 'components/header/header.module.css';

interface HeaderProps {
  title?: string;
  description?: string;
}

export const Header = ({ title, description }: HeaderProps) => {
  if (!title) return null;

  return (
    <header className={styles.root}>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </header>
  );
};
