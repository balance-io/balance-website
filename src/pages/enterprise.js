import React from 'react';
import Page from '../templates/page';
import { colors } from '../styles';

const layoutTheme = {
  fontWeight: '600',
  linkColor: colors.white,
  linkHover: colors.white,
  mobileToggleColor: colors.white,
  mobileToggleOpacity: '0.7',
  logoColor: colors.white,
  logoHover: colors.white
};

const Enterprise = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Page title={'Enterprise'} siteTitle={siteTitle} layoutTheme={layoutTheme}>
      <p>Balance. What else?</p>
    </Page>
  );
};

export default Enterprise;

export const query = graphql`
  query EnterpriseQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
