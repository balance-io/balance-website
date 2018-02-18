import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import twitter from '../assets/twitter.svg';
import github from '../assets/github.svg';
import { colors, responsive, transitions } from '../styles';

const SFooterWrapper = styled.div`
  width: 100%;
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
    color: ${({ theme }) => `rgba(${theme.linkColor}, 0.8)`};
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
  transition: ${transitions.short};
  &:first-child {
    padding-left: 0;
  }
  &:active {
    transform: scale(0.95) translate3d(0, 0, 0);
  }
`;

const SLogoTwitter = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  background-color: rgb(${colors.twitter});
  mask-image: url(${twitter}) center no-repeat;
  -webkit-mask: url(${twitter}) center no-repeat;
  mask-size: 100%;
`;

const SLogoGithub = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  background-color: rgb(${colors.lighterGrey});
  mask-image: url(${github}) center no-repeat;
  -webkit-mask: url(${github}) center no-repeat;
  mask-size: 100%;
`;

const SCopyright = styled.p`
  display: inline-block;
  float: right;
  padding: 10px 0;
  font-weight: 400;
  color: rgb(${colors.grey});
  transition: ${transitions.short};
`;

const Footer = ({ theme, ...props }) => (
  <SFooterWrapper theme={theme}>
    <SFooter theme={theme} {...props}>
      <SFooterList>
        <SFooterLinks
          href="https://twitter.com/balancemymoney"
          rel="noreferrer noopener"
          target="_blank"
        >
          <SLogoTwitter />
          <span>@balancemymoney</span>
        </SFooterLinks>
        <SFooterLinks
          href="https://github.com/balancemymoney"
          rel="noreferrer noopener"
          target="_blank"
        >
          <SLogoGithub />
          <span>@balancemymoney</span>
        </SFooterLinks>
      </SFooterList>

      <SCopyright>
        <span>@ Balanced Software Inc.</span>
      </SCopyright>
    </SFooter>
  </SFooterWrapper>
);

Footer.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Footer;
