import React, { Component } from 'react';
import styled from 'styled-components';
import Page from '../templates/page';
import { downloadLatestRelease } from '../utils/api';
import { colors, responsive } from '../styles';

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

const SGreenButton = styled.div`
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  margin: 40px auto;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px !important;
  color: rgb(${colors.white});
  border-radius: 8px;
  text-align: center;
  background-image: linear-gradient(102deg, rgb(${colors.lightGreen}), rgb(${colors.darkGreen}));
  box-shadow: 0 2px 3px 0 rgba(${colors.black}, 0.1);
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
      <Page title={'Download'} siteTitle={siteTitle}>
        <SFlex>
          <div>
            <STitle>Balance - A secure automatic portfolio tracker</STitle>
            <STagline>
              We're building a wallet for all the world's currencies, available soon for Mac and
              iOS.
            </STagline>
            <SGreenButton onClick={this.onDownload}>Download for macOS</SGreenButton>
          </div>
        </SFlex>
      </Page>
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
