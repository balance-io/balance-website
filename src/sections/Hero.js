import React, { Component } from 'react';
import styled from 'styled-components';
import SubscribeForm from '../components/SubscribeForm';
import emailIcon from '../assets/images/email-icon.svg';
import homeTriangles from '../assets/images/triangles-mobile.svg';
import previewDesktop from '../assets/images/balance-preview-dark-desktop.png';
import previewMobile from '../assets/images/balance-preview-dark-mobile.png';
import playButton from '../assets/images/play-button.svg';
import Section from '../components/Section';
import { fonts, colors, responsive, transitions } from '../styles';

const SSection = styled(Section)`z-index: 2;`;

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
  & p {
    position: absolute;
    text-align: center;
    margin-top: 10px;
  }
`;

const SHeroTitle = styled.h1`
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

const SVideoContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0 10%;
  z-index: 1000;
  background: rgba(${colors.dark}, 0.3);
  transition: opacity 0.225s cubic-bezier(0, 0, 0.2, 1);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
  will-change: transform;
  ${({ show }) =>
    show &&
    `
    & > div {
      transition: .225s cubic-bezier(0.19, 1, 0.22, 1);
      transform: scale(1.0) translateY(0);
    }
  `};
  @media screen and (${responsive.md.max}) {
    padding: 0 5%;
  }
`;

const SVideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  width: 100%;
  margin: 0 auto;
  height: 0;
  will-change: transform;
  background: #090c0f;
  @media screen and (${responsive.sm.max}) {
    padding-bottom: 177.77%;
  }
  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

class Hero extends Component {
  state = {
    showVideo: false
  };
  toggleVideo = () => {
    const command = this.state.showVideo ? 'pauseVideo' : 'playVideo';
    this.setState({ showVideo: !this.state.showVideo });
    this.iframe.contentWindow.postMessage(`{"event":"command","func":"${command}","args":""}`, '*');
  };
  render = () => (
    <SSection id="hero" minHeight={860} color={colors.fadedBlue} background={<SBackgroundImage />}>
      <SSectionWrapper>
        <SPreviewWrapper onClick={this.toggleVideo} mobile>
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

        <SPreviewWrapper onClick={this.toggleVideo}>
          <SPreview img={previewDesktop}>
            <SPlayButton />
          </SPreview>
        </SPreviewWrapper>

        <SVideoContainer show={this.state.showVideo} onClick={this.toggleVideo}>
          <SVideoWrapper>
            <iframe
              ref={c => (this.iframe = c)}
              title="wefunder-youtube"
              src={
                typeof window !== 'undefined' ? window.innerWidth > 640 ? (
                  'https://www.youtube.com/embed/05w-S5gY0Y4?enablejsapi=1&showinfo=0&rel=0&color=white'
                ) : (
                  'https://www.youtube.com/embed/c4UGoACmhUE?enablejsapi=1&showinfo=0&rel=0&color=white'
                ) : null
              }
              allowFullScreen
              frameBorder="0"
            />
          </SVideoWrapper>
        </SVideoContainer>
      </SSectionWrapper>
    </SSection>
  );
}

export default Hero;
