"use client"

import { Fragment } from 'react';
import { usePageLoader } from 'hooks/use-page-loader';

import { Hero } from 'components/sections/hero';
import { About } from 'components/sections/about';

export default function Home() {

  return (
    <Fragment>
      <Hero />
      <About />
    </Fragment>
  );
}
