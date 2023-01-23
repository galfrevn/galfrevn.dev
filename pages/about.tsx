import type { NextPage } from 'next';
import Image from 'next/image';

import { Layout } from 'components/layout';
import { Section } from 'components/section';
import { AboutTitle } from 'components/about/title';
import { AboutCommits } from 'components/about/commits';

const About: NextPage = () => {
  return (
    <Layout title='About' description='Discover a little about me' color='red'>
      <Section>
        <Image src='/static/avatar.png' alt='Me' width={200} height={200} />
        <AboutTitle />
      </Section>
      <Section heading='Experience' description='Teams I have worked with' >
        <Image src='/static/avatar.png' alt='Me' width={200} height={200} />
        <AboutTitle />
      </Section>
    </Layout>
  );
};

export default About;
