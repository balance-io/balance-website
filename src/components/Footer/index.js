import React from "react";
import { Flex, Image, Link } from "rebass";

import { useSiteMetadata } from "../../hooks";

import blog from "../../images/icons/blog.svg";
import calendar from "../../images/icons/calendar.svg";
import discord from "../../images/icons/discord.svg";
import github from "../../images/icons/github.svg";
import twitter from "../../images/icons/twitter.svg";
import forum from "../../images/icons/forum.svg";

const FooterIcon = ({ label, ...rest }) => {
  const getIcon = label => {
    switch (label) {
      case "GitHub":
        return github;
      case "Twitter":
        return twitter;
      case "Discord":
        return discord;
      case "Forum":
        return forum;
      case "Blog":
        return blog;
      case "Meetups":
      default:
        return calendar;
    }
  };

  return <Image src={getIcon(label)} {...rest} />;
};

const Footer = ({ light }) => {
  const { urls } = useSiteMetadata();

  return (
    <Flex
      as="footer"
      flexDirection={["column", "row"]}
      justifyContent="space-evenly"
      alignItems="center"
    >
      {urls.map((link, index) => (
        <Link
          color={light ? "textLighter" : "textDark"}
          fontSize={1}
          key={index}
          href={link.url}
          mt={[index !== 0 ? 3 : 0, 0]}
          py={2}
          css={{ textDecoration: "none" }}
        >
          <Flex>
            <FooterIcon mr={2} label={link.label} />
            {link.label}
          </Flex>
        </Link>
      ))}
    </Flex>
  );
};

Footer.defaultProps = {
  light: false
};

export default Footer;
