import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import SubscribeForm from '../components/SubscribeForm';
import triangleMask from '../assets/triangle-mask.svg';
import highSierra from '../assets/high-sierra.jpg';
import balanceOpen from '../assets/balance-open.png';
import Section from '../components/Section';
import { capitalise } from '../utils/helpers';
import { colors, responsive } from '../styles';

const SSection = styled(Section)`
  min-height: 100vh;
  @media screen and (${responsive.md.max}) {
    height: 100vh;
    display: flex;
  }
`;

const SBackgroundImage = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  @media screen and (${responsive.md.min}) {
    width: 780px;
    height: 780px;
    mask: url(${triangleMask}) no-repeat;
    background-image: url(${highSierra});
    background-size: 100% 100%;
  }
`;

const SSectionWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  @media screen and (${responsive.md.max}) {
    padding: 0 34px;
    flex-direction: column;
    justify-content: center;
  }
`;

const SHalf = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  @media screen and (${responsive.md.max}) {
    justify-content: center;
    width: 100%;
  }
`;

const SSubscribe = styled.div`
  margin-top: 100px;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (${responsive.sm.min}) {
    max-width: 420px;
  }
  @media screen and (${responsive.md.max}) {
    margin-top: 0;
  }
  @media screen and (${responsive.sm.min}) and (${responsive.md.max}) {
    display: flex;
    align-items: center;
    text-align: center;
  }
`;

const STitle = styled.h1`
  font-size: 2em;
  letter-spacing: -0.25px;
  margin: 20px 0 20px;
  @media screen and (${responsive.md.max}) {
    margin: 20px 0 0;
    font-size: 1.875em;
    letter-spacing: -0.2px;
  }
`;

const STagline = styled.p`
  font-size: 1.125em;
  color: rgb(${colors.lighterBlue});
  line-height: 1.5555555556em;
  @media screen and (${responsive.md.max}) {
    margin: 12px auto 0 auto;
    font-size: 1.1875em;
    line-height: 1.47em;
    color: rgba(${colors.white}, 0.8);
  }
`;

const SAppPreview = styled.div`
  width: 402px;
  height: 271px;
  background: url(${balanceOpen}) no-repeat;
  background-size: 100% 100%;
  margin-top: 5vw;
  margin-right: -2vw;
  @media screen and (${responsive.md.max}) {
    display: none;
  }
`;

const Campaign = ({ pathContext, data }) => {
  const layoutTheme = {
    linkColor: colors.lightBlue,
    linkHover: colors.lightBlue,
    mobileToggleColor: colors.lightGrey,
    mobileToggleOpacity: '1',
    logoColor: colors.lightBlue,
    logoHover: colors.lightBlue
  };
  const name = pathContext.slug;
  const subscribeOptions = {
    server: 'money.us11',
    userId: 'a3f87e208a9f9896949b4f336',
    listId: '3985713da6',
    origin: name
  };
  const siteTitle = data.site.siteMetadata.title;
  const title = `${capitalise(name)} - ${siteTitle}`;
  return (
    <div>
      <Helmet title={title} meta={[{ name: 'twitter:title', content: title }, { name: 'og:title', content: title }]} />
      <Header theme={layoutTheme} />
      <SSection id={name} color={colors.navyBlue} background={<SBackgroundImage />}>
        <SSectionWrapper>
          <SHalf>
            <SSubscribe>
              <SubscribeForm options={subscribeOptions} />

              <STitle>Try out Balance Open and Receive $2 of Ether</STitle>
              <STagline>A free, open source Mac app for checking Coinbase, a simple digital currency wallet.</STagline>
            </SSubscribe>
          </SHalf>
          <SHalf>
            <SAppPreview />
          </SHalf>
        </SSectionWrapper>
      </SSection>
    </div>
  );
};

Campaign.propTypes = {
  name: PropTypes.string.isRequired
};

export default Campaign;

export const query = graphql`
  query CampaignQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
