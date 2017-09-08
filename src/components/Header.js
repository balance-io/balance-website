import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import triangles from '../assets/images/blog-directory-triangles.svg';
import mobileLogo from '../assets/images/mobile-logo.svg';
import mobileNavToggle from '../assets/images/mobile-nav-toggle.svg';
import mobileNavBlog from '../assets/images/mobile-nav-blog.svg';
import mobileNavAbout from '../assets/images/mobile-nav-about.svg';
import mobileNavSupport from '../assets/images/mobile-nav-support.svg';
import { colors, responsive, transitions } from '../styles';

const STriangles = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 132px;
  height: 144px;
  z-index: 1;
  @media screen and (${responsive.sm.max}) {
    background: url(${triangles}) no-repeat;
  }
`;

const STopSection = styled.div`width: 100%;`;

const SLogo = styled(Link)`
  display: block;
  float: left;
  padding: 0 2px;
  width: 90px;
  height: 23px;
  mask-image: url(${mobileLogo}) center no-repeat;
  -webkit-mask: url(${mobileLogo}) center no-repeat;
  background-color: #f1f0fa;
  background-color: rgb(${colors.green});
  &:hover {
    background-color: rgba(${colors.black}, 0.8);
  }
`;

const SNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 12px 20px;
  & a:hover {
    color: rgb(${colors.green});
  }
`;

const SNavList = styled.ul`
  margin: 0 auto;
  position: absolute;
  width: fit-content;
  left: 0;
  right: 0;
  cursor: default;
`;

const SNavLinks = styled.a`
  padding: 12px 14px;
  & a:hover {
    color: rgba(${colors.black}, 0.8);
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
  display: block;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  margin: 0 0 20px 20px;
  top: 0;
  right: 0;
  width: 220px;
  height: 220px;
  border-radius: 0 0 0 10px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1),
    0 0 1px rgba(50, 50, 93, 0.12);
  font-size: 1.125em;
  font-weight: 500;
  color: rgb(${colors.dark});
  will-change: transform, opacity;
  transition-property: transform, opacity;
  transform: rotate3d(1, 1, 0, -20deg);
  transform-origin: 100% 0;
  transition: ${transitions.base};
`;

const SMobileNavLinks = styled.a`
  box-sizing: border-box;
  display: block;
  position: relative;
  width: 100%;
  height: 73px;
  padding: 24px 0 26px 48px;
  opacity: 0;
  transition: ${transitions.short};
  &:active {
    background: rgba(187, 193, 199, 0.16);
  }
`;

const SMobileNavIcons = styled.div`
  content: '';
  position: absolute;
  top: 27px;
  left: 24px;
  height: 16px;
  mask-image: ${({ icon }) => icon && `url(${icon})`} no-repeat;
  -webkit-mask: ${({ icon }) => icon && `url(${icon})`} no-repeat;
  background-color: rgb(${colors.dark});
`;

class Header extends Component {
  state = {
    mobileReveal: false
  };
  render = () => (
    <div>
      <STriangles />
      <STopSection>
        <SNav>
          <SLogo to="/" />
          <SNavList>
            <SNavLinks href="">Blog</SNavLinks>
            <SNavLinks href="/about">About</SNavLinks>
            <SNavLinks href="/support">Support</SNavLinks>
          </SNavList>

          <SNavLinks href="">Download</SNavLinks>
        </SNav>

        <SMobileNavToggle reveal={this.state.mobileReveal} />
        <SMobileNav>
          <SMobileNavLinks className="selected" href="">
            <SMobileNavIcons icon={mobileNavBlog} />
            <span>Blog</span>
          </SMobileNavLinks>
          <SMobileNavLinks href="../about">
            <SMobileNavIcons icon={mobileNavAbout} />
            <span>About</span>
          </SMobileNavLinks>
          <SMobileNavLinks href="../support">
            <SMobileNavIcons icon={mobileNavSupport} />
            <span>Support</span>
          </SMobileNavLinks>
          <div className="mobile-nav-close" />
        </SMobileNav>
      </STopSection>
    </div>
  );
}

export default Header;
