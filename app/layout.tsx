import 'styles/tailwind.css';

import { FontProvider } from 'components/context/font';
import { ThemeProvider } from 'components/context/theme';
import { SmoothScrollProvider } from 'components/context/scroll';
/* import { CursorProvider } from 'components/context/cursor'; */

import { Navigation } from 'components/sections/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <FontProvider>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {/* <CursorProvider> */}
            <Navigation />
            <SmoothScrollProvider>{children}</SmoothScrollProvider>
          {/* </CursorProvider> */}
        </ThemeProvider>
      </FontProvider>
    </html>
  );
}

export const metadata = {
  title: {
    default: 'Valentín Galfré',
    template: '%s | Valentín Galfré'
  },
  description: 'Find out all about Galfré Valentín, a fully completed Fullstack Developer from Argentina! 🚀',
  applicationName: 'Valentín Galfré Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Valentín', 'Galfré', 'Developer', 'Fullstack', 'React', 'Typescript'],
  authors: [{ name: 'Valentín Galfré', url: 'https://galfrevn.com' }],
  creator: 'Valentín Galfré',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/assets/avatar.png',
    shortcut: '/assets/avatar.png',
    apple: '/assets/avatar.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/assets/avatar.png',
    },
  },
  openGraph: {
    title: 'Valentín Galfré',
    description: 'Find out all about Galfré Valentín, a fully completed Fullstack Developer from Argentina! 🚀',
    url: 'https://galfrevn.com',
    siteName: 'Valentín Galfré Portfolio',
    locale: 'en-US',
    type: 'website',
  },
};
