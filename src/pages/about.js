import React, { Component } from 'react';
import styled from 'styled-components';
import Page from '../layouts/page';
import Section from '../components/Section';
import blackTriangles from '../assets/black-triangles.png';
import yellowTriangles from '../assets/yellow-triangles.png';
import purpleTriangles from '../assets/purple-triangles.png';
import padlock from '../assets/padlock.svg';
import cardArrow from '../assets/card-arrow.png';
import team from '../data/team';
import { colors, fonts, transitions, responsive } from '../styles';

const SBlackBackground = styled.div`
  position: absolute;
  top: 0px;
  right: -28px;
  width: 590px;
  height: 590px;
  background-image: url(${blackTriangles});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const SPurpleBackground = styled.div`
  position: absolute;
  top: 0;
  left: -75px;
  width: 300px;
  height: 225px;
  background-image: url(${purpleTriangles});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (${responsive.sm.max}) {
    opacity: 0.3;
  }
`;

const SYellowBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: -75px;
  width: 300px;
  height: 225px;
  background-image: url(${yellowTriangles});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const SBackgroundWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1280px;
  position: fixed;
`;

const SBackground = () => (
  <SBackgroundWrapper>
    <SBlackBackground />
    <SPurpleBackground />
    <SYellowBackground />
  </SBackgroundWrapper>
);

const STitle = styled.h1`
  width: 100%;
  margin: 10px auto;
  font-size: 1.75em;
  font-weight: 600;
  line-height: 1.29;
  @media screen and (${responsive.sm.max}) {
    font-size: 8vw;
  }
`;

const SSubTitle = styled.h2`
  width: 100%;
  margin: 10px auto;
  font-size: 1.25em;
  font-weight: 600;
  line-height: 1.29;
  @media screen and (${responsive.sm.max}) {
    font-size: 9vw;
  }
`;

const SParagraph = styled.p`
  font-size: 1.125em;
  font-weight: 400;
  line-height: 1.56;
  opacity: 0.9;
  color: rgb(${colors.softGrey});
  & a {
    color: rgb(${colors.blue});
  }
  @media screen and (${responsive.sm.max}) {
    font-size: 4vw;
    color: rgb(${colors.lightGrey});
  }
`;

const SAboutParagraph = styled(SParagraph)``;

const SImageWrapper = styled.div`
  & img {
    width: 100%;
  }
`;

const SSection = styled(Section)`
  flex-direction: column;
`;

const SSectionWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 68px);
  display: flex;
  padding-top: 102px;
  padding-bottom: 34px;
  @media screen and (${responsive.md.max}) {
    flex-direction: column;
    align-items: center;
  }
`;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  & a {
    color: rgb(${colors.lightBrightBlue});
  }
  @media screen and (${responsive.sm.min}) and (${responsive.md.max}) {
    display: flex;
  }
`;

const SContent = styled.div`
  width: 74%;
  margin-bottom: 140px;
  @media screen and (${responsive.md.max}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
  }
  @media screen and (${responsive.sm.max}) {
    margin-bottom: 0;
  }
`;

const SAbout = styled(SContainer)`
  margin: 10px;

  & h1 {
    width: 100%;
    max-width: 475px;
    margin: 20px 0;
  }
  & p {
    width: 100%;
    max-width: 585px;
  }
  & p:nth-child(3) {
    margin-top: 20px;
  }
  @media screen and (${responsive.sm.max}) {
    margin: 20px;
  }
`;

const STeamWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (${responsive.md.max}) {
    display: flex;
    align-items: center;
  }
`;

const STeam = styled.div`
  width: 100%;
  max-width: 370px;
  display: flex;
  justify-content: space-between;
  margin: 12px;
  @media screen and (max-width: 400px) {
    width: 100%;
    max-width: none;
  }
`;

const STeamMember = styled(SImageWrapper)`
  width: 64px;
  height: 64px;
  padding: 4px;
  cursor: pointer;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ selected }) =>
    selected ? `rgba(${colors.brightBlue}, 0.8)` : `rgba(${colors.brightBlue}, 0)`};
  }
  & img {
    border-radius: 50%;
  }
`;

const SCardWrapper = styled.div`
  width: 100%;
  max-width: 395px;
  @media screen and (max-width: 400px) {
    width: 100%;
    max-width: none;
  }
