import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { globalStyles, responsive } from '../styles';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TrianglesLeft from '../assets/images/blog-triangles-left.svg';
import TrianglesRight from '../assets/images/blog-triangles-right.svg';
import '../assets/css/font-faces.css';

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

const SBackgroundTriangles = styled.div`
  display: ${({ homepage }) => (homepage ? 'none' : 'block')};
  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const STrianglesLeft = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  left: 0;
  width: 300px;
  height: 450px;
  background: url(${TrianglesLeft}) no-repeat;
`;

const STrianglesRight = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  right: 0;
  width: 400px;
  height: 300px;
  background: url(${TrianglesRight}) no-repeat;
`;

const TemplateWrapper = ({ children, location, data }) => (
  <SWrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
    />
    <SBackgroundTriangles homepage={location.pathname === '/'}>
      <STrianglesLeft />
      <STrianglesRight />
    </SBackgroundTriangles>
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
