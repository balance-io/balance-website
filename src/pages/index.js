import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Hero from '../sections/Hero';
import BalanceOpen from '../sections/BalanceOpen';
import BalanceIOS from '../sections/BalanceIOS';
import { colors, responsive } from '../styles';

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
  cursor: pointer;
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

const layoutTheme = {
  fontWeight: '400',
  linkColor: colors.lightBlue,
  linkHover: colors.lightBlue,
  mobileToggleColor: colors.lightGrey,
  mobileToggleOpacity: '1',
  logoColor: colors.lightBlue,
  logoHover: colors.lightBlue
};

class IndexPage extends Component {
  state = {
    showVideo: false
  };
  toggleVideo = () => {
    const command = this.state.showVideo ? 'pauseVideo' : 'playVideo';
    this.setState({ showVideo: !this.state.showVideo });
    this.iframe.contentWindow.postMessage(`{"event":"command","func":"${command}","args":""}`, '*');
  };
  render = () => (
    <div>
      <Header theme={layoutTheme} />
      <Hero toggleVideo={this.toggleVideo} />
      <BalanceOpen />
      <BalanceIOS />
      <SVideoContainer show={this.state.showVideo} onClick={this.toggleVideo}>
        <SVideoWrapper>
          <iframe
            ref={c => (this.iframe = c)}
            title="wefunder-youtube"
            src={
              typeof window !== 'undefined'
                ? window.innerWidth > 640
                  ? 'https://www.youtube.com/embed/05w-S5gY0Y4?enablejsapi=1&showinfo=0&rel=0&color=white'
                  : 'https://www.youtube.com/embed/c4UGoACmhUE?enablejsapi=1&showinfo=0&rel=0&color=white'
                : null
            }
            allowFullScreen
            frameBorder="0"
          />
        </SVideoWrapper>
      </SVideoContainer>
    </div>
  );
}

export default IndexPage;
