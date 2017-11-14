import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Page from '../templates/page';
import { colors } from '../styles';

const SFlex = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  & h1 {
    margin: 20px;
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
    const api = axios.create({
      baseURL: 'https://wt-863e332a77d038d29fa50d15961b5367-0.run.webtask.io',
      timeout: 20000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
    api
      .post('/github-latest-release', {
        owner: 'balancemymoney',
        repo: 'balance-open'
      })
      .then(({ data }) => {
        const url = data.assets[0].browser_download_url;
        const link = document.createElement('a');
        document.body.appendChild(link);
        link.href = url;
        link.click();
        link.remove();
      });
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
