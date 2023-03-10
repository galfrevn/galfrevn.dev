"use client"

import React, { useRef, useState, useCallback, useLayoutEffect, PropsWithChildren } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useTransform, useSpring, motion, useScroll } from 'framer-motion';

export const SmoothScrollProvider = ({ children }: PropsWithChildren) => {
  // scroll container
  const scrollRef = useRef<any>(null);

  // page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0);

  // update scrollable height when browser is resizing
  const resizePageHeight = useCallback((entries: any) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  // observe when browser is resizing
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => resizePageHeight(entries));
    scrollRef && resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const { scrollY } = useScroll(); // measures how many pixels user has scrolled vertically
  // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
  // ... based on current scroll position to translateY the document in a natural way
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }; // easing of smooth scroll
  const spring = useSpring(transform, physics); // apply easing to the negative scroll value

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }} // translateY of scroll container using negative scroll value
        className='fixed top-0 overflow-hidden will-change-transform w-full'
      >
        {children}
      </motion.div>
      {/* blank div that has a dynamic height based on the content's inherent height */}
      {/* this is neccessary to allow the scroll container to scroll... */}
      {/* ... using the browser's native scroll bar */}
      <div style={{ height: pageHeight }} />
    </>
  );
};
