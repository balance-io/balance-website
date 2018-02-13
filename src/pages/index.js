import React, { Component } from 'react';
import Header from '../components/Header';
import BalanceToken from '../sections/BalanceToken';
import { colors } from '../styles';
import { handleReferrals } from '../utils/firebase';

const layoutTheme = {
  fontWeight: '400',
  linkColor: colors.lightBlue,
  linkHover: colors.lightBlue,
  mobileToggleColor: colors.lightGrey,
  mobileToggleOpacity: '1',
  logoColor: colors.lightBlue,
  logoHover: colors.lightBlue
};

class IndexPage extends Component {
  componentDidMount() {
    handleReferrals();
  }
  render = () => {
    return (
      <div>
        <Header theme={layoutTheme} />
        <BalanceToken />
      </div>
    );
  };
}

export default IndexPage;
