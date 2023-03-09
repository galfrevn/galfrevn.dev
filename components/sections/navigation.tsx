'use client';

import { PropsWithChildren } from 'react';
import { configuration } from 'config/meta';
import Image, { ImageProps } from 'next/image';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { useMediaQuery, md } from 'hooks/use-media-query';

import { ButtonWithAnimatedText } from 'components/animated/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'components/ui/tooltip';
import { ThemeSwitcher } from 'components/animated/theme/switcher';

const navigationAvatarProps: ImageProps = {
  width: 120,
  height: 120,
  quality: 100,
  alt: configuration.name,
  src: configuration.avatar.current,
  placeholder: 'blur',
  blurDataURL: configuration.avatar.placeholder,
};

export const Navigation = () => {
  const navigationHidden = useMediaQuery(md);

  return (
    <header className='position fixed w-screen top-0 z-10'>
      <nav className='mt-8 flex justify-between px-6 lg:px-8 items-center'>
        <motion.div
          key='avatar'
          className='rounded-full p-[2px] ring-[2px] ring-black dark:ring-white cursor-pointer lg:p-[3px] '
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 1.02 }}
        >
          <div className='rounded-full p-px h-9 w-9 lg:h-14 lg:w-14 select'>
            <Image {...navigationAvatarProps} className='rounded-full ' draggable={false} />
          </div>
        </motion.div>

        <motion.ul
          key='navigation-buttons'
          className='flex items-center font-medium gap-6 md:gap-8'
        >
          <NavigationButton delay={0} key='blog'>
            Blog
          </NavigationButton>
          {navigationHidden && (
            <NavigationButton delay={1} key='snippets'>
              Snippets
            </NavigationButton>
          )}
          <NavigationButton delay={2} key='projects'>
            Projects
          </NavigationButton>
          <NavigationButton delay={3} key='about'>
            About
          </NavigationButton>
          {navigationHidden && (
            <NavigationButton delay={4} key='cto'>
              <ButtonWithAnimatedText />
            </NavigationButton>
          )}
          <ThemeSwitcher />
          {navigationHidden && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <NavigationButton delay={5} key='resume'>
                    <FileText className='w-5 stroke-1' />
                  </NavigationButton>
                </TooltipTrigger>
                <TooltipContent>
                  <p>My resume</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </motion.ul>
      </nav>
    </header>
  );
};

interface NavigationButtonProps extends PropsWithChildren {
  delay: number;
}

const NavigationButton = ({ children, delay, ...navigationButton }: NavigationButtonProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.7 + 0.05 * delay } }}
      className='cursor-pointer select-none text-sm font-light leading-relaxed tracking-wide'
      {...navigationButton}
    >
      {children}
    </motion.li>
  );
};
