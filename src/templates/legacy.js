import React from 'react';
import Page from '../templates/page';

const Legacy = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const title = data.page.frontmatter.title;
  const html = data.page.html;
  return (
    <Page title={title} siteTitle={siteTitle}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
  );
};

export default Legacy;

export const query = graphql`
  query LegacyQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
