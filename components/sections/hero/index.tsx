'use client';

import { AnimatedLetters, AnimatedText } from 'components/animated/text';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

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
      className='container max-w-7xl relative w-screen h-screen'
    >
      <AnimatePresence>
        <article className='absolute left-5 md:left-7 bottom-24 md:bottom-8 md:max-w-[60%] '>
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
          <AnimatedText
            as='p'
            className='mt-10 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
            text='Fullstack software engieer with a passion for great design and user experiences.'
          />
        </article>
        <article className='absolute bottom-8 left-5 md:right-8 md:left-auto '>
          <div key='explore-text' className='flex items-center gap-1 cursor-pointer'>
            <AnimatedText
              as='p'
              className='text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
              text='Explore my projects'
            />
            <motion.div
              key='discover-icon'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 1.2 } }}
            >
              <ArrowDownRight className='stroke-1 ' />
            </motion.div>
          </div>
        </article>
      </AnimatePresence>
    </motion.section>
  );
};
