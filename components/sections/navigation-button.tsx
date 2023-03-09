'use client';

import { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';
import { cn } from 'lib/tailwind';

import { usePathname } from 'next/navigation';

interface NavigationButtonProps extends PropsWithChildren {
  delay: number;
  route?: string;
}

export const NavigationButton = ({ children, delay, route }: NavigationButtonProps) => {
  const pathname = usePathname();
  const isActiveRoute = route && pathname.includes(route);

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.7 + 0.05 * delay } }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 1.01 }}
      className={cn(
        'cursor-pointer select-none text-sm font-light leading-relaxed tracking-wide hover:underline decoration-wavy decoration-accent',
        {
          'underline': isActiveRoute,
        }
      )}
    >
      {children}
    </motion.li>
  );
};
