import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Section from '../components/Section';
import { capitalise } from '../utils/helpers';
import { colors, responsive } from '../styles';

const SSection = styled(Section)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (${responsive.sm.max}) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const STitle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 2em;
  letter-spacing: -0.25px;
  margin: 20px 0 20px;
  @media screen and (${responsive.md.max}) {
    margin: 20px 0 0;
    font-size: 1.875em;
    letter-spacing: -0.2px;
  }
`;

const Campaign = ({ pathContext, data }) => {
  const layoutTheme = {
    fontWeight: '400',
    linkColor: colors.lightBlue,
    linkHover: colors.lightBlue,
    mobileToggleColor: colors.lightGrey,
    mobileToggleOpacity: '1',
    logoColor: colors.lightBlue,
    logoHover: colors.lightBlue
  };
  const name = pathContext.slug;
  const siteTitle = data.site.siteMetadata.title;
  const title = `${capitalise(name)} - ${siteTitle}`;
  return (
    <div>
      <Helmet
        title={title}
        meta={[{ name: 'twitter:title', content: title }, { name: 'og:title', content: title }]}
      />
      <Header theme={layoutTheme} />
      <SSection id={name} color={colors.navyBlue}>
        <STitle>This campaign has ended!</STitle>
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
