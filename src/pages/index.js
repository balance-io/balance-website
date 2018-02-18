import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BalanceToken from '../sections/BalanceToken';
import { colors } from '../styles';

const layoutTheme = {
  fontWeight: '400',
  linkColor: colors.lightBlue,
  linkHover: colors.lightBlue,
  backgroundColor: colors.darkNavyBlue,
  mobileToggleColor: colors.lightGrey,
  mobileToggleOpacity: '1',
  logoColor: colors.lightBlue,
  logoHover: colors.lightBlue
};

class IndexPage extends Component {
  render = () => {
    return (
      <div>
        <Header theme={layoutTheme} />
        <BalanceToken />
        <Footer theme={layoutTheme} />
      </div>
    );
  };
}

export default IndexPage;
