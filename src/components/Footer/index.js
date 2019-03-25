import React from "react";
import { Flex } from "rebass";

import { ExternalLink } from "../Links";

import { useSiteMetadata } from "../../hooks";

const Footer = ({ light }) => {
  const { urls } = useSiteMetadata();

  return (
    <Flex as="footer" justifyContent="space-evenly" alignItems="center">
      {urls.map((link, index) => (
        <ExternalLink
          color={light ? "textLighter" : "textDark"}
          fontSize={1}
          key={index}
          href={link.url}
        >
          {link.label}
        </ExternalLink>
      ))}
    </Flex>
  );
};

Footer.defaultProps = {
  light: false
};

export default Footer;
