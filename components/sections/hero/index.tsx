'use client';

import { AnimatedLetters } from 'components/animated/text';
import { AnimatePresence, motion } from 'framer-motion';

export const Hero = () => {
  return (
    <motion.section
      variants={{
        hidden: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
        visible: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
      }}
      initial='hidden'
      whileInView='visible'
      exit='hidden'
      viewport={{ once: true }}
      className='container relative w-screen h-screen'
    >
      <AnimatePresence>
        <article className='absolute left-8 bottom-8 lg:max-w-[60%] '>
          <AnimatedLetters
            as='h1'
            text='I design and develop applications.'
            className='text-5xl font-medium max-w-xs sm:max-w-none md:text-6xl lg:text-7xl'
            textVariants={{
              hidden: { transition: { staggerChildren: 0.015 } },
              visible: { transition: { staggerChildren: 0.015 } },
            }}
            letterVariants={{
              hidden: { opacity: 0, y: 75 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 },
              },
            }}
          />
          <AnimatedLetters
            as='p'
            className='mt-10 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
            text='Fullstack software engieer with a passion for great design and user experiences.'
            textVariants={{
              hidden: { transition: { staggerChildren: 0.005 } },
              visible: { transition: { staggerChildren: 0.005 } },
            }}
            letterVariants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 },
              },
            }}
          />
        </article>
      </AnimatePresence>
    </motion.section>
  );
};
