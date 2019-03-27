import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";

import "modern-normalize";
import "./fonts.css";

import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.dark ? "#000" : "#F8F8FA")};
    color: ${props => (props.dark ? "#fff" : "unset")};
  }
  
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  b, strong {
    font-weight: 500;
  }
`;

const Layout = ({ children, dark }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle dark={dark} />
      {children}
    </>
  </ThemeProvider>
);

Layout.defaultProps = {
  dark: false
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
