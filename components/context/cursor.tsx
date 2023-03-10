'use client';

import { useEffect, useState } from 'react';
import { motion, Variant } from 'framer-motion';

type CursorVariant = 'iddle' | 'click';

export const Cursor = ({ cursorVariant }: { cursorVariant: CursorVariant }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const variants: Record<CursorVariant, Variant> = {
    iddle: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      top: 0,
     
    },
    click: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      top: 0,
      scale: 2,
    },
  };

  return (
    <motion.div
      className='bg-black h-3 w-3 rounded-full fixed top-[1000px] left-0 pointer-events-none z-20 hidden md:block'
      variants={variants}
      animate={cursorVariant}
    ></motion.div>
  );
};

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('iddle');

  return (
    <motion.div
      onMouseDown={() => setCursorVariant('click')}
      onMouseUp={() => setCursorVariant('iddle')}
      className='h-screen'
    >
      <Cursor cursorVariant={cursorVariant} />
      {children}
    </motion.div>
  );
};
