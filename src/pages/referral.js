import React, { Component } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Section from '../components/Section';
import TokenAnimation from '../components/TokenAnimation';
import balanceTokenIcon from '../assets/balance-token-icon.svg';
import balanceTokenTriangles from '../assets/balance-token-triangles.svg';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import email from '../assets/email-icon.svg';
import windowResize from '../utils/windowResize';
import { getLeaderboard, databaseGet } from '../utils/firebase';
import { getUrlParameter } from '../utils/helpers';
import { colors, responsive, transitions } from '../styles';

const SBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50vw;
  height: 700px;
  background-image: url(${balanceTokenTriangles});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const SSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media screen and (${responsive.md.max}) {
    padding: 0 34px;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (${responsive.sm.max}) {
    padding: 0 20px;
  }
`;

const SAppIcon = styled.div`
  margin: 25px 0;
  width: 80px;
  height: 80px;
  background: url(${balanceTokenIcon}) no-repeat;
  background-size: 100% 100%;
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const SContainer = styled.div`
  width: 100%;
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

const STitle = styled.h1`
  font-size: 2.7em;
  letter-spacing: -0.25px;
  margin: 10px 0;
  @media screen and (${responsive.md.max}) {
    font-size: 2em;
    letter-spacing: -0.2px;
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

const SReferralWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const SNotification = styled.p`
  position: absolute;
  bottom: -14px;
  left: 14px;
  transition: ${transitions.base};
  opacity: ${({ show }) => (show ? '1' : ' 0')};
  pointer-events: ${({ show }) => (show ? 'auto' : ' none')};
  visibility: ${({ show }) => (show ? 'visible' : ' hidden')};
`;

const SReferral = styled.input`
  width: 98%;
  border: none;
  border-style: none;
  outline: none;
  font-size: inherit;
  color: rgb(${colors.white});
  background-color: rgb(${colors.darkerGrey});
  padding: 14px;
  border-radius: 10px;
  margin: 10px 0;
`;

const SFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SRight = styled(SFlex)`
  position: relative;
  transform: translate3d(calc((100vw - 1024px)*0.33), 0, 0);
`;

const SComboButton = styled.a`
  display: block;
  position: relative;
  height: 49px;
  margin: 25px 0;
  padding: 14px 0 14px 44px;
  border-radius: 10px;
  float: none;
  cursor: pointer;
  display: inline-block;
  text-align: left;
  &:hover {
    transform: none;
    opacity: 1;
  }
  &:active {
    transition: 0.08s ease;
    transform: translateY(2px);
    opacity: 0.6;
  }
  @media screen and (${responsive.sm.max}) {
    padding-left: 32px;
    text-align: center;
  }
`;

const SButtonFacebook = styled(SComboButton)`
  background-color: rgb(${colors.facebook});
  color: rgb(${colors.white});
  margin-right: 14px;
  width: 180px;
  @media screen and (${responsive.sm.max}) {
    margin-right: 0;
  }
  &:before {
    content: '';
    position: absolute;
    top: 14px;
    left: 12px;
    width: 21px;
    height: 21px;
    mask-image: url(${facebook}) no-repeat;
    -webkit-mask: url(${facebook}) no-repeat;
    mask-size: 100%;
    background-color: rgb(${colors.white});
  }
  @media screen and (${responsive.xxs.max}) {
    padding-left: 24px;
    &:before {
      left: 8px;
    }
  }
`;

const SButtonTwitter = styled(SComboButton)`
  background-color: rgb(${colors.twitter});
  color: rgb(${colors.white});
  margin-right: 14px;
  width: 160px;
  @media screen and (${responsive.sm.max}) {
    margin-right: 5px;
    margin-left: 5px;
  }
  &:before {
    content: '';
    position: absolute;
    top: 16px;
    left: 12px;
    width: 21px;
    height: 21px;
    mask-image: url(${twitter}) no-repeat;
    -webkit-mask: url(${twitter}) no-repeat;
    mask-size: 100%;
    background-color: rgb(${colors.white});
    opacity: 1;
  }
  @media screen and (${responsive.xxs.max}) {
    padding-left: 24px;
    &:before {
      left: 8px;
    }
  }
`;

const SButtonEmail = styled(SComboButton)`
  background-color: rgb(${colors.white});
  color: rgb(${colors.dark});
  margin-right: 14px;
  width: 150px;
  @media screen and (${responsive.sm.max}) {
    margin-right: 0;
  }
  &:before {
    content: '';
    position: absolute;
    top: 17px;
    left: 12px;
    width: 21px;
    height: 21px;
    mask-image: url(${email}) no-repeat;
    -webkit-mask: url(${email}) no-repeat;
    mask-size: 100%;
    background-color: rgb(${colors.dark});
  }
  @media screen and (${responsive.xxs.max}) {
    padding-left: 24px;
    &:before {
      left: 8px;
    }
  }
`;

let timeout = null;

class Referral extends Component {
  state = {
    referralID: '',
    leaderboard: {},
    notification: ''
  };
  componentDidMount() {
    const uniqueID = getUrlParameter('id');
    const referrerID = localStorage.getItem('referrer_id');
    if (uniqueID && !referrerID) {
      localStorage.setItem('referrer_id', uniqueID);
      databaseGet(`unique_id/${uniqueID}`).then(referralID => this.setState({ referralID }));
    } else {
      databaseGet(`unique_id/${referrerID}`).then(referralID => this.setState({ referralID }));
    }
  }
  copyToClipboard = ({ target }) => {
    clearTimeout(timeout);
    target.select();
    document.execCommand('Copy');
    target.blur();
    this.setState({ notification: 'Copied to clipboard' });
    ga(
      'send',
      'event',
      'Referral',
      'share',
      `Referral - Copied to clipboard - ${this.state.referralID}`
    );
    timeout = setTimeout(() => this.setState({ notification: '' }), 2000);
  };
  componentWillUpdate(newProps, newState) {
    if (!Object.keys(this.state.leaderboard).length && newState.referralID) {
      getLeaderboard(newState.referralID).then(leaderboard => this.setState({ leaderboard }));
    }
  }
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
    const url = `balance.io/?ref=${this.state.referralID.replace('id', '')}`;
    return (
      <div>
        <Helmet
          title={title}
          meta={[{ name: 'twitter:title', content: title }, { name: 'og:title', content: title }]}
        />
        <Header theme={layoutTheme} />
        <Section
          id={`${name}-top`}
          minHeight={700}
          color={colors.navyBlue}
          background={<SBackgroundImage />}
        >
          <SSectionWrapper>
            <SFlex>
              <SContainer>
                <SAppIcon />
                <STitle>A place for your tokens</STitle>
                <STagline>
                  An Ethereum wallet that supports ERC-20 & ERC-721 token standards.
                </STagline>
              </SContainer>
            </SFlex>
            <SRight>
              <TokenAnimation />
            </SRight>
          </SSectionWrapper>
        </Section>
        <Section id={`${name}-bottom`} minHeight={700} color={colors.fadedNavyBlue}>
          <SSectionWrapper>
            <SFlex>
              <SContainer>
                <SReferralWrapper>
                  <SReferral onClick={this.copyToClipboard} value={url} />
                  <SNotification show={!!this.state.notification}>
                    {this.state.notification}
                  </SNotification>
                </SReferralWrapper>
                <SFlex>
                  <SButtonFacebook
                    onClick={() => {
                      ga(
                        'send',
                        'event',
                        'Referral',
                        'share',
                        `Referral - share Facebook - ${this.state.referralID}`
                      );
                    }}
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      `https://${url}`
                    )}`}
                    target="_blank"
                  >
                    {this.props.width < 640 ? `Share` : `Share Facebook`}
                  </SButtonFacebook>
                  <SButtonTwitter
                    onClick={() => {
                      ga(
                        'send',
                        'event',
                        'Referral',
                        'share',
                        `Referral - share Twitter - ${this.state.referralID}`
                      );
                    }}
                    href={`https://twitter.com/intent/tweet?text=Download%20Balance%2C%20a%20secure%20automatic%20portfolio%20tracker%20for%20your%20cryptocurrency%20and%20token%20balances%20by%20%40balancemymoney&url=${encodeURIComponent(
                      `https://${url}`
                    )}`}
                    target="_blank"
                  >
                    {this.props.width < 640 ? `Tweet` : `Share Twitter`}
                  </SButtonTwitter>
                  <SButtonEmail
                    onClick={() => {
                      ga(
                        'send',
                        'event',
                        'Referral',
                        'share',
                        `Referral - share Support - ${this.state.referralID}`
                      );
                    }}
                    href={`mailto:?subject=Download%20Balance&body=Balance%2C%20a%20secure%20automatic%20portfolio%20tracker%20for%20your%20cryptocurrency%20and%20token%20balances.%0ADownload%20at%20${encodeURIComponent(
                      `https://${url}`
                    )}`}
                    target="_blank"
                  >
                    {this.props.width < 640 ? `Email` : `Share Email`}
                  </SButtonEmail>
                </SFlex>
              </SContainer>
              <SContainer hide={!Object.keys(this.state.leaderboard).length}>
                <SSubTitle>{`${
                  downloads === 1 ? `${downloads} Friend` : `${downloads} Friends`
                } downloaded so far. Sharing is Caring!`}</SSubTitle>
                <STagline>
                  {`You're number ${position} on our leaderboard. The top 10 referrers will get a reward from our founders`}
                </STagline>
              </SContainer>
            </SFlex>
          </SSectionWrapper>
        </Section>
      </div>
    );
  };
}

export default windowResize(Referral);

export const query = graphql`
  query ReferralQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
