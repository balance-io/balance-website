import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import mobileLogo from '../assets/mobile-logo.svg';
import mobileNavToggle from '../assets/mobile-nav-toggle.svg';
import mobileNavClose from '../assets/mobile-nav-close.svg';
import balanceTokenIcon from '../assets/balance-token-icon.svg';
import rhombus from '../assets/rhombus.svg';
import square from '../assets/square.svg';
import circle from '../assets/circle.svg';
import { colors, responsive, transitions } from '../styles';

const SHeader = styled.div`
  width: 100%;
  z-index: 10;
  position: absolute;
  overflow: hidden;
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

const SAppIcon = styled.div`
  width: 22px;
  height: 22px;
  display: ${({ hide }) => (hide ? 'none' : 'block')};
  background: url(${balanceTokenIcon}) no-repeat;
  background-size: 100% 100%;
`;

const SLogo = styled.div`
  width: 95px;
  height: 22px;
  margin-left: 10px;
  mask-image: url(${mobileLogo}) center no-repeat;
  -webkit-mask: url(${mobileLogo}) center no-repeat;
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
  cursor: default;
  display: flex;
  align-items: center;
  & a {
    color: ${({ theme }) => `rgb(${theme.linkColor})`};
  }
  & a:hover {
    color: ${({ theme }) => `rgb(${theme.linkHover})`};
  }
  & a:hover > div {
    background-color: ${({ theme }) => `rgb(${theme.linkHover})`};
  }
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const SNavLinks = styled(Link)`
  display: flex;
  align-items: center;
  color: rgb(${colors.dark});
  cursor: pointer;
  padding: 10px;
  text-transform: uppercase;
  font-size: 0.85em;
  font-weight: 500;
  transition: ${transitions.short};
  & p {
    line-height: 0;
  }
  &:active {
    transform: scale(0.95) translate3d(0, 0, 0);
    transition: ${transitions.short};
  }
  &:hover {
    color: rgb(${colors.dark});
  }
`;

const SIconLink = styled.div`
  transition: ${transitions.short};
  width: 16px;
  height: 16px;
  margin-right: 8px;
  background-color: ${({ color }) => `rgb(${color})`};
  mask-image: ${({ icon }) => `url(${icon}) center no-repeat`};
  -webkit-mask: ${({ icon }) => `url(${icon}) center no-repeat`};
  mask-size: 95%;
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

// const SExternalLink = SNavLinks.withComponent('a');

const SMobileNavToggle = styled.div`
  z-index: 200;
  position: absolute;
  display: none;
  top: 17px;
  right: 21px;
  width: 38px;
  height: 38px;
  cursor: pointer;
  mask-image: url(${mobileNavToggle}) center no-repeat;
  -webkit-mask: url(${mobileNavToggle}) center no-repeat;
  background-color: rgb(${colors.lightGrey});
  cursor: pointer;
  transition: ${transitions.base};
  transform: scale(1);
  background: ${({ theme }) => `rgb(${theme.mobileToggleColor})`};
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
  color: rgb(${colors.dark});
  background: rgb(${colors.white});
  font-size: 1.125em;
  font-weight: 500;
  overflow: hidden;
  box-shadow: 0 50px 100px rgba(${colors.purple}, 0.1), 0 15px 35px rgba(${colors.purple}, 0.15),
    0 5px 15px rgba(${colors.black}, 0.1), 0 0 1px rgba(${colors.purple}, 0.12);

  will-change: transform, opacity;
  transition-property: transform, opacity;
  opacity: ${({ reveal }) => (reveal ? '1' : ' 0')};
  pointer-events: ${({ reveal }) => (reveal ? 'auto' : ' none')};
  transform: ${({ reveal }) => (reveal ? 'rotate3d(0,0,0,0)' : ' rotate3d(1, 1, 0, -20deg)')};
  transform-origin: 100% 0;
  transition: ${transitions.base};
