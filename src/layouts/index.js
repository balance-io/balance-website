import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { globalStyles } from '../styles';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../assets/css/font-faces.css';
import '../assets/css/main.css';

// eslint-disable-next-line
injectGlobal`${globalStyles}`;

const SWrapper = styled.div`
  width: 100%;
  max-width: 1028px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SContent = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 12px 0;
`;

const TemplateWrapper = ({ children, location, data }) => (
  <SWrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Header pathname={location.pathname} />
    <SContent>{children()}</SContent>
    <Footer pathname={location.pathname} />
  </SWrapper>
);

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
      }
    }
  }
`;

export default TemplateWrapper;
