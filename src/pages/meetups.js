import React from 'react';
import styled from 'styled-components';
import Page from '../layouts/page';
import Section from '../components/Section';
import backgroundArrow from '../assets/background-arrow.svg';
import backgroundArrowMobile from '../assets/background-arrow-mobile.svg';
import map from '../assets/map.png';

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

const SHero = styled.div`
  // margin: 0px 0px 60px 0px;
  margin: 0 auto;
`;

const STitle = styled.h1`
  margin: 42px auto 10px auto;
  font-family: Graphik;
  font-weight: 600 !important;
  font-size: 2em;
  color: #ffffff;
  text-align: center;

  @media screen and (${responsive.sm.max}) {
    margin: 27px auto 14px auto;
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
  padding: 0 24px;
  margin-bottom: 42px;
  max-width: 648px;
  font-size: 1.25em;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4em;
  & a {
    color: rgb(${colors.blue});
  }
  @media screen and (${responsive.sm.max}) {
    max-width: 400px;
    font-size: 1.1875em;
    line-height: 1.4210526316em;
    &:first-of-type {
      margin-top: 1em 0;
    }
  }
`;

const SSectionMeetupMap = SSection.extend``;

const SMeetupMap = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 100%;
    max-width: 800px;
  }
`;

const SSectionMeetups = SSection.extend`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 68px;
`;

const SSectionMeetupList = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SMeetupRow = styled.div`
  display: flex;
  margin: 12px 0px;
  font-size: 1.13em;
  width: 100%;
  max-width: 700px;
`;

const SMeetupLocation = styled.div`
  flex: 1;
  font-weight: 600;
  @media screen and (${responsive.sm.max}) {
    flex: 2;
  }
`;
const SMeetupDate = styled.div`
  flex: 1;
  text-align: center;
  @media screen and (${responsive.sm.max}) {
    flex: 1;
  }
`;

const SMeetupLink = styled.div`
  flex: 1;
  text-align: right;
  & a {
    color: #3f82e0;
    transition: 0.1s ease;
  }
  & a:hover {
    color: #5d9cf5;
    transition: 0s;
  }
  @media screen and (${responsive.sm.max}) {
    flex: 1;
  }
`;

const layoutTheme = {
  linkColor: colors.lightHeaderGrey,
  linkHover: colors.darkBackground,
  footerLinkColor: colors.lightGrey,
  footerDivider: colors.darkFooterDivider,
  backgroundColor: colors.darkNavyBlue,
  mobileActiveColor: colors.brightBlue,
  mobileToggleColor: colors.white,
  logoColor: colors.lightGrey,
  logoHover: colors.white
};

const MeetupsPage = () => (
  <Page theme={layoutTheme}>
    <SBackgroundArrow />
    <SSection id={`balance-meetups`}>
      <SSectionWrapper>
        <SColumn>
          <SHero>
            <SContainer>
              <STitle>Meetups</STitle>
              <STagline>
                We want to talk to users, dapp developers, and our investors face-to-face as we
                <a
                  href="https://twitter.com/vitalikbuterin/status/971417459872882690"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  buidl
                </a>{' '}
                out Balance.
              </STagline>
            </SContainer>
          </SHero>
        </SColumn>
      </SSectionWrapper>
    </SSection>
    <SSectionMeetupMap>
      <SMeetupMap>
        <img src={map} alt="map" />
      </SMeetupMap>
    </SSectionMeetupMap>
    <SSectionMeetups>
      <SSectionMeetupList>
        <SMeetupRow>
          <SMeetupLocation>🇬🇧 London</SMeetupLocation>
          <SMeetupDate>26 April</SMeetupDate>
          <SMeetupLink>
            <a
              href="https://spectrum.chat/balance/meetups?thread=b0a62310-7e9d-482e-8e0b-368be2d79fd9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Done
            </a>
          </SMeetupLink>
        </SMeetupRow>
        <SMeetupRow>
          <SMeetupLocation>🇺🇸 San Francisco</SMeetupLocation>
          <SMeetupDate>1 May</SMeetupDate>
          <SMeetupLink>
            <a
              href="https://attending.io/events/sanfrancisco0xbalancedharmameetup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Done
            </a>
          </SMeetupLink>
        </SMeetupRow>
        <SMeetupRow>
          <SMeetupLocation>🇨🇦 Toronto</SMeetupLocation>
          <SMeetupDate>6 May</SMeetupDate>
          <SMeetupLink>
            <a
              href="https://spectrum.chat/balance/meetups?thread=b2729846-3178-4600-9f57-c3bd8b28772a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Done
            </a>
          </SMeetupLink>
        </SMeetupRow>
        <SMeetupRow>
          <SMeetupLocation>🇺🇸 New York</SMeetupLocation>
          <SMeetupDate>Weekly S18</SMeetupDate>
          <SMeetupLink>
            <a
              href="https://spectrum.chat/balance/summerofship"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join
            </a>
          </SMeetupLink>
        </SMeetupRow>
        <SMeetupRow>
          <SMeetupLocation>🇺🇸 Boston</SMeetupLocation>
          <SMeetupDate>TBD</SMeetupDate>
          <SMeetupLink>
            <a
              href="https://spectrum.chat/thread/a065f468-b21d-4c50-b1d4-2a5ba36debd9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join
            </a>
          </SMeetupLink>
        </SMeetupRow>
      </SSectionMeetupList>
    </SSectionMeetups>
  </Page>
);

export default MeetupsPage;
