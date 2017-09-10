import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import triangles from '../assets/images/blog-directory-triangles.svg';
import mobileLogo from '../assets/images/mobile-logo.svg';
import mobileNavToggle from '../assets/images/mobile-nav-toggle.svg';
import mobileNavBlog from '../assets/images/mobile-nav-blog.svg';
import mobileNavAbout from '../assets/images/mobile-nav-about.svg';
import mobileNavSupport from '../assets/images/mobile-nav-support.svg';
import mobileNavClose from '../assets/images/mobile-nav-close.svg';
import { colors, responsive, transitions } from '../styles';

const SHeader = styled.div`
  & a {
    color: ${({ homepage }) =>
      homepage ? `rgb(${colors.dark})` : `rgb(${colors.green})`};
  }
  & a:hover {
    color: ${({ homepage }) =>
      homepage ? `rgb(${colors.green})` : `rgb(${colors.dark})`};
  }
`;

const STriangles = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 132px;
  height: 144px;
  z-index: -1;
  @media screen and (${responsive.sm.max}) {
    background: url(${triangles}) no-repeat;
  }
`;

const STopSection = styled.div`width: 100%;`;

const SLogo = styled.div`
  width: 90px;
  height: 23px;
  mask-image: url(${mobileLogo}) center no-repeat;
  -webkit-mask: url(${mobileLogo}) center no-repeat;
  mask-size: 90%;
  -webkit-mask-size: 90%;
  transition: ${transitions.short};
  background-color: #f1f0fa;
  background-color: ${({ homepage }) =>
    homepage ? `rgb(${colors.dark})` : `rgb(${colors.green})`};
  &:hover {
    background-color: ${({ homepage }) =>
      homepage ? `rgba(${colors.green}, 0.8)` : `rgba(${colors.dark}, 0.8)`};
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

const SNavLinks = styled.a`
  display: inline-block;
  color: rgb(${colors.green});
  padding: 10px 14px;
  font-weight: 400;
  font-size: 1.1875em;
  transition: ${transitions.short};
  &:last-child {
    padding-right: 0;
  }
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
  mask-image: url(${mobileNavToggle}) center no-repeat;
  -webkit-mask: url(${mobileNavToggle}) center no-repeat;
  background-color: rgb(${colors.lightGrey});
  cursor: pointer;
  transition: ${transitions.base};
  transform: scale(1);
  background: rgba(${colors.black}, 0.8);
  opacity: ${({ reveal }) => (reveal ? '0' : '1')};
  transform: ${({ reveal }) =>
    reveal
      ? 'rotate3d(1,1,0,-20deg) scale(.9) rotate(20deg)'
      : 'rotate3d(0, 0, 0, 0) scale(1) rotate(0)'};
  pointer-events: ${({ reveal }) => (reveal ? 'none' : 'auto')};
  &:hover {
    background: rgba(0, 0, 0, 1);
    opacity: 0.5;
    transition: ${transitions.short};
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
  box-shadow: 0 50px 100px rgba(${colors.purple}, 0.1),
    0 15px 35px rgba(${colors.purple}, 0.15),
    0 5px 15px rgba(${colors.black}, 0.1), 0 0 1px rgba(${colors.purple}, 0.12);
  font-size: 1.125em;
  font-weight: 500;
  color: rgb(${colors.dark});
  will-change: transform, opacity;
  transition-property: transform, opacity;
  opacity: ${({ reveal }) => (reveal ? '1' : ' 0')};
  pointer-events: ${({ reveal }) => (reveal ? 'auto' : ' none')};
  transform: ${({ reveal }) =>
    reveal ? 'rotate3d(0,0,0,0)' : ' rotate3d(1, 1, 0, -20deg)'};
  transform-origin: 100% 0;
  transition: ${transitions.base};
`;

const SMobileNavLinks = styled.a`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  opacity: 0;
  color: ${({ selected }) =>
    selected ? `rgb(${colors.green})` : `rgb(${colors.dark})`};
  transition: ${transitions.short};
  opacity: ${({ reveal }) => (reveal ? '1' : ' 0')};
  pointer-events: ${({ reveal }) => (reveal ? 'auto' : ' none')};
  transform: ${({ reveal }) =>
    reveal ? 'rotate3d(0,0,0,0)' : ' rotate3d(1, 1, 0, -20deg)'};
  & > span {
    margin-left: 20px;
  }
  & > div {
    margin-left: 20px;
    background-color: ${({ selected }) =>
      selected ? `rgb(${colors.green})` : `rgb(${colors.dark})`};
  }
  &:active {
    background: rgba(${colors.grey}, 0.16);
  }
`;

const SMobileNavIcons = styled.div`
  height: 16px;
  width: 16px;
  margin-left: 20px;
  mask-image: ${({ icon }) => icon && `url(${icon})`} no-repeat;
  -webkit-mask: ${({ icon }) => icon && `url(${icon})`} no-repeat;
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
  toggleNavReveal = () => {
    this.setState({ navReveal: !this.state.navReveal });
  };
  render = () => (
    <SHeader homepage={this.props.pathname === '/'}>
      <STriangles />
      <STopSection>
        <SNav>
          <Link to="/">
            <SLogo homepage={this.props.pathname === '/'} />
          </Link>
          <SNavList>
            <SNavLinks href="">Blog</SNavLinks>
            <SNavLinks href="/about">About</SNavLinks>
            <SNavLinks href="/support">Support</SNavLinks>
          </SNavList>

          <SNavLinks href="">Download</SNavLinks>
        </SNav>

        <SMobileNavToggle
          reveal={this.state.navReveal}
          onClick={this.toggleNavReveal}
        />
        <SMobileNav reveal={this.state.navReveal}>
          <SMobileNavLinks selected reveal={this.state.navReveal} href="">
            <SMobileNavIcons icon={mobileNavBlog} />
            <span>Blog</span>
          </SMobileNavLinks>
          <SMobileNavLinks reveal={this.state.navReveal} href="/about">
            <SMobileNavIcons icon={mobileNavAbout} />
            <span>About</span>
          </SMobileNavLinks>
          <SMobileNavLinks reveal={this.state.navReveal} href="/support">
            <SMobileNavIcons icon={mobileNavSupport} />
            <span>Support</span>
          </SMobileNavLinks>
          <SMobileNavClose
            reveal={this.state.navReveal}
            onClick={this.toggleNavReveal}
          />
        </SMobileNav>
      </STopSection>
    </SHeader>
  );
}

Header.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default Header;
