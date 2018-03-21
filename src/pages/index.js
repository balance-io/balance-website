import React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'gatsby-link';
import Page from '../layouts/page';
import Section from '../components/Section';
import EthereumPageHeader from '../components/EthereumPageHeader';
import balanceTokenTriangles from '../assets/balance-token-triangles.svg';
import balanceTokenPreview from '../assets/balance-token-preview2-large.png';
import ledger from '../assets/ledger.svg';
import ledgerBody from '../assets/ledger-body.svg';
import ledgerShield from '../assets/ledger-shield.svg';
import ledgerWire from '../assets/ledger-wire.svg';
import metamaskLookUp from '../assets/metamask-look-up.png';
import walletPreview from '../assets/wallet-preview.png';
import arrowRightCircle from '../assets/arrow-right-circle.svg';
import openLetter from '../assets/open-letter.svg';
import app from '../assets/app.png';
import cancelLabel from '../assets/cancel-label.png';
import receiveLabel from '../assets/receive-label.png';
import sendLabel from '../assets/send-label.png';
import sendModal from '../assets/send-modal.png';
import sendSymbol from '../assets/send-symbol.svg';
import tabBackground from '../assets/tab-background.png';
import tabBalances from '../assets/tab-balances.png';
import tabTransactions from '../assets/tab-transactions.png';
import wallet from '../assets/wallet.png';
import { colors, fonts, responsive } from '../styles';

const step1 = keyframes`
  0 {
    background: #5983FF;
    transform: scale(1);
  }
  20% {
    background: #546ABF;
    transform: scale(0.88);
  }
  100% {
    background: #5983FF;
    transform: scale(1);
  }
`;

const step2 = keyframes`
  0 {
    opacity: 1;
  }
  100% {
    opacity: 0.4;
  }
`;

const step3 = keyframes`
  0 {
    transform: scale(.95) translateY(50px);
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
`;

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
  @media screen and (${responsive.xl.min}) {
    top: 0;
    right: calc((100vw - 1400px) * 0.5);
    width: 700px;
  }
  @media screen and (${responsive.md.max}) {
    width: 100vw;
    height: 800px;
  }
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const SSection = styled(Section)`
  @media screen and (${responsive.md.min}) {
  }
`;

const SSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 68px;
  // min-height: 700px;
  @media screen and (${responsive.sm.min}) and (${responsive.md.max}) {
    flex-direction: column;
  }
  @media screen and (${responsive.md.max}) {
    padding: 68px 0 0;
  }
`;

const SFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${'' /* background-color: red; */} justify-content: center;
  @media screen and (${responsive.sm.max}) {
    align-items: flex-start;
  }
`;

const SColumn = SFlex.extend`
  flex-direction: column;
`;

const SContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (${responsive.sm.min}) {
    max-width: 600px;
  }
  @media screen and (${responsive.md.max}) {
    display: flex;
    align-items: left;
  }
`;

const SHero = styled.div`
  // margin: 0px 0px 60px 0px;
`;

const STitleCenter = styled.div`
  margin: 10px auto;
`;

const STitle = styled.h1`
  font-size: 2.5em;
  align: center;
  letter-spacing: -0.25px;
  @media screen and (${responsive.sm.max}) {
    font-size: 8vw;
    letter-spacing: -0.2px;
  }
`;

const STagline = styled.p`
  font-size: 1.25em;
  text-align: center;
  margin: 1em 0;
  color: rgb(${colors.lighterBlue});
  line-height: 1.6em;
  & a {
    color: rgb(${colors.blue});
  }
  @media screen and (${responsive.sm.max}) {
    font-size: 4vw;
    line-height: 1.5em;
    &:first-of-type {
      margin-top: 1em 0;
    }
  }
`;

const SPitch = styled.h4`
  font-size: 1.4em;
  text-align: left;
  letter-spacing: -0.25px;
  color: grey;
  font-weight: 400;
  margin: 0px 0px 30px 0px;
  @media screen and (${responsive.sm.max}) {
    font-size: 4.5vw;
    letter-spacing: -0.2px;
    margin: 1em 0;
  }
