import React from 'react';
import styled, { keyframes } from 'styled-components';
import Page from '../layouts/page';
import Section from '../components/Section';
import SubscribeForm from '../components/SubscribeForm';
import app from '../assets/app.png';
import appStatic from '../assets/app-static.png';
import appBalances from '../assets/app-balances.png';
import appTransactions from '../assets/app-transactions.png';
import sendingStatus from '../assets/sending-status.png';
import sendingSpinner from '../assets/sending-spinner.png';
import sentStatus from '../assets/sent-status.png';
import receiveLabel from '../assets/receive-label.png';
import sendLabel from '../assets/send-label.png';
import sendModal from '../assets/send-modal.png';
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
import backgroundArrowMobile from '../assets/background-arrow-mobile.svg';
import backgroundArrow2 from '../assets/background-arrow-2.svg';
import backgroundArrow3 from '../assets/background-arrow-3.svg';
import balanceWalletPreview from '../assets/balance-wallet-preview.png';
import featurePrivate from '../assets/feature-private.svg';
import featureERC20 from '../assets/feature-erc20.svg';
import featureWalletConnect from '../assets/feature-walletconnect.svg';
import featureFast from '../assets/feature-fast.svg';

import { colors, responsive } from '../styles';

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

  @media screen and (${responsive.sm.max}) {
    width: 662px;
    height: 662px;
    background: url(${backgroundArrowMobile}) no-repeat;
    transform: translate3d(0, 0, 0);
  }

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
  opacity: 0.2;

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
  margin: 0 auto;
`;

const STitle = styled.h1`
  margin: 42px auto 10px auto;
  font-family: Graphik;
  font-weight: 600 !important;
  font-size: 2em;
  color: #ffffff;
  text-align: center;

  @media screen and (${responsive.sm.max}) {
    margin: 27px auto 14px auto;
    padding: 0 24px;
  }

  @media screen and (${responsive.xs.max}) {
    max-width: 340px;
    font-size: 1.75em;
    line-height: 1.1428571429em;
  }
`;

const STagline = styled.p`
  margin: 0 auto;
  padding: 0 24px;
  max-width: 648px;
  font-size: 1.25em;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4em;
  & a {
    color: rgb(${colors.blue});
  }
  @media screen and (${responsive.sm.max}) {
    max-width: 400px;
    font-size: 1.1875em;
    line-height: 1.4210526316em;
    &:first-of-type {
      margin-top: 1em 0;
    }
  }
`;

const SSectionApp = SSection.extend`
  margin-top: -2px;
  overflow: visible !important;
`;

const SAppContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 938px;
  height: 621px;
  margin-bottom: 31px;

  @media screen and (max-width: 937px) {
    display: none;
  }
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

  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const SAppStatic = styled.div`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  margin: -12px 12px 20px 12px;
  width: calc(100% - 24px);
  padding-bottom: 66.2046908316%;
  background: url(${appStatic}) no-repeat;
  opacity: 1;
  background-size: 100%;
  display: none;

  @media screen and (max-width: 937px) {
    display: block;
  }

  @media screen and (${responsive.sm.max}) {
    margin: -32px 12px 18px 12px;
  }
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
  max-width: 432px;
  margin: 0 auto 63px auto;
  padding: 0 12px;

  & h3 {
    margin-bottom: 6px;
    font-size: 1.0625em;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 1.3px;
    text-align: center;
    text-transform: uppercase;
  }

  & p {
    margin-bottom: 29px;
    opacity: 0.8;
    font-size: 1.0625em;
    color: #ffffff;
    text-align: center;
    line-height: 21px;
  }

  @media screen and (${responsive.md.max}) {
    margin: 0 auto 43px auto;
  }
`;

const SSectionBalanceWallet = SSection.extend`
  background #071827;
  padding: 0;
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

  @media screen and (${responsive.sm.max}) {
    border-radius: 12px 12px 0 0;
  }
`;

const SHeroWallet = SHero.extend`
  margin: 0 auto;
`;

const STitleWallet = STitle.extend`
  margin: 4px auto 6px auto;
  color: #313336;

  @media screen and (${responsive.lg.max}) {
    margin: -16px auto 8px auto;
  }

  @media screen and (${responsive.sm.max}) {
    margin: -26px auto 8px auto;
  }
`;

const STaglineWallet = STagline.extend`
  margin-bottom: 0;
  color: #313336;
  opacity: 0.8;
