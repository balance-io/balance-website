import { Link } from "gatsby";
import React from "react";
import { Flex, Image, Link as RebassLink } from "rebass";

import { ExternalLink } from "../Links";

import { useSiteMetadata } from "../../hooks";

import wordmark from "../../images/balance-wordmark.svg";
import wordmarkLight from "../../images/balance-wordmark-light.svg";

const Header = ({ light }) => {
  const { supportUrl, siteTitle, managerUrl } = useSiteMetadata();

  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent={["space-between", "space-evenly"]}
      pt={4}
    >
      <ExternalLink
        fontSize={4}
        color={light ? "textLightest" : "textLighter"}
        href={supportUrl}
      >
        Support
      </ExternalLink>
      <Link to="/">
        <Image
          alt={siteTitle}
          src={light ? wordmarkLight : wordmark}
          style={{ verticalAlign: "middle" }}
        />
      </Link>
      <RebassLink
        fontSize={4}
        color={light ? "textLightest" : "textLighter"}
        href={managerUrl}
        css={{ textDecoration: "none" }}
      >
        Manager
      </RebassLink>
    </Flex>
  );
};

Header.defaultProps = {
  light: false
};

export default Header;
