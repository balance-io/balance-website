import React from "react";
import Page from "../layouts/page";
import styled from "styled-components";
import { colors, fonts, transitions, responsive } from "../styles";

const STitle = styled.h1`
  width: 100%;
  margin: 10px auto;
  font-size: 1.75em;
  font-weight: 600;
  line-height: 1.29;
  @media screen and (${responsive.sm.max}) {
    font-size: 8vw;
  }
`;

const SParagraph = styled.p`
  font-size: 1.125em;
  font-weight: 400;
  line-height: 1.56;
  opacity: 0.9;
  color: rgb(${colors.softGrey});
  & a {
    color: rgb(${colors.blue});
  }
  @media screen and (${responsive.sm.max}) {
    font-size: 4vw;
    color: rgb(${colors.lightGrey});
  }
`;

const NotFound = ({ data }) => (
  <Page
    fontColor="white"
    maxWidth={700}
    title="Page not found"
    style={{ minHeight: "100vh" }}
    siteTitle={data.site.siteMetadata.title}
  >
    <section
      style={{
        textAlign: "center"
      }}
    >
      <STitle>This page doesn’t exist</STitle>
      <SParagraph>
        You might have mistyped the address, or the page might have moved.
      </SParagraph>
    </section>
  </Page>
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
