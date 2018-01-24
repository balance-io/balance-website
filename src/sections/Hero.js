import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SubscribeForm from '../components/SubscribeForm';
import homeTriangles from '../assets/triangles-mobile.svg';
import previewDesktop from '../assets/balance-preview-dark-desktop.png';
import previewMobile from '../assets/balance-preview-dark-mobile.png';
import playButton from '../assets/play-button.svg';
import Section from '../components/Section';
import { colors, responsive, transitions } from '../styles';

const SSection = styled(Section)`
  z-index: 2;
`;

const SBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 132px;
  height: 144px;
  pointer-events: none;
  display: none;
  background: url(${homeTriangles}) no-repeat;
  @media screen and (${responsive.sm.max}) {
    display: block;
  }
`;

const SSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  @media screen and (${responsive.md.max}) {
    padding: 0 34px;
    flex-direction: column;
    justify-content: center;
  }
`;

const SHalf = styled.div`
  width: 50%;
  display: flex;
  @media screen and (${responsive.md.max}) {
    justify-content: center;
    width: 100%;
    margin-bottom: 100px;
  }
`;

const SPreviewWrapper = styled(SHalf)`
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  ${({ mobile }) =>
    mobile
      ? `
        justify-content: center;
        margin: 90px auto 0;
        @media screen and (${responsive.sm.max}) {
          margin-top: 60px;
          width: calc(100% + 68px);
          margin-left: -34px;
        }
        @media screen and (${responsive.md.min}) {
          display: none;
        }
      `
      : `
        @media screen and (${responsive.md.max}) {
          display: none;
        }
      `};
`;

const SPreview = styled.div`
  width: ${({ mobile }) => (mobile ? '360px' : '396px')};
  height: ${({ mobile }) => (mobile ? '238px' : '600px')};
  background: ${({ img }) => `url(${img})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: ${transitions.base};
  &:hover > div {
    transform: scale(1.08);
  }
`;

const SPlayButton = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 258px auto;
  border-radius: 50%;
  background: rgba(${colors.white}, 0.4);
  backdrop-filter: blur(10px);
  transition: transform 0.2s;
  ${({ mobile }) => mobile && `margin-top: 100px;`};
  &:after {
    content: '';
    position: absolute;
    top: 24px;
    left: 28px;
    width: 29px;
    height: 32px;
    mask-image: url(${playButton}) no-repeat;
    -webkit-mask: url(${playButton}) no-repeat;
    background-color: rgb(${colors.white});
  }
  &:hover {
    transform: scale(1.1);
  }
  @media (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    backdrop-filter: none !important;
    background: rgb(${colors.mediumGrey}) !important;
  }
`;

const SSubscribe = styled.div`
  margin-top: -20px;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (${responsive.sm.min}) {
    max-width: 420px;
  }
  @media screen and (${responsive.md.max}) {
    margin-top: 0;
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
  margin: 40px 0 20px;
  @media screen and (${responsive.md.max}) {
    margin: 20px 0 0;
    font-size: 1.875em;
    letter-spacing: -0.2px;
  }
`;

const STagline = styled.p`
  font-size: 1.125em;
  color: rgb(${colors.lighterBlue});
  line-height: 1.5555555556em;
  @media screen and (${responsive.md.max}) {
    margin: 12px auto 0 auto;
    font-size: 1.1875em;
    line-height: 1.47em;
    color: rgba(${colors.white}, 0.8);
  }
`;

const subscribeOptions = {
  server: 'money.us11',
  userId: 'a3f87e208a9f9896949b4f336',
  listId: '38021a64b6',
  origin: ''
};

const Hero = ({ toggleVideo }) => (
  <SSection id="hero" minHeight={860} color={colors.fadedBlue} background={<SBackgroundImage />}>
    <SSectionWrapper>
      <SPreviewWrapper onClick={toggleVideo} mobile>
        <SPreview mobile img={previewMobile}>
          <SPlayButton mobile />
        </SPreview>
      </SPreviewWrapper>

      <SHalf>
        <SSubscribe>
          <SubscribeForm options={subscribeOptions} />

          <STitle>Get updates on Balance product releases</STitle>
          <STagline>
            We're building a wallet for all the world's currencies, available soon for Mac and iOS.
          </STagline>
          <STagline>Support for many other exchanges and full wallet support coming soon.</STagline>
        </SSubscribe>
      </SHalf>

      <SPreviewWrapper onClick={toggleVideo}>
        <SPreview img={previewDesktop}>
          <SPlayButton />
        </SPreview>
      </SPreviewWrapper>
    </SSectionWrapper>
  </SSection>
);

Hero.propTypes = {
  toggleVideo: PropTypes.func.isRequired
};

export default Hero;
