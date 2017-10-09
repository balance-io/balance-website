import React from 'react';
import Page from '../templates/page';

const NotFound = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Page title={'Not Found'} siteTitle={siteTitle}>
      <p>Nothing to see here</p>
    </Page>
  );
};

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
