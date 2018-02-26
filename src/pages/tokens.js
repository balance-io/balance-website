import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import ethereumLogo from '../assets/ethereum-logo.png';
import balanceTokenTriangles from '../assets/balance-token-triangles.svg';
import { colors, responsive } from '../styles';

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

const SSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 700px;
  @media screen and (${responsive.sm.min}) and (${responsive.md.max}) {
    flex-direction: column;
  }
  @media screen and (${responsive.md.max}) {
    min-height: calc(100vh - 68px);
    padding: 68px 0 0;
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

const SRight = styled(SFlex)`
  position: relative;
  transform: translate3d(calc((100vw - 1024px)*0.3), 0, 0);
  @media screen and (${responsive.xl.min}) {
    transform: translate3d(114px, 0, 0);
  }
  @media screen and (${responsive.md.max}) {
    display: none;
  }
  @media screen and (${responsive.sm.max}) {
    display: none;
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
  font-size: 2.5em;
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
  margin: 40px 0 10px;
  @media screen and (${responsive.sm.max}) {
    font-size: 4.5vw;
    letter-spacing: -0.2px;
    margin: 1em 0;
  }
`;

const STagline = styled.p`
  font-size: 1.25em;
  color: rgb(${colors.lighterBlue});
  line-height: 1.4em;
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
    <Section id={`balance-token-intro`} minHeight={700} color={colors.navyBlue}>
      <SSectionWrapper>
        <SFlex>
          <SContainer>
            <STitle>A place for your tokens</STitle>
            <STagline>Buy, store and secure Ethereum-based tokens.</STagline>
            <STagline>
              A wallet that supports{' '}
              <a
                href="https://hackernoon.com/erc20-tokens-b3b50c95ad08"
                target="_blank"
                rel="noreferrer noopener"
              >
                ERC-20
              </a>{' '}
              &{' '}
              <a
                href="https://medium.com/crypto-currently/the-anatomy-of-erc721-e9db77abfc24"
                target="_blank"
                rel="noreferrer noopener"
              >
                ERC-721
              </a>.
            </STagline>
            <SSubTitle>Want to get into the private beta?</SSubTitle>
          </SContainer>
        </SFlex>
        <SRight />
      </SSectionWrapper>
    </Section>
    <Footer theme={layoutTheme} />
  </div>
);

export default IndexPage;
