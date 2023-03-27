'use client';

import { motion } from 'framer-motion';

export const AnimatedImage = () => (
  <motion.figure
    variants={{
      hidden: { scaleX: 0, originX: 0 },
      visible: {
        scaleX: 1,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: [0.9, 0.1, 0.3, 0.96],
          when: 'beforeChildren',
          delayChildren: 0.15,
          delay: 0.25,
        },
      },
    }}
    initial='hidden'
    whileInView='visible'
    exit='hidden'
    viewport={{ once: true }}
    className='dark:bg-[#141414] bg-[#D6D6D6] my-8 w-full self-start md:col-span-full md:col-start-7 md:mb-0 md:w-full xl:col-start-9'
  >
    <motion.img
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.5, ease: [0.6, 0.5, 0.5, 0.9] },
        },
      }}
      src='/assets/back.jpg'
      alt='Portrait of Valentín Galfré'
      height={600}
      width={600}
    />
  </motion.figure>
);