`;

const SButtonLink = styled.a`
  margin: 0 auto;
  background-clip: border-box;
  background-color: rgb(0, 153, 255);
  background-image: none;
  background-origin: padding-box;
  background-position-x: 0%;
  background-position-y: 0%;
  background-repeat-x: ;
  background-repeat-y: ;
  background-size: auto;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  // box-shadow:rgba(50, 50, 93, 0.11) 0px 4px 6px 0px, rgba(0, 0, 0, 0.08) 0px 1px 3px 0px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.15s ease-in-out;
  box-sizing: border-box;
  color: rgb(238, 242, 255) !important;
  cursor: pointer;
  display: inline-block;
  font-family: Camphor, 'Open Sans', 'Segoe UI', sans-serif;
  font-feature-settings: 'pnum' 1;
  font-size: 15px;
  font-style: normal;
  font-variant-numeric: proportional-nums;
  font-weight: 600;
  height: 40px;
  letter-spacing: 0.375px;
  line-height: 40px;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  outline-color: rgb(103, 114, 229);
  outline-style: none;
  outline-width: 0px;
  padding-bottom: 0px;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 0px;
  text-align: left;
  text-decoration-color: rgb(103, 114, 229);
  text-decoration-line: none;
  text-decoration-style: solid;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
  text-transform: uppercase;
  white-space: nowrap;
  width: auto;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  // position: relative;

  > img {
    //ask pedro how to position this correctly
    // position: absolute;
    margin: 0px 0px 0px 8px;
    // bottom: -2px;
  }
  // &::after {
  //   box-shadow: 0 5px 15px 2px rgba(0, 0, 0, 0.1);
  //   opacity: 0;
  //   transition: opacity 0.3s ease-in-out;
  // }
  //
  // &:hover::after {
  //   opacity: 1;
  // }

  &:hover,
  &:focus,
  &:active,
  &:hover::after {
    // box-shadow: 0 3px 8px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3);
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
    transition: all 0.15s ease;
    opacity: 1;
  }

  &:hover::before,
  &:focus::before,
  &:active::before {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
    transition: all 0.15s ease;
  }
`;

const SSignupContainer = styled.div`
  width: 100%;
  min-width: 980px
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: left;
  border-radius: 15px;
  border-top: 6px solid #5983ff;
  margin: 10px;
  overflow: hidden;
  align-items: flex-start;
  z-index: 1;

  &:hover ${SLedgerWire} {
    transform: translate3D(35px, 0, 0);
  }

  &:hover ${SLedgerShield} {
    transform-origin: 166px 28px;
    transform: rotate3D(0, 0, 50, 50deg);
  }

  &:hover ${SLedgerBody} {
    transform: translate3D(0, 0, 0);
  }

  @media screen and (${responsive.sm.min}) {
    max-width: 550px;
  }
  @media screen and (${responsive.md.max}) {
    display: flex;
    align-items: center;
  }
`;

const SLedger = styled.div`
  width: 280px;
  order: 3;
  height: 200px;
  background: red;
`;

const SLedgerWire = styled.div`
  background-image: url(${ledgerWire});
  background-repeat: no-repeat;
  width: 144px;
  height: 31px;
  position: absolute;
  bottom: 62px;
  left: -90px;

  transform: translate3D(0, 0, 0);
  transition: all 0.3s ease;
  // transition-delay: 0.5s;
`;

const SLedgerBody = styled.div`
  width: 185px;
  height: 57px;
  position: absolute;
  background-image: url(${ledgerBody});
  background-repeat: no-repeat;
  background-position: center right;
  position: absolute;
  bottom: 50px;
  left: 70px;
  transition: all 0.3s ease;
`;

const SLedgerShield = styled.div`
  background-image: url(${ledgerShield});
  background-repeat: no-repeat;
  width: 195px;
  height: 56px;
  position: absolute;
  bottom: 50px;
  left: 60px;

  transition: transform 0.15s ease-in;
  transform-origin: 166px 28px;
  transform: rotate3D(0, 0, 0, 0deg);
`;

const SPitchTextContainer = styled.div`
  display: flex;
  background-color: green;
`;

const SPitchImageContainer = styled.div`
  width: 100%;
  position: relative;
`;

const SAppContainer = styled.div`
  position: relative;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 938px;
  height: 621px;
`;

const SApp = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 938px;
  height: 621px;
  background: url(${app});
  background-size: 100%;
  animation: ${step2} 0.7s 2.35s forwards cubic-bezier(0.19, 1, 0.22, 1);
`;

const STabs = styled.div`
  position: absolute;
  top: 85px;
  left: 35px;
  width: 272px;
  height: 92px;
  overflow: hidden;
`;

const STabBackground = styled.div`
  position: absolute;
  top: 0;
  left: -47px;
  width: 181px;
  height: 46px;
  background: url(${tabBackground});
  background-size: 100%;
  background-repeat: no-repeat;
`;

const STabBalances = styled.div`
  position: absolute;
  left: 20px;
  top: 19px;
  width: 75px;
  height: 14px;
  background: url(${tabBalances});
  background-size: 100%;
  background-repeat: no-repeat;
`;

const STabTransactions = styled.div`
  position: absolute;
  left: 129px;
  top: 19px;
  width: 104px;
  height: 13px;
  background: url(${tabTransactions});
  background-size: 100%;
  background-repeat: no-repeat;
  opacity: ${props => (props.inactive ? 0.8 : 1)};
`;

