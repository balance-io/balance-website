import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, responsive } from '../styles';

const SSection = styled.section`
  width: 100%;
  height: 100%;
  min-height: ${({ minHeight }) => (minHeight ? `${minHeight}px` : 0)};
  background: ${({ color }) => (color ? `rgb(${color})` : 'transparent')};
  display: flex;
  justify-content: center;
  color: ${({ fontColor }) => `rgb(${fontColor})`};
  position: relative;
  overflow: ${({ overflow }) => (overflow ? 'visible' : 'hidden')};
  @media screen and (${responsive.md.max}) {
    min-height: 0;
    height: auto;
  }
`;

const SContent = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'none')};
  margin: 0 auto;
  z-index: 0;
  ${({ center }) =>
    center &&
    `
    display: flex;
    align-items: center;
  `};
`;

const SBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
`;

const Section = ({
  children,
  background,
  overflow,
  center,
  maxWidth,
  minHeight,
  color,
  fontColor,
  ...props
}) => (
  <SSection
    minHeight={minHeight}
    overflow={overflow}
    color={color}
    fontColor={fontColor}
    {...props}
  >
    <SBackground>{background}</SBackground>
    <SContent center={center} maxWidth={maxWidth} {...props}>
      {children}
    </SContent>
  </SSection>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.node,
  center: PropTypes.bool,
  overflow: PropTypes.bool,
  maxWidth: PropTypes.number,
  minHeight: PropTypes.number,
  color: PropTypes.string,
  fontColor: PropTypes.string
};

Section.defaultProps = {
  background: null,
  center: false,
  overflow: false,
  maxWidth: 1000,
  minHeight: 0,
  color: null,
  fontColor: colors.white
};

export default Section;
