import React from "react";
import PropTypes from "prop-types";
import { Box } from "rebass";

import "modern-normalize";

const Layout = ({ children }) => (
  <Box bg="#F8F8FA">
    {children}
    <footer>© Balance</footer>
  </Box>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
