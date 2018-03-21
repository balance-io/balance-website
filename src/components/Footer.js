import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import twitter from '../assets/twitter.svg';
import github from '../assets/github.svg';
import { colors, fonts, responsive, transitions } from '../styles';

const SFooterWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: ${({ theme }) =>
    theme.backgroundColor ? `rgb(${theme.backgroundColor})` : 'transparent'};
`;

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
    color: ${({ theme }) => `rgba(${theme.linkColor}, 0.6)`};
  }
`;

const SFooterList = styled.div`
  display: flex;
  @media screen and (${responsive.sm.max}) {
    & span {
      display: none;
    }
  }
`;

const SFooterLinks = styled.a`
  display: flex;
  align-items: center;
  padding: 10px;
  color: rgb(${colors.grey});
  transition: ${transitions.short};
  &:first-child {
    padding-left: 0;
  }
  &:active {
    transform: scale(0.95) translate3d(0, 0, 0);
  }
`;

const SIconLink = styled.div`
  width: 26px;
  height: 26px;
  background-color: ${({ color }) => `rgb(${color})`};
  mask-image: ${({ icon }) => `url(${icon}) center no-repeat`};
  -webkit-mask: ${({ icon }) => `url(${icon}) center no-repeat`};
  mask-size: 95%;
  margin-right: 10px;
`;

const SCopyright = styled.p`
  display: inline-block;
  float: right;
  padding: 10px 0;
  font-weight: 400;
  color: rgb(${colors.grey});
  transition: ${transitions.short};
  @media screen and (${responsive.sm.max}) {
    font-size: ${fonts.small};
  }
`;

const Footer = ({ theme, ...props }) => (
  <SFooterWrapper theme={theme} {...props}>
    <SFooter theme={theme}>
      <SFooterList>
        <SFooterLinks
          href="https://twitter.com/balance_io"
          rel="noreferrer noopener"
          target="_blank"
        >
          <SIconLink icon={twitter} color={colors.twitter} />
          <span>@balance_io</span>
        </SFooterLinks>
        <SFooterLinks
          href="https://github.com/balance-io"
          rel="noreferrer noopener"
          target="_blank"
        >
          <SIconLink icon={github} color={colors.lightGrey} />
          <span>balance-io</span>
        </SFooterLinks>
      </SFooterList>
      {/* eslint-disable-next-line */}
      <SCopyright>© Balanced Software, Inc.</SCopyright>
    </SFooter>
  </SFooterWrapper>
);

Footer.propTypes = {
  theme: PropTypes.object.isRequired
};

export default Footer;
