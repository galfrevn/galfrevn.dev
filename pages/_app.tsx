import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import 'styles/globals.css';

import { ThemeProvider } from 'next-themes';
import { Poppins } from '@next/font/google';

import { SiteLayout } from 'components/layout';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const poppinsFont = Poppins({
  variable: '--poppins-font',
  weight: ['400', '500', '600', '700', '800'],
});

const FontStyles = () => (
  <style jsx global>{`
    :root {
      --font-poppins: ${poppinsFont.style.fontFamily};
    }
  `}</style>
);

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <ThemeProvider defaultTheme="system">
        <FontStyles />
        <SiteLayout>{page}</SiteLayout>
      </ThemeProvider>
    ));

  return getLayout(<Component {...pageProps} />);
}
