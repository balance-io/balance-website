import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, responsive } from '../styles';

const SSection = styled.section`
  width: 100%;
  height: 100%;
  min-height: ${({ minHeight }) => `${minHeight}px`};
  background: ${({ color }) => color};
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
`;

const Section = ({ children, minHeight, color, ...props }) => (
  <SSection minHeight={minHeight} color={color} {...props}>
    <SContent>{children}</SContent>
  </SSection>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  minHeight: PropTypes.number,
  color: PropTypes.string
};

Section.defaultProps = {
  minHeight: 860,
  color: '#18202A'
};

export default Section;
