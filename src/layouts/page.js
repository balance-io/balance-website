import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { colors, responsive } from '../styles';

const SPage = styled.div`
  padding: ${({ article }) => (article ? '56px 0 12px' : 0)};
  margin: 0 auto;
  min-height: ${({ article }) => (article ? 'calc(100vh - 68px)' : 0)};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'none')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ fontColor }) => `rgb(${colors[fontColor]})`};
  @media screen and (${responsive.sm.max}) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const layoutTheme = {
  fontWeight: '400',
  linkColor: colors.lightGrey,
  linkHover: colors.lightGrey,
  backgroundColor: colors.darkNavyBlue,
  mobileActiveColor: colors.brightBlue,
  mobileToggleColor: colors.lightGrey,
  mobileToggleOpacity: '1',
  logoColor: colors.lightGrey,
  logoHover: colors.lightGrey
};

const Page = ({ children, title, siteTitle, fontColor, article, maxWidth, ...props }) => (
  <div>
    {!!(title && siteTitle) && (
      <Helmet
        title={`${title} - ${siteTitle}`}
        meta={[{ name: 'twitter:title', content: title }, { name: 'og:title', content: title }]}
      />
    )}
    <Header theme={layoutTheme} />
    <SPage article={article} maxWidth={maxWidth} fontColor={fontColor} {...props}>
      {!article ? (
        <div>{children}</div>
      ) : (
        <article>
          <h1>{title}</h1>
          <div>{children}</div>
        </article>
      )}
    </SPage>
    <Footer theme={layoutTheme} />
  </div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  siteTitle: PropTypes.string,
  fontColor: PropTypes.string,
  article: PropTypes.bool,
  maxWidth: PropTypes.number
};

Page.defaultProps = {
  title: '',
  siteTitle: '',
  fontColor: 'white',
  article: false,
  maxWidth: null
};

export default Page;
