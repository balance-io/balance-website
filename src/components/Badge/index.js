import React from "react";
import { Card, Box, Text } from "rebass";
import { Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

const Badge = props => (
  <Card
    color="freeSpeachGreen"
    bg="snowyMint"
    {...props}
    px={2}
    py={1}
    fontSize={1}
    fontFamily="graphik"
    borderRadius={9999}
    css={{
      display: "inline-block"
    }}
  />
);

const AnnouncementLink = styled(Link)`
  text-decoration: none;
  
  display: inline-flex;
  align-items: center;
  width: calc(100% + 20px * 2);
  padding: 10px 20px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  margin: 0 -20px;
  color: #fff;
  background-color: rgba(134, 139, 150, 0.08);

  @media (min-width: 670px) {
    line-height: 26px;
    margin: 0;
    padding: 0 5px;
    border-radius: 99999px;
    width: auto;
  }
`;

const Pill = styled(Text).attrs({
  as: "span",
  color: "white",
  bg: "deepSkyBlue",
  fontSize: 12,
  px: "6px",
  lineHeight: "16px",
  fontWeight: 600
})`
  text-transform: uppercase;
  border-radius: 99999px;
`;

const Message = styled(Box).attrs({
  as: "span",
  color: "text",
  flex: 1,
  mx: "12px"
})`
  @media (min-width: 670px) {
    margin: 0 7px 0 6px;
  }
`;

const Announcement = ({ message, pill, to }) => (
  <AnnouncementLink to={to}>
    <Pill>{pill}</Pill>
    <Message>{message}</Message>
  </AnnouncementLink>
);

Announcement.defaultProps = {
  pill: "news"
};

Announcement.propTypes = {
  message: PropTypes.string.isRequired,
  pill: PropTypes.string,
  to: PropTypes.string.isRequired
};

export { Announcement };

export default Badge;