`;

const SMobileNavIcons = styled.div`
  height: 20px;
  width: 20px;
  margin-left: 12px;
  mask-image: ${({ icon }) => icon && `url(${icon})`} no-repeat;
  -webkit-mask: ${({ icon }) => icon && `url(${icon})`} no-repeat;
  mask-size: contain;
  mask-position: center;
`;

const SMobileNavLinks = styled(Link)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  opacity: 0;
  cursor: pointer;
  color: rgb(${colors.dark});
  color: ${({ selected, activeColor }) =>
    activeColor && selected ? `rgb(${activeColor})` : `rgb(${colors.dark})`};

  transition: ${transitions.short};
  opacity: ${({ reveal }) => (reveal ? '1' : ' 0')};
  pointer-events: ${({ reveal }) => (reveal ? 'auto' : ' none')};
  transform: ${({ reveal }) => (reveal ? 'rotate3d(0,0,0,0)' : ' rotate3d(1, 1, 0, -20deg)')};

  & > span {
    margin-left: 20px;
  }

  & > div {
    background-color: ${({ selected, activeColor }) =>
      activeColor && selected ? `rgb(${activeColor})` : `rgb(${colors.dark})`};
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
  mask-size: 16px 16px;
  -webkit-mask-size: 16px 16px;
  mask-position: 25px 28px;
  -webkit-mask-position: 25px 28px;
  background-color: rgb(${colors.dark});
  transition: ${transitions.base};
  transform: ${({ reveal }) => (reveal ? 'rotate(0)' : 'rotate(-20deg)')};
  cursor: pointer;
  &:active {
    transform: scale(0.95);
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
              <SAppIcon hide={theme.hideIcon || false} />
              <SLogo theme={theme} />
            </SLink>
            <SNavList theme={theme}>
              <SNavLinks
                onClick={() => ga('send', 'event', 'Tokens', 'click', 'Header - click Tokens')}
                to="/erc20-tokens"
              >
                <SIconLink icon={rhombus} color={theme.linkColor} alt="tokens logo" />
                <p>Tokens</p>
              </SNavLinks>
              <SNavLinks
                onClick={() => ga('send', 'event', 'About', 'click', 'Header - click About')}
                to="/about"
              >
                <SIconLink icon={circle} color={theme.linkColor} alt="about logo" />
                <p>About</p>
              </SNavLinks>
              <SNavLinks
                onClick={() => ga('send', 'event', 'Blog', 'click', 'Header - click Blog')}
                to="/blog"
              >
                <SIconLink icon={square} color={theme.linkColor} alt="blog logo" />
                <p>Blog</p>
              </SNavLinks>
            </SNavList>

            <SMobileNavToggle
              reveal={this.state.navReveal}
              onClick={this.showNavReveal}
              theme={theme}
            />
            <SMobileNav reveal={this.state.navReveal}>
              <SMobileNavLinks
                activeColor={theme.mobileActiveColor}
                selected={pathname.match(/\/erc20-tokens\/?/g)}
                reveal={this.state.navReveal}
                onClick={this.hideNavReveal}
                to="/erc20-tokens"
              >
                <SMobileNavIcons icon={rhombus} />
                <span>Tokens</span>
              </SMobileNavLinks>
              <SMobileNavLinks
                activeColor={theme.mobileActiveColor}
                selected={pathname.match(/\/about\/?/g)}
                reveal={this.state.navReveal}
                onClick={this.hideNavReveal}
                to="/about"
              >
                <SMobileNavIcons icon={circle} />
                <span>About</span>
              </SMobileNavLinks>
              <SMobileNavLinks
                activeColor={theme.mobileActiveColor}
                selected={pathname.match(/\/blog\/?/g)}
                reveal={this.state.navReveal}
                onClick={this.hideNavReveal}
                to="/blog"
              >
                <SMobileNavIcons icon={square} />
                <span>Blog</span>
              </SMobileNavLinks>
              <SMobileNavClose reveal={this.state.navReveal} onClick={this.hideNavReveal} />
            </SMobileNav>
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
