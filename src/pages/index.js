import React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'gatsby-link';
import Page from '../layouts/page';
import Section from '../components/Section';
import EthereumPageHeader from '../components/EthereumPageHeader';
import balanceTokenTriangles from '../assets/balance-token-triangles.svg';
import balanceTokenPreview from '../assets/balance-token-preview2-large.png';
import FancyInput from '../components/FancyInput';
import ledger from '../assets/ledger.svg';
import ledgerBody from '../assets/ledger-body.svg';
import ledgerShield from '../assets/ledger-shield.svg';
import ledgerWire from '../assets/ledger-wire.svg';
import metamaskLookUp from '../assets/metamask-look-up.png';
import walletPreview from '../assets/wallet-preview.png';
import arrowRightCircle from '../assets/arrow-right-circle.svg';
import openLetter from '../assets/open-letter.svg';
import app from '../assets/app.png';
import appBalances from '../assets/app-balances.png';
import appTransactions from '../assets/app-transactions.png';
import sendingStatus from '../assets/sending-status.png';
import sendingSpinner from '../assets/sending-spinner.png';
import sentStatus from '../assets/sent-status.png';
import cancelLabel from '../assets/cancel-label.png';
import receiveLabel from '../assets/receive-label.png';
import sendLabel from '../assets/send-label.png';
import sendModal from '../assets/send-modal.png';
import sendSymbol from '../assets/send-symbol.svg';
import tabBackground from '../assets/tab-background.png';
import tabBalances from '../assets/tab-balances.png';
import tabTransactions from '../assets/tab-transactions.png';
import ethAddress from '../assets/eth-address.png';
import tokenAmount from '../assets/token-amount.png';
import usdAmount from '../assets/usd-amount.png';
import sendMax from '../assets/send-max.png';
import feeAverage from '../assets/fee-average.png';
import feeAverageSelected from '../assets/fee-average-selected.png';
import feeFast from '../assets/fee-fast.png';
import feeFastSelected from '../assets/fee-fast-selected.png';
import backgroundArrow from '../assets/background-arrow.svg';
import backgroundArrow2 from '../assets/background-arrow-2.svg';
import backgroundArrow3 from '../assets/background-arrow-3.svg';
import balanceWalletPreview from '../assets/balance-wallet-preview.png';

import { colors, fonts, responsive } from '../styles';

const step1 = keyframes`
  0 {
    background: #657FE6;
    transform: scale(1);
  }
  20% {
    background: #546ABF;
    transform: scale(0.88);
  }
  100% {
    background: #657FE6;
    transform: scale(1);
  }
`;

const step2 = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.4;
  }
