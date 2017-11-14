import React, { Component } from 'react';
import styled from 'styled-components';
import Page from '../templates/page';
import { downloadLatestRelease } from '../utils/api';
import { colors } from '../styles';

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
  };
  render = () => {
    const siteTitle = this.props.data.site.siteMetadata.title;
    return (
      <Page title={'Download'} siteTitle={siteTitle} notArticle>
        <SFlex>
          <div>
            <h1>Download Balance Open for macOS</h1>
            <SGreenButton onClick={this.onDownload}>Download</SGreenButton>
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
