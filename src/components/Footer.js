import React from 'react';
import styled from 'styled-components';
import { colors, responsive } from '../styles';

const SFooter = styled.footer`
  & a {
    color: rgba(${colors.black}, 0.8);
  }
  & a:hover {
    color: rgb(${colors.green});
  }
`;

const SFooterLinks = styled.ul`float: left;`;

const SCopyright = styled.p`
  @media screen and (${responsive.md.max}) {
    & span {
      display: none;
    }
  }
`;

const Footer = () => (
  <SFooter>
    <SFooterLinks>
      <a href="">Press</a>
      <a href="./privacy">Privacy</a>
      <a href="./terms">Terms</a>
    </SFooterLinks>

    <SCopyright>
      © 2017<span> Balanced Software Inc.</span>
    </SCopyright>
  </SFooter>
);

export default Footer;
