import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Page from '../layouts/page';
import Section from '../components/Section';
import EthereumPageHeader from '../components/EthereumPageHeader';
import balanceTokenTriangles from '../assets/balance-token-triangles.svg';
import balanceTokenPreview from '../assets/balance-token-preview2-large.png';
import ledger from '../assets/ledger.svg';
import metamaskLookUp from '../assets/metamask-look-up.png';
import walletPreview from '../assets/wallet-preview.png';
import { colors, fonts, responsive } from '../styles';

const SBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50vw;
  height: 700px;
  background-image: url(${balanceTokenTriangles});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (${responsive.xl.min}) {
    top: 0;
    right: calc((100vw - 1400px)*0.5);
    width: 700px;
  }
  @media screen and (${responsive.md.max}) {
    width: 100vw;
    height: 800px;
  }
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const SSection = styled(Section)`
  @media screen and (${responsive.md.min}) {
  }
`;

const SSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 68px;
  // min-height: 700px;
  @media screen and (${responsive.sm.min}) and (${responsive.md.max}) {
    flex-direction: column;
  }
  @media screen and (${responsive.md.max}) {
    padding: 68px 0 0;
  }
`;


const SFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (${responsive.sm.max}) {
    align-items: flex-start;
  }
`;

const SColumn = SFlex.extend`
  flex-direction: column;
`

const SRight = styled(SFlex)`
  position: relative;
  transform: translate3d(calc((100vw - 1024px)*0.3), 0, 0);
  @media screen and (${responsive.xl.min}) {
    transform: translate3d(114px, 0, 0);
  }
  @media screen and (${responsive.md.max}) {
    display: none;
  }
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const SContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (${responsive.sm.min}) {
    max-width: 550px;
  }
  @media screen and (${responsive.md.max}) {
    display: flex;
    align-items: left;
  }
`;

const SHero = styled.div`
  // margin: 0px 0px 60px 0px;
`;

const STitleCenter = styled.div`
  margin: 10px auto;
`;

const STitle = styled.h1`
  font-size: 2.5em;
  align: center;
  letter-spacing: -0.25px;
  @media screen and (${responsive.sm.max}) {
    font-size: 8vw;
    letter-spacing: -0.2px;
  }
`;

const SSubTitle = styled.h2`
  font-size: 1.4em;
  letter-spacing: -0.25px;
  font-weight: 400;
  margin: 40px 0 10px;
  @media screen and (${responsive.sm.max}) {
    font-size: 4.5vw;
    letter-spacing: -0.2px;
    margin: 1em 0;
  }
`;

const STagline = styled.p`
  font-size: 1.25em;
  text-align: center;
  color: rgb(${colors.lighterBlue});
  line-height: 1.4em;
  & a {
    color: rgb(${colors.blue});
  }
  @media screen and (${responsive.sm.max}) {
    font-size: 4vw;
    line-height: 1.5em;
    &:first-of-type {
      margin-top: 1em;
    }
  }
`;

const SProducts = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  // flex-direction: column;
  // margin: 100px 0px 0px 0px;
  min-height: ${({ minHeight }) => (minHeight ? `${minHeight}px` : 'none')};
  @media screen and (${responsive.sm.min}) {
    & > div:first-child {
      order: ${({ left }) => (left ? 1 : 0)};
      padding-left: ${({ left }) => (left ? '30px' : 0)};
    }
    & > div:nth-child(2) {
      padding-left: ${({ left }) => (left ? 0 : '30px')};
    }
  }
  @media screen and (${responsive.sm.max}) {
    min-height: 0;
    flex-direction: column;
    & > div:first-child {
      order: 0;
    }
    & > div:nth-child(2) {
      order: 1;
    }
    & > div {
      padding: 24px;
    }
  }
`;

const SProductContainer = styled.div`
  width: 500px;
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  border-top: 6px solid #5983FF;
  margin: 10px;
  overflow: hidden;
  align-items: flex-start;
  @media screen and (${responsive.sm.min}) {
    max-width: 550px;
  }
  @media screen and (${responsive.md.max}) {
    display: flex;
    align-items: center;
  }
`;

const SCircle = styled.div`
  width: 40px;
  height: 40px;
  top: -30px;
  margin: 0 auto;
  border-radius: 20px;
  background-color: #5983FF
`;

const SProductTitle = styled.div`
  font-size: 1.8em;
  color: black;
  font-weight: 500;
  text-align: center;
  margin: 25px auto;
  // text-align: center;
  // letter-spacing: -0.25px;
  // margin: 10px 0;
  // @media screen and (${responsive.sm.max}) {
  //   font-size: 8vw;
  //   letter-spacing: -0.2px;
  // }
`;

const SBetaTag = styled.div`
  font-size: 0.35em;
  display: inline-block;
  padding: 2px 4px;
  position: relative;
  // margin: 0px 10px;
  top: -10px;
  color: white;
  font-weight: 400;
  text-align: center;
  background-color: green;
  border-radius: 3px;
`;

const SWalletTag = SBetaTag.extend`
  background-color: black;
`;

const SProductSubTitle = styled.h4`
  font-size: 1.4em;
  text-align: center;
  letter-spacing: -0.25px;
  color: grey;
  font-weight: 400;
  margin: 0px 0 10px;
  @media screen and (${responsive.sm.max}) {
    font-size: 4.5vw;
    letter-spacing: -0.2px;
    margin: 1em 0;
  }
