import React from 'react';
import styled, { keyframes } from 'styled-components';
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
  @media screen and (${responsive.sm.max}) {
    height: 100vw;
    max-height: 400px;
  }
`;

const SStaticLogo = styled.img`
  position: absolute;
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  left: ${({ height }) => (height ? `calc(50% - ((${height}px * 0.614) / 2))` : '50%')};
  top: ${({ top }) => (top ? `${top}px` : 'auto')};
`;

const SFloatingLogo = styled.img`
  position: absolute;
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  top: ${({ top }) => (top ? `${top}px` : 'auto')};
  bottom: ${({ bottom }) => (bottom ? `${bottom}px` : 'auto')};
  opacity: ${({ opacity }) => (opacity ? opacity : '1.0')};
  left: ${({ left, windowSize }) =>
    left ? `${Number(left / windowSize * 100).toFixed(2)}%` : 'auto'};
  right: ${({ right, windowSize }) =>
    right ? `${Number(right / windowSize * 100).toFixed(2)}%` : 'auto'};
  animation: ${({ delay }) =>
    delay ? `${floating} 4s -${delay}s infinite` : `${floating} 4s -1s infinite`};
`;

const SMobile = styled.div`
  @media screen and (${responsive.sm.min}) {
    display: none;
  }
`;

const SDesktop = styled.div`
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const EthereumPageHeader = () => (
  <Section
    id={`balance-token-header`}
    minHeight={500}
    maxWidth={null}
    color={colors.navyBlue}
    background={<SBackgroundImage />}
  >
    <SPageHeader>
      <SMobile>
        <SStaticLogo height={189} top={112} src={ethereumLogo} alt="Ethereum Logo" />

        <SFloatingLogo
          height={82}
          top={147}
          right={28}
          opacity={0.9}
          windowSize={375}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          height={33}
          top={268}
          right={78}
          opacity={0.5}
          windowSize={375}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          height={33}
          top={87}
          right={112}
          opacity={0.5}
          windowSize={375}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          height={45}
          top={259}
          left={85}
          opacity={0.9}
          windowSize={375}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          height={45}
          top={112}
          left={45}
          opacity={0.9}
          windowSize={375}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          height={33}
          top={237}
          left={33}
          opacity={0.5}
          windowSize={375}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />
      </SMobile>
      <SDesktop>
        <SStaticLogo height={189} top={248} src={ethereumLogo} alt="Ethereum Logo" />

        <SFloatingLogo
          delay={2}
          height={49}
          top={450}
          right={1}
          opacity={1.0}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={3}
          height={45}
          top={146}
          right={25}
          opacity={1.0}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={1}
          height={87}
          top={371}
          right={75}
          opacity={1.0}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={4}
          height={49}
          top={194}
          right={133}
          opacity={0.3}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={2}
          height={82}
          top={290}
          right={245}
          opacity={0.9}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={1}
          height={26}
          top={155}
          right={367}
          opacity={0.4}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={5}
          height={30}
          top={362}
          right={394}
          opacity={1.0}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={1.5}
          height={27}
          top={117}
          left={544}
          opacity={0.7}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={2.5}
          height={72}
          top={290}
          left={370}
          opacity={0.8}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={6}
          height={49}
          top={174}
          left={327}
          opacity={1.0}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={7.5}
          height={49}
          top={337}
          left={147}
          opacity={1.0}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={3.5}
          height={28}
          top={171}
          left={98}
          opacity={1.0}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={1}
          height={16}
          top={74}
          left={37}
          opacity={1.0}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          height={96}
          top={430}
          left={-10}
          opacity={0.9}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
      </SDesktop>
    </SPageHeader>
  </Section>
);

export default EthereumPageHeader;
