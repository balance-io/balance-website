import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import balanceIcon from '../assets/balance-icon.png';
import buttonApple from '../assets/button-apple.svg';
import trianglesLeft from '../assets/triangles-left.svg';
import trianglesRight from '../assets/triangles-right.svg';
import trianglesRightMobile from '../assets/triangles-right-mobile.svg';
import highSierraMobile from '../assets/high-sierra-mobile.png';
import balanceTransactions from '../assets/balance-transactions.png';
import featureSearch from '../assets/feature-search.svg';
import featureSecurity from '../assets/feature-security.svg';
import featureSync from '../assets/feature-sync.svg';
import featureInstitutions from '../assets/feature-institutions.svg';
import { responsive, colors } from '../styles';

const SBackgroundLeft = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;
  width: 300px;
  height: 450px;
  background: url(${trianglesLeft}) no-repeat;
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
  @media screen and (${responsive.lg.max}) {
    top: -150px;
    left: -150px;
  }
`;

const SBackgroundRight = styled.div`
  position: absolute;
  top: 0;
  right: -100px;
  width: 400px;
  height: 300px;
  background: url(${trianglesRight}) no-repeat;
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
  @media screen and (${responsive.lg.max}) {
    width: 200px;
    height: 200px;
    top: 0;
    right: 0;
    background: url(${trianglesRightMobile}) no-repeat;
  }
`;

const SBackgroundMobile = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  display: none;
  @media screen and (${responsive.sm.max}) {
    display: block;
  }
`;

const SBackground = () => (
  <div>
    <SBackgroundLeft />
    <SBackgroundRight />
    <SBackgroundMobile src={highSierraMobile} />
  </div>
);

const SSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 120px 20px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  @media screen and (${responsive.sm.max}) {
    padding: 100px 34px 80px;
    justify-content: flex-start;
    text-align: left;
    flex-direction: row;
  }
`;

const SInfo = styled.div`
  max-width: 250px;
  margin-top: 40vw;
  @media screen and (${responsive.sm.min}) {
    max-width: 440px;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & p {
    font-size: 1.125em;
    color: rgba(${colors.white}, 0.8);
    line-height: 1.5em;
    margin-bottom: 34px;
  }
  & ul {
    color: rgba(${colors.grey}, 0.7);
    clear: both;
  }
`;

const SAppIcon = styled.div`
  margin: 25px 0;
  width: 75px;
  height: 71px;
  background: url(${balanceIcon}) no-repeat;
  background-size: 100% 100%;
`;

const SComboButton = styled.a`
  position: relative;
  height: 49px;
  margin: 0 0 25px 0;
  border-radius: 10px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  float: none;
  display: inline-block;
  text-align: center;
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

const SButtonApple = styled(SComboButton)`
  width: 155px;
  background: linear-gradient(-45deg, #00a36a, #00c278);
  color: rgb(${colors.navyBlue});
  margin-right: 13px;
  padding: 13px 18px 0 40px;
  &:before {
    content: '';
    position: absolute;
    top: 11.5px;
    left: 16px;
    width: 17px;
    height: 21px;
    mask: url(${buttonApple}) no-repeat;
    background-color: rgb(${colors.navyBlue});
  }
`;

const STitle = styled.h1`
  position: relative;
  display: inline-block;
  font-size: 1.625em;
  font-weight: 700;
  letter-spacing: -0.2px;
  margin-bottom: 8px;
`;

const SAppPreview = styled.div`
  width: 460px;
  height: 746px;
  background: url(${balanceTransactions}) no-repeat;
  background-size: 460px 746px;
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const SFeaturesPreview = styled.div`
  display: flex;
  margin: 70px auto;
`;

const SFeaturesLeft = styled.div``;
const SFeaturesRight = styled.div``;

const SFeatureBlock = styled.div`
  ${SFeaturesRight} > & > div {
    margin-left: 66px;
  }
  ${SFeaturesLeft} > & > div {
    margin-right: 66px;
  }
`;

const BalanceTraditional = () => (
  <Section id="balance-open" minHeight={780} color={colors.navyBlue} background={<SBackground />}>
    <SSectionWrapper>
      <SInfo>
        <SAppIcon />
        <STitle>Balance</STitle>
        <p>A subscription-based Mac app for monitoring your bank balances and card transactions.</p>

        <SButtonApple
          href="https://itunes.apple.com/us/app/balance-personal-finance-tool/id1155714060?mt=12"
          target="_blank"
          rel="noreferrer noopener"
        >
          Get for Mac
        </SButtonApple>

        <ul>
          <li>Supports U.S. banks</li>
          <li>Subscriptions from $4.99</li>
        </ul>
      </SInfo>
      <SFeaturesPreview>
        <SFeaturesLeft>
          <SFeatureBlock>
            <img src={featureSecurity} alt="security" />
            <div>
              <h3>Private and secure</h3>
              <p>Your data is synced to your device through our secure data provider, Plaid. We never store it.</p>
            </div>
          </SFeatureBlock>
          <SFeatureBlock>
            <img src={featureSync} alt="sync" />
            <div>
              <h3>Always in sync</h3>
              <p>Balance updates your accounts throughout the day, so there’s never any waiting involved.</p>
            </div>
          </SFeatureBlock>
        </SFeaturesLeft>
        <SAppPreview />
        <SFeaturesRight>
          <SFeatureBlock>
            <img src={featureSearch} alt="search" />
            <div>
              <h3>Powerful search</h3>
              <p>Quickly search through all of your downloaded transactions with powerful filters.</p>
            </div>
          </SFeatureBlock>
          <SFeatureBlock>
            <img src={featureInstitutions} alt="institutions" />
            <div>
              <h3>9,000+ institutions</h3>
              <p>
                Banks, credit cards, investment accounts, online wallets. PayPal. Schwab. Fidelity. Chase. 9,000 others.
              </p>
            </div>
          </SFeatureBlock>
        </SFeaturesRight>
      </SFeaturesPreview>
    </SSectionWrapper>
  </Section>
);

export default BalanceTraditional;
