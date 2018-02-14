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
  align-items: center;
  justify-content: center;
  color: ${({ fontColor }) => `rgb(${fontColor})`};
  position: relative;
  overflow: hidden;
  @media screen and (${responsive.md.max}) {
    min-height: 0;
    height: auto;
  }
`;

const SContent = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
  margin: 0 auto;
  z-index: 0;
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
  maxWidth,
  minHeight,
  color,
  fontColor,
  overflow,
  ...props
}) => (
  <SSection
    minHeight={minHeight}
    color={color}
    fontColor={fontColor}
    overflow={overflow}
    {...props}
  >
    <SBackground>{background}</SBackground>
    <SContent maxWidth={maxWidth} {...props}>
      {children}
    </SContent>
  </SSection>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.node,
  maxWidth: PropTypes.number,
  minHeight: PropTypes.number,
  color: PropTypes.string,
  fontColor: PropTypes.string,
  overflow: PropTypes.bool
};

Section.defaultProps = {
  background: null,
  maxWidth: 1000,
  minHeight: 0,
  color: null,
  fontColor: colors.white,
  overflow: true
};

export default Section;
