import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { globalStyles, colors } from '../styles';
import { hideIntercom, showIntercom } from '../utils/helpers';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/font-faces.css';

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
      document.body.style.background = `rgb(${colors.navyBlue})`;
    } else {
      hideIntercom();
      document.body.style.background = `rgb(${colors.white})`;
    }
  }
  return (
    <SWrapper>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
      />
      <Header pathname={location.pathname} />
      <SContent>{children()}</SContent>
      {location.pathname.indexOf('blog') === -1 && <Footer pathname={location.pathname} />}
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
      }
    }
  }
`;

export default TemplateWrapper;
