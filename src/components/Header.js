import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import navMenuButton from '../assets/nav-menu-button.svg';
import mobileNavClose from '../assets/mobile-nav-close.svg';
import balanceLogo from '../assets/balance-logo.svg';
import balanceLogoMobile from '../assets/balance-logo-mobile.svg';
import navAbout from '../assets/nav-about.svg';
import navTokens from '../assets/nav-tokens.svg';
import navBlog from '../assets/nav-blog.svg';
import navAboutMiddle from '../assets/nav-about-middle.svg';
import navTokensMiddle from '../assets/nav-tokens-middle.svg';
import navBlogMiddle from '../assets/nav-blog-middle.svg';
import navManager from '../assets/nav-manager.svg';
import { colors, responsive, transitions } from '../styles';

const SHeader = styled.div`
  width: 100%;
  z-index: 10;
  position: absolute;
`;

const STopSection = styled.div`
  width: 100%;
  max-width: 1028px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SLink = styled(Link)`
  display: flex;
`;

const SLogo = styled.div`
  position: absolute;
  top: 24px;
  left: 0;
  width: 80px;
  height: 16px;
  margin-left: 0;
  mask-image: url(${balanceLogo}) center no-repeat;
  -webkit-mask: url(${balanceLogo}) center no-repeat;
  transition: 0.2s ease;
  background-color: ${({ theme }) => `rgb(${theme.linkColor})`};
  &:hover {
    transition: 0.08s ease;
  }
  @media screen and (${responsive.sm.max}) {
    top: 23px;
    width: 84px;
    height: 17px;
    mask-image: url(${balanceLogoMobile}) center no-repeat;
    -webkit-mask: url(${balanceLogoMobile}) center no-repeat;
    background-color: ${({ theme }) => `rgb(${theme.mobileToggleColor})`};
  }
`;

const SNav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 6px 0;
  min-height: 66px;
`;

const SNavList = styled.ul`
  cursor: default;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding-left: 10px;
  & a {
    color: ${({ theme }) => `rgb(${theme.linkColor})`};
  }
  & a:before {
    background-color: ${({ theme }) => `rgb(${theme.linkColor})`};
  }
  & a:after {
    background-color: ${({ theme }) => `rgb(${theme.linkHover})`};
  }
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const SNavLinks = styled(Link)`
  position: relative;
  display: block;
  align-items: center;
  cursor: pointer;
  padding: 24px 25px;
  text-transform: uppercase;
  font-size: 0.9375em;
  font-weight: 500;
  letter-spacing: 0.8px;
  transition: ${transitions.short};
  & p {
    line-height: 0;
  }
  &:active {
    transform: scale(0.95) translate3d(0, 0, 0);
    transition: ${transitions.short};
  }
`;

const SNavLinksAbout = SNavLinks.extend`
  &:before {
    content: '';
    position: absolute;
    top: 17px;
    left: 2px;
    padding: 2.5px 2px 2px 2px;
    width: 14px;
    height: 12px;
    mask-image: url(${navAbout}) center no-repeat;
    -webkit-mask: url(${navAbout}) center no-repeat;

    @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
      padding: 2px;
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 17px;
    left: 2px;
    padding: 2.5px 2px 2px 2px;
    width: 14px;
    height: 12px;
    mask-image: url(${navAboutMiddle}) center no-repeat;
    -webkit-mask: url(${navAboutMiddle}) center no-repeat;
    transition: 0.12s ease-out;

    @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
      padding: 2px;
    }
  }

  &:hover:after {
    transform: scale(0);
  }
`;

const SNavLinksTokens = SNavLinks.extend`
  &:before {
    content: '';
    position: absolute;
    top: 17px;
    left: 3px;
    padding: 2px;
    width: 13px;
    height: 13px;
    mask-image: url(${navTokens}) center no-repeat;
    -webkit-mask: url(${navTokens}) center no-repeat;
  }

  &:after {
    content: '';
    position: absolute;
    top: 17px;
    left: 3px;
    padding: 2px;
    width: 13px;
    height: 13px;
    mask-image: url(${navTokensMiddle}) center no-repeat;
    -webkit-mask: url(${navTokensMiddle}) center no-repeat;
    transition: 0.12s ease-out;
  }

  &:hover:after {
    transform: scale(0);
  }
