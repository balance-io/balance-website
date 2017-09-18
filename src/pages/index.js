import React from 'react';
import Hero from '../sections/Hero';
import BalanceOpen from '../sections/BalanceOpen';
import { colors } from '../styles';

const IndexPage = () => {
  document.body.style.background = `rgb(${colors.darkerBlue})`;
  return (
    <div>
      <Hero />
      <BalanceOpen />
    </div>
  );
};

export default IndexPage;
