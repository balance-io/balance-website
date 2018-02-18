import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import TokenAnimation from '../components/TokenAnimation';
import balanceTokenTriangles from '../assets/balance-token-triangles.svg';
import balanceTokenPreview from '../assets/balance-token-preview.png';
import balanceTokenMobile from '../assets/balance-token-mobile.png';
import { mailchimpMemberCount } from '../utils/api';
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

const SSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 700px;
  @media screen and (${responsive.sm.min}) and (${responsive.md.max}) {
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (${responsive.md.max}) {
    padding: 68px 0 0;
    min-height: calc(100vh - 68px);
  }
`;

const SFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SRight = styled(SFlex)`
  position: relative;
  transform: translate3d(calc((100vw - 1024px)*0.3), 0, 0);
  @media screen and (${responsive.xl.min}) {
    transform: translate3d(114px, 0, 0);
  }
  @media screen and (${responsive.md.max}) {
    ${'' /* transform: none;
    padding-top: 100px; */};
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
  @media screen and (${responsive.sm.min}) {
    max-width: 550px;
  }
  @media screen and (${responsive.md.max}) {
    display: flex;
    align-items: center;
    text-align: center;
  }
`;

const STitle = styled.h1`
  font-size: 2.5em;
  letter-spacing: -0.25px;
  margin: 10px 0;
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
  color: rgb(${colors.lighterBlue});
  line-height: 1.4em;
  @media screen and (${responsive.sm.max}) {
    font-size: 4vw;
    line-height: 1.5em;
    &:first-of-type {
      margin-top: 1em;
    }
  }
`;

const SViralLoops = styled.button`
  display: block;
  width: 175px;
  margin: 10px 0;
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

const STokenMobile = styled.img`
  display: none;
  width: 100vw;
  margin: 0;
  @media screen and (${responsive.sm.max}) {
    display: block;
  }
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

const layoutTheme = {
  fontWeight: '400',
  linkColor: colors.lightGrey,
  linkHover: colors.lightGrey,
  backgroundColor: colors.darkNavyBlue,
  mobileToggleColor: colors.lightGrey,
  mobileToggleOpacity: '1',
  logoColor: colors.lightGrey,
  logoHover: colors.lightGrey
};

class IndexPage extends Component {
  state = {
    memberCount: ''
  };
  componentWillMount() {
    mailchimpMemberCount()
      .then(({ data }) => this.setState({ memberCount: data }))
      .catch(error => console.error(error));
  }
  render = () => {
    return (
      <div>
        <Header theme={layoutTheme} />
        <Section
          id={`balance-token`}
          minHeight={700}
          color={colors.navyBlue}
          background={<SBackgroundImage />}
        >
          <SSectionWrapper>
            <SFlex>
              <SContainer>
                <STokenMobile src={balanceTokenMobile} alt="Balance Ethereum Wallet" />
                <STitle>A place for your tokens</STitle>
                <STagline>Buy, store and secure Ethereum-based tokens.</STagline>
                <STagline>A wallet that supports ERC-20 & ERC-721.</STagline>
                <SSubTitle>
                  {this.state.memberCount
                    ? `${this.state.memberCount} are on the waitlist. Want to join?`
                    : `2945 are on the waitlist. Want to join?`}
                </SSubTitle>
                <SViralLoops
                  data-toggle="modal"
                  data-target="#vl_popup"
                  onClick={() => VL.openModal()}
                >
                  Join the waitlist
                </SViralLoops>
                <SAppPreviewMobile src={balanceTokenPreview} alt="Balance Ethereum Wallet" />
              </SContainer>
            </SFlex>
            <SRight>
              <TokenAnimation />
            </SRight>
            <SAppPreviewTablet src={balanceTokenPreview} alt="Balance Ethereum Wallet" />
          </SSectionWrapper>
          <SAppPreview src={balanceTokenPreview} alt="Balance Ethereum Wallet" />
        </Section>
        <Footer theme={layoutTheme} />
      </div>
    );
  };
}

export default IndexPage;
