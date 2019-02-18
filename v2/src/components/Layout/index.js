import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";

import "modern-normalize";

import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F8F8FA;
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
      <footer>© Balance</footer>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
