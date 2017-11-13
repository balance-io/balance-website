import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import mobileLogo from '../assets/mobile-logo.svg';
import mobileNavToggle from '../assets/mobile-nav-toggle.svg';
import mobileNavBlog from '../assets/mobile-nav-blog.svg';
import mobileNavAbout from '../assets/mobile-nav-about.svg';
import mobileNavSupport from '../assets/mobile-nav-support.svg';
import mobileNavClose from '../assets/mobile-nav-close.svg';
import { colors, responsive, transitions } from '../styles';

const SHeader = styled.div`
  width: 100%;
  z-index: 10;
  left: 0;
  top: 0;
  position: absolute;
  & nav a {
    color: ${({ theme }) => `rgb(${theme.linkColor})`};
  }
  & nav a:hover {
    color: ${({ theme }) => `rgb(${theme.linkHover})`};
  }
`;

const STopSection = styled.div`
  width: 100%;
  max-width: 1028px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SLogo = styled.div`
  width: 95px;
  height: 22px;
  mask: url(${mobileLogo}) center no-repeat;
  mask-size: 90%;
  transition: ${transitions.short};
  background-color: ${({ theme }) => `rgb(${theme.logoColor})`};
  &:hover {
    background-color: ${({ theme }) => `rgba(${theme.logoHover}, 0.8)`};
  }
  @media screen and (${responsive.sm.max}) {
    mask-size: 95%;
  }
`;

const SNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 12px 0;
  min-height: 68px;
`;

const SNavList = styled.ul`
  margin: 0 auto;
  position: absolute;
  width: fit-content;
  left: 0;
  right: 0;
  cursor: default;
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const SNavLink = styled(Link)`
  display: inline-block;
  color: rgb(${colors.green});
  cursor: pointer;
  padding: 10px 16px;
  font-size: 1.1875em;
  font-weight: ${({ active }) => (active ? '600' : '400')};
  transition: ${transitions.short};
  &:active {
    transform: scale(0.95) translate3d(0, 0, 0);
    transition: ${transitions.short};
  }
  &:hover {
    color: rgb(${colors.dark});
  }

  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const SMobileNavToggle = styled.div`
  z-index: 200;
  position: absolute;
  display: none;
  top: 17px;
  right: 21px;
  width: 38px;
  height: 38px;
  cursor: pointer;
  mask: url(${mobileNavToggle}) center no-repeat;
  background-color: rgb(${colors.lightGrey});
  cursor: pointer;
  transition: ${transitions.base};
  transform: scale(1);
  background: ${({ theme }) => `rgba(${theme.mobileToggleColor}, ${theme.mobileToggleOpacity})`};
  opacity: ${({ reveal }) => (reveal ? '0' : '1')};
  transform: ${({ reveal }) =>
    reveal
      ? 'rotate3d(1,1,0,-20deg) scale(.9) rotate(20deg)'
      : 'rotate3d(0, 0, 0, 0) scale(1) rotate(0)'};
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
  z-index: 300;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 20px 20px;
  padding: 20px;
  top: 0;
  right: 0;
  width: 220px;
  height: 220px;
  border-radius: 0 0 0 10px;
  background: rgb(${colors.white});
  overflow: hidden;
  box-shadow: 0 50px 100px rgba(${colors.purple}, 0.1), 0 15px 35px rgba(${colors.purple}, 0.15),
    0 5px 15px rgba(${colors.black}, 0.1), 0 0 1px rgba(${colors.purple}, 0.12);
  font-size: 1.125em;
  font-weight: 500;
  color: rgb(${colors.dark});
  will-change: transform, opacity;
  transition-property: transform, opacity;
  opacity: ${({ reveal }) => (reveal ? '1' : ' 0')};
  pointer-events: ${({ reveal }) => (reveal ? 'auto' : ' none')};
  transform: ${({ reveal }) => (reveal ? 'rotate3d(0,0,0,0)' : ' rotate3d(1, 1, 0, -20deg)')};
  transform-origin: 100% 0;
  transition: ${transitions.base};
`;

