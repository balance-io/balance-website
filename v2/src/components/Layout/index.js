import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";

import "modern-normalize";
import "./fonts.css";

import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F8F8FA;
  }
  
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  b, strong {
    font-weight: 500;
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
