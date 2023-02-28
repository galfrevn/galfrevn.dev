'use client';

import { AnimatedLetters } from 'components/animated/text';
import { AnimatePresence, motion } from 'framer-motion';

const aboutText = `Hello! My name is Valentín Galfré and I’m a fullstack software developer. My interest in computers and
software development began at a young age messing around in 2D game engines, creating
whatever I could think of. Today that interest has grown into my passion. I love learning new
technologies and solving problems to create high-quality user experiences.`;

export const About = () => {
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
      className='container my-40 px-5 md:px-8 max-w-2xl'
    >
      <AnimatePresence>
        <AnimatedLetters
          as='p'
          className='text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
          text={aboutText}
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
        />
      </AnimatePresence>
    </motion.section>
  );
};
