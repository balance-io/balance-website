import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, responsive, transitions } from '../styles';

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
    color: ${({ template }) => {
      if (template === 'blog') {
        return `rgba(${colors.dark}, 0.8)`;
      } else if (template === 'post') {
        return `rgba(${colors.green}, 0.8)`;
      } else {
        return `rgba(${colors.grey}, 0.8)`;
      }
    }};
  }
  & a:hover {
    color: ${({ template }) => {
      if (template === 'blog') {
        return `rgb(${colors.green})`;
      } else if (template === 'post') {
        return `rgb(${colors.dark})`;
      } else {
        return `rgb(${colors.grey})`;
      }
    }};
  }
`;

const SFooterList = styled.ul`float: left;`;

const SFooterLinks = styled.a`
  display: inline-block;
  padding: 10px;
  transition: ${transitions.short};
  &:first-child {
    padding-left: 0;
  }
  &:active {
    transform: scale(0.95) translate3d(0, 0, 0);
  }
`;

const SCopyright = styled.p`
  display: inline-block;
  float: right;
  padding: 10px 0;
  font-weight: 400;
  color: rgb(${colors.grey});
  transition: ${transitions.short};
  @media screen and (${responsive.sm.max}) {
    & span {
      display: none;
    }
  }
`;

const Footer = ({ pathname }) => {
  const template = pathname.match(/\/blog\/[\w-]+/g) ? 'post' : pathname.match(/\/blog\/?/g) ? 'blog' : 'page';
  return (
    <SFooter template={template}>
      <SFooterList>
        <SFooterLinks href="">Press</SFooterLinks>
        <SFooterLinks href="/privacy">Privacy</SFooterLinks>
        <SFooterLinks href="/terms">Terms</SFooterLinks>
      </SFooterList>

      <SCopyright>
        © 2017<span> Balanced Software Inc.</span>
      </SCopyright>
    </SFooter>
  );
};

Footer.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default Footer;
