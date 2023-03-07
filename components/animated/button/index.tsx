import { motion } from 'framer-motion';

export const ButtonWithAnimatedText = () => {
  return (
    <motion.div 
      key='get-in-touch-button'
      className='relative w-28 h-10 rounded-full select-none bg-accent dark:backdrop-blur-lg text-sm text-white overflow-hidden cursor-pointer'
      whileHover={{ width: 130}}
      whileTap={{ scale: 0.92 }}
    >
      <div className='flex absolute justify-around w-full top-0 h-full items-center left-full overflow-hidden whitespace-nowrap animate-infinite-x'>
        <span className='font-medium' >Get in touch</span>
      </div>
      <div className='flex absolute justify-around w-full top-0 h-full items-center left-full overflow-hidden whitespace-nowrap animate-infinite-x delay-3000'>
        <span className='font-medium' >Get in touch</span>
      </div>
    </motion.div>
  );
};
