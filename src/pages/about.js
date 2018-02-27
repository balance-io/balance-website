import React from 'react';
import styled from 'styled-components';
import Page from '../layouts/page';
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
  top: -27%;
  left: 0;
  width: 50%;
  height: 100%;
  background-image: url(${balanceTokenTrianglesTwo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const STitle = styled.h1`
  width: 100%;
  font-size: 2em;
  letter-spacing: -0.25px;
  margin: 10px;
  @media screen and (${responsive.md.max}) {
    margin: 20px;
  }
  @media screen and (${responsive.sm.max}) {
    font-size: 9vw;
    letter-spacing: -0.2px;
  }
`;

const STagline = styled.p`
  font-size: 1em;
  font-weight: 400;
  opacity: 0.9;
  color: rgb(${colors.white});
  letter-spacing: -0.2px;
  font-size: 0.9em;
  line-height: 2em;
  & a {
    color: rgb(${colors.blue});
  }
  @media screen and (${responsive.sm.max}) {
    font-size: 4vw;
    letter-spacing: 0.2px;
    color: rgb(${colors.lightGrey});
  }
`;

const SImageWrapper = styled.div`
  & img {
    width: 100%;
  }
`;

const SSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  @media screen and (${responsive.sm.max}) {
    flex-direction: column;
  }
`;

const SFirstSection = styled(SSectionWrapper)`
  padding-top: 68px;
`;

const SSecondSection = styled(SSectionWrapper)`
  padding-top: 48px;
  @media screen and (${responsive.md.max}) {
    padding-top: 34px;
  }
`;

const SThirdSection = styled(SSectionWrapper)`
  padding-top: 48px;
  @media screen and (${responsive.md.max}) {
    padding: 20px;
    padding-top: 34px;
  }
`;

const SContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 10px;
  flex-direction: column;
  & ${STitle} {
    margin: 10px 0;
  }
  margin-bottom: 68px;
  @media screen and (${responsive.sm.min}) and (${responsive.md.max}) {
    display: flex;
  }
`;

const SAbout = styled(SContainer)`
  width: 70%;
  padding-right: 24px;
  @media screen and (${responsive.sm.max}) {
    width: auto;
    padding-right: 0;
  }
`;

const SContact = styled(SContainer)`
  width: 30%;
  @media screen and (${responsive.sm.max}) {
    width: auto;
    margin-bottom: 34px;
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
  & h3 {
    margin-top: 12px;
  }
  & a {
    color: rgb(${colors.blue});
  }
  ${({ transparent }) =>
    transparent &&
    `
    & > * {
      margin-bottom: 12px;
    }
  `};
  @media screen and (${responsive.md.max}) {
    width: calc(50% - 40px);
    margin: 20px;
    padding: ${({ transparent }) => (transparent ? '16px 20px' : '16px 24px')};
  }
  @media screen and (${responsive.sm.max}) {
    width: 100%;
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
  @media screen and (${responsive.sm.max}) {
    margin-right: 16px;
  }
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
  @media screen and (${responsive.sm.max}) {
    & div:first-child {
      font-size: ${fonts.large};
    }
    & div:nth-child(2) {
      font-size: ${fonts.medium};
    }
    & div:nth-child(3) {
      font-size: ${fonts.tiny};
    }
  }
`;

const SCardEmojis = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 6px 0;
`;

const SEmoji = styled.div`
  font-size: ${fonts.h2};
  text-align: center;
`;

const SCardDescription = styled.div`
  font-size: ${fonts.small};
  margin: 12px 0;
`;

const AboutPage = ({ data, ...props }) => (
  <Page title="About" siteTitle={data.site.siteMetadata.title}>
    <Section
      center
      id={`balance-about-top`}
      minHeight={500}
      color={colors.navyBlue}
      background={<SBackgroundImage />}
    >
      <SFirstSection wrap>
        <STitle>Team</STitle>
        <SCardsContainer>
          {team.map(member => (
            <SCard key={member.name}>
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
              <SCardEmojis>
                {member.emojis.map(emoji => (
                  <SEmoji key={`${member.name}-${emoji}`}>{emoji}</SEmoji>
                ))}
              </SCardEmojis>
              <SCardDescription>{member.description}</SCardDescription>
            </SCard>
          ))}
          <SCard transparent>
            <h3>Want to join us?</h3>
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
      </SFirstSection>
    </Section>

    <Section
      id={`balance-about-bottom`}
      minHeight={500}
      color={colors.navyBlue}
      background={<SBackgroundImageTwo />}
    >
      <SSectionWrapper wrap>
        <SSecondSection wrap>
          <STitle>Advisors</STitle>
          <SCardsContainer>
            {advisors.map(member => (
              <SCard key={member.name}>
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
                <SCardEmojis>
                  {member.emojis.map(emoji => (
                    <SEmoji key={`${member.name}-${emoji}`}>{emoji}</SEmoji>
                  ))}
                </SCardEmojis>
                <SCardDescription>{member.description}</SCardDescription>
              </SCard>
            ))}
          </SCardsContainer>
        </SSecondSection>

        <SThirdSection>
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
              548 Market St #90291 <br />
              San Francisco, California 94104-5401
            </STagline>
            <br />
            <STagline>
              <strong>Contact email</strong>
            </STagline>
            <STagline>
              <a href="mailto:support@balance.io" target="_blank" rel="noopener noreferrer">
                support@balance.io
              </a>
            </STagline>
          </SContact>
        </SThirdSection>
      </SSectionWrapper>
    </Section>
  </Page>
);

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
