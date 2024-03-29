'use client';

import { configuration, externalLinks } from 'config/meta';

import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { useMediaQuery, md } from 'hooks/use-media-query';

import { ButtonWithAnimatedText } from 'components/animated/button';
import { ThemeSwitcher } from 'components/animated/theme/switcher';
import { NavigationButton } from 'components/sections/navigation-button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'components/ui/tooltip';

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
    <header className='position fixed w-screen max-w-7xl mx-auto top-0 z-10 pb-4 dark:bg-darker/90 backdrop-blur-md  '>
      <nav className='mt-8 flex justify-between px-6 lg:px-8 items-center'>
        <motion.div
          key='avatar'
          className='rounded-full p-[2px] ring-[2px] ring-black dark:ring-white cursor-pointer lg:p-[3px] '
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 1.02 }}
        >
          <Link href='/'>
            <div className='rounded-full p-px h-9 w-9 lg:h-14 lg:w-14 select'>
              <Image {...navigationAvatarProps} className='rounded-full ' draggable={false} />
            </div>
          </Link>
        </motion.div>

        <motion.ul
          key='navigation-buttons'
          className='flex items-center font-medium gap-6 md:gap-8'
        >
          <NavigationButton delay={0} key='blog'>
            <Link href={externalLinks.blog} rel='noreferrer'>
              <p>Blog</p>
            </Link>
          </NavigationButton>
          {navigationHidden && (
            <NavigationButton delay={1} key='stack'>
              <Link href='/stack'>Stack</Link>
            </NavigationButton>
          )}
          <NavigationButton delay={2} key='projects'>
            <Link href='/projects'>Projects</Link>
          </NavigationButton>
          <NavigationButton delay={3} key='about' route='about'>
            <Link href='/about'>About</Link>
          </NavigationButton>
          {navigationHidden && (
            <NavigationButton delay={4} key='cto'>
              <ButtonWithAnimatedText />
            </NavigationButton>
          )}
          <NavigationButton delay={5} key='theme'>
            <ThemeSwitcher />
          </NavigationButton>
          {navigationHidden && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <NavigationButton delay={6} key='resume'>
                    <Link href={externalLinks.resume} target='_blank' rel='noreferrer'>
                      <FileText className='w-5' />
                    </Link>
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
