import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import dayjs from "dayjs";

import { colors, responsive } from "../styles";

const P = styled.p`
  font-size: 1em;
  font-weight: 400;
  line-height: 1.56;
  opacity: 0.9;
  color: rgb(${colors.softGrey});

  @media screen and (${responsive.sm.max}) {
    font-size: 4vw;
    color: rgb(${colors.lightGrey});
  }
`;

const Date = P.extend`
  margin-bottom: 16px;
`;

const Outlet = P.extend`
  margin-top: 16px;
  padding-bottom: 24px;
`;

const Link = styled.a`
  pointer-events: auto;
`;

const Headline = styled.h4`
  color: rgb(${colors.white});
  font-size: 1.25em;
  font-weight: 600;
  line-height: 1.29;
  @media screen and (${responsive.sm.max}) {
    font-size: 6vw;
  }
  max-width: 585px;
`;

const Article = styled.article`
  pointer-events: none;
  position: relative;
  margin-bottom: 32px;

  &::after {
    transition-property: background-color;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    position: absolute;
    bottom: 0;

    content: "";
    height: 2px;
    background-color: rgba(${colors.lightGrey}, 0.1);
    width: 240px;
  }

  &:hover::after {
    background-color: rgba(${colors.lightGrey}, 1);
  }
`;

const PressArticle = ({ date, outlet, link, headline }) => (
  <Article>
    <Date>{dayjs(date).format("MMMM DD, YYYY")}</Date>
    <Link target="_blank" rel="noopener" href={link}>
      <Headline>{headline}</Headline>
    </Link>
    <Outlet>{outlet.name}</Outlet>
  </Article>
);

PressArticle.propTypes = {
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  outlet: PropTypes.object.isRequired,
  headline: PropTypes.string.isRequired
};

export default PressArticle;
