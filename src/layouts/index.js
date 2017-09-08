import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { globalStyles } from '../styles';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { responsive } from '../styles';

import '../assets/css/font-faces.css';
import '../assets/css/main.css';

// eslint-disable-next-line
injectGlobal`${globalStyles}`;

const SWrapper = styled.div`
  width: 100%;
  max-width: 1028px;
  margin: 0 auto;
`;

const SContent = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  @media screen and (${responsive.sm.max}) {
    padding: 20px;
  }
`;

const TemplateWrapper = ({ children, data }) => (
  <SWrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Header />
    <SContent>{children()}</SContent>
    <Footer />
  </SWrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
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
