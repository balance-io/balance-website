import React from 'react';
import Page from '../layouts/page';

const NotFound = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Page title={'Not Found'} siteTitle={siteTitle} article>
      <h1>404</h1>
      <p>Page not found</p>
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
