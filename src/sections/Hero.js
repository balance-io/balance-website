import React from 'react';
import styled from 'styled-components';
import SubscribeForm from '../components/SubscribeForm';
import emailIcon from '../assets/images/email-icon.svg';
import previewDesktop from '../assets/images/balance-preview-dark-desktop.png';
import previewMobile from '../assets/images/balance-preview-dark-mobile.png';
import playButton from '../assets/images/play-button.svg';
import Section from '../components/Section';
import { fonts, colors, responsive, transitions } from '../styles';

const SSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  @media screen and (${responsive.md.max}) {
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
    margin-bottom: 60px;
  }
`;

const SPreviewWrapper = styled(SHalf)`
  align-items: center;
  justify-content: flex-end;
  ${({ mobile }) =>
    mobile
      ? `
        justify-content: center;
        margin: 90px auto;
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
  width: ${({ mobile }) => (mobile ? '414px' : '432px')};
  height: ${({ mobile }) => (mobile ? '274px' : '638px')};
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
  background: rgba(255, 255, 255, 0.4);
  -webkit-backdrop-filter: blur(10px);
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
    background-color: #fff;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

const SSubscribe = styled.div`
  max-width: 420px;
  margin-top: -20px;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SFormWrapper = styled.div`
  position: relative;
  margin-bottom: 17px;
  & img {
    position: absolute;
    height: 17px;
    left: 17px;
    top: calc(50% - 7px);
  }
`;

const SForm = styled(SubscribeForm)`
  & input {
    outline: none;
    margin: 0;
    font-size: ${fonts.large};
    padding: 18px 16px;
    width: 360px;
    border-radius: 10px;
    background: rgb(${colors.blue});
    color: rgb(${colors.white});
    padding-left: 54px;
    border: none;
    border-style: none;
  }
  & input::placeholder {
    color: rgba(${colors.white}, 0.5);
  }
  & > form > p {
    position: absolute;
    text-align: center;
  }
`;

const SHeroTitle = styled.h1`
  font-size: 2em;
  letter-spacing: -0.25px;
  margin: 40px 0 20px;
`;

const STagline = styled.p`
  font-size: 1.125em;
  color: rgb(${colors.lighterBlue});
  line-height: 1.5555555556em;
`;

const Hero = () => (
  <Section>
    <SSectionWrapper>
      <SPreviewWrapper mobile>
        <SPreview mobile img={previewMobile}>
          <SPlayButton mobile />
        </SPreview>
      </SPreviewWrapper>

      <SHalf>
        <SSubscribe>
          <SFormWrapper>
            <img src={emailIcon} alt="email" />
            <SForm />
          </SFormWrapper>

          <SHeroTitle>Get updates on Balance product releases</SHeroTitle>
          <STagline>We're building a wallet for all the world's currencies, available soon for Mac and iOS.</STagline>
        </SSubscribe>
      </SHalf>

      <SPreviewWrapper>
        <SPreview img={previewDesktop}>
          <SPlayButton />
        </SPreview>
      </SPreviewWrapper>
    </SSectionWrapper>
  </Section>
);

export default Hero;
