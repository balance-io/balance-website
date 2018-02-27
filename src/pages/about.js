import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import balanceTokenTriangles from '../assets/balance-token-triangles.svg';
import balanceTokenTrianglesTwo from '../assets/balance-token-triangles2.svg';
import team from '../data/team';
import advisors from '../data/advisors';
import { colors, fonts, responsive } from '../styles';

const SBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50vw;
  height: 550px;
  background-image: url(${balanceTokenTriangles});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 0 0;
  @media screen and (${responsive.xl.min}) {
    top: 0;
    right: calc((100vw - 1400px)*0.5);
    width: 550px;
  }
  @media screen and (${responsive.md.max}) {
    width: 100vw;
    height: 550px;
  }
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const SBackgroundImageTwo = styled.div`
  position: absolute;
  top: -25%;
  left: 0;
  width: 50%;
  height: 100%;
  background-image: url(${balanceTokenTrianglesTwo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const SSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: ${({ paddingTop }) => (paddingTop ? `${paddingTop}px` : 'auto')};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  min-height: ${({ minHeight }) => (minHeight ? `${minHeight}px` : 'none')};
`;

const SContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (${responsive.sm.min}) and (${responsive.md.max}) {
    display: flex;
    align-items: center;
    text-align: center;
  }
`;

const SAbout = styled(SContainer)`
  width: 70%;
`;

const SContact = styled(SContainer)`
  width: 30%;
`;

const STitle = styled.h1`
  width: 100%;
  font-size: 2em;
  letter-spacing: -0.25px;
  margin: 10px 0;
  @media screen and (${responsive.sm.max}) {
    font-size: 6.6vw;
    letter-spacing: -0.2px;
  }
`;

const STagline = styled.p`
  font-size: 1.1em;
  color: rgb(${colors.lighterBlue});
  line-height: 1.98em;
  & a {
    color: rgb(${colors.blue});
  }
  @media screen and (${responsive.sm.max}) {
    font-size: 3.8vw;
    letter-spacing: 0.2px;
    color: rgb(${colors.lightGrey});
  }
`;

const SImageWrapper = styled.div`
  & img {
    width: 100%;
  }
`;

const SCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const SCard = styled.div`
  width: calc(33% - 20px);
  display: flex;
  flex-direction: column;

  margin: 10px;
  padding: 14px 20px;
  border: ${({ transparent }) =>
    transparent ? 'none' : `1px solid rgba(${colors.lightNavyBlue}, 0.5)`};
  border-radius: 6px;
  background-color: ${({ transparent }) =>
    transparent ? 'transparent' : `rgb(${colors.blueishGrey})`};
  & h1 {
    font-size: ${fonts.large};
  }
  & a {
    color: rgb(${colors.blue});
  }
`;

const SCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;
`;

const SProfileImage = styled(SImageWrapper)`
  width: 64px;
  height: 64px;
  margin-right: 24px;
`;

const SProfile = styled.div`
  display: flex;
  flex-direction: column;
  & div:first-child {
    font-size: ${fonts.big};
    font-weight: normal;
  }
  & div:nth-child(2) {
    font-size: ${fonts.large};
    font-weight: normal;
  }
  & div:nth-child(3) {
    font-size: ${fonts.small};
    margin-top: 5px;
    text-transform: uppercase;
  }
`;

const SCardEmojis = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
`;

const SEmoji = styled.div`
  font-size: ${fonts.h2};
  text-align: center;
`;

const SCardDescription = styled.div`
  font-size: ${fonts.small};
  margin: 12px 0;
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

const AboutPage = () => (
  <div>
    <Header theme={layoutTheme} />

    <Section
      center
      id={`balance-about-top`}
      minHeight={450}
      color={colors.navyBlue}
      background={<SBackgroundImage />}
    >
      <SSectionWrapper paddingTop={68} wrap>
        <STitle>Team</STitle>
        <SCardsContainer>
          {team.map(member => (
            <SCard>
              <SCardHeader>
                <SProfileImage>
                  <img src={member.profileImg} alt={member.name} />
                </SProfileImage>
                <SProfile>
                  <div>{member.name}</div>
                  <div>
                    <a href={`https://twitter.com/${member.twitter}`}>{`@${member.twitter}`}</a>
                  </div>
                  <div>{member.role}</div>
                </SProfile>
              </SCardHeader>
              <SCardEmojis>{member.emojis.map(emoji => <SEmoji>{emoji}</SEmoji>)}</SCardEmojis>
              <SCardDescription>{member.description}</SCardDescription>
            </SCard>
          ))}
          <SCard transparent>
            <h1>Want to join us?</h1>
            <SCardDescription>We are currently hiring for the following rolls:</SCardDescription>
            <a
              href="https://angel.co/balance-io/jobs/329699-application-security-engineer"
              target="_blank"
              rel="noopener noreferrer"
            >{`🔐 Application Security Engineer`}</a>
            <SCardDescription>
              We also would love to talk to any great people who are interested in making tokens
              easier to use. Just email:{' '}
              <a href="mailto:richard@balance.io" target="_blank" rel="noopener noreferrer">
                richard@balance.io
              </a>
            </SCardDescription>
          </SCard>
        </SCardsContainer>
      </SSectionWrapper>
    </Section>

    <Section
      center
      id={`balance-about-bottom`}
      minHeight={900}
      color={colors.navyBlue}
      background={<SBackgroundImageTwo />}
    >
      <SSectionWrapper wrap minHeight={900}>
        <SSectionWrapper wrap>
          <STitle>Advisors</STitle>
          <SCardsContainer>
            {advisors.map(member => (
              <SCard>
                <SCardHeader>
                  <SProfileImage>
                    <img src={member.profileImg} alt={member.name} />
                  </SProfileImage>
                  <SProfile>
                    <div>{member.name}</div>
                    <div>
                      <a href={`https://twitter.com/${member.twitter}`}>{`@${member.twitter}`}</a>
                    </div>
                    <div>{member.role}</div>
                  </SProfile>
                </SCardHeader>
                <SCardEmojis>{member.emojis.map(emoji => <SEmoji>{emoji}</SEmoji>)}</SCardEmojis>
                <SCardDescription>{member.description}</SCardDescription>
              </SCard>
            ))}
          </SCardsContainer>
        </SSectionWrapper>

        <SSectionWrapper>
          <SAbout>
            <STitle>About Us</STitle>
            <STagline>
              Balance began life as a side project. Ben, Christian and Richard built a personal
              finance tool for macOS. We launched the app in early 2017 and Apple featured the
              product on the front of the Mac App Store. We then started thinking about adding
              support for digital currencies. After building out a prototype we successfully raised
              a round of crowd funding.
            </STagline>
            <STagline>
              Our focus now is to build a great wallet and interface for the token economy.
            </STagline>
          </SAbout>

          <SContact>
            <STitle>Contact</STitle>
            <STagline>
              <strong>Registered address</strong>
            </STagline>
            <STagline>
              548 Market St #90291 <br />San Francisco, California 94104-5401
            </STagline>
            <STagline>
              <strong>Contact email</strong>
            </STagline>
            <STagline>
              <a href="mailto:support@balance.io" target="_blank" rel="noopener noreferrer">
                support@balance.io
              </a>
            </STagline>
          </SContact>
        </SSectionWrapper>
      </SSectionWrapper>
    </Section>

    <Footer theme={layoutTheme} />
  </div>
);

export default AboutPage;
