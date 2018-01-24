import React, { Component } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Section from '../components/Section';
import balanceLaunchIcon from '../assets/balance-launch-icon.png';
import balanceReferralPreview from '../assets/balance-referral-preview.png';
import buttonGithub from '../assets/button-github.svg';
import buttonApple from '../assets/button-apple.svg';

import { downloadLatestRelease } from '../utils/api';
import { getLeaderboard, databaseGet } from '../utils/firebase';
import { getUrlParameter } from '../utils/helpers';
import { colors, responsive } from '../styles';

const SSection = styled(Section)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SSectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (${responsive.md.max}) {
    padding: 0 34px;
    flex-direction: column;
    justify-content: center;
  }
`;

const SLeft = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  @media screen and (${responsive.md.max}) {
    justify-content: center;
    width: 100%;
  }
`;

const SRight = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  @media screen and (${responsive.md.max}) {
    justify-content: center;
    width: 100%;
  }
  justify-content: flex-end;
`;

const SAppPreview = styled.div`
  width: 400px;
  height: 590px;
  background: url(${balanceReferralPreview}) no-repeat;
  background-size: 100% 100%;
  @media screen and (${responsive.md.max}) {
    display: none;
  }
`;

const SAppIcon = styled.div`
  margin: 25px 0;
  width: 80px;
  height: 80px;
  background: url(${balanceLaunchIcon}) no-repeat;
  background-size: 100% 100%;
`;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: ${({ hide }) => (hide ? 0 : 1)};
  @media screen and (${responsive.sm.min}) {
    max-width: 550px;
  }
  @media screen and (${responsive.md.max}) {
    margin-top: 0;
  }
  @media screen and (${responsive.sm.min}) and (${responsive.md.max}) {
    display: flex;
    align-items: center;
    text-align: center;
  }
`;

const SSubTitle = styled.h2`
  font-size: 1.6em;
  letter-spacing: -0.25px;
  margin: 0 0 10px;
  @media screen and (${responsive.md.max}) {
    margin: 0 0 0;
    font-size: 1.5em;
    letter-spacing: -0.2px;
  }
`;

const STagline = styled.p`
  font-size: 1.125em;
  color: rgb(${colors.lighterBlue});
  line-height: 1.5555555556em;
  @media screen and (${responsive.md.max}) {
    margin: 12px auto 0 auto;
    font-size: 1.1875em;
    line-height: 1.47em;
    color: rgba(${colors.white}, 0.8);
  }
`;

const SReferral = styled.p`
  width: 98%;
  background-color: rgb(${colors.darkerGrey});
  padding: 14px;
  border-radius: 10px;
  margin: 10px 0;
`;

const SActions = styled.div`
  display: flex;
`;

const SComboButton = styled.a`
  display: block;
  position: relative;
  height: 50px;
  margin: 25px 5px;
  border-radius: 10px;
  float: none;
  display: inline-block;
  text-align: center;
  width: 100%;
  &:hover {
    transform: none;
    opacity: 1;
  }
  &:active {
    transition: 0.08s ease;
    transform: translateY(2px);
    opacity: 0.6;
  }
`;

const SButtonFacebook = styled(SComboButton)`
  background-color: rgb(${colors.facebook});
  color: rgb(${colors.white});
  margin-right: 13px;
  &:before {
    content: '';
    position: absolute;
    top: 11.5px;
    left: 16px;
    height: 21px;
    mask-image: url(${buttonApple}) no-repeat;
    -webkit-mask: url(${buttonApple}) no-repeat;
    background-color: rgb(${colors.white});
  }
`;

const SButtonTwitter = styled(SComboButton)`
  background-color: rgb(${colors.twitter});
  color: rgb(${colors.white});
  display: flex;
  flex-direction: row;
  align-items: center;
  &:before {
    content: '';
    position: absolute;
    top: 12.5px;
    left: 16px;
    height: 21px;
    mask-image: url(${buttonGithub}) no-repeat;
    -webkit-mask: url(${buttonGithub}) no-repeat;
    background-color: rgb(${colors.white});
    opacity: 1;
  }
`;

const SButtonEmail = styled(SComboButton)`
  background-color: rgb(${colors.white});
  color: rgb(${colors.dark});
  &:before {
    content: '';
    position: absolute;
    top: 12.5px;
    left: 16px;
    height: 21px;
    mask-image: url(${buttonGithub}) no-repeat;
    -webkit-mask: url(${buttonGithub}) no-repeat;
    background-color: rgb(${colors.dark});
  }
`;

class Referral extends Component {
  state = {
    referralID: '',
    leaderboard: {}
  };
  componentWillMount() {
    const uniqueID = getUrlParameter('id');
    if (uniqueID) {
      databaseGet(`unique_id/${uniqueID}`).then(referralID => this.setState({ referralID }));
    }
  }

  componentWillUpdate(newProps, newState) {
    if (!Object.keys(this.state.leaderboard).length && newState.referralID) {
      getLeaderboard(newState.referralID).then(leaderboard => this.setState({ leaderboard }));
    }
  }
  onReferral = e => {
    e.preventDefault();
    downloadLatestRelease();
  };
  render = () => {
    const layoutTheme = {
      fontWeight: '400',
      linkColor: colors.lightBlue,
      linkHover: colors.lightBlue,
      mobileToggleColor: colors.lightGrey,
      mobileToggleOpacity: '1',
      logoColor: colors.lightBlue,
      logoHover: colors.lightBlue
    };
    const name = this.props.pathContext.slug;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const title = `Referral - ${siteTitle}`;
    const downloads = this.state.leaderboard.downloads;
    const position = this.state.leaderboard.position;
    return (
      <div>
        <Helmet
          title={title}
          meta={[{ name: 'twitter:title', content: title }, { name: 'og:title', content: title }]}
        />
        <Header theme={layoutTheme} />
        <SSection id={name} color={colors.navyBlue}>
          <SSectionWrapper>
            <SLeft>
              <div>
                <SContainer>
                  <SAppIcon />
                  <SSubTitle>Help Launch Balance. Invite friends and earn rewards</SSubTitle>
                  <STagline>Use your unique link via Facebook, Twitter and email</STagline>
                  <SReferral>{`balance.io/?ref=${this.state.referralID.replace(
                    'id',
                    ''
                  )}`}</SReferral>
                  <SActions>
                    <SButtonFacebook>Share Facebook</SButtonFacebook>
                    <SButtonTwitter>Share Twitter</SButtonTwitter>
                    <SButtonEmail>Share Email</SButtonEmail>
                  </SActions>
                </SContainer>
                <SContainer hide={!Object.keys(this.state.leaderboard).length}>
                  <SSubTitle>{`${
                    downloads === 1 ? `${downloads} Friend` : `${downloads} Friends`
                  } downloaded so far. Sharing is Caring!`}</SSubTitle>
                  <STagline>
                    {`You're number ${position} on our leaderboard. The top 10 referrers will get a reward from our founders`}
                  </STagline>
                </SContainer>
              </div>
            </SLeft>
            <SRight>
              <SAppPreview />
            </SRight>
          </SSectionWrapper>
        </SSection>
      </div>
    );
  };
}

export default Referral;

export const query = graphql`
  query ReferralQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