`;

const SSectionWrapperFeatures = SSectionWrapper.extend`
  padding-top: 53px;

  @media screen and (${responsive.sm.max}) {
    padding-top: 39px;
  }
`;

const SHighlightFeatures = styled.div`
  width: 970px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 0px auto 0 auto;

  & h3 {
    margin-bottom: 6px;
    font-size: 1.1875em;
    font-weight: 500;
    color: #313336;
  }

  & p {
    font-size: 0.9375em;
    color: #313336;
    opacity: 0.8;
    line-height: 1.4em;
  }

  @media screen and (${responsive.lg.max}) {
    width: 564px;
  }
`;

const SFeatureIcon = styled.div`
  margin-top: 6px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: 0 4px 6px 0 rgba(50, 50, 93, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.08),
    inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
`;

const SFeatureInfoLeft = styled.div`
  width: 180px;

  @media screen and (${responsive.lg.max}) {
    margin-right: 0;
  }
`;

const SFeatureInfoRight = styled.div`
  margin-left: 69px;
  width: 180px;
`;

const SFeaturesLeft = styled.div`
  margin: 86px 0 0 0;
  width: 249px;
  text-align: right;
  float: left;

  @media screen and (${responsive.lg.max}) {
    margin-top: 7px;
    margin-right: 32px;
  }

  @media screen and (${responsive.sm.max}) {
    margin-left: 28px;
    margin-right: 24px;
  }
`;

const SFeaturesRight = styled.div`
  margin: 216px 0 0 0;
  width: 249px;
  float: right;

  @media screen and (${responsive.lg.max}) {
    display: none;
  }
`;

const SFeatureSecurity = styled.div`
  margin-bottom: 166px;

  & ${SFeatureIcon} {
    background: #38b5a8;
    float: right;

    & div {
      margin: 12px auto 0 auto;
      width: 18px;
      height: 22px;
      background: url(${featurePrivate});
    }
  }

  @media screen and (${responsive.lg.max}) {
    margin-bottom: 42px;

    & ${SFeatureIcon} {
      position: relative;
      margin: 0 0 15px 132px;
      float: none;

      & div {
        position: absolute;
        right: 0;
        left: 0;
      }
    }
  }
`;

const SFeatureERC20 = styled.div`
  & ${SFeatureIcon} {
    background: #ea5472;
    float: right;

    & div {
      margin: 12px auto 0 auto;
      width: 30px;
      height: 24px;
      background: url(${featureERC20});
    }
  }

  @media screen and (${responsive.lg.max}) {
    margin-bottom: 42px;

    & ${SFeatureIcon} {
      position: relative;
      margin: 0 0 15px 132px;
      float: none;

      & div {
        position: absolute;
        right: 0;
        left: 0;
      }
    }
  }
`;

const SFeatureWalletConnect = styled.div`
  margin-bottom: 145px;

  & ${SFeatureIcon} {
    background: #5d9cf5;
    float: left;

    & div {
      margin: 14px auto 0 auto;
      width: 20px;
      height: 20px;
      background: url(${featureWalletConnect});
    }
  }
`;

const SFeatureWalletConnectLeft = SFeatureWalletConnect.extend`
  display: none;

  @media screen and (${responsive.lg.max}) {
    display: block;
    margin-bottom: 42px;

    & ${SFeatureIcon} {
      position: relative;
      margin: 0 0 15px 132px;
      float: none;

      & div {
        position: absolute;
        right: 0;
        left: 0;
      }
    }
  }
`;

const SFeatureFastEasy = styled.div`
  & ${SFeatureIcon} {
    background: #69768a;
    float: left;

    & div {
      margin: 11px auto 0 auto;
      width: 16px;
      height: 26px;
      background: url(${featureFast});
    }
  }
`;

const SWalletPreview = styled.div`
  margin: 0 auto 175px auto;
  min-width: 360px;
  height: 700px;
  background: url(${balanceWalletPreview}) no-repeat;
  background-size: 100%;

  @media screen and (${responsive.lg.max}) {
    margin: 0 0 150px 0;
    float: left;
  }
