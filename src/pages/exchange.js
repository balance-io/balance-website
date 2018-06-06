import React from 'react';
import styled, { keyframes } from 'styled-components';
import Page from '../layouts/page';
import Section from '../components/Section';
import SubscribeForm from '../components/SubscribeForm';
import appExchange from '../assets/app-exchange.png';
import backgroundArrow from '../assets/background-arrow-exchange.svg';
import backgroundArrowMobile from '../assets/background-arrow-mobile-exchange.svg';
import backgroundArrow2 from '../assets/background-arrow-2-exchange.svg';

import { colors, responsive } from '../styles';

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (${responsive.sm.max}) {
    align-items: flex-start;
  }
`;

const SColumn = SFlex.extend`
  flex-direction: column;
`;

const SContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (${responsive.sm.min}) {
    max-width: 620px;
  }
  @media screen and (${responsive.md.max}) {
    display: flex;
    align-items: left;
  }
`;

const SBackgroundArrow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  height: 0;
  background: url(${backgroundArrow}) no-repeat;
  background-size: cover;
  padding-bottom: calc(100% * 1 / 2);
  max-width: 1406px;

  @media screen and (${responsive.sm.max}) {
    width: 662px;
    height: 662px;
    background: url(${backgroundArrowMobile}) no-repeat;
    transform: translate3d(0, 0, 0);
  }

  @media screen and (min-width: 1406px) {
    padding-bottom: 703px;
  }
`;

const SBackgroundArrow2 = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  height: 0;
  background: url(${backgroundArrow2}) no-repeat;
  background-size: cover;
  padding-top: calc(100% * 139 / 1280);
  max-width: 1406px;

  @media screen and (min-width: 1406px) {
    padding-top: 152.6828125px;
  }
`;

const SHero = styled.div`
  // margin: 0px 0px 60px 0px;
  margin: 0 auto;
`;

const STitle = styled.h1`
  margin: 42px auto 8px auto;
  font-family: Graphik;
  font-weight: 600 !important;
  font-size: 2em;
  color: #ffffff;
  text-align: center;

  @media screen and (${responsive.sm.max}) {
    margin: 27px auto 12px auto;
    padding: 0 24px;
  }

  @media screen and (${responsive.xs.max}) {
    max-width: 340px;
    font-size: 1.75em;
    line-height: 1.1428571429em;
  }
`;

const STagline = styled.p`
  margin: 0 auto;
  padding: 0 8px;
  max-width: 648px;
  font-size: 1.25em;
  text-align: center;
  color: #B3BCC5;
  line-height: 1.45em;
  & a {
    transition: 0.1s ease;
    color: #00BC7D;
  }
  & a:hover {
    color: #00D181;
    transition: 0s;
  }
  @media screen and (${responsive.sm.max}) {
    padding: 0 24px;
    max-width: 450px;
    font-size: 1.1875em;
    line-height: 1.4210526316em;
    &:first-of-type {
      margin-top: 1em 0;
    }
  }
`;

const SSectionApp = SSection.extend`
  margin-top: -2px;
  overflow: visible !important;
`;

const SAppContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 938px;
  height: 621px;
  margin-bottom: 31px;

  @media screen and (max-width: 937px) {
    display: none;
  }
`;

const SAppStatic = styled.div`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  margin: -12px auto 0 auto;
  width: calc(100% - 24px);
  max-width: 938px;
  padding-bottom: 66.2046908316%;
  background: url(${appExchange}) no-repeat;
  opacity: 1;
  background-size: 100%;

  @media screen and (${responsive.sm.max}) {
    margin: -32px 12px 18px 12px;
  }
`;

const SNewsletter = SSection.extend`
  max-width: 432px;
  margin: 0 auto 112px auto;
  padding: 0 12px;

  & h3 {
    margin-bottom: 6px;
    font-size: 1.0625em;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 1.3px;
    text-align: center;
    text-transform: uppercase;
  }

  & p {
    margin-bottom: 29px;
    opacity: 0.8;
    font-size: 1.0625em;
    color: #ffffff;
    text-align: center;
    line-height: 21px;
  }

  @media screen and (${responsive.md.max}) {
    margin: 0 auto 90px auto;
  }
`;

const SSubscribeForm = styled(SubscribeForm)`
  & form {
    background-color: #000 !important;
    height: 600px !important;
  }
`;

const layoutTheme = {
  linkColor: colors.white,
  linkHover: colors.blueGray19BackgroundArrow,
  footerDivider: colors.white,
  footerDividerOpacity: 0.03,
  footerLinkColor: colors.white,
  backgroundColor: colors.blueGray19,
  mobileActiveColor: colors.white,
  mobileToggleColor: colors.white,
  logoColor: colors.white,
  logoHover: colors.white,
  managerButton: colors.exchangeGreen
};

const ExchangePage = ({ data, ...props }) => (
  <Page title="Exchange" siteTitle={data.site.siteMetadata.title} theme={layoutTheme}>
    <SBackgroundArrow />
    <SSection id={`balance-token`}>
      <SSectionWrapper>
        <SColumn>
          {/*  <EthereumPageHeader />*/}
          <SHero>
            <SContainer>
              <STitle>The easiest way to exchange tokens</STitle>
              <STagline>
                Trade ERC-20 tokens with other people. Balance Exchange is powered by services like <a href="https://shapeshift.io" target="_blank">ShapeShift</a> and the <a href="https://0xproject.com" target="_blank">0x Project</a>.
              </STagline>
              {/*<SButtonLink>
                OPEN MANAGER<img src={arrowRightCircle} alt="arrow in circle pointing right" />
              </SButtonLink>*/}
            </SContainer>
          </SHero>
        </SColumn>
      </SSectionWrapper>
    </SSection>

    <SSectionApp >
      <SSectionWrapper>
        <SAppStatic />
      </SSectionWrapper>
      <SNewsletter>
        <h3>News</h3>
        <p>Get Balance product updates</p>
        <SSubscribeForm />
      </SNewsletter>
    </SSectionApp>
  </Page>
);

export default ExchangePage;

export const query = graphql`
  query ExchangeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
