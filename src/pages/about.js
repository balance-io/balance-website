import React from "react";
import styled from "styled-components";
import Page from "../layouts/page";
import TeamMembers from "../components/TeamMembers";
import Section from "../components/Section";
import PressArticle from "../components/PressArticle";
import AboutBackground from "../components/backgrounds/AboutBackground";
import padlock from "../assets/padlock.svg";
import cardArrow from "../assets/card-arrow.png";
import { colors, fonts, transitions, responsive } from "../styles";

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

const SPressContainer = styled(SContainer)`
  margin: 10px;
  @media screen and (${responsive.sm.max}) {
    margin: 20px;
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
    strong
      ? `rgba(${colors.lightGrey}, 0.9)`
      : `rgba(${colors.lightGrey}, 0.6)`};
  font-weight: ${({ strong }) => (strong ? 500 : 400)};
  line-height: ${({ strong }) => (strong ? "1.5" : "1.63")};
  margin-bottom: 4px;
`;

const layoutTheme = {
  linkColor: colors.lightHeaderGrey,
  linkHover: colors.darkerNavyBlue,
  footerDivider: colors.white,
  footerDividerOpacity: 0.03,
  footerLinkColor: colors.white,
  backgroundColor: null,
  mobileActiveColor: colors.brightBlue,
  mobileToggleColor: colors.white,
  logoColor: colors.lightGrey,
  logoHover: colors.white,
  managerButton: colors.managerButton
};

const AboutPage = ({ data }) => (
  <Page
    title="About"
    theme={layoutTheme}
    siteTitle={data.site.siteMetadata.title}
  >
    <SSection
      viewport
      center
      id={`balance-about-top`}
      minHeight={500}
      color={colors.darkerNavyBlue}
      background={<AboutBackground />}
    >
      <SSectionWrapper>
        <SContent>
          <SAbout>
            <STitle>
              We are{" "}
              <a
                href="https://twitter.com/owocki/status/930940008478978050"
                target="_blank"
                rel="noopener noreferrer"
              >
                buidling
              </a>{" "}
              interfaces for the open source financial system
            </STitle>
            <SAboutParagraph>
              Balance began life as a side project in 2016 to make a beautiful
              interface for money. We launched our first{" "}
              <a
                href="https://www.macstories.net/reviews/balance-brings-financial-accounts-to-the-macs-menu-bar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                macOS app in 2017
              </a>
              . We then started thinking about adding support for digital
              currencies. After releasing a{" "}
              <a
                href="https://medium.com/balance-io/launching-balance-open-11ec6b7bc848"
                target="_blank"
                rel="noopener noreferrer"
              >
                prototype
              </a>{" "}
              we raised a round of{" "}
              <a
                href="https://wefunder.com/balance"
                target="_blank"
                rel="noopener noreferrer"
              >
                crowdfunding
              </a>
              .
            </SAboutParagraph>
            <SAboutParagraph>
              In 2018, we shipped a web app for interacting with popular
              Ethereum wallets called{" "}
              <a
                href="https://medium.com/balance-io/balance-manager-beta-6a5e64df3cd3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Balance Manager
              </a>
              . We are now focused on creating a great{" "}
              <a
                href="https://spectrum.chat/balance?thread=ba46fdb4-4e24-4650-88d1-0d88916c3f73"
                target="_blank"
                rel="noopener noreferrer"
              >
                iOS wallet
              </a>{" "}
              for storing tokens and{" "}
              <a
                href="https://www.walletconnect.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                interacting with dapps
              </a>
              . The{" "}
              <a
                href="https://github.com/orgs/balance-io/people"
                target="_blank"
                rel="noopener noreferrer"
              >
                core team
              </a>{" "}
              is supported by a growing number of{" "}
              <a
                href="https://twitter.com/ricburton/status/1006146248666177537"
                target="_blank"
                rel="noopener noreferrer"
              >
                short-term
              </a>{" "}
              paid contractors on{" "}
              <a
                href="https://gitcoin.co/profile/balance-io"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitCoin
              </a>{" "}
              and open source contributors on{" "}
              <a
                href="https://github.com/balance-io/balance-manager/graphs/contributors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </SAboutParagraph>
          </SAbout>
          <TeamMembers />
          <SAbout>
            <STitle>In the news</STitle>
            <SAboutParagraph style={{ marginBottom: 40 }}>
              Some of the articles, videos, podcasts from the communtiy talking
              about us and the team.
            </SAboutParagraph>
          </SAbout>
          <SPressContainer>
            {data.allContentfulPressCoverage.edges.map(article => {
              return (
                <PressArticle
                  date={article.node.date}
                  outlet={article.node.outlet}
                  link={article.node.link}
                  headline={article.node.headline}
                />
              );
            })}
          </SPressContainer>
        </SContent>

        <SSidebar>
          <SOpenRoles>
            <SSubTitle>Want to join us?</SSubTitle>
            <SRole>
              <a
                href="https://angel.co/balance-io/jobs"
                target="_blank"
                rel="noopener noreferrer"
              >{`Apply on AngelList`}</a>
            </SRole>
            <STagline>
              Anyone can contribute code on{" "}
              <a
                href="https://github.com/balance-io"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              or time on{" "}
              <a
                href="https://spectrum.chat/balance"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spectrum
              </a>
              .
            </STagline>
          </SOpenRoles>

          <SContact>
            <SSubTitle>Contact</SSubTitle>
            <STagline>Studio address:</STagline>
            <STagline strong compact>
              Williamsburg, Brooklyn, NY
            </STagline>
            <br />
            <STagline>Registered address:</STagline>
            <STagline strong compact>
              548 Market St #90291 <br />
              San Francisco, California 94104
            </STagline>
            <br />
            <STagline>Email:</STagline>
            <STagline strong>
              <a
                href="mailto:support@balance.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                support@balance.io
              </a>
            </STagline>
          </SContact>
        </SSidebar>
      </SSectionWrapper>
    </SSection>
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
    allContentfulPressCoverage {
      edges {
        node {
          headline
          link
          date
          outlet {
            name
          }
        }
      }
    }
  }
`;
