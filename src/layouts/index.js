import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { globalStyles, colors } from '../styles';
import { hideIntercom, showIntercom } from '../utils/helpers';
import Helmet from 'react-helmet';

injectGlobal`${globalStyles}`;

const SWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SContent = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const TemplateWrapper = ({ children, location, data }) => {
  if (typeof window !== 'undefined') {
    if (location.pathname.indexOf('blog') === -1) {
      showIntercom();
      if (location.pathname.indexOf('enterprise') === -1) {
        document.body.style.background = `rgb(${colors.navyBlue})`;
      } else {
        document.body.style.background = `rgb(${colors.softerGrey})`;
      }
    } else {
      hideIntercom();
      document.body.style.background = `rgb(${colors.white})`;
    }
  }
  const title = data.site.siteMetadata.title;
  const url = data.site.siteMetadata.baseUrl;
  const description = data.site.siteMetadata.description;
  const keywords = data.site.siteMetadata.keywords;
  const coverImage = data.site.siteMetadata.coverImage;
  const twitterUsername = data.site.siteMetadata.twitterUsername;
  const facebookId = data.site.siteMetadata.facebookId;
  return (
    <SWrapper>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },

          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: twitterUsername },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
          { name: 'twitter:img:src', content: `${url}/${coverImage}` },

          { name: 'og:title', content: title },
          { name: 'og:type', content: 'website' },
          { name: 'og:url', content: url },
          { name: 'og:image', content: `${url}/${coverImage}` },
          { name: 'og:description', content: description },

          { name: 'og:site_name', content: title },
          { name: 'fb:admins', content: facebookId }
        ]}
      />
      <SContent>{children()}</SContent>
    </SWrapper>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        baseUrl
        description
        keywords
        coverImage
        twitterUsername
        facebookId
      }
    }
  }
`;

export default TemplateWrapper;
