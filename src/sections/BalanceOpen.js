import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import triangleMask from '../assets/triangle-mask.svg';
import trianglesWhite from '../assets/triangles-white.svg';
import highSierra from '../assets/high-sierra.jpg';
import balanceOpenLarge from '../assets/balance-open-large.png';
import balanceOpenIcon from '../assets/balance-open-icon.png';
import buttonGithub from '../assets/button-github.svg';
import buttonApple from '../assets/button-apple.svg';
import { responsive, colors } from '../styles';

const SBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (${responsive.md.min}) {
    width: 780px;
    height: 780px;
    mask-image: url(${triangleMask}) no-repeat;
    -webkit-mask: url(${triangleMask}) no-repeat;
    background-image: url(${highSierra});
    background-size: 100% 100%;
  }
  @media screen and (${responsive.sm.max}) {
    width: 100px;
    height: 100px;
    background: url(${trianglesWhite}) no-repeat;
  }
`;

const SSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (${responsive.sm.max}) {
    padding: 100px 34px 80px;
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
  }
  & p:last-of-type {
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
  background: url(${balanceOpenIcon}) no-repeat;
  background-size: 100% 100%;
`;

const SAppPreview = styled.div`
  width: 396px;
  height: 600px;
  background: url(${balanceOpenLarge}) no-repeat;
  background-size: 100% 100%;
  @media screen and (${responsive.md.max}) {
    margin-top: 60px;
  }
  @media screen and (${responsive.sm.max}) {
    width: 320px;
    height: 485px;
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

const SButtonGithub = styled(SComboButton)`
  width: 189px;
  background: linear-gradient(-45deg, #ccd4de, #ededf5);
  border-radius: 10px;
  color: #383e49;
  padding: 0 0 4px 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:before {
    content: '';
    position: absolute;
    top: 12.5px;
    left: 16px;
    width: 20px;
    height: 21px;
    mask-image: url(${buttonGithub}) no-repeat;
    -webkit-mask: url(${buttonGithub}) no-repeat;
    background-color: #383e49;
    opacity: 1;
  }
  @media screen and (${responsive.md.min}) {
    display: none;
  }
`;

const SButtonApple = styled(SComboButton)`
  width: 155px;
  background: linear-gradient(-45deg, #ccd4de, #eeeef5);
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
  @media screen and (${responsive.md.max}) {
    display: none;
  }
`;

const SContribute = styled(SComboButton)`
  width: 155px;

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
  @media screen and (${responsive.md.max}) {
    display: none;
  }
`;

const STitle = styled.h1`
  position: relative;
  display: inline-table;
  font-size: 1.625em;
  font-weight: 700;
  letter-spacing: -0.2px;
  margin-bottom: 8px;
  &:after {
    position: absolute;
    top: calc(100% - 1.8em);
    left: 105%;
    display: flex;
    align-items: center;
    padding: 1.5px 3.5px;
    content: 'NEW';
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.4px;
    text-align: center;
    background: rgb(${colors.orange});
    border-radius: 4px;
  }
`;

const BalanceOpen = () => (
  <Section
    id="balance-open"
    minHeight={780}
    color={colors.navyBlue}
    background={<SBackgroundImage />}
  >
    <SSectionWrapper>
      <SInfo>
        <SAppIcon />
        <STitle>Balance Open</STitle>
        <p>
          A free open source Mac app for tracking your portofolio on Coinbase, GDAX, Poloniex,
          Bitfinex, Kraken, Bittrex and Ethereum addresses.
        </p>
        <p>Support for many other exchanges and full wallet support coming soon.</p>
        <SButtonGithub
          href="https://github.com/balancemymoney/balance-open"
          target="_blank"
          rel="noreferrer noopener"
        >
          View on GitHub
        </SButtonGithub>
        <div>
          <SButtonApple
            href="https://github.com/balancemymoney/balance-open/releases"
            target="_blank"
            rel="noreferrer noopener"
          >
            Get for Mac
          </SButtonApple>
          <SContribute
            href="https://github.com/balancemymoney/balance-open"
            target="_blank"
            rel="noreferrer noopener"
          >
            Contribute
          </SContribute>
        </div>

        <ul>
          <li>Read-only API access</li>
          <li>Multi-currency support</li>
        </ul>
      </SInfo>
      <SAppPreview />
    </SSectionWrapper>
  </Section>
);

export default BalanceOpen;
