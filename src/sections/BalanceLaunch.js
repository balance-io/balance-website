import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import { downloadLatestRelease } from '../utils/api';
import balanceLaunchIcon from '../assets/balance-launch-icon.png';
import triangleMask from '../assets/triangle-mask.svg';
import highSierra from '../assets/high-sierra.jpg';
import balanceOpenBeta from '../assets/balance-open-beta-squared.png';
import buttonGithub from '../assets/github.svg';
import buttonApple from '../assets/apple.svg';
import { responsive, colors } from '../styles';

const SBackgroundImage = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  @media screen and (${responsive.md.min}) {
    width: 780px;
    height: 780px;
    mask-image: url(${triangleMask}) no-repeat;
    -webkit-mask: url(${triangleMask}) no-repeat;
    background-image: url(${highSierra});
    background-size: 100% 100%;
  }
`;

const SSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (${responsive.md.min}) {
    margin: 120px auto;
  }
  @media screen and (${responsive.sm.max}) {
    padding: 68px 34px 80px;
  }
  @media screen and (${responsive.md.max}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (${responsive.sm.min}) and (${responsive.md.max}) {
    padding: 100px 20px;
    text-align: center;
  }
`;

const SInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (${responsive.sm.min}) {
    max-width: 440px;
  }
  @media screen and (${responsive.sm.min}) and (${responsive.md.max}) {
    align-items: center;
  }
  & p {
    font-size: 1.125em;
    color: rgba(${colors.white}, 0.8);
    line-height: 1.5em;
    margin-bottom: 34px;
  }
  & p:last-of-type {
    font-size: 1.1em;
    opacity: 0.7;
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
  background: url(${balanceLaunchIcon}) no-repeat;
  background-size: 100% 100%;
`;

const SAppPreview = styled.div`
  width: 396px;
  height: 600px;
  background: url(${balanceOpenBeta}) no-repeat;
  background-size: 100% 100%;
  @media screen and (${responsive.md.max}) {
    margin-top: 60px;
  }
  @media screen and (${responsive.sm.max}) {
    width: 100%;
    height: calc((100vw - 68px) * 1.5156);
  }
`;

const SComboButton = styled.a`
  display: block;
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
  background-image: linear-gradient(102deg, rgb(${colors.lightGreen}), rgb(${colors.darkGreen}));
  color: rgb(${colors.white});
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
    background-color: rgb(${colors.white});
  }
`;

const SButtonGithub = styled(SComboButton)`
  width: 160px;
  background: linear-gradient(-45deg, #3c424d, #4e5662);
  padding: 13px 18px 0 40px;
  color: rgba(${colors.white}, 0.9);
  &:before {
    content: '';
    position: absolute;
    top: 12.5px;
    left: 16px;
    width: 20px;
    height: 21px;
    mask-image: url(${buttonGithub}) no-repeat;
    -webkit-mask: url(${buttonGithub}) no-repeat;
    background-color: rgba(${colors.white}, 0.9);
  }
`;

const STitle = styled.h1`
  position: relative;
  display: inline-table;
  font-size: 1.625em;
  font-weight: 700;
  letter-spacing: -0.2px;
  margin-bottom: 8px;
`;

const BalanceLaunch = () => (
  <Section
    id="balance-launch"
    minHeight={780}
    color={colors.navyBlue}
    background={<SBackgroundImage />}
  >
    <SSectionWrapper>
      <SInfo>
        <SAppIcon />
        <STitle>A secure automatic portfolio tracker</STitle>
        <p>
          Securely connect to multiple exchanges to automatically keep track of your cryptocurrency
          and token balances.
        </p>

        <div>
          <SButtonApple
            onClick={e => {
              e.preventDefault();
              downloadLatestRelease();
              ga('send', 'event', 'Download', 'click', 'Homepage - click Download');
            }}
            href="https://github.com/balancemymoney/balance-open/releases"
            target="_blank"
            rel="noreferrer noopener"
          >
            Download
          </SButtonApple>
          <SButtonGithub
            onClick={e =>
              ga('send', 'event', 'Source Code', 'click', 'Homepage - click Source Code')
            }
            href="https://github.com/balancemymoney/balance-open"
            target="_blank"
            rel="noreferrer noopener"
          >
            Source Code
          </SButtonGithub>
        </div>

        <p>Supports Coinbase, GDAX, Poloniex, Bitfinex, Kraken, Bittrex and Ethereum addresses.</p>
      </SInfo>
      <SAppPreview />
    </SSectionWrapper>
  </Section>
);

export default BalanceLaunch;
