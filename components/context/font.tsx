import { Outfit } from '@next/font/google';

const outfit = Outfit({
  variable: '--display-font',
});

export const FontProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <body
      className={`${outfit.variable} min-h-screen dark:bg-gray-900 dark:text-grey-50 bg-[#EDEDED] font-display antialiased`}
    >
      <div className=' bg-pattern w-screen h-screen fixed opacity-20 dark:opacity-5' />
      <div className='flex min-h-screen flex-col'>{children}</div>
    </body>
  );
};