`;

const step3 = keyframes`
  from {
    transform: scale(.95) translateY(50px);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
`;

const step4 = keyframes`
  0 {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const step5 = keyframes`
  0 {
    transform: scale(1);
  }
  20% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
`;

const step6 = keyframes`
  0 {
    opacity: 0;
    transform: translateX(-8px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const cursor = keyframes`
  from, to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const step7 = keyframes`
  0 {
    transform: scaleX(1);
    background: #FABC2D;
    border-radius: 0 1px 1px 0;
  }
  100% {
    transform: scaleX(1.5015197568);
    background: #54D192;
    border-radius: 0;
  }
`;

const step8 = keyframes`
  from {
    background: #C0C4D1;
  }
  to {
    background: #657FE6;
  }
`;

const step9 = keyframes`
  0 {
    transform: scale(1);
  }
  20% {
    transform: scale(0.88);
  }
  100% {
    transform: scale(1);
  }
`;

const step10 = keyframes`
  0 {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const step11 = keyframes`
  0 {
    background: #657FE6;
    transform: scale(1);
  }
  20% {
    background: #546ABF;
    transform: scale(0.88);
  }
  100% {
    background: #657FE6;
    transform: scale(1);
  }
`;

const step12 = keyframes`
  0 {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-220px) scale(0.8);
    opacity: 0;
  }
`;

const step13 = keyframes`
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
`;

const step14 = keyframes`
  from {
    opacity: 0.8;
    transform: scale(1);
  }
  20% {
    opacity: 0.8;
    transform: scale(0.88);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const step15 = keyframes`
  from {
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  to {
    opacity: 0.8;
  }
`;

const step16 = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(138px);
  }
`;

const step17 = keyframes`
  from {
    opacity: 0;
    transform: translateX(18px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const step18 = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-18px);
    opacity: 0;
  }
`;

const step19 = keyframes`
  from {
    transform: translateY(18px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const step20 = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const step21 = keyframes`
  from {
    transform: translateX(-18px);
  }
  to {
    transform: translateX(0);
  }
`;

const step22 = keyframes`
  from {
    opacity: 0.8;
    transform: scale(1);
  }
  20% {
    opacity: 0.8;
    transform: scale(0.88);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const step23 = keyframes`
  from {
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  to {
    opacity: 0.8;
  }
`;

const step24 = keyframes`
  from {
    transform: translateX(138px);
  }
  to {
    transform: translateX(0);
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
    max-width: 620px;
  }
  @media screen and (${responsive.md.max}) {
    display: flex;
    align-items: left;
  }
`;

const SBackgroundArrow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  height: 0;
  background: url(${backgroundArrow}) no-repeat;
  background-size: cover;
  padding-bottom: calc(100% * 1 / 2);
  max-width: 1406px;

  @media screen and (min-width: 1406px) {
    padding-bottom: 703px;
  }
`;

const SBackgroundArrow2 = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  height: 0;
  background: url(${backgroundArrow2}) no-repeat;
  background-size: cover;
  padding-top: calc(100% * 139 / 1280);
  max-width: 1406px;

  @media screen and (min-width: 1406px) {
    padding-top: 152.6828125px;
  }
`;

const SBackgroundArrow3 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 70.3125%;
  height: 0;
  z-index: -1;
  background: url(${backgroundArrow3}) no-repeat;
  background-size: cover;
  padding-bottom: calc(70.3125% * 1 / 2);
  max-width: 988.59375px;

  @media screen and (min-width: 1406px) {
    padding-bottom: 494.296875px;
  }
`;

const SHero = styled.div`
  // margin: 0px 0px 60px 0px;
`;

const STitle = styled.h1`
  margin: 42px auto 10px auto;
  font-family: Graphik;
  font-weight: 600 !important;
  font-size: 2em;
  color: #ffffff;
  text-align: center;
`;

const STagline = styled.p`
  margin: 0 auto;
  width: 600px;
  font-size: 1.25em;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4em;
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

const SSectionApp = SSection.extend`
  margin-top: -2px;
  overflow: visible !important;
`;

const SAppContainer = styled.div`
  position: relative;
  right: 0;
  left: 0;
  margin: 0 auto 0 auto;
  width: 938px;
  height: 621px;
  margin-bottom: 31px;
`;

const SAppBackground = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  height: 500px;
  background: #071827;
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
  opacity: 1;
  background-size: 100%;
  animation-name: ${step2}, ${step13};
  animation-duration: 0.7s, 0.7s;
  animation-delay: 2.35s, 9.5s;
  animation-fill-mode: forwards, forwards;
  animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1), ease;
`;

const SAppBalances = styled.div`
  position: absolute;
  width: 868px;
  height: 426px;
  background: url(${appBalances});
  background-size: 100%;
  animation: ${step21} 0.5s 17s cubic-bezier(0.77, 0, 0.175, 1) forwards;
`;

const SAppSectionContainer = styled.div`
  position: absolute;
  top: 131px;
  left: 35px;
  width: 868px;
  height: 426px;
  overflow: hidden;
`;

const SAppTransactions = styled.div`
  position: absolute;
  width: 868px;
  height: 426px;
  background: url(${appTransactions});
  background-size: 100%;
  opacity: 0;
  animation-name: ${step17}, ${step20};
  animation-duration: 0.5s, 0.5s;
  animation-delay: 11.35s, 17s;
  animation-fill-mode: forwards, forwards;
  animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1), cubic-bezier(0.77, 0, 0.175, 1);
`;

const SSendingStatus = styled.div`
  position: absolute;
  top: 54px;
  left: 246px;
  width: 84px;
  height: 25px;
  background: url(${sendingStatus});
  background-size: 100%;
  animation: ${step18} 0.4s 15.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
`;

const SSendingSpinner = styled.div`
  position: absolute;
  top: 7px;
  left: 65px;
  width: 13px;
  height: 12px;
  background: url(${sendingSpinner});
  background-size: 100%;
  animation: ${spin} 0.8s linear infinite;
`;

const SSentStatus = styled.div`
  position: absolute;
  top: 60px;
  left: 281px;
  width: 42px;
  height: 12px;
  background: url(${sentStatus});
  background-size: 100%;
  opacity: 0;
  animation: ${step19} 0.5s 15.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
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
  animation-name: ${step16}, ${step24};
  animation-duration: 0.5s, 0.5s;
  animation-delay: 11.35s, 17s;
  animation-fill-mode: forwards, forwards;
  animation-timing-function: ease, ease;
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
  animation-name: ${step15}, ${step22};
  animation-duration: 0.7s, 0.7s;
  animation-delay: 11s, 16.65s;
  animation-fill-mode: forwards, forwards;
  animation-timing-function: ease, ease;
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
  opacity: 0.8;
  animation-name: ${step14}, ${step23};
  animation-duration: 0.7s, 0.7s;
  animation-delay: 11s, 16.65s;
  animation-fill-mode: forwards, forwards;
  animation-timing-function: ease, ease;
`;

const SButton = styled.div`
  position: absolute;
  height: 32px;
  box-shadow: 0 5px 10px 0 rgba(59, 59, 92, 0.04), 0 0 1px 0 rgba(50, 50, 93, 0.02),
    0 3px 6px 0 rgba(0, 0, 0, 0.06), inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
  border-radius: 8px;
`;

const SButtonSend = SButton.extend`
  top: 36px;
  right: 51px;
  width: 74px;
  background: #657fe6;
  animation: ${step1} 0.7s 2s ease;

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
  background: #657fe6;

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
  animation-name: ${step3}, ${step12};
  animation-duration: 0.7s, 0.4s;
  animation-delay: 2.35s, 9.25s;
  animation-fill-mode: backwards, forwards;
  animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1), cubic-bezier(0.6, -0.28, 0.735, 0.045);
  will-change: transform;
`;

const SSendModalContents = styled.div`
  position: absolute;
  top: 21px;
  left: 0;
  width: 494px;
  height: 434px;
  background: url(${sendModal});
  background-size: 100%;
  transition: 0.8s cubic-bezier(0.19, 1, 0.22, 1);
`;

const SFakeInput = styled.div`
  position: absolute;
  height: 38px;
  background: #fff;
  border-radius: 5px;
`;

const SFakeInputAddress = SFakeInput.extend`
  top: 138px;
  left: 23px;
  width: 408px;
  opacity: 0;
  animation: ${step4} 0s 3.95s forwards;

  & div {
    position: absolute;
    top: 11px;
    left: 9px;
    width: 389px;
    height: 13px;
    background: url(${ethAddress}) no-repeat;
    background-size: 100%;
  }
`;

const SFakeInputTokenAmount = SFakeInput.extend`
  top: 226px;
  left: 23px;
  width: 158px;
  opacity: 0;
  transform: translateX(-8px);
  animation: ${step6} 0.8s 5.1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;

  & div {
    position: absolute;
    top: 12px;
    left: 10px;
    width: 92px;
    height: 15px;
    background: url(${tokenAmount}) no-repeat;
    background-size: 100%;
  }
`;

const SFakeInputUSDAmount = SFakeInput.extend`
  top: 226px;
  left: 273px;
  width: 145px;
  opacity: 0;
  transform: translateX(-8px);
  animation: ${step6} 0.8s 5.1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;

  & div {
    position: absolute;
    top: 12px;
    left: 10px;
    width: 72px;
    height: 15px;
    background: url(${usdAmount}) no-repeat;
    background-size: 100%;
  }
`;

const SInputCursor = styled.div`
  position: absolute;
  top: 147px;
  left: 33px;
  width: 1px;
  height: 18px;
  border-radius: 1px;
  background: #2f3137;
  animation: ${cursor} 1s step-end infinite;
`;

const SSendMax = styled.div`
  position: absolute;
  top: 202px;
  left: 167px;
  width: 57px;
  height: 11px;
  background: url(${sendMax}) no-repeat;
  background-size: 100%;
  animation: ${step5} 0.7s 4.75s ease;
`;

const STransactionSpeedBar = styled.div`
  position: absolute;
  top: 297px;
  left: 0;
  width: 329px;
  height: 2px;
  background: #fabc2d;
  border-radius: 0 1px 1px 0;
  transform-origin: left;
  animation: ${step7} 0.6s 6.85s cubic-bezier(0.77, 0, 0.175, 1) forwards;
`;

const SButtonSendTransaction = SButton.extend`
  top: 387px;
  right: 20px;
  width: 74px;
  background: #657fe6;
  animation-name: ${step8}, ${step11};
  animation-duration: 1.6s, 0.7s;
  animation-delay: 5.1s, 8.45s;
  animation-fill-mode: backwards, forwards;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1), ease;

  & div {
    position: absolute;
    left: 9px;
    top: 8px;
    width: 53px;
    height: 15px;
    background: url(${sendLabel}) no-repeat;
    background-size: 100%;
    pointer-events: none;
  }
`;

const SFeeAverageContainer = styled.div`
  position: absolute;
  top: 314px;
  left: 198px;
  width: 98px;
  height: 33px;
`;

const SFeeAverage = styled.div`
  position: absolute;
  width: 98px;
  height: 33px;
  background: url(${feeAverage});
  background-size: 100%;
`;

const SFeeAverageSelected = styled.div`
  position: absolute;
  width: 98px;
  height: 33px;
  background: url(${feeAverageSelected});
  background-size: 100%;
  animation: ${step10} 0.35s 6.85s ease forwards;
`;

const SFeeFastContainer = styled.div`
  position: absolute;
  top: 314px;
  left: 372px;
  width: 78px;
  height: 33px;
  animation: ${step9} 0.7s 6.5s ease;
`;

const SFeeFast = styled.div`
  position: absolute;
  width: 78px;
  height: 33px;
  background: url(${feeFast});
  background-size: 100%;
  animation: ${step10} 0.35s 6.85s ease forwards;
`;

const SFeeFastSelected = styled.div`
  position: absolute;
  width: 78px;
  height: 33px;
  background: url(${feeFastSelected});
  background-size: 100%;
`;

const SNewsletter = SSection.extend`
  max-width: 384px;
  margin: 0 auto 63px auto;

  & h3 {
    margin-bottom: 7px;
    font-size: 1.0625em;
    font-weight: 600;
    color: #FFFFFF;
    letter-spacing: 1.3px;
    text-align: center;
    text-transform: uppercase;
  }

  & p {
    margin-bottom: 29px;
    opacity: 0.8;
    font-family: Graphik-Regular;
    font-size: 1.0625em;
    color: #FFFFFF;
    text-align: center;
    line-height: 21px;
  }



  & input:focus {
    background: #fff;
  }

  & input:focus::-webkit-input-placeholder {
    color: red:
  }
`;

const SInputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 52px;
`;

const SSectionBalanceWallet = SSection.extend`
  height: 1018px;
  background #071827;
`;

const SRoundedCorners = styled.div`
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #d0d5da;
  border-radius: 10px 10px 0 0;
`;

const SHighlightFeatures = styled.div`
  width: 1000px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 71px auto 0 auto;

  & h3 {
    margin-bottom: 7px;
    font-size: 1.1875em;
    font-weight: 500;
    color: #fff;
  }
`;

const SFeatureInfo = styled.div``;

const SFeaturesLeft = styled.div``;

const SFeaturesRight = styled.div``;

const SFeatureSecurity = styled.div``;

const SFeatureERC20 = styled.div``;

const SFeatureWalletConnect = styled.div``;

const SFeatureFastEasy = styled.div``;

const SWalletPreview = styled.div`
  margin: 0 auto;
  width: 360px;
  height: 700px;
  background: url(${balanceWalletPreview});
  background-size: 100%;
`;

const IndexPage = () => (
  <Page>
    <SBackgroundArrow />
    <SSection id={`balance-token`}>
      <SSectionWrapper>
        <SColumn>
          {/*  <EthereumPageHeader />*/}
          <SHero>
            <SContainer>
              <STitle>The easiest way to manage your tokens</STitle>
              <STagline>
                Connect to your Ethereum wallet to see your ERC-20 token balances, check your
                transactions, and send tokens.
              </STagline>
              {/*<SButtonLink>
                OPEN MANAGER<img src={arrowRightCircle} alt="arrow in circle pointing right" />
              </SButtonLink>*/}
            </SContainer>
          </SHero>
        </SColumn>
      </SSectionWrapper>
    </SSection>
    <SSectionApp>
      <SBackgroundArrow2 />
      <SSectionWrapper>
        <SAppContainer>
          <SAppBackground />
          <SApp>
            <STabs>
              <STabBackground />
              <STabBalances />
              <STabTransactions />
            </STabs>
            <SAppSectionContainer>
              <SAppBalances />
              <SAppTransactions>
                <SSentStatus />
                <SSendingStatus>
                  <SSendingSpinner />
                </SSendingStatus>
              </SAppTransactions>
            </SAppSectionContainer>
            <SButtonSend>
              <div />
            </SButtonSend>
            <SButtonReceive>
              <div />
            </SButtonReceive>
          </SApp>
          <SSendModal>
            <SSendModalContents>
              <SInputCursor />
              <SFakeInputAddress>
                <div />
              </SFakeInputAddress>
              <SFakeInputTokenAmount>
                <div />
              </SFakeInputTokenAmount>
              <SFakeInputUSDAmount>
                <div />
              </SFakeInputUSDAmount>
              <SSendMax />
              <SButtonSendTransaction>
                <div />
              </SButtonSendTransaction>
              <STransactionSpeedBar />
              <SFeeAverageContainer>
                <SFeeAverage />
                <SFeeAverageSelected />
              </SFeeAverageContainer>
              <SFeeFastContainer>
                <SFeeFastSelected />
                <SFeeFast />
              </SFeeFastContainer>
            </SSendModalContents>
          </SSendModal>
        </SAppContainer>
      </SSectionWrapper>
      <SNewsletter>
        <h3>Subscribe</h3>
        <p>Get Balance product updates</p>
        <FancyInput />
      </SNewsletter>
    </SSectionApp>
    <SSectionBalanceWallet>
      <SRoundedCorners>
        <SBackgroundArrow3 />
        <SSectionWrapper>
          <SHero>
            <SContainer>
              <STitle>Balance Wallet</STitle>
              <STagline>
                Connect to your Ethereum wallet to see your ERC-20 token balances, check your
                transactions, and send tokens.
              </STagline>
              {/*<SButtonLink>
                OPEN MANAGER<img src={arrowRightCircle} alt="arrow in circle pointing right" />
              </SButtonLink>*/}
            </SContainer>
          </SHero>
          <SHighlightFeatures>
            <SFeaturesLeft>
              <SFeatureSecurity>
                <div />
                <SFeatureInfo>
                  <h3>Private and secure</h3>
                  <p>
                    Your data is synced to your device through our secure data provider, Plaid. We
                    never store it.
                  </p>
                </SFeatureInfo>
              </SFeatureSecurity>

              <SFeatureERC20>
                <h3>Test</h3>
                <p>Test</p>
              </SFeatureERC20>
            </SFeaturesLeft>

            <SWalletPreview />

            <SFeaturesRight>
              <SFeatureWalletConnect>
                <h3>Test</h3>
                <p>Test</p>
              </SFeatureWalletConnect>

              <SFeatureFastEasy>
                <h3>Test</h3>
                <p>Test</p>
              </SFeatureFastEasy>
            </SFeaturesRight>
          </SHighlightFeatures>
        </SSectionWrapper>
      </SRoundedCorners>
    </SSectionBalanceWallet>
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
