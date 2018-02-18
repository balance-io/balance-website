import React from 'react';
import Page from '../layouts/page';

const About = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Page title={'About'} siteTitle={siteTitle} article>
      <p>Balance. What else?</p>
    </Page>
  );
};

export default About;

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
