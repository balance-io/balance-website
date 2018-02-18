import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import balanceTokenIcon from '../assets/balance-token-icon.svg';
import square from '../assets/square.svg';
// import circle from '../assets/circle.svg';
import mobileLogo from '../assets/mobile-logo.svg';
import { colors, responsive, transitions } from '../styles';

const SHeader = styled.div`
  width: 100%;
  z-index: 10;
  position: absolute;
  & nav a {
    font-weight: ${({ theme }) => theme.fontWeight};
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
  e: center;
`;

const SNavLinks = styled(Link)`
  display: flex;
  align-items: center;
  color: rgb(${colors.lightBlue});
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

const Header = ({ theme, ...props }) => (
  <SHeader theme={theme} {...props}>
    <STopSection>
      <SNav>
        <SLink
          onClick={() => {
            ga('send', 'event', 'Homepage', 'click', 'Header - click Homepage');
            this.hideNavReveal();
          }}
          to="/"
        >
          <SAppIcon hide={theme.hideIcon} />
          <SLogo theme={theme} />
        </SLink>
        <SNavList>
          <SNavLinks
            onClick={() => {
              ga('send', 'event', 'Blog', 'click', 'Header - click Blog');
              this.hideNavReveal();
            }}
            to="/blog"
          >
            <SIconLink icon={square} color={theme.linkColor} alt="blog logo" />
            <p>Blog</p>
          </SNavLinks>
          {/* <SExternalLink
              onClick={() => {
                ga('send', 'event', 'About', 'click', 'Header - click About');
                this.hideNavReveal();
              }}
              href="https://medium.com/balancemymoney/launching-balance-open-11ec6b7bc848"
              rel="noreferrer noopener"
              target="_blank"
            >
              <SIconLink icon={circle} color={theme.linkColor} alt="about logo" />
              <p>About</p>
            </SExternalLink> */}
        </SNavList>
      </SNav>
    </STopSection>
  </SHeader>
);

Header.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Header;
