import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { globalStyles, responsive } from '../styles';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TrianglesLeft from '../assets/images/blog-triangles-left.svg';
import TrianglesRight from '../assets/images/blog-triangles-right.svg';
import '../assets/css/font-faces.css';
import { colors } from '../styles';

injectGlobal`${globalStyles}`;

const SWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SContent = styled.div`
  width: 100%;
  margin: 0 auto;
  ${({ layout }) =>
    layout !== 'page' &&
    `padding: 68px 0 12px;
    max-width: 700px;
    `};
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

class TemplateWrapper extends Component {
  componentDidMount() {
    if (this.props.location.pathname === '/') {
      document.body.style.background = `rgb(${colors.darkerBlue})`;
    } else {
      document.body.style.background = `rgb(${colors.white})`;
    }
  }
  render() {
    const { children, location, data } = this.props;
    const layout = location.pathname.match(/\/blog\/[\w-]+/g)
      ? 'post'
      : location.pathname === '/blog' ? 'blog' : 'page';
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
        <Header pathname={location.pathname} layout={layout} />
        <SContent layout={layout}>{children()}</SContent>
        {layout !== 'page' && <Footer layout={layout} />}
      </SWrapper>
    );
  }
}

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
