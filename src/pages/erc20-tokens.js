import React from 'react';
import styled from 'styled-components';
import Page from '../layouts/page';
import Section from '../components/Section';
import EthereumPageHeader from '../components/EthereumPageHeader';
import tokenSet from '../assets/token-set.png';
import solidityExample from '../assets/solidity-example.png';
import erc20vsCoin from '../assets/erc20-vs-coin.png';
import tokenUses from '../assets/token-uses.png';
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
  align-items: center;
  justify-content: center;
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
    min-height: 0;
    flex-direction: column;
    & > div:first-child {
      order: 0;
    }
    & > div:nth-child(2) {
      order: 1;
    }
    & > div {
      padding: 24px;
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
    padding: 24px;
  }
`;

const STitle = styled.h1`
  font-size: 2em;
  letter-spacing: -0.25px;
  margin: 10px 0;
  @media screen and (${responsive.md.max}) {
    font-size: 1.6em;
  }
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
  @media screen and (${responsive.md.max}) {
    font-size: 1.125em;
  }
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
  @media screen and (${responsive.md.max}) {
    font-size: 0.88em;
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

const SImageWrapper = styled.div`
  padding: 10px;
  & img {
    width: 100%;
  }
  @media screen and (${responsive.sm.min}) and (${responsive.md.max}) {
    padding: 24px;
  }
`;

const Erc20Page = ({ data, ...props }) => (
  <Page title="ERC-20 Tokens" siteTitle={data.site.siteMetadata.title}>
    <EthereumPageHeader />
    <Section center id={`balance-token-intro`} minHeight={450} color={colors.navyBlue}>
      <SSectionWrapper>
        <SFlex>
          <SContainer>
            <STitle>What is an ERC-20 token?</STitle>
            <STagline>
              The most popular form of “token” is the ERC-20 token. This is a standard of token that
              lives on the Ethereum blockchain. The term ERC-20 stands for an{' '}
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
          <SImageWrapper>
            <img src={tokenSet} alt="erc 20 tokens" />
          </SImageWrapper>
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

    <Section center id={`balance-token-utility`} minHeight={450} color={colors.navyBlue}>
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
            <SImageWrapper>
              <img src={tokenUses} alt="erc 20 token use cases" />
            </SImageWrapper>
          </SContainer>
        </SFlex>
      </SSectionWrapper>
    </Section>

    <Section center id={`balance-token-vs-coin`} minHeight={450} color={colors.navyBlue}>
      <SSectionWrapper left>
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
              <a href="https://wavesplatform.com/" target="_blank" rel="noreferrer noopener">
                Waves
              </a>
              . There are many coins that exist on their own chain. For example,{' '}
              <a href="https://bitcoin.org/en/" target="_blank" rel="noreferrer noopener">
                Bitcoin
              </a>,{' '}
              <a href="https://litecoin.com/" target="_blank" rel="noreferrer noopener">
                Litecoin
              </a>,{' '}
              <a href="https://z.cash/" target="_blank" rel="noreferrer noopener">
                Zcash
              </a>,{' '}
              <a href="https://www.stellar.org/" target="_blank" rel="noreferrer noopener">
                Stellar
              </a>,{' '}
              <a href="https://www.decred.org/" target="_blank" rel="noreferrer noopener">
                DCred
              </a>{' '}
              and{' '}
              <a href="https://www.tezos.com/" target="_blank" rel="noreferrer noopener">
                Tezos
              </a>{' '}
              are all coins that are totally separate. A quick way to find out if a token is running
              on Ethereum is to check{' '}
              <a href="https://coinmarketcap.com/tokens/" target="_blank" rel="noreferrer noopener">
                CoinMarketCap.com/tokens
              </a>{' '}
              and see the platform section.
            </STagline>
          </SContainer>
        </SFlex>

        <SFlex>
          <SContainer>
            <SImageWrapper>
              <img src={erc20vsCoin} alt="erc 20 tokens vs coins" />
            </SImageWrapper>
          </SContainer>
        </SFlex>
      </SSectionWrapper>
    </Section>

    <Section center id={`balance-token-join`} minHeight={450} color={colors.navyBlue}>
      <SSectionWrapper minHeight={450}>
        <SFlex>
          <SContainer>
            <STitle>Want a wallet for your tokens?</STitle>
            <SSubTitle>Get early access to our private beta</SSubTitle>
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
  </Page>
);

export default Erc20Page;

export const query = graphql`
  query Erc20Query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