`;

const SNavLinksBlog = SNavLinks.extend`
  &:before {
    content: '';
    position: absolute;
    top: 18px;
    left: 3px;
    padding: 2px;
    width: 12px;
    height: 12px;
    mask-image: url(${navBlog}) center no-repeat;
    -webkit-mask: url(${navBlog}) center no-repeat;
  }

  &:after {
    content: '';
    position: absolute;
    top: 18px;
    left: 3px;
    padding: 2px;
    width: 12px;
    height: 12px;
    mask-image: url(${navBlogMiddle}) center no-repeat;
    -webkit-mask: url(${navBlogMiddle}) center no-repeat;
    transition: 0.12s ease-out;
  }

  &:hover:after {
    transform: scale(0);
  }
`;

const SExternalLink = SNavLinks.withComponent('a');

const SNavLinksManager = SExternalLink.extend`
  position: absolute;
  right: 0;
  padding-right: 23px;
  color: ${({ theme }) => `rgb(${theme.linkColor})`};

  &:after {
    content: '';
    position: absolute;
    top: 17px;
    right: 0px;
    padding: 2px;
    width: 13px;
    height: 13px;
    mask-image: url(${navManager}) center no-repeat;
    -webkit-mask: url(${navManager}) center no-repeat;
    background-color: ${({ theme }) => `rgb(${theme.linkColor})`};
    transition: 0.15s ease;
  }

  &:hover:after {
    transform: translateX(2.5px);
  }

  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

// const SExternalLink = SNavLinks.withComponent('a');

const SMobileNavToggle = styled.div`
  z-index: 200;
  position: absolute;
  display: none;
  top: 3px;
  right: -20px;
  padding: 28.5px 31px 28.5px 31px;
  width: 22px;
  height: 17px;
  cursor: pointer;
  mask-image: url(${navMenuButton}) center no-repeat;
  -webkit-mask: url(${navMenuButton}) center no-repeat;
  background-color: ${({ theme }) => `rgb(${colors.mobileToggleColor})`}
  cursor: pointer;
  transition: ${transitions.base};
  transform: scale(1);
  background: ${({ theme }) => `rgb(${theme.mobileToggleColor})`};
  opacity: ${({ reveal }) => (reveal ? '0' : '1')};
  transform: ${({ reveal }) =>
    reveal ? 'rotate3d(1,1,0,-20deg) scale(.8)' : 'rotate3d(0, 0, 0, 0) scale(1)'};
  pointer-events: ${({ reveal }) => (reveal ? 'none' : 'auto')};
  @media (hover: hover) {
    &:hover {
      opacity: 0.5;
      transition: ${transitions.short};
    }
  }
  @media screen and (${responsive.sm.max}) {
    display: block;
  }
`;

const SMobileNav = styled.div`
  display: none;
  @media screen and (${responsive.sm.max}) {
    display: block;
    z-index: 300;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 20px 20px;
    top: 0;
    right: -20px;
    width: 196px;
    height: 195px;
    border-radius: 12px;
    color: #798593;
    background: #f9f8f7;
    font-size: 0.9375em;
    font-weight: 500;
    overflow: hidden;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.08), 0 5px 15px 0 rgba(0, 0, 0, 0.06),
      0 15px 35px 0 rgba(0, 0, 0, 0.06), 0 50px 100px 0 rgba(0, 0, 0, 0.1);
    will-change: transform, opacity;
    transition-property: transform, opacity;
    opacity: ${({ reveal }) => (reveal ? '1' : ' 0')};
    pointer-events: ${({ reveal }) => (reveal ? 'auto' : ' none')};
    transform: ${({ reveal }) => (reveal ? 'rotate3d(0,0,0,0)' : ' rotate3d(1, 1, 0, -20deg)')};
    transform-origin: 100% 0;
    transition: ${transitions.base};
  }
`;

