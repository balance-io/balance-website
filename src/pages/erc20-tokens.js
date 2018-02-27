import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import aragon from '../assets/tokens/aragon.svg';
import augur from '../assets/tokens/augur.svg';
import zrx from '../assets/tokens/zrx.svg';
import district0x from '../assets/tokens/district0x.svg';
import gnosis from '../assets/tokens/gnosis.svg';
import golem from '../assets/tokens/golem.svg';
import maker from '../assets/tokens/maker.svg';
import melonport from '../assets/tokens/melonport.svg';
import solidityExample from '../assets/solidity-example.png';
import ethereumLogo from '../assets/ethereum-logo.png';
import balanceTokenPreview from '../assets/balance-token-preview2.png';
import balanceTokenTriangles from '../assets/balance-token-triangles.svg';
import balanceTokenTrianglesTwo from '../assets/balance-token-triangles2.svg';
import { colors, fonts, responsive } from '../styles';

const floating = keyframes`
  0%, 100% { transform: translateY(10%); }
  45%, 55%  { transform: translateY(0); }
`;

const SBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50vw;
  height: 550px;
  background-image: url(${balanceTokenTriangles});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 0 0;
  @media screen and (${responsive.xl.min}) {
    top: 0;
    right: calc((100vw - 1400px)*0.5);
    width: 550px;
  }
  @media screen and (${responsive.md.max}) {
    width: 100vw;
    height: 550px;
  }
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const SBackgroundImageTwo = styled.div`
  position: absolute;
  top: -250px;
  left: 0;
  width: 640px;
  height: 640px;
  background-image: url(${balanceTokenTrianglesTwo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const SSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: ${({ minHeight }) => (minHeight ? `${minHeight}px` : 'none')};
  @media screen and (${responsive.sm.min}) {
    & div:nth-child(2) {
      padding-left: 30px;
    }
  }
  @media screen and (${responsive.sm.min}) and (${responsive.md.max}) {
    flex-direction: column;
  }
  @media screen and (${responsive.md.max}) {
    padding: 68px 0 0;
    flex-wrap: wrap;
  }
`;

const SPageHeader = styled.div`
  width: 100%;
  height: 550px;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (${responsive.sm.min}) {
    margin-bottom: 68px;
  }
`;

const SStaticLogo = styled.img`
  height: 189px;
`;

const SFloatingLogo = styled.img`
  position: absolute;
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  top: ${({ top }) => (top ? `${top}px` : 'auto')};
  bottom: ${({ bottom }) => (bottom ? `${bottom}px` : 'auto')};
  opacity: ${({ opacity }) => (opacity ? opacity : '1.0')};
  left: ${({ left }) => (left ? `${Number(left / 1280 * 100).toFixed(2)}%` : 'auto')};
  right: ${({ right }) => (right ? `${Number(right / 1280 * 100).toFixed(2)}%` : 'auto')};
  animation: ${({ delay }) =>
    delay ? `${floating} 4s -${delay}s infinite` : `${floating} 4s -1s infinite`};
`;

const SFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (${responsive.sm.max}) {
    align-items: flex-start;
  }
`;

const SContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (${responsive.sm.min}) {
    max-width: 550px;
  }
  @media screen and (${responsive.md.max}) {
    display: flex;
    align-items: center;
    text-align: center;
  }
`;

const STitle = styled.h1`
  font-size: 2em;
  letter-spacing: -0.25px;
  margin: 10px 0;
  @media screen and (${responsive.sm.max}) {
    font-size: 8vw;
    letter-spacing: -0.2px;
  }
`;

const SSubTitle = styled.h2`
  font-size: 1.4em;
  letter-spacing: -0.25px;
  font-weight: 400;
  margin: 20px 0;
  @media screen and (${responsive.sm.max}) {
    font-size: 4.5vw;
    letter-spacing: -0.2px;
    margin: 1em 0;
  }
`;

