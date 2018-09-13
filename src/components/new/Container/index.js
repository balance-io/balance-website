import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Element = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "none")};
  margin: 0 auto;
`;

const Container = ({ children, maxWidth }) => (
  <Element maxWidth={maxWidth}>{children}</Element>
);

Container.propTypes = {
  maxWidth: PropTypes.number
};

Container.defaultProps = {
  maxWidth: 1000
};

export default Container;
