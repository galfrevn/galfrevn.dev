import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { useMemo } from 'react';

import { useMotionValue, usePresence, Variants } from 'framer-motion';
import { motion } from 'framer-motion';

import { defaultLetterVariants, defaultTextVariants } from 'components/animated/text/motion';

type AnimatedTextOwnProps<C extends ElementType> = {
  as?: C | ElementType;
  text: string;
  variants?: Variants;
};

type AnimatedTextProps<C extends ElementType> = AnimatedTextOwnProps<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof AnimatedTextOwnProps<C>>;

export const AnimatedText = <C extends ElementType = 'p'>({
  as: Tag = 'p',
  text,
  variants = defaultLetterVariants,
  ...rest
}: AnimatedTextProps<C>) => {
  const words = text.split(' ').map((word) => `${word}\u00A0`);

  const renderWords = useMemo(
    () =>
      words.map((word, index) => (
        <span key={index} className='inline-block overflow-hidden'>
          <motion.span variants={variants} className='inline-block'>
            {word}
          </motion.span>
        </span>
      )),
    [variants, words]
  );

  return (
    <Tag {...rest}>
      <motion.span variants={variants}>{renderWords}</motion.span>
    </Tag>
  );
};

export type AnimatedLettersOwnProps<C extends ElementType> = {
  as?: C | ElementType;
  text: string;
  textVariants?: Variants;
  letterVariants?: Variants;
};

type AnimatedLettersProps<C extends ElementType> = AnimatedLettersOwnProps<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof AnimatedLettersOwnProps<C>>;

export const AnimatedLetters = <C extends ElementType = 'div'>({
  as: Tag = 'div',
  text,
  textVariants = defaultTextVariants,
  letterVariants = defaultLetterVariants,
  ...rest
}: AnimatedLettersProps<C>) => {
  const words = text.split(' ').map((word) => `${word}\u00A0`);

  return (
    <Tag {...rest}>
      <motion.span variants={textVariants}>
        {words.map((_, index) => (
          <span key={index} className='inline-block whitespace-nowrap select-none'>
            {[...words[index]].flat().map((letter, letterIndex) => (
              <span key={letterIndex} className='inline-block overflow-hidden'>
                <motion.span variants={letterVariants} className='inline-block'>
                  {letter}
                </motion.span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
};