const STagline = styled.p`
  font-size: 1em;
  color: rgb(${colors.lighterBlue});
  line-height: 1.8em;
  & a {
    color: rgb(${colors.blue});
  }
  @media screen and (${responsive.sm.max}) {
    font-size: 4vw;
    line-height: 1.5em;
    &:first-of-type {
      margin-top: 1em;
    }
  }
`;

const SViralLoops = styled.button`
  display: block;
  margin: 10px 0;
  cursor: pointer;
  padding: 1em 1.8em;
  font-size: ${fonts.medium};
  color: rgb(255, 255, 255);
  background-color: rgb(0, 153, 255);
  border-radius: 4px;
  @media (hover: hover) {
    &:hover {
      opacity: 0.8 !important;
    }
  }
`;

const STokenLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  & img {
    width: 50px;
    height: 50px;
    margin: 30px;
  }
`;

const SImageWrapper = styled.div`
  & img {
    width: 100%;
  }
`;

const layoutTheme = {
  fontWeight: '400',
  linkColor: colors.lightGrey,
  linkHover: colors.lightGrey,
  backgroundColor: colors.darkNavyBlue,
  mobileToggleColor: colors.lightGrey,
  mobileToggleOpacity: '1',
  logoColor: colors.lightGrey,
  logoHover: colors.lightGrey
};

const IndexPage = () => (
  <div>
    <Header theme={layoutTheme} />
    <Section
      id={`balance-token-header`}
      minHeight={500}
      maxWidth={null}
      color={colors.navyBlue}
      background={<SBackgroundImage />}
    >
      <SPageHeader>
        <SStaticLogo src={ethereumLogo} alt="Ethereum" />

        <SFloatingLogo
          delay={2}
          height={49}
          top={450}
          right={1}
          opacity={1.0}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={3}
          height={45}
          top={146}
          right={25}
          opacity={1.0}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={1}
          height={87}
          top={371}
          right={75}
          opacity={1.0}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={4}
          height={49}
          top={194}
          right={133}
          opacity={0.3}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={2}
          height={82}
          top={290}
          right={245}
          opacity={0.9}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={1}
          height={26}
          top={155}
          right={367}
          opacity={0.4}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={5}
          height={30}
          top={362}
          right={394}
          opacity={1.0}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={1.5}
          height={27}
          top={117}
          left={544}
          opacity={0.7}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={2.5}
          height={72}
          top={290}
          left={370}
          opacity={0.8}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={6}
          height={49}
          top={174}
          left={327}
          opacity={1.0}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={7.5}
          height={49}
          top={337}
          left={147}
          opacity={1.0}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={3.5}
          height={28}
          top={171}
          left={98}
          opacity={1.0}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={1}
          height={16}
          top={74}
          left={37}
          opacity={1.0}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          height={96}
          top={430}
          left={-10}
          opacity={0.9}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />
      </SPageHeader>
    </Section>
    <Section id={`balance-token-intro`} minHeight={350} color={colors.navyBlue}>
      <SSectionWrapper>
        <SFlex>
          <SContainer>
            <STitle>What is an ERC-20 token?</STitle>
            <STagline>
              Right now, the most popular form of “token” is the ERC-20 token. This is a standard of
              token that lives on the Ethereum blockchain. The term ERC-20 stands for an{' '}
              <a
                href="https://github.com/ethereum/eips/issues/20"
                target="_blank"
                rel="noreferrer noopener"
              >
                Ethereum Request for Comment number 20
              </a>, which effectively means it was the 20th major improvement proposed by one of the
              Ethereum contributors.
            </STagline>
          </SContainer>
        </SFlex>
        <SFlex>
          <STokenLogos>
            <img src={aragon} alt="aragon" />
            <img src={augur} alt="augur" />
            <img src={zrx} alt="zrx" />
            <img src={district0x} alt="district0x" />
            <img src={gnosis} alt="gnosis" />
            <img src={golem} alt="golem" />
            <img src={maker} alt="maker" />
            <img src={melonport} alt="melonport" />
          </STokenLogos>
        </SFlex>
      </SSectionWrapper>
    </Section>
    <Section
      id={`balance-token-solidity`}
      minHeight={350}
      color={colors.navyBlue}
      background={<SBackgroundImageTwo />}
    >
      <SSectionWrapper>
        <SFlex>
          <SImageWrapper>
            <img src={solidityExample} alt="solidity" />
          </SImageWrapper>
        </SFlex>
        <SFlex>
          <SContainer>
            <STitle>How are they created?</STitle>
            <STagline>
              Every day, thousands of ERC-20 tokens are created on the Ethereum network by
              developers around the world. They are built with code which is then{' '}
              <a href="https://ethereum.org/token" target="_blank" rel="noreferrer noopener">
                published on Ethereum
              </a>. The code conforms to the ERC-20 standard which defines things like the number of
              tokens, ticker symbol, and how to transfer them from one wallet to another.
            </STagline>
          </SContainer>
        </SFlex>
      </SSectionWrapper>
    </Section>
    <Section id={`balance-token-info`} minHeight={350} color={colors.navyBlue}>
      <SSectionWrapper>
        <SFlex>
          <SContainer>
            <STitle>What are tokens used for?</STitle>
            <STagline>
              Tokens can represent anything: from a part of a new protocol to a share in a company.
              Today, lots of tokens are being created in{' '}
              <a
                href="https://en.wikipedia.org/wiki/Initial_coin_offering"
                target="_blank"
                rel="noreferrer noopener"
              >
                Initial Coin Offerings (ICOs)
              </a>{' '}
              where you are investing into a new project in the crypto-currency space. Each of these
              projects has a different reason for launching a token. The vast majority of them are
              useless. Some of them have the potential to be incredibly valuable.
            </STagline>
          </SContainer>
        </SFlex>
        <SFlex>
          <SContainer>
            <STitle>How can I tell if it is ERC-20?</STitle>
            <STagline>
              Although lots of tokens live on the Ethereum blockchain, many do not. Some tokens
              exist on other blockchain platforms like{' '}
              <a href="https://neo.org/" target="_blank" rel="noreferrer noopener">
                Neo
              </a>,{' '}
              <a href="http://www.omnilayer.org/" target="_blank" rel="noreferrer noopener">
                Omni
              </a>,{' '}
              <a href="https://nxtplatform.org/" target="_blank" rel="noreferrer noopener">
                Nxt
              </a>{' '}
              and{' '}
              <a href="https://www.stellar.org/" target="_blank" rel="noreferrer noopener">
                Stellar
              </a>. There are many coins that exist on their own chain. For example, Bitcoin,
              Litecoin, Ripple and Dogecoin are all coins that are totally separate. A quick way to
              find out if a token is running on Ethereum is to check{' '}
              <a href="https://coinmarketcap.com/tokens/" target="_blank" rel="noreferrer noopener">
                CoinMarketCap.com/tokens
              </a>{' '}
              and see the platform section.
            </STagline>
          </SContainer>
        </SFlex>
      </SSectionWrapper>
    </Section>
    <Section id={`balance-token-join`} minHeight={500} color={colors.navyBlue}>
      <SSectionWrapper minHeight={500}>
        <SFlex>
          <SContainer>
            <STitle>Want a wallet for your ERC-20 tokens?</STitle>
            <SSubTitle>Want to get into the private beta?</SSubTitle>
            <SViralLoops
              type="button"
              className="vrlps-trigger"
              data-toggle="modal"
              data-target="#vl_popup"
              onClick={() => VL.openModal()}
            >
              Join the waitlist
            </SViralLoops>
          </SContainer>
        </SFlex>
        <SFlex>
          <SImageWrapper>
            {' '}
            <img src={balanceTokenPreview} alt="Balance Ethereum Wallet" />
          </SImageWrapper>
        </SFlex>
      </SSectionWrapper>
    </Section>
    <Footer theme={layoutTheme} />
  </div>
);

export default IndexPage;
