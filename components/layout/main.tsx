import { Outfit } from '@next/font/google';

const outfit = Outfit({
  variable: '--display-font',
});

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`${outfit.variable} dark:bg-neutral-900 dark:text-neutral-50 font-display antialiased`}>
      <div className='flex min-h-screen flex-col'>{children}</div>
    </main>
  );
};