`;

const layoutTheme = {
  linkColor: colors.lightHeaderGrey,
  linkHover: colors.darkBackground,
  footerCopyright: colors.darkFooterLinks,
  footerDivider: colors.lightFooterDivider,
  backgroundColor: colors.darkNavyBlue,
  mobileActiveColor: colors.brightBlue,
  mobileToggleColor: colors.white,
  logoColor: colors.lightGrey,
  logoHover: colors.white
};

const IndexPage = () => (
  <Page theme={layoutTheme}>
    <SBackgroundArrow />
    <SSection id={`balance-token`}>
      <SSectionWrapper>
        <SColumn>
          {/*  <EthereumPageHeader />*/}
          <SHero>
            <SContainer>
              <STitle>The easiest way to manage your&nbsp;tokens</STitle>
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
        <SAppStatic />
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
        <h3>News</h3>
        <p>Get Balance product updates</p>
        <SubscribeForm />
      </SNewsletter>
    </SSectionApp>

    <SSectionBalanceWallet>
      <SRoundedCorners />
      <SBackgroundArrow3 />
      <SSectionWrapper>
        <SHeroWallet>
          <SContainer>
            <STitleWallet>Balance Wallet</STitleWallet>
            <STaglineWallet>
              Coming soon, a mobile Ethereum wallet for iOS and Android.
            </STaglineWallet>
            {/*<SButtonLink>
              OPEN MANAGER<img src={arrowRightCircle} alt="arrow in circle pointing right" />
            </SButtonLink>*/}
          </SContainer>
        </SHeroWallet>
      </SSectionWrapper>
      <SSectionWrapperFeatures>
        <SHighlightFeatures>
          <SFeaturesLeft>
            <SFeatureSecurity>
              <SFeatureIcon>
                <div />
              </SFeatureIcon>
              <SFeatureInfoLeft>
                <h3>Private and secure</h3>
                <p>
                  The keys to your tokens are securely stored on your phone, giving you full control
                  of your own digital assets.
                </p>
              </SFeatureInfoLeft>
            </SFeatureSecurity>

            <SFeatureERC20>
              <SFeatureIcon>
                <div />
              </SFeatureIcon>
              <SFeatureInfoLeft>
                <h3>Simple exchange</h3>
                <p>
                  Buy and store dozens of tokens using our simple token trading interface powered by
                  <a href="http://shapeshift.io" target="_blank" rel="noopener noreferrer">
                    ShapeShift
                  </a>,{' '}
                  <a href="https://0xproject.com" target="_blank" rel="noopener noreferrer">
                    0x
                  </a>,{' '}
                  <a href="https://oasis.direct" target="_blank" rel="noopener noreferrer">
                    Oasis
                  </a>{' '}
                  &
                  <a href="https://kyber.network" target="_blank" rel="noopener noreferrer">
                    Kyber
                  </a>.
                </p>
              </SFeatureInfoLeft>
            </SFeatureERC20>

            <SFeatureWalletConnectLeft>
              <SFeatureIcon>
                <div />
              </SFeatureIcon>
              <SFeatureInfoLeft>
                <h3>WalletConnect</h3>
                <p>
                  Interact with dapps on the web using the built-in QR code scanner. This is powered
                  by the
                  <a href="http://walletconnect.org" target="_blank" rel="noopener noreferrer">
                    WalletConnect
                  </a>{' '}
                  standard.
                </p>
              </SFeatureInfoLeft>
            </SFeatureWalletConnectLeft>
          </SFeaturesLeft>

          <SWalletPreview />

          <SFeaturesRight>
            <SFeatureWalletConnect>
              <SFeatureIcon>
                <div />
              </SFeatureIcon>
              <SFeatureInfoRight>
                <h3>WalletConnect</h3>
                <p>
                  Interact with dapps on the web using the built-in QR code scanner. This is powered
                  by the
                  <a href="http://walletconnect.org" target="_blank" rel="noopener noreferrer">
                    WalletConnect
                  </a>{' '}
                  standard.
                </p>
              </SFeatureInfoRight>
            </SFeatureWalletConnect>

            <SFeatureFastEasy>
              <SFeatureIcon>
                <div />
              </SFeatureIcon>
              <SFeatureInfoRight>
                <h3>Fast and easy</h3>
                <p>
                  Send and receive Ether and tokens quickly and easily. Lightning fast search and
                  transaction history.
                </p>
              </SFeatureInfoRight>
            </SFeatureFastEasy>
          </SFeaturesRight>
        </SHighlightFeatures>
      </SSectionWrapperFeatures>
    </SSectionBalanceWallet>
  </Page>
);

export default IndexPage;
