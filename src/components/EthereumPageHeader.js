import React from "react";
import styled, { keyframes } from "styled-components";
import Section from "../components/Section";
import ethereumLogo from "../assets/ethereum-logo.png";
import { responsive } from "../styles";

const floating = keyframes`
  0%, 100% { transform: translateY(10%); }
  45%, 55%  { transform: translateY(0); }
`;

const SPageHeader = styled.div`
  width: 100%;
  height: 350px;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (${responsive.sm.max}) {
    height: 100vw;
    max-height: 350px;
  }
`;

const SStaticLogo = styled.img`
  position: absolute;
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  left: ${({ height }) =>
    height ? `calc(50% - ((${height}px * 0.614) / 2))` : "50%"};
  top: ${({ top }) => (top ? `${top}px` : "auto")};
`;

const SFloatingLogo = styled.img`
  position: absolute;
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  top: ${({ top }) => (top ? `${top}px` : "auto")};
  bottom: ${({ bottom }) => (bottom ? `${bottom}px` : "auto")};
  opacity: ${({ opacity }) => (opacity ? opacity : "1.0")};
  left: ${({ left, windowSize }) =>
    left ? `${Number((left / windowSize) * 100).toFixed(2)}%` : "auto"};
  right: ${({ right, windowSize }) =>
    right ? `${Number((right / windowSize) * 100).toFixed(2)}%` : "auto"};
  animation: ${({ delay }) =>
    delay
      ? `${floating} 4s -${delay}s infinite`
      : `${floating} 4s -1s infinite`};
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
  <Section id={`balance-token-header`} minHeight={350} maxWidth={null}>
    <SPageHeader>
      <SMobile>
        <SStaticLogo
          height={189}
          top={112}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />

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
        <SStaticLogo
          height={189}
          top={48}
          src={ethereumLogo}
          alt="Ethereum Logo"
        />

        <SFloatingLogo
          delay={2}
          height={49}
          top={50}
          right={1}
          opacity={1.0}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={3}
          height={45}
          top={86}
          right={175}
          opacity={1.0}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={1}
          height={87}
          top={111}
          right={75}
          opacity={1.0}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={4}
          height={49}
          top={94}
          right={343}
          opacity={0.3}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={2}
          height={82}
          top={140}
          right={245}
          opacity={0.9}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={1}
          height={26}
          top={55}
          right={367}
          opacity={0.4}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={5}
          height={30}
          top={22}
          right={294}
          opacity={1.0}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={1.5}
          height={27}
          top={117}
          left={444}
          opacity={0.4}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={2.5}
          height={72}
          top={180}
          left={370}
          opacity={0.8}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={6}
          height={49}
          top={74}
          left={387}
          opacity={0.6}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={7.5}
          height={49}
          top={87}
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
          left={148}
          opacity={1.0}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          delay={1}
          height={16}
          top={74}
          left={117}
          opacity={0.5}
          src={ethereumLogo}
          windowSize={1280}
          alt="Ethereum Logo"
        />
        <SFloatingLogo
          height={96}
          top={80}
          left={240}
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
