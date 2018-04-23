import React from 'react';
import Page from '../layouts/page';

const Test = ({ data }) => (
  <Page
    title={'My mind is telling me Noooooooo!'}
    fontColor="white"
    maxWidth={700}
    siteTitle={data.site.siteMetadata.title}
    article
  />
);

export default Test;

export const query = graphql`
  query TestQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
