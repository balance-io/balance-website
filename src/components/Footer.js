import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { colors, responsive, transitions } from '../styles';

const SFooter = styled.footer`
  width: 100%;
  max-width: 1028px;
  margin: 0 auto;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 68px;
  & a {
    font-weight: 400;
    color: ${({ theme }) => `rgba(${theme.linkColor}, 0.8)`};
  }
  & a:hover {
    color: ${({ theme }) => `rgb(${theme.linkHover})`};
  }
`;

const SFooterList = styled.ul`
  float: left;
`;

const SFooterLinks = styled(Link)`
  display: inline-block;
  padding: 10px;
  transition: ${transitions.short};
  &:first-child {
    padding-left: 0;
  }
  &:active {
    transform: scale(0.95) translate3d(0, 0, 0);
  }
`;

const SCopyright = styled.p`
  display: inline-block;
  float: right;
  padding: 10px 0;
  font-weight: 400;
  color: rgb(${colors.grey});
  transition: ${transitions.short};
  @media screen and (${responsive.sm.max}) {
    & span {
      display: none;
    }
  }
`;

const Footer = ({ theme, ...props }) => (
  <SFooter theme={theme} {...props}>
    <SFooterList>
      <SFooterLinks to="/press">Press</SFooterLinks>
      <SFooterLinks to="/privacy">Privacy</SFooterLinks>
      <SFooterLinks to="/terms">Terms</SFooterLinks>
    </SFooterList>

    <SCopyright // eslint-disable-line
    >
      © 2018<span> Balanced Software Inc.</span>
    </SCopyright>
  </SFooter>
);

Footer.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Footer;
