import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import homeTriangles from '../assets/images/triangles-mobile.svg';
import blogTriangles from '../assets/images/blog-directory-triangles.svg';
import mobileLogo from '../assets/images/mobile-logo.svg';
import mobileNavToggle from '../assets/images/mobile-nav-toggle.svg';
import mobileNavBlog from '../assets/images/mobile-nav-blog.svg';
import mobileNavAbout from '../assets/images/mobile-nav-about.svg';
import mobileNavSupport from '../assets/images/mobile-nav-support.svg';
import mobileNavClose from '../assets/images/mobile-nav-close.svg';
import { colors, responsive, transitions } from '../styles';

const SHeader = styled.div`
  width: 100%;
  position: absolute;
  & nav a {
    font-weight: ${({ layout }) => (layout === 'page' ? '500' : '400')};
    color: ${({ layout }) => {
      if (layout === 'blog') {
        return `rgb(${colors.dark})`;
      } else if (layout === 'post') {
        return `rgb(${colors.green})`;
      } else {
        return `rgb(${colors.lightBlue})`;
      }
    }};
  }
  & nav a:hover {
    color: ${({ layout }) => {
      if (layout === 'blog') {
        return `rgb(${colors.green})`;
      } else if (layout === 'post') {
        return `rgb(${colors.dark})`;
      } else {
        return `rgb(${colors.lightBlue})`;
      }
    }};
  }
`;

const STriangles = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 132px;
  height: 144px;
  pointer-events: none;
  display: ${({ layout }) => {
    if (layout === 'post') {
      return 'none';
    } else {
      return 'block';
    }
  }};
  @media screen and (${responsive.sm.max}) {
    background: ${({ layout }) => {
      if (layout === 'blog') {
        return `url(${blogTriangles}) no-repeat`;
      } else if (layout === 'page') {
        return `url(${homeTriangles}) no-repeat`;
      } else {
        return 'none';
      }
    }};
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
  margin-left: 10px;
  mask-image: url(${mobileLogo}) center no-repeat;
  -webkit-mask: url(${mobileLogo}) center no-repeat;
  mask-size: 90%;
  -webkit-mask-size: 90%;
  transition: ${transitions.short};
  background-color: #f1f0fa;
  background-color: ${({ layout }) => {
    if (layout === 'blog') {
      return `rgb(${colors.dark})`;
    } else if (layout === 'post') {
      return `rgb(${colors.green})`;
    } else {
      return `rgb(${colors.lightBlue})`;
    }
  }};
  &:hover {
    background-color: ${({ layout }) => {
      if (layout === 'blog') {
        return `rgba(${colors.green}, 0.8)`;
      } else if (layout === 'post') {
        return `rgba(${colors.dark}, 0.8)`;
      } else {
        return `rgba(${colors.lightBlue}, 0.8)`;
      }
    }};
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

const SNavLinks = styled(Link)`
  display: inline-block;
  color: rgb(${colors.green});
  padding: 10px 16px;
  font-size: 1.1875em;
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
  mask-image: url(${mobileNavToggle}) center no-repeat;
  -webkit-mask: url(${mobileNavToggle}) center no-repeat;
  background-color: rgb(${colors.lightGrey});
  cursor: pointer;
  transition: ${transitions.base};
  transform: scale(1);
  background: ${({ layout }) => {
    if (layout === 'blog') {
      return `rgba(${colors.black}, 0.8)`;
    } else if (layout === 'post') {
      return `rgb(${colors.green})`;
    } else {
      return `rgb(${colors.lightBlue})`;
    }
  }};
  opacity: ${({ reveal }) => (reveal ? '0' : '1')};
  transform: ${({ reveal }) =>
    reveal ? 'rotate3d(1,1,0,-20deg) scale(.9) rotate(20deg)' : 'rotate3d(0, 0, 0, 0) scale(1) rotate(0)'};
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

const SMobileNavLinks = styled(Link)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  opacity: 0;
  color: ${({ selected }) => (selected ? `rgb(${colors.green})` : `rgb(${colors.dark})`)};
  transition: ${transitions.short};
  opacity: ${({ reveal }) => (reveal ? '1' : ' 0')};
  pointer-events: ${({ reveal }) => (reveal ? 'auto' : ' none')};
  transform: ${({ reveal }) => (reveal ? 'rotate3d(0,0,0,0)' : ' rotate3d(1, 1, 0, -20deg)')};
  & > span {
    margin-left: 20px;
  }
  & > div {
    margin-left: 20px;
    background-color: ${({ selected }) => (selected ? `rgb(${colors.green})` : `rgb(${colors.dark})`)};
  }
  &:active {
    background: rgba(${colors.lightBlue}, 0.16);
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
  showNavReveal = () => {
    this.setState({ navReveal: true });
  };
  hideNavReveal = () => {
    this.setState({ navReveal: false });
  };
  render = () => (
    <SHeader layout={this.props.layout}>
      <STriangles layout={this.props.layout} />
      <STopSection>
        <SNav>
          <Link onClick={this.hideNavReveal} to="/">
            <SLogo layout={this.props.layout} />
          </Link>
          <SNavList>
            <SNavLinks onClick={this.hideNavReveal} to="/blog">
              Blog
            </SNavLinks>
            <SNavLinks onClick={this.hideNavReveal} to="/about">
              About
            </SNavLinks>
            <SNavLinks onClick={this.hideNavReveal} to="/support">
              Support
            </SNavLinks>
          </SNavList>

          <SNavLinks href="">Download</SNavLinks>
        </SNav>

        <SMobileNavToggle reveal={this.state.navReveal} onClick={this.showNavReveal} layout={this.props.layout} />
        <SMobileNav reveal={this.state.navReveal}>
          <SMobileNavLinks
            selected={this.props.pathname === '/blog'}
            reveal={this.state.navReveal}
            onClick={this.hideNavReveal}
            to="/blog"
          >
            <SMobileNavIcons icon={mobileNavBlog} />
            <span>Blog</span>
          </SMobileNavLinks>
          <SMobileNavLinks reveal={this.state.navReveal} onClick={this.hideNavReveal} to="/about">
            <SMobileNavIcons icon={mobileNavAbout} />
            <span>About</span>
          </SMobileNavLinks>
          <SMobileNavLinks reveal={this.state.navReveal} onClick={this.hideNavReveal} to="/support">
            <SMobileNavIcons icon={mobileNavSupport} />
            <span>Support</span>
          </SMobileNavLinks>
          <SMobileNavClose reveal={this.state.navReveal} onClick={this.hideNavReveal} />
        </SMobileNav>
      </STopSection>
    </SHeader>
  );
}

Header.propTypes = {
  layout: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired
};

export default Header;