const SMobileNavLinks = styled(Link)`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  width: 100%;
  height: 65px;
  opacity: 0;
  cursor: pointer;
  color: ${({ selected, activeColor }) => (activeColor && selected ? `#011F3C` : `#798593`)};
  text-transform: uppercase;
  letter-spacing: 0.7px;
  transition: ${transitions.short};
  opacity: ${({ reveal }) => (reveal ? '1' : ' 0')};
  pointer-events: ${({ reveal }) => (reveal ? 'auto' : ' none')};
  transform: ${({ reveal }) => (reveal ? 'rotate3d(0,0,0,0)' : ' rotate3d(1, 1, 0, -20deg)')};

  & > span {
    margin-left: 44px;
  }

  &:before {
    background-color: ${({ selected, activeColor }) =>
      activeColor && selected ? `#011F3C !important` : `#798593 !important`};
  }

  &:after {
    opacity: ${({ selected, activeColor }) =>
      activeColor && selected ? `0 !important` : `1 !important`};
  }

  &:nth-child(even) {
    background: #f5f5f5;
  }
`;

const SMobileNavLinksAbout = SMobileNavLinks.extend`
  &:before {
    content: '';
    position: absolute;
    top: 23px;
    left: 19px;
    padding: 2.5px 2px 2px 2px;
    width: 14px;
    height: 12px;
    mask-image: url(${navAbout}) center no-repeat;
    -webkit-mask: url(${navAbout}) center no-repeat;
    background-color: #798593;

    @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
      padding: 2px;
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 23px;
    left: 19px;
    padding: 2.5px 2px 2px 2px;
    width: 14px;
    height: 12px;
    mask-image: url(${navAboutMiddle}) center no-repeat;
    -webkit-mask: url(${navAboutMiddle}) center no-repeat;
    background-color: #f9f8f7;
    transition: 0.12s ease-out;

    @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
      padding: 2px;
    }
  }

  &:hover:after {
    transform: scale(0);
  }
`;

const SMobileNavLinksTokens = SMobileNavLinks.extend`
  &:before {
    content: '';
    position: absolute;
    top: 23px;
    left: 20px;
    padding: 2px;
    width: 13px;
    height: 13px;
    mask-image: url(${navTokens}) center no-repeat;
    -webkit-mask: url(${navTokens}) center no-repeat;
    background-color: #798593;
  }

  &:after {
    content: '';
    position: absolute;
    top: 23px;
    left: 20px;
    padding: 2px;
    width: 13px;
    height: 13px;
    mask-image: url(${navTokensMiddle}) center no-repeat;
    -webkit-mask: url(${navTokensMiddle}) center no-repeat;
    background-color: #f5f5f5;
    transition: 0.12s ease-out;
  }

  &:hover:after {
    transform: scale(0);
  }
`;

const SMobileNavLinksBlog = SMobileNavLinks.extend`
  &:before {
    content: '';
    position: absolute;
    top: 23.5px;
    left: 20px;
    padding: 2px;
    width: 12px;
    height: 12px;
    mask-image: url(${navBlog}) center no-repeat;
    -webkit-mask: url(${navBlog}) center no-repeat;
    background-color: #798593;
  }

  &:after {
    content: '';
    position: absolute;
    top: 23.5px;
    left: 20px;
    padding: 2px;
    width: 12px;
    height: 12px;
    mask-image: url(${navBlogMiddle}) center no-repeat;
    -webkit-mask: url(${navBlogMiddle}) center no-repeat;
    background-color: #f9f8f7;
    transition: 0.12s ease-out;
  }

  &:hover:after {
    transform: scale(0);
  }
