import type { NextPage } from 'next';

import { Layout } from 'components/layout';
import { Section } from 'components/section';
import { CardLink } from 'components/card';

import data from 'data/stack';

const Stack: NextPage = () => {
  return (
    <Layout
      title="Stack"
      description="My favorite tools and software I use daily"
      color="green"
    >
      <Section>
        <CardLink.List>
          {data.map((item) => {
            const { icon, name, description, category, url } = item;
            return (
              <CardLink.Item
                icon={icon}
                key={url}
                title={name}
                description={description}
                category={category}
                link={url}
              />
            );
          })}
        </CardLink.List>
      </Section>
    </Layout>
  );
};

export default Stack;
