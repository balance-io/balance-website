import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import EthereumPageHeader from '../components/EthereumPageHeader';
import aragon from '../assets/tokens/aragon.svg';
import augur from '../assets/tokens/augur.svg';
import zrx from '../assets/tokens/zrx.svg';
import district0x from '../assets/tokens/district0x.svg';
import gnosis from '../assets/tokens/gnosis.svg';
import golem from '../assets/tokens/golem.svg';
import maker from '../assets/tokens/maker.svg';
import melonport from '../assets/tokens/melonport.svg';
import solidityExample from '../assets/solidity-example.png';
import balanceTokenPreview from '../assets/balance-token-preview2.png';
import balanceTokenTrianglesTwo from '../assets/balance-token-triangles2.svg';
import { colors, fonts, responsive } from '../styles';

const SBackgroundImageTwo = styled.div`
  position: absolute;
  top: -50%;
  left: 0;
  width: 50%;
  height: 200%;
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
    & > div:first-child {
      order: ${({ left }) => (left ? 1 : 0)};
      padding-left: ${({ left }) => (left ? '30px' : 0)};
    }
    & > div:nth-child(2) {
      padding-left: ${({ left }) => (left ? 0 : '30px')};
    }
  }
  @media screen and (${responsive.sm.max}) {
    flex-direction: column;
    & > div:first-child {
      order: 0;
    }
    & > div:nth-child(2) {
      order: 1;
    }
    & > div {
      padding: 34px;
    }
  }
`;

const SFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  @media screen and (${responsive.sm.min}) and (${responsive.md.max}) {
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
    font-size: 6.6vw;
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
  }
`;

const STagline = styled.p`
  font-size: 1.1em;
  color: rgb(${colors.lighterBlue});
  line-height: 1.98em;
  & a {
    color: rgb(${colors.blue});
  }
  @media screen and (${responsive.sm.max}) {
    font-size: 3.8vw;
    letter-spacing: 0.2px;
    color: rgb(${colors.lightGrey});
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
  justify-content: space-around;
  & div {
    width: 25%;
    padding: 35px;
  }
  @media screen and (${responsive.sm.max}) {
    margin: 20px auto;
    & div {
      padding: 20px;
    }
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

const Erc20Page = () => (
  <div>
    <Header theme={layoutTheme} />
    <EthereumPageHeader />
    <Section center id={`balance-token-intro`} minHeight={450} color={colors.navyBlue}>
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
            <SImageWrapper>
              <img src={aragon} alt="aragon" />
            </SImageWrapper>
            <SImageWrapper>
              <img src={augur} alt="augur" />
            </SImageWrapper>
            <SImageWrapper>
              <img src={zrx} alt="zrx" />
            </SImageWrapper>
            <SImageWrapper>
              <img src={district0x} alt="district0x" />
            </SImageWrapper>
            <SImageWrapper>
              <img src={gnosis} alt="gnosis" />
            </SImageWrapper>
            <SImageWrapper>
              <img src={golem} alt="golem" />
            </SImageWrapper>
            <SImageWrapper>
              <img src={maker} alt="maker" />
            </SImageWrapper>
            <SImageWrapper>
              <img src={melonport} alt="melonport" />
            </SImageWrapper>
          </STokenLogos>
        </SFlex>
      </SSectionWrapper>
    </Section>

    <Section
      center
      id={`balance-token-solidity`}
      minHeight={450}
      color={colors.navyBlue}
      background={<SBackgroundImageTwo />}
    >
      <SSectionWrapper left>
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

        <SFlex>
          <SImageWrapper>
            <img src={solidityExample} alt="solidity" />
          </SImageWrapper>
        </SFlex>
      </SSectionWrapper>
    </Section>

    <Section center id={`balance-token-info`} minHeight={450} color={colors.navyBlue}>
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

    <Section center id={`balance-token-join`} minHeight={450} color={colors.navyBlue}>
      <SSectionWrapper minHeight={450}>
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

export default Erc20Page;
