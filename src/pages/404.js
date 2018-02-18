import React from 'react';
import Page from '../layouts/page';

const NotFound = ({ data }) => (
  <Page title={'404 - Page Not Found'} siteTitle={data.site.siteMetadata.title} article />
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