`;

const SCard = styled.div`
  transition: ${transitions.base};
  width: 100%;
  position: relative;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  border-radius: 6px;
  background-color: rgb(${colors.white});
  transform: ${({ selected }) => {
    switch (selected) {
      case 0:
        return `translate3d(0, 0, 0)`;
      case 1:
        return `translate3d(0, 0, 0)`;
      case 2:
        return `translate3d(27px, 0, 0)`;
      case 3:
        return `translate3d(70px, 0, 0)`;
      case 4:
        return `translate3d(70px, 0, 0)`;
      default:
        return `translate3d(0, 0, 0)`;
    }
  }};
  & > img {
    transition: ${transitions.base};
    width: 30px;
    top: -4px;
    position: absolute;
    left: ${({ selected }) => {
      switch (selected) {
        case 0:
          return `18px`;
        case 1:
          return `95px`;
        case 2:
          return `calc(50% - 15px)`;
        case 3:
          return `178px`;
        case 4:
          return `256px`;
        default:
          return `calc(50% - 15px)`;
      }
    }};
  }
  & h3 {
    margin-top: 12px;
  }
  & a {
    color: rgb(${colors.lightBrightBlue});
  }
  @media screen and (max-width: 400px) {
    width: calc(100% - 20px);
    max-width: none;
    transform: none;
    & > img {
      left: ${({ selected }) => {
        switch (selected) {
          case 0:
            return `calc(6% - 15px)`;
          case 1:
            return `calc(28% - 15px)`;
          case 2:
            return `calc(50% - 15px)`;
          case 3:
            return `calc(71% - 15px)`;
          case 4:
            return `calc(94% - 15px)`;
          default:
            return `calc(50% - 15px)`;
        }
      }};
    }
  }
`;

const SCardHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 16px;
`;

const SProfile = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  & p {
    color: rgb(${colors.darkTwo});
  }
  & p:first-child {
    font-size: 0.9em;
    font-weight: 600;
  }
  & p:nth-child(2) {
    font-size: 0.75em;
    font-weight: 500;
    color: rgba(${colors.darkTwo}, 0.9);
  }
  & span {
    color: rgba(${colors.darkTwo}, 0.2);
  }
  @media screen and (${responsive.sm.max}) {
    & p:first-child {
      font-size: 0.9em;
    }
    & p:nth-child(2) {
      font-size: 0.75em;
    }
  }
`;

const SCardEmojis = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  align-items: center;
`;

const SEmoji = styled.div`
  display: flex;
  align-items: center;
  height: 16px;
  & img {
    height: 100%;
  }
`;

const SCardDescription = styled.div`
  font-size: ${fonts.small};
  color: rgba(${colors.darkTwo}, 0.6);
  line-height: 1.31;
  text-align: left;
  border-top: 2px solid rgba(${colors.grey}, 0.1);
  width: 100%;
  padding: 16px;
`;

const SSidebar = styled.div`
  width: 26%;
  @media screen and (${responsive.md.max}) {
    display: flex;
    width: 585px;
    margin: 34px 10px 34px;
  }
  @media screen and (${responsive.sm.max}) {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

const SOpenRoles = styled(SContainer)`
  padding-bottom: 30px;
  & a {
    font-weight: 500;
    color: rgb(${colors.lightBrightBlue});
  }
  @media screen and (${responsive.sm.min}) and (${responsive.md.max}) {
    width: 50%;
    padding-bottom: 0;
    padding-right: 30px;
  }
  @media screen and (${responsive.sm.max}) {
    margin: 20px;
    width: auto;
  }
`;

const SRole = styled.div`
  margin-bottom: 20px;
  & img {
    margin-right: 10px;
  }
  & a {
    font-size: 1em;
    font-weight: 500;
    line-height: 1.63;
    color: rgb(${colors.lightBrightBlue});
  }
`;

const SContact = styled(SContainer)`
  padding-top: 30px;
  border-top: 2px solid rgba(${colors.lightGrey}, 0.1);
  @media screen and (${responsive.sm.min}) and (${responsive.md.max}) {
    width: 50%;
    padding-top: 0;
    margin-bottom: 120px;
    border-top: none;
    padding-left: 30px;
    border-left: 2px solid rgba(${colors.lightGrey}, 0.1);
  }
  @media screen and (${responsive.sm.max}) {
    margin: 20px;
    width: auto;
    margin-bottom: 100px;
  }
`;

const STagline = styled(SParagraph)`
  font-size: 1em;
  color: ${({ strong }) =>
    strong ? `rgba(${colors.lightGrey}, 0.9)` : `rgba(${colors.lightGrey}, 0.6)`};
  font-weight: ${({ strong }) => (strong ? 500 : 400)};
  line-height: ${({ strong }) => (strong ? '1.5' : '1.63')};
  margin-bottom: 4px;
