import { StaticQuery, graphql, Link } from "gatsby";
import React from "react";
import { Flex, Image, Link as RebassLink } from "rebass";

import wordmark from "../../images/balance-wordmark.svg";

const ExternalLink = ({ href, children, ...rest }) => (
  <RebassLink href={href} rel="noopener noreferrer" target="_blank" {...rest}>
    {children}
  </RebassLink>
);

const Header = () => (
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
      <Flex as="header" alignItems="center" justifyContent="space-evenly">
        <ExternalLink href={siteMetadata.supportUrl}>Support</ExternalLink>
        <Link to="/">
          <Image
            alt={siteMetadata.siteTitle}
            src={wordmark}
            style={{ verticalAlign: "middle" }}
          />
        </Link>
        <ExternalLink href={siteMetadata.managerUrl}>Manager</ExternalLink>
      </Flex>
    )}
  />
);

export default Header;
