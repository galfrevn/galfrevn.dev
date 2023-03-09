'use client';

import { AnimatedLetters, AnimatedText } from 'components/animated/text';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export const AboutHero = () => {
  return (
    <section className='container max-w-7xl px-6 mt-40'>
      <AnimatePresence>
        <motion.div
          variants={{
            hidden: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
            visible: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
          }}
          initial='hidden'
          whileInView='visible'
          exit='hidden'
          viewport={{ once: true }}
          className='flex flex-col items-start justify-between lg:flex-row '
        >
          <AnimatedLetters
            as='p'
            textVariants={{
              hidden: { transition: { staggerChildren: 0.005 } },
              visible: { transition: { staggerChildren: 0.005 } },
            }}
            letterVariants={{
              hidden: { y: 50 },
              visible: {
                y: 0,
                transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 },
              },
            }}
            className='text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200 max-w-xl '
            text='Get a brief look at who I am and what I do. If you would like to know more about me and my interests, you can.'
          />
          <div className='flex items-center gap-1 mt-8 lg:mt-0 opacity-75'>
            <AnimatedText
              as='p'
              className='text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
              text='More about me'
            />
            <motion.div
              key='discover-icon'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 1 } }}
            >
              <ArrowDownRight className='stroke-1 ' />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
