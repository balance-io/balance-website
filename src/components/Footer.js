import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, responsive, transitions } from '../styles';

const SFooter = styled.footer`
  margin: 0 auto;
  padding: 12px 0;
  max-width: 1028px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 68px;
  & a {
    font-weight: 400;
    color: ${({ homepage }) =>
      homepage ? `rgba(${colors.dark}, 0.8)` : `rgba(${colors.green}, 0.8)`};
  }
  & a:hover {
    color: ${({ homepage }) =>
      homepage ? `rgb(${colors.green})` : `rgb(${colors.dark})`};
  }
`;

const SFooterList = styled.ul`float: left;`;

const SFooterLinks = styled.a`
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

const Footer = ({ pathname }) => (
  <SFooter homepage={pathname === '/'}>
    <SFooterList>
      <SFooterLinks href="">Press</SFooterLinks>
      <SFooterLinks href="./privacy">Privacy</SFooterLinks>
      <SFooterLinks href="./terms">Terms</SFooterLinks>
    </SFooterList>

    <SCopyright>
      © 2017<span> Balanced Software Inc.</span>
    </SCopyright>
  </SFooter>
);

Footer.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default Footer;
