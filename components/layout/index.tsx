import { useEffect } from 'react';
import Head from 'next/head';

import { Nav } from 'components/navbar';
import { Header } from 'components/header';
import { Footer } from 'components/footer';

import styles from 'components/layout/layout.module.css';

interface LayoutProps {
  title?: string;
  description?: string;
  color?: keyof typeof colors;
  children?: React.ReactNode;
}

type variants = {
  [key: string]: string;
};

const colors: variants = {
  gray: 'var(--foreground)',
  blue: 'var(--blue)',
  green: 'var(--green)',
  red: 'var(--red)',
};

const meta = {
  title: 'Valentin Galfre',
  description: 'Fullstack software engineer 🚀',
};

export function SiteLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className={styles.root}>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="og:description" content={meta.description} />

        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <div className={styles.background}>
        <div className={styles.gradient} />
      </div>
      <Nav />

      <main className={styles.main} id="skip">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export function Layout({ title, description, children, color = 'blue' }: LayoutProps) {
  const metaTitle = title ? `${title} - Valentin Galfre` : '';
  const metaDescription = description ? description : '';

  useEffect(() => {
    document.documentElement.style.setProperty('--r-color', colors[color]);
  });

  return (
    <>
      {title && (
        <Head>
          <title>{metaTitle}</title>
          <meta name="og:title" content={metaTitle} />
          <meta name="description" content={metaDescription} />
          <meta name="og:description" content={metaDescription} />
        </Head>
      )}

      <Header title={title} description={metaDescription} />

      {children}
    </>
  );
}
