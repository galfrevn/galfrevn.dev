'use client';

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

import { Laptop, Moon, Sun } from 'lucide-react';
import { Outfit } from '@next/font/google';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'components/ui/dropdown';

const outfit = Outfit({
  variable: '--display-font',
});

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button whileHover={{ rotate: 45 }}  >
          <Sun className='hover:text-grey-900 dark:text-grey-400 dark:hover:text-grey-100' />
          <span className='sr-only'>Toggle theme</span>
        </motion.button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className={`${outfit.variable} font-display `}>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className='mr-2 h-4 w-4' />
          <span className='font-normal'>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className='mr-2 h-4 w-4 ' />
          <span className='font-normal'>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Laptop className='mr-2 h-4 w-4 ' />
          <span className='font-normal'>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
