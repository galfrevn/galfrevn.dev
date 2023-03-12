import { Outfit } from '@next/font/google';

const outfit = Outfit({
  variable: '--display-font',
});

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className={`${outfit.variable} dark:bg-neutral-900 dark:text-neutral-50 bg-[#EDEDED] font-display antialiased`}
    >
      <div className=' bg-pattern w-screen h-screen fixed opacity-20' />
      <div className='flex min-h-screen flex-col'>{children}</div>
    </main>
  );
};
