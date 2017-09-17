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

const SWrapper = styled.div`width: 100%;`;

const SContent = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 12px 0;
`;

const SBackgroundTriangles = styled.div`
  display: ${({ layout }) => (layout === 'post' ? 'block' : 'none')};
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

const TemplateWrapper = ({ children, location, data }) => {
  const layout = location.pathname.match(/\/blog\/[\w-]+/g) ? 'post' : location.pathname === '/blog' ? 'blog' : 'page';
  return (
    <SWrapper>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
      />
      <SBackgroundTriangles layout={layout}>
        <STrianglesLeft />
        <STrianglesRight />
      </SBackgroundTriangles>
      <Header layout={layout} />
      <SContent>{children()}</SContent>
      <Footer layout={layout} />
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
