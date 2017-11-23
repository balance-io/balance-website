import React from 'react';
import styled from 'styled-components';
import Page from '../templates/page';
import { fonts, colors } from '../styles';

const StyledFlex = styled.div`
  display: flex;
  font-size: ${fonts.medium};
`;

const StyledSidebar = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  font-size: ${fonts.large};
  opacity: 1 !important;
  & a {
    background: none;
    padding-top: 1em;
    border-bottom: 1px solid rgb(${colors.white});
  }
`;

const StyledContent = styled.div`
  width: 100%;
  display: block;
  padding-left: 40px;
  & ol,
  & ul {
    padding: 0;
  }
`;

const Wiki = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const title = data.page.frontmatter.title;
  const html = data.page.html;
  const wiki = data.wiki.edges;
  console.log(wiki);
  return (
    <Page title={'WIKI - Guides & Manuals for Balance Open'} siteTitle={siteTitle} maxWidth={1000}>
      <StyledFlex>
        <StyledSidebar>
          {wiki.map(({ node }) => (
            <a href={`/wiki${node.fields.slug}`}>{node.frontmatter.title}</a>
          ))}
        </StyledSidebar>
        <StyledContent>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </StyledContent>
      </StyledFlex>
    </Page>
  );
};

export default Wiki;

export const query = graphql`
  query WikiQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    wiki: allMarkdownRemark(filter: { fields: { markdownOrigin: { eq: "wiki" } } }) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
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
