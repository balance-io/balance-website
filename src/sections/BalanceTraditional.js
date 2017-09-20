import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import balanceIcon from '../assets/images/balance-icon.png';
import buttonApple from '../assets/images/button-apple.svg';
import { responsive, colors } from '../styles';

const SSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 220px 20px;
  text-align: center;
  @media screen and (${responsive.sm.max}) {
    padding: 100px 34px 80px;
    justify-content: flex-start;
    text-align: left;
  }
`;

const SInfo = styled.div`
  @media screen and (${responsive.sm.min}) {
    max-width: 440px;
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
  width: 80px;
  height: 80px;
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
  color: rgb(${colors.darkBlue});
  margin-right: 13px;
  padding: 13px 18px 0 40px;
  &:before {
    content: '';
    position: absolute;
    top: 11.5px;
    left: 16px;
    width: 17px;
    height: 21px;
    mask-image: url(${buttonApple}) no-repeat;
    -webkit-mask: url(${buttonApple}) no-repeat;
    background-color: rgb(${colors.darkBlue});
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

const BalanceOpen = () => (
  <Section id="balance-open" minHeight={780} color={colors.navyBlue}>
    <SSectionWrapper>
      <SInfo>
        <SAppIcon />
        <STitle>Balance</STitle>
        <p>A subscription-based Mac app for monitoring your bank balances and card transactions.</p>

        <SButtonApple
          href="https://github.com/balancemymoney/balance-open/releases"
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
    </SSectionWrapper>
  </Section>
);

export default BalanceOpen;
