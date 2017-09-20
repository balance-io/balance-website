import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { globalStyles, responsive, colors } from '../styles';
import { hideIntercom, showIntercom } from '../utils/helpers';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TrianglesLeft from '../assets/images/blog-triangles-left.svg';
import TrianglesRight from '../assets/images/blog-triangles-right.svg';
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

const SBackgroundTriangles = styled.div`
  display: ${({ template }) => (template === 'post' ? 'block' : 'none')};
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

const getTemplate = pathname => {
  let template = 'page';
  if (typeof window !== 'undefined') {
    template = window.location.pathname.match(/\/blog\/[\w-]+/g)
      ? 'post'
      : window.location.pathname.match(/\/blog\/?/g) ? 'blog' : 'page';
  }
  return template;
};

class TemplateWrapper extends Component {
  state = {
    template: getTemplate()
  };
  componentWillMount() {
    console.log(typeof window !== 'undefined' ? window.location.pathname : null);
    console.log('WILL MOUNT', this.state.template);
  }
  componentDidMount() {
    console.log(typeof window !== 'undefined' ? window.location.pathname : null);
    console.log('DID MOUNT before', this.state.template);
    this.checkLayout();
    console.log(typeof window !== 'undefined' ? window.location.pathname : null);
    console.log('DID MOUNT after', this.state.template);
  }
  componentDidUpdate() {
    console.log(typeof window !== 'undefined' ? window.location.pathname : null);
    console.log('DID UPDATE before', this.state.template);
    this.checkLayout();
    console.log(typeof window !== 'undefined' ? window.location.pathname : null);
    console.log('DID UPDATE after', this.state.template);
  }
  checkLayout = () => {
    if (typeof window !== 'undefined') {
      const template = getTemplate();
      if (this.state.template !== template) {
        this.setState({ template });
        if (template === 'page') {
          showIntercom();
          document.body.style.background = `rgb(${colors.navyBlue})`;
        } else {
          hideIntercom();
          document.body.style.background = `rgb(${colors.white})`;
        }
      }
    }
  };
  render() {
    console.log(typeof window !== 'undefined' ? window.location.pathname : null);
    console.log('RENDER', this.state.template);
    const { children, location, data } = this.props;
    return (
      <SWrapper>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
        />
        <SBackgroundTriangles template={this.state.template}>
          <STrianglesLeft />
          <STrianglesRight />
        </SBackgroundTriangles>
        <Header pathname={location.pathname} template={this.state.template} />
        <SContent template={this.state.template}>{children()}</SContent>
        {this.state.template !== 'page' && <Footer template={this.state.template} />}
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
