import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import twitter from '../assets/twitter.svg';
import github from '../assets/github.svg';
import { colors, responsive, transitions } from '../styles';

const SFooterWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const SFooter = styled.footer`
  border-top: ${({ theme }) => `2px solid rgba(${theme.footerDivider}, ${theme.footerDividerOpacity || 1})`};
  width: 100%;
  max-width: 1028px;
  margin: 0 auto;
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 93px;
  & a {
    font-weight: 400;
    color: ${({ theme }) => `rgba(${theme.footerLinkColor}, 0.8)`};
  }
`;

const SFooterList = styled.div`
  display: flex;
  @media screen and (${responsive.sm.max}) {
    padding-left: 12px;
    & span {
      display: none;
    }
  }
`;

const SFooterLink = styled.a`
  display: flex;
  float: right;
  align-items: center;
  padding: 3px 8px;
  transition: ${transitions.short};
  &:first-child {
    padding-left: 0;
  }
  &:active {
    transform: scale(0.95) translate3d(0, 0, 0);
  }
`;

const SGatsbyLink = styled(Link)`
  display: flex;
  float: right;
  align-items: center;
  padding: 4px;
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
  mask-size: 100%;
  margin-left: 10px;
`;

const SIconLinkGithub = SIconLink.extend`
  margin-top: -3px;
  width: 26px;
  height: 25px;
`;

const SIconLinkTwitter = SIconLink.extend`
  margin-top: -2.5px;
  width: 28px;
  height: 24px;
  @media screen and (${responsive.lg.max}) {
    margin-right: 20px;
  }
`;

const SCopyright = styled.p`
  display: inline-block;
  padding: 12px 0 12px 0;
  font-size: 1.0625em;
  font-weight: 500;
  color: ${({ theme }) => `rgb(${theme.footerLinkColor})`};
  opacity: 0.4;
  transition: ${transitions.short};
  @media screen and (${responsive.lg.max}) {
    padding: 12px 0 12px 20px;
  }
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const Footer = ({ theme, ...props }) => (
  <SFooterWrapper theme={theme} {...props}>
    <SFooter theme={theme}>
      <SCopyright theme={theme}>© Balance</SCopyright>
      <SFooterList>
        <SFooterLink href="https://spectrum.chat/balance" rel="noreferrer noopener" target="_blank">
          Community
        </SFooterLink>
        <SGatsbyLink to="/meetups">Meetups</SGatsbyLink>
        <SFooterLink href="https://github.com/balance-io" rel="noreferrer noopener" target="_blank">
          <SIconLinkGithub icon={github} color={colors.github} />
        </SFooterLink>
        <SFooterLink
          href="https://twitter.com/balance_io"
          rel="noreferrer noopener"
          target="_blank"
        >
          <SIconLinkTwitter icon={twitter} color={colors.twitter} />
        </SFooterLink>
      </SFooterList>
    </SFooter>
  </SFooterWrapper>
);

Footer.propTypes = {
  theme: PropTypes.object.isRequired
};

export default Footer;
