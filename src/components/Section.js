import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, responsive } from '../styles';

const SSection = styled.section`
  width: 100%;
  height: 100%;
  min-height: ${({ minHeight }) => `${minHeight}px`};
  background: ${({ color }) => `rgb(${color})`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(${colors.white});
  position: relative;
  @media screen and (${responsive.md.max}) {
    min-height: 0;
    height: auto;
  }
`;

const SContent = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  z-index: 1;
`;

const SBackground = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Section = ({ children, background, minHeight, color, ...props }) => (
  <SSection minHeight={minHeight} color={color} {...props}>
    <SContent>{children}</SContent>
    <SBackground>{background}</SBackground>
  </SSection>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.node,
  minHeight: PropTypes.number,
  color: PropTypes.string
};

Section.defaultProps = {
  background: null,
  minHeight: 860,
  color: colors.fadedBlue
};

export default Section;
