import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Element = styled.div`
  display: flex;
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "initial")};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "initial"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "initial")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "initial"};
`;

const Flex = ({
  children,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
}) => (
  <Element
    flexWrap={flexWrap}
    flexDirection={flexDirection}
    alignItems={alignItems}
    justifyContent={justifyContent}
  >
    {children}
  </Element>
);

Flex.propTypes = {
  flexWrap: PropTypes.string,
  flexDirection: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string
};

Flex.defaultProps = {
  flexWrap: "initial",
  flexDirection: "initial",
  alignItems: "initial",
  justifyContent: "initial"
};

export default Flex;
