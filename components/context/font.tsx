import { Outfit } from '@next/font/google';
import { FractalNoise } from 'components/ui/noise';

const outfit = Outfit({
  variable: '--display-font',
});

export const FontProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <body
      className={`${outfit.variable} min-h-screen dark:bg-darker dark:text-grey-50 bg-[#EDEDED] font-display antialiased scrollbar-hide`}
    >
      <FractalNoise />
      <main className='flex flex-col max-w-7xl mx-auto'>{children}</main>
    </body>
  );
};
