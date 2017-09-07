import React from 'react';
import styled from 'styled-components';
import { colors, responsive } from '.../styles';

const StyledFooter = styled.footer`
  & a {
    color: rgba(${colors.black}, 0.8);
  }
  & a:hover {
    color: rgb(${colors.green});
  }
`;

const StyledFooterLinks = styled.ul`float: left;`;

const StyledCopyright = styled.p`
  @media screen and (${responsive.md.max}) {
    & span {
      display: none;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledFooterLinks>
      <a href="">Press</a>
      <a href="./privacy">Privacy</a>
      <a href="./terms">Terms</a>
    </StyledFooterLinks>

    <StyledCopyright>
      © 2017<span> Balanced Software Inc.</span>
    </StyledCopyright>
  </StyledFooter>
);

export default Footer;
