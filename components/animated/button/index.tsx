import { motion } from 'framer-motion';

export const ButtonWithAnimatedText = () => {
  return (
    <motion.div 
      key='get-in-touch-button'
      className='relative w-28 h-10 rounded-full select-none bg-blue-400 dark:bg-opacity-20 dark:backdrop-blur-sm text-sm text-white overflow-hidden cursor-pointer'
      whileHover={{ width: 130}}
      whileTap={{ scale: 0.92 }}
    >
      <div className='flex absolute justify-around w-full top-0 h-full items-center left-full overflow-hidden whitespace-nowrap animate-infinite-x'>
        <h1>Get in touch</h1>
      </div>
      <div className='flex absolute justify-around w-full top-0 h-full items-center left-full overflow-hidden whitespace-nowrap animate-infinite-x delay-3000'>
        <h1>Get in touch</h1>
      </div>
    </motion.div>
  );
};
