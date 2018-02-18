import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import SubscribeForm from '../components/SubscribeForm';
import TokenAnimation from '../components/TokenAnimation';
import balanceTokenIcon from '../assets/balance-token-icon.svg';
import balanceTokenTriangles from '../assets/balance-token-triangles.svg';
import { colors, responsive } from '../styles';

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
    right: calc((100vw - 1400px)*0.5);
    width: 700px;
    height: 700px;
  }
  @media screen and (${responsive.md.max}) {
    display: none;
  }
`;

const SSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 700px;
  margin-bottom: calc(100vh - 768px);
  @media screen and (${responsive.md.max}) {
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (${responsive.sm.max}) {
    padding: 68px 34px 80px;
  }
`;

const SAppIcon = styled.div`
  margin-bottom: 10px;
  width: 60px;
  height: 60px;
  background: url(${balanceTokenIcon}) no-repeat;
  background-size: 100% 100%;
  @media screen and (${responsive.sm.max}) {
    width: 40px;
    height: 40px;
  }
`;

const SContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: ${({ hide }) => (hide ? 0 : 1)};
  @media screen and (${responsive.sm.min}) {
    max-width: 550px;
  }
  @media screen and (${responsive.md.max}) {
    margin-top: 0;
  }
  @media screen and (${responsive.sm.min}) and (${responsive.md.max}) {
    display: flex;
    align-items: center;
    text-align: center;
  }
  @media screen and (${responsive.sm.max}) {
    padding-top: 40px;
  }
`;

const STitle = styled.h1`
  font-size: 2.5em;
  letter-spacing: -0.25px;
  margin: 10px 0;
  @media screen and (${responsive.sm.max}) {
    font-size: 1.85em;
    letter-spacing: -0.2px;
  }
`;

const SSubTitle = styled.h2`
  font-size: 1.4em;
  letter-spacing: -0.25px;
  font-weight: 400;
  margin: 40px 0 10px;
  @media screen and (${responsive.sm.max}) {
    font-size: 1.1em;
    margin: 20px 0 10px;
    letter-spacing: -0.2px;
  }
`;

const STagline = styled.p`
  font-size: 1.25em;
  color: rgb(${colors.lighterBlue});
  line-height: 1.4em;
  @media screen and (${responsive.sm.max}) {
    margin-top: 12px;
    font-size: 1em;
    line-height: 1.2em;
    color: rgba(${colors.white}, 0.8);
  }
`;

const SFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SRight = styled(SFlex)`
  position: relative;
  transform: translate3d(calc((100vw - 1024px)*0.3), 0, 0);
  @media screen and (${responsive.xl.min}) {
    transform: translate3d(114px, 0, 0);
  }
`;

const subscribeOptions = {
  server: 'money.us11',
  userId: 'a3f87e208a9f9896949b4f336',
  listId: '38021a64b6',
  origin: '',
  callback: (error, result) => {
    if (error) return;
    ga('send', 'event', 'Mailchimp', 'subscribe', `Homepage - subscribe ${result.email}`);
  }
};

const BalanceToken = () => (
  <Section
    id={`balance-token`}
    minHeight={700}
    color={colors.navyBlue}
    background={<SBackgroundImage />}
  >
    <SSectionWrapper>
      <SFlex>
        <SContainer>
          <SAppIcon />
          <STitle>A place for your tokens</STitle>
          <STagline>Buy, store and secure Ethereum-based tokens.</STagline>
          <STagline>A wallet that supports ERC-20 & ERC-721.</STagline>
          <SSubTitle>2,530 are on the waitlist. Want to join?</SSubTitle>
          <SubscribeForm options={subscribeOptions} />
        </SContainer>
      </SFlex>
      <SRight>
        <TokenAnimation />
      </SRight>
    </SSectionWrapper>
  </Section>
);

export default BalanceToken;
