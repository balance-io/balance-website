import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SSection = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ color }) => color || '#18202a'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Section = ({ children, color, ...props }) => (
  <SSection color={color} {...props}>
    {children}
  </SSection>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired
};

export default Section;
