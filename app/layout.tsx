import 'styles/tailwind.css';

import { MainLayout } from 'components/layout/main';
import { Navigation } from 'components/layout/navigation';
import { CursorWrapper } from 'components/animated/cursor';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <MainLayout>
          <Navigation />
          <CursorWrapper>{children}</CursorWrapper>
        </MainLayout>
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};