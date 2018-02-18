import React, { Component } from 'react';
import styled from 'styled-components';
import Page from '../templates/page';
import { downloadLatestRelease } from '../utils/api';
import { colors, responsive } from '../styles';

const StyledPage = styled(Page)`
  min-height: calc(100vh - 136px);
`;

const SFlex = styled.div`
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  & h1 {
    margin: 20px 0;
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
  line-height: 1.55em;
  @media screen and (${responsive.md.max}) {
    margin: 12px auto 0 auto;
    font-size: 1.1875em;
    line-height: 1.47em;
    color: rgba(${colors.white}, 0.8);
  }
`;

const SButton = styled.a`
  position: relative;
  height: 49px;
  padding: 12px !important;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  margin: 0 15px 30px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-align: center;
  background-repeat: no-repeat !important;
  background-size: 100% !important;
  background-position: center !important;
  box-shadow: 0 2px 3px 0 rgba(${colors.black}, 0.1);
  &:hover {
    transform: none;
    opacity: 1;
  }
  &:active {
    transition: 0.08s ease;
    transform: translateY(2px);
    opacity: 0.6;
  }
  @media screen and (${responsive.sm.max}) {
    margin: 0 auto 30px;
  }
`;

const SButtonDownload = styled(SButton)`
  color: rgb(${colors.white});
  background-image: linear-gradient(
    102deg,
    rgb(${colors.lightGreen}),
    rgb(${colors.darkGreen})
  ) !important;
`;

const SButtonBeta = styled(SButton)`
  background: rgb(${colors.white}) !important;
  color: rgb(${colors.dark});
`;

class Download extends Component {
  onDownload = e => {
    e.preventDefault();
    downloadLatestRelease();
    ga('send', 'event', 'Download', 'click', 'Download page - click Download');
  };
  render = () => {
    const siteTitle = this.props.data.site.siteMetadata.title;
    return (
      <StyledPage title={'Download'} siteTitle={siteTitle}>
        <SFlex>
          <div>
            <STitle>Balance - A secure automatic portfolio tracker</STitle>
            <STagline>
              Securely connect to multiple exchanges to automatically keep track of your
              cryptocurrency and token balances, currently in Public Beta for Mac and iOS.
            </STagline>
            <SButtonDownload
              href="https://github.com/balancemymoney/balance-open/releases/"
              rel="noreferrer noopener"
              target="_blank"
              onClick={this.onDownload}
            >
              Download for macOS
            </SButtonDownload>
            <SButtonBeta
              onClick={e =>
                ga('send', 'event', 'iOS Beta', 'click', 'Donwload page - click iOS Beta')
              }
              href="https://iosbeta.balance.io"
              rel="noreferrer noopener"
              target="_blank"
            >
              Sign up for iOS Beta
            </SButtonBeta>
          </div>
        </SFlex>
      </StyledPage>
    );
  };
}

export default Download;

export const query = graphql`
  query DownloadQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
