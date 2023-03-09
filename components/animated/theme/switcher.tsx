import { useTheme } from 'next-themes';
import { Outfit } from '@next/font/google';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'components/ui/dropdown';
import { Laptop, Moon, Sun } from 'lucide-react';

const outfit = Outfit({
  variable: '--display-font',
});

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <Sun className='hover:text-grey-900 dark:text-grey-400 dark:hover:text-grey-100 stroke-1' />
          <span className='sr-only'>Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className={`${outfit.variable} font-display `}>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className='mr-2 h-4 w-4 stroke-1' />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className='mr-2 h-4 w-4 stroke-1' />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Laptop className='mr-2 h-4 w-4 stroke-1' />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