`;

const SMobileNavClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 73px;
  height: 73px;
  mask-image: url(${mobileNavClose}) no-repeat;
  -webkit-mask: url(${mobileNavClose}) no-repeat;
  mask-size: 14px 15px;
  -webkit-mask-size: 14px 15px;
  mask-position: 35px 24px;
  -webkit-mask-position: 35px 24px;
  background-color: #011f3c;
  transform-origin: top right;
  transition: ${transitions.base};
  transform: ${({ reveal }) => (reveal ? 'scale(1)' : 'scale(0.8)')};
  cursor: pointer;
`;

const SMobileNavDivider = styled.div`
  @media screen and (${responsive.sm.max}) {
    position: absolute;
    right: 0;
    bottom: 0;
    left: -2px;
    width: calc(100% + 4px);
    height: 2px;
    background: #ffffff;
    opacity: 0.02;
  }
`;

class Header extends Component {
  state = {
    navReveal: false
  };
  showNavReveal = () => {
    this.setState({ navReveal: true });
  };
  hideNavReveal = () => {
    this.setState({ navReveal: false });
  };
  render = () => {
    const { theme, ...props } = this.props;
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
    return (
      <SHeader {...props}>
        <STopSection>
          <SNav>
            <SLink
              onClick={() => ga('send', 'event', 'Homepage', 'click', 'Header - click Homepage')}
              to="/"
            >
              <SLogo theme={theme} />
            </SLink>
            <SNavList theme={theme}>
              <SNavLinksAbout
                onClick={() => ga('send', 'event', 'About', 'click', 'Header - click About')}
                to="/about"
              >
                <p>About</p>
              </SNavLinksAbout>
              <SNavLinksTokens
                onClick={() => ga('send', 'event', 'Tokens', 'click', 'Header - click Tokens')}
                to="/erc20-tokens"
              >
                <p>Tokens</p>
              </SNavLinksTokens>
              <SNavLinksBlog
                onClick={() => ga('send', 'event', 'Blog', 'click', 'Header - click Blog')}
                to="/blog"
              >
                <p>Blog</p>
              </SNavLinksBlog>
            </SNavList>
            <SNavLinksManager
              theme={theme}
              onClick={() => ga('send', 'event', 'Blog', 'click', 'Header - click Blog')}
              target="_blank"
              rel="noreferrer noopener"
              href="https://manager.balance.io/metamask"
            >
              <p>Try Manager</p>
            </SNavLinksManager>

            <SMobileNavToggle
              reveal={this.state.navReveal}
              onClick={this.showNavReveal}
              theme={theme}
            />
            <SMobileNav reveal={this.state.navReveal}>
              <SMobileNavLinksAbout
                activeColor={theme.mobileActiveColor}
                selected={pathname.match(/\/about\/?/g)}
                reveal={this.state.navReveal}
                onClick={this.hideNavReveal}
                to="/about"
              >
                <span>About</span>
              </SMobileNavLinksAbout>
              <SMobileNavLinksTokens
                activeColor={theme.mobileActiveColor}
                selected={pathname.match(/\/erc20-tokens\/?/g)}
                reveal={this.state.navReveal}
                onClick={this.hideNavReveal}
                to="/erc20-tokens"
              >
                <span>Tokens</span>
              </SMobileNavLinksTokens>
              <SMobileNavLinksBlog
                activeColor={theme.mobileActiveColor}
                selected={pathname.match(/\/blog\/?/g)}
                reveal={this.state.navReveal}
                onClick={this.hideNavReveal}
                to="/blog"
              >
                <span>Blog</span>
              </SMobileNavLinksBlog>
              <SMobileNavClose reveal={this.state.navReveal} onClick={this.hideNavReveal} />
            </SMobileNav>
            <SMobileNavDivider />
          </SNav>
        </STopSection>
      </SHeader>
    );
  };
}

Header.propTypes = {
  theme: PropTypes.object.isRequired
};

export default Header;
