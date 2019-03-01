import { StaticQuery, graphql, Link } from "gatsby";
import React from "react";
import { Flex, Image } from "rebass";

import { ExternalLink } from "../Links";

import wordmark from "../../images/balance-wordmark.svg";
import wordmarkLight from "../../images/balance-wordmark-light.svg";

const Header = ({ light }) => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
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
      <Flex
        as="header"
        alignItems="center"
        justifyContent="space-evenly"
        py={4}
      >
        <ExternalLink
          fontSize={4}
          color="textLighter"
          href={siteMetadata.supportUrl}
        >
          Support
        </ExternalLink>
        <Link to="/">
          <Image
            alt={siteMetadata.siteTitle}
            src={light ? wordmarkLight : wordmark}
            style={{ verticalAlign: "middle" }}
          />
        </Link>
        <ExternalLink
          fontSize={4}
          color="textLighter"
          href={siteMetadata.managerUrl}
        >
          Manager
        </ExternalLink>
      </Flex>
    )}
  />
);

Header.defaultProps = {
  light: false
}

export default Header;
