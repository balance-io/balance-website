import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./Header";
import Container from "./Container";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            supportUrl
            managerUrl
          }
        }
      }
    `}
    render={({ site: { siteMetadata } }) => (
      <Container>
        <Header metadata={siteMetadata} />

        <main>{children}</main>

        <footer>© Balance</footer>
      </Container>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
