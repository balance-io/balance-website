import React, { Component } from 'react';
import Hero from '../sections/Hero';
import BalanceOpen from '../sections/BalanceOpen';
import { colors } from '../styles';

class IndexPage extends Component {
  componentDidMount() {
    document.body.style.background = `rgb(${colors.darkerBlue})`;
  }
  render = () => (
    <div>
      <Hero />
      <BalanceOpen />
    </div>
  );
}
export default IndexPage;