const SMobileNavLink = styled(Link)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  opacity: 0;
  cursor: pointer;
  color: ${({ active }) => (active ? `rgb(${colors.green})` : `rgb(${colors.dark})`)};
  transition: ${transitions.short};
  opacity: ${({ reveal }) => (reveal ? '1' : ' 0')};
  pointer-events: ${({ reveal }) => (reveal ? 'auto' : ' none')};
  transform: ${({ reveal }) => (reveal ? 'rotate3d(0,0,0,0)' : ' rotate3d(1, 1, 0, -20deg)')};
  & > span {
    margin-left: 20px;
  }
  & > div {
    background-color: ${({ active }) => (active ? `rgb(${colors.green})` : `rgb(${colors.dark})`)};
  }
  &:active {
    background: rgba(${colors.lightBlue}, 0.16);
  }
`;

const SMobileNavIcons = styled.div`
  height: 16px;
  width: 16px;
  margin-left: 10px;
  mask: ${({ icon }) => icon && `url(${icon})`} no-repeat;
`;

const SMobileNavClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 73px;
  height: 73px;
  mask: url(${mobileNavClose}) no-repeat;
  mask-size: 16px 16px;
  mask-position: 25px 28px;
  background-color: rgb(${colors.dark});
  transition: ${transitions.base};
  transform: ${({ reveal }) => (reveal ? 'rotate(0)' : 'rotate(-20deg)')};
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
`;

const SExternalLink = SNavLink.withComponent('a');

const navigationLinks = [
  {
    name: 'Personal',
    slug: '',
    icon: null
  },
  {
    name: 'Enterprise',
    slug: 'enterprise',
    icon: null
  },
  {
    name: 'Blog',
    slug: 'blog',
    icon: mobileNavBlog
  },
  {
    name: 'About',
    slug: 'about',
    icon: mobileNavAbout
  },
  {
    name: 'Support',
    slug: 'support',
    icon: mobileNavSupport
  }
];

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
  isActive = link => {
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
    return link.slug === 'blog' ? pathname.match(/\/blog\/?/g) : pathname === `/${link.slug}`;
  };
  render = () => {
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
    const { theme, ...props } = this.props;
    return (
      <SHeader theme={theme} {...props}>
        <STopSection>
          <SNav>
            <Link onClick={this.hideNavReveal} to="/">
              <SLogo theme={theme} />
            </Link>
            <SNavList>
              {navigationLinks.map(link => (
                <SNavLink
                  active={this.isActive(link)}
                  onClick={this.hideNavReveal}
                  to={`/${link.slug}`}
                >
                  {link.name}
                </SNavLink>
              ))}
            </SNavList>
            {pathname !== '/enterprise' && (
              <SExternalLink
                href="https://github.com/balancemymoney/balance-open/releases/"
                rel="noreferrer noopener"
                target="_blank"
              >
                Download
              </SExternalLink>
            )}
          </SNav>

          <SMobileNavToggle
            reveal={this.state.navReveal}
            onClick={this.showNavReveal}
            theme={theme}
          />
          <SMobileNav reveal={this.state.navReveal}>
            {navigationLinks.map(link => (
              <SMobileNavLink
                active={this.isActive(link)}
                reveal={this.state.navReveal}
                onClick={this.hideNavReveal}
                to={`/${link.slug}`}
              >
                <SMobileNavIcons icon={link.icon} />
                <span>{link.name}</span>
              </SMobileNavLink>
            ))}
            <SMobileNavClose reveal={this.state.navReveal} onClick={this.hideNavReveal} />
          </SMobileNav>
        </STopSection>
      </SHeader>
    );
  };
}

Header.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string)
};

Header.defaultProps = {
  theme: {
    linkColor: colors.lightBlue,
    linkHover: colors.lightBlue,
    mobileToggleColor: colors.lightGrey,
    mobileToggleOpacity: '1',
    logoColor: colors.lightBlue,
    logoHover: colors.lightBlue
  }
};

export default Header;
