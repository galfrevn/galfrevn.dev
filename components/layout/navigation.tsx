'use client';

import Image, { ImageProps } from 'next/image';

import { motion } from 'framer-motion';
import { configuration } from 'config/meta';

import { ButtonWithAnimatedText } from 'components/animated/button';

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
  return (
    <header className='position fixed w-screen top-0 z-10'>
      <nav className='mt-8 flex justify-between px-6 lg:px-8 items-center'>
        <motion.div
          key='avatar'
          className='rounded-full p-[2px] ring-[2px] ring-black cursor-pointer lg:p-[3px] '
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 1.02 }}
        >
          <div className='rounded-full p-px h-9 w-9 lg:h-14 lg:w-14 select'>
            <Image {...navigationAvatarProps} className='rounded-full ' draggable={false} />
          </div>
        </motion.div>

        <ul className='flex gap-8 items-center font-medium'>
          <motion.li key='blog'>Blog</motion.li>
          <li>Snippets</li>
          <li>Projects</li>
          <li>About</li>
          <ButtonWithAnimatedText />
          <li>Resume</li>
        </ul>
      </nav>
    </header>
  );
};
