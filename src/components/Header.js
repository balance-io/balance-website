import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
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

const SLogo = styled.div`
  width: 95px;
  height: 22px;
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
  @media screen and (${responsive.md.min}) {
    margin-left: -10px;
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
`;

const SNavLinks = styled(Link)`
  display: inline-block;
  color: rgb(${colors.green});
  cursor: pointer;
  padding: 10px 16px;
  text-transform: uppercase;
  font-size: 0.85em;
  font-weight: 500;
  transition: ${transitions.short};
  &:active {
    transform: scale(0.95) translate3d(0, 0, 0);
    transition: ${transitions.short};
  }
  &:hover {
    color: rgb(${colors.dark});
  }
`;

const SExternalLink = SNavLinks.withComponent('a');

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
    return (
      <SHeader theme={theme} {...props}>
        <STopSection>
          <SNav>
            <Link
              onClick={() => {
                ga('send', 'event', 'Homepage', 'click', 'Header - click Homepage');
                this.hideNavReveal();
              }}
              to="/"
            >
              <SLogo theme={theme} />
            </Link>
            <SNavList>
              <SExternalLink
                onClick={() => {
                  ga('send', 'event', 'Blog', 'click', 'Header - click Blog');
                  this.hideNavReveal();
                }}
                href="https://medium.com/balancemymoney"
                rel="noreferrer noopener"
                target="_blank"
              >
                Blog
              </SExternalLink>
              <SExternalLink
                onClick={() => {
                  ga('send', 'event', 'About', 'click', 'Header - click About');
                  this.hideNavReveal();
                }}
                href="https://medium.com/balancemymoney/launching-balance-open-11ec6b7bc848"
                rel="noreferrer noopener"
                target="_blank"
              >
                About
              </SExternalLink>
            </SNavList>
          </SNav>
        </STopSection>
      </SHeader>
    );
  };
}

Header.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Header;
