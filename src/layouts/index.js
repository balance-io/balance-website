import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { globalStyles } from '../styles';
import Helmet from 'react-helmet';
import Header from '../components/Header';

import '../css/main.css';

// eslint-disable-next-line
injectGlobal`${globalStyles}`;

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

const StyledContent = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`;

const TemplateWrapper = ({ children, data }) => (
  <StyledWrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Header />
    <StyledContent>{children()}</StyledContent>
  </StyledWrapper>
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
