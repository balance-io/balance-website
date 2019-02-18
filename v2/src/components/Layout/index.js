import React from "react";
import PropTypes from "prop-types";

import "modern-normalize";

const Layout = ({ children }) => (
  <>
    {children}
    <footer>© Balance</footer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