const SButton = styled.div`
  position: absolute;
  height: 32px;
  /* box-shadow: 0 1px 3px 0 rgba(2,2,3,.06), 0 2px 6px 0 rgba(2,2,3,.04); */
  box-shadow: 0 5px 10px 0 rgba(59, 59, 92, 0.04), 0 0 1px 0 rgba(50, 50, 93, 0.02),
    0 3px 6px 0 rgba(0, 0, 0, 0.06), inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
  border-radius: 8px;
`;

const SButtonSend = SButton.extend`
  top: 36px;
  right: 51px;
  width: 74px;
  background: #5983ff;
  animation: ${step1} 0.7s 2s ease;

  &:active {
    background: #5076e6;
  }

  & div {
    position: absolute;
    left: 9px;
    top: 8px;
    width: 53px;
    height: 15px;
    background: url(${sendLabel});
    background-size: 100%;
    background-repeat: no-repeat;
    pointer-events: none;
  }
`;

const SButtonReceive = SButton.extend`
  top: 36px;
  right: 133px;
  width: 95px;
  background: #5983ff;

  &:active {
    background: #5076e6;
  }

  & div {
    position: absolute;
    left: 9px;
    top: 8px;
    width: 74px;
    height: 15px;
    background: url(${receiveLabel});
    background-size: 100%;
    background-repeat: no-repeat;
    pointer-events: none;
  }
`;

const SSendModal = styled.div`
  position: absolute;
  top: 63px;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 494px;
  height: 465px;
  background: #f5f6fa;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15), 0 15px 35px 0 rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  /* transition: .4s cubic-bezier(0.19, 1, 0.22, 1); */
  animation: ${step3} 0.7s 2.35s forwards cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  transform: scale(0.95) translateY(50px);
  opacity: 0;
`;

const SSendModalContents = styled.div`
  position: absolute;
  top: 21px;
  left: 0;
  width: 494px;
  height: 426px;
  background: url(${sendModal});
  background-size: 100%;
  transition: 0.8s cubic-bezier(0.19, 1, 0.22, 1);
`;

const SCancel = styled.div`
  position: absolute;
  bottom: 8px;
  right: 103px;
  width: 68px;
  height: 30px;
  background: #71778a;
  box-shadow: 0 1px 3px 0 rgba(2, 2, 3, 0.06), 0 2px 6px 0 rgba(2, 2, 3, 0.04);
  border-radius: 6px;
  cursor: pointer;

  &:active {
    background: #606575;
  }

  & div {
    position: absolute;
    left: 11px;
    top: 9px;
    width: 46px;
    height: 12px;
    background: url(${cancelLabel});
    background-size: 100%;
    background-repeat: no-repeat;
    pointer-events: none;
  }
`;

const IndexPage = () => (
  <Page>
    <SSection
      id={`balance-token`}
      // minHeight={700}
      color={colors.navyBlue}
      background={<SBackgroundImage />}
    >
      <SSectionWrapper>
        <SColumn>
          {/*  <EthereumPageHeader />*/}
          <SHero>
            <SContainer>
              <STitleCenter>
                <STitle>Manage Your Tokens</STitle>
              </STitleCenter>
              <STagline>
                Connect to your {'\n'}{' '}
                {/*ask pedro why this doesn't work: https://stackoverflow.com/questions/32469570/how-can-i-insert-a-line-break-into-a-text-component-in-react-native/40714065*/}
                <a href="https://ethereum.org" target="_blank" rel="noreferrer noopener">
                  Ethereum wallet{' '}
                </a>
                to see your <Link to="/erc20-tokens">ERC-20 token</Link> balances, check your
                transactions, and send tokens.
              </STagline>
              <SButtonLink>
                OPEN MANAGER<img src={arrowRightCircle} alt="arrow in circle pointing right" />
              </SButtonLink>
            </SContainer>
          </SHero>
        </SColumn>
      </SSectionWrapper>
    </SSection>

    <SSection>
      <SSectionWrapper>
        <SAppContainer>
          <SApp>
            <STabs>
              <STabBackground />
              <STabBalances />
              <STabTransactions />
              {/* How to make inactive */}
            </STabs>
            <SButtonSend>
              <div />
            </SButtonSend>
            <SButtonReceive>
              <div />
            </SButtonReceive>
          </SApp>
          <SSendModal>
            <SSendModalContents>
              <SCancel>
                <div />
              </SCancel>
            </SSendModalContents>
          </SSendModal>
        </SAppContainer>
      </SSectionWrapper>
    </SSection>

    {/* <SSectionWrapper>
      <SFlex>
        <SSignupContainer>
          <SPitchImageContainer>
            <SLedger>
              <SLedgerWire />
              <SLedgerBody />
              <SLedgerShield />
            </SLedger>
          </SPitchImageContainer>
          <SPitchTextContainer>
            <SPitch>Ledger support & mobile wallet coming soon.</SPitch>
          </SPitchTextContainer>
        </SSignupContainer>
      </SFlex>
    </SSectionWrapper> */}
  </Page>
);

export default IndexPage;
