import React from 'react';
import Page from '../layouts/page';

const NotFound = ({ data }) => (
  <Page
    title={'Page Not Found'}
    fontColor="white"
    maxWidth={700}
    siteTitle={data.site.siteMetadata.title}
    article
  />
);

export default NotFound;

export const query = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