`;

const SOpenManagerButton = styled.button`

`;

const SActionButton = styled.button`
  display: block;
  margin: 10px auto;
  cursor: pointer;
  padding: 1em 1.8em;
  font-size: ${fonts.medium};
  color: rgb(255, 255, 255);
  background-color: rgb(0, 153, 255);
  border-radius: 4px;
  @media (hover: hover) {
    &:hover {
      opacity: 0.8 !important;
    }
  }
`;

const SActionButtonManager = SActionButton.extend`
  background-color: rgb(89, 131, 255);
`;

const SAppPreview = styled.img`
  width: 100%;
  margin-bottom: 68px;
  @media screen and (${responsive.md.max}) {
    ${'' /* padding: 0 34px; */};
    display: none;
  }
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const SAppPreviewTablet = styled.img`
  display: none;
  width: 100%;
  margin: 68px 0;
  padding-top: 34px;
  @media screen and (${responsive.sm.min}) and (${responsive.md.max}) {
    display: block;
  }
`;

const SAppPreviewMobile = styled.img`
  display: none;
  width: 100vw;
  margin: 24px 0;
  @media screen and (${responsive.sm.max}) {
    display: block;
  }
`;

const SManagerImagesContainer = styled.div`
  width: 100%;
  position:relative;
  height: 250px;
`;

const SImageWrapper = styled.div`
  position: absolute;
  bottom: 25px;
  left:-10px;
  // padding: 10px;
  // & img {
  //   width: 100%;
  // }
  // @media screen and (${responsive.sm.min}) and (${responsive.md.max}) {
  //   padding: 24px;
  // }
`;

const SMetaMaskLookUpImageWrapper = styled.div`
  position: absolute;
  width: 200px;
  right: -7px;
bottom: -10px;
  & img {
    width: 100%;
  }
`;

const SWalletImagesContainer = SManagerImagesContainer.extend`
  height: 240px;
`;

const SWalletPreviewImageWrapper = styled.div`
  position: absolute;
  bottom: -100px;
  left: -35px;
`;


const IndexPage = () => (
  <Page>
    <SSection
      id={`balance-token`}
      minHeight={700}
      color={colors.navyBlue}
      background={<SBackgroundImage />}
    >

      <SSectionWrapper>
        <SColumn>
          <EthereumPageHeader />
          <SHero>
            <SContainer>
              <STitleCenter>
                <STitle>Powerful tools for tokens</STitle>
              </STitleCenter>
              <STagline>Simple interfaces to help people interact with the {'\n'} {/*ask pedro why this doesn't work: https://stackoverflow.com/questions/32469570/how-can-i-insert-a-line-break-into-a-text-component-in-react-native/40714065*/}
                <a
                  href="https://medium.com/crypto-currently/the-anatomy-of-erc721-e9db77abfc24"
                  target="_blank"
                  rel="noreferrer noopener"
                >
              Ethereum blockchain{' '}
              </a>
              & <Link to="/erc20-tokens">ERC-20 tokens</Link></STagline>
            </SContainer>
          </SHero>
        </SColumn>
      </SSectionWrapper>
      </SSection>
      <SSection
        id={`balance-token`}
        minHeight={700}
        color={colors.navyBlue}
        background={<SBackgroundImage />}
      >
      <SSectionWrapper>
        <SProducts>
          <SFlex>
            <SProductContainer>
              {/*<SCircle></SCircle>*/}
              <SProductTitle>Manager <SBetaTag>BETA</SBetaTag></SProductTitle>
              <SProductSubTitle>Interact with the tokens stored in your hardware & browser-based wallets</SProductSubTitle>
                <SActionButtonManager>
                  OPEN MANAGER
                </SActionButtonManager>
                <SManagerImagesContainer>
                  <SImageWrapper>
                    <img src={ledger} alt="ledger wallet image" />
                  </SImageWrapper>
                  <SMetaMaskLookUpImageWrapper>
                    {/* ask pedro about https://github.com/KyleAMathews/react-retina-image */}
                    <img src={metamaskLookUp} alt="metamask fox logo looking up" />
                  </SMetaMaskLookUpImageWrapper>
                </SManagerImagesContainer>
            </SProductContainer>
          </SFlex>
          <SFlex>
            <SProductContainer>
              {/*<SCircle></SCircle>*/}
              <SProductTitle>Wallet <SWalletTag>ALPHA</SWalletTag></SProductTitle>
              <SProductSubTitle>An Ethereum wallet for the web & mobile devices with token support & secure sync</SProductSubTitle>
                <SActionButton
                  type="button"
                  className="vrlps-trigger"
                  data-toggle="modal"
                  data-target="#vl_popup"
                  onClick={() => VL.openModal()}
                >
                  JOIN THE WAITLIST
                </SActionButton>
              <SWalletImagesContainer>
                <SWalletPreviewImageWrapper>
                  <img src={walletPreview} alt="balance wallet preview on desktop and iphone" />
                </SWalletPreviewImageWrapper>
              </SWalletImagesContainer>
            </SProductContainer>
          </SFlex>
        </SProducts>
      </SSectionWrapper>
      </SSection>

  </Page>
);

export default IndexPage;