`;

const layoutTheme = {
  linkColor: colors.lightGrey,
  linkHover: colors.white,
  footerDivider: colors.darker,
  footerLinkColor: colors.white,
  backgroundColor: null,
  mobileActiveColor: colors.brightBlue,
  mobileToggleColor: colors.lightGrey,
  logoColor: colors.lightGrey,
  logoHover: colors.white
};

let timeout = null;

class AboutPage extends Component {
  state = {
    selected: 0
  };
  onChangeSelected = index => {
    clearTimeout(timeout);
    if (index || index === 0) {
      this.setState({ selected: index });
    } else {
      let next = this.state.selected + 1 > team.length - 1 ? 0 : this.state.selected + 1;
      this.setState({ selected: next });
    }
  };
  render() {
    return (
      <Page title="About" theme={layoutTheme} siteTitle={this.props.data.site.siteMetadata.title}>
        <SSection
          viewport
          center
          id={`balance-about-top`}
          minHeight={500}
          color={colors.darkerNavyBlue}
          background={<SBackground />}
        >
          <SSectionWrapper>
            <SContent>
              <STeamWrapper>
                <STeam>
                  {team.map((member, idx) => (
                    <STeamMember
                      key={member.name}
                      selected={this.state.selected === idx}
                      onClick={() => this.onChangeSelected(idx)}
                    >
                      <img src={member.profileImg} alt={member.name} />
                    </STeamMember>
                  ))}
                </STeam>
                <SCardWrapper>
                  <SCard selected={this.state.selected}>
                    <img src={cardArrow} alt="arrow" />
                    <SCardHeader>
                      <SProfile>
                        <p>{team[this.state.selected].name}</p>
                        <p>
                          {team[this.state.selected].role}
                          <span>{' | '}</span>
                          <a href={`https://twitter.com/${team[this.state.selected].twitter}`}>{`@${
                            team[this.state.selected].twitter
                          }`}</a>
                        </p>
                      </SProfile>
                      <SCardEmojis>
                        {team[this.state.selected].emojis.map(emoji => (
                          <SEmoji key={emoji.name}>
                            <img src={emoji.img} alt={emoji.name} />
                          </SEmoji>
                        ))}
                      </SCardEmojis>
                    </SCardHeader>

                    <SCardDescription>{team[this.state.selected].description}</SCardDescription>
                  </SCard>
                </SCardWrapper>
              </STeamWrapper>

              <SAbout>
                <STitle>We’re building simple, powerful interfaces for the token economy.</STitle>
                <SAboutParagraph>
                  Balance began life as a side project. Ben, Christian and Richard built a personal
                  finance tool for macOS. We launched the app in early 2017 and Apple featured the
                  product on the front of the Mac App Store. We then started thinking about adding
                  support for digital currencies. After building out a prototype we successfully
                  raised a round of crowd funding.
                </SAboutParagraph>
                <SAboutParagraph>
                  Our focus now is to build a great wallet and interface for the token economy. We
                  are currently focused on Ethereum-based ERC-20 tokens.
                </SAboutParagraph>
              </SAbout>
            </SContent>

            <SSidebar>
              <SOpenRoles>
                <SSubTitle>Want to join us?</SSubTitle>
                <STagline>Open roles:</STagline>
                <SRole>
                  <img src={padlock} alt="security" />
                  <a
                    href="https://angel.co/balance-io/jobs/329699-application-security-engineer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >{`Application Security Engineer`}</a>
                </SRole>
                <STagline>
                  We also would love to talk to any great people who are interested in making tokens
                  easier to use. Just email:{' '}
                  <a href="mailto:richard@balance.io" target="_blank" rel="noopener noreferrer">
                    richard@balance.io
                  </a>
                </STagline>
              </SOpenRoles>

              <SContact>
                <SSubTitle>Contact</SSubTitle>
                <STagline>Registered address:</STagline>
                <STagline strong compact>
                  548 Market St #90291 <br />
                  San Francisco, California 94104
                </STagline>
                <br />
                <STagline>Email:</STagline>
                <STagline strong>
                  <a href="mailto:support@balance.io" target="_blank" rel="noopener noreferrer">
                    support@balance.io
                  </a>
                </STagline>
              </SContact>
            </SSidebar>
          </SSectionWrapper>
        </SSection>
      </Page>
    );
  }
}

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
