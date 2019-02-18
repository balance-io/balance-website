import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Flex, Image, Link as RebassLink } from "rebass";

import wordmark from "../images/balance-wordmark.svg";

const ExternalLink = ({ href, children, ...rest }) => (
  <RebassLink href={href} rel="noopener noreferrer" target="_blank">
    {children}
  </RebassLink>
);

const Header = ({ metadata }) => (
  <Flex as="header" alignItems="center" justifyContent="space-evenly">
    <ExternalLink href={metadata.supportUrl}>Support</ExternalLink>
    <Link to="/">
      <Image
        alt={metadata.siteTitle}
        src={wordmark}
        style={{ verticalAlign: "middle" }}
      />
    </Link>
    <ExternalLink href={metadata.managerUrl}>Manager</ExternalLink>
  </Flex>
);

Header.propTypes = {
  metadata: PropTypes.shape({
    siteTitle: PropTypes.string.isRequired,
    supportUrl: PropTypes.string.isRequired,
    managerUrl: PropTypes.string.isRequired
  })
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
