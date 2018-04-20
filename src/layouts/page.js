import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { colors } from '../styles';

const SPage = styled.div`
  position: relative;
  padding: ${({ article }) => (article ? '56px 0 12px' : 0)};
  margin: 0 auto;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'none')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ fontColor }) => `rgb(${colors[fontColor]})`};
  background: #071827;
`;

const layoutTheme = {
  linkColor: colors.lightHeaderGrey,
  linkHover: colors.darkBackground,
  footerDivider: colors.darkFooterDivider,
  footerCopyright: colors.white,
  backgroundColor: colors.darkNavyBlue,
  mobileActiveColor: colors.brightBlue,
  mobileToggleColor: colors.white,
  logoColor: colors.lightGrey,
  logoHover: colors.white
};

const Page = ({
  children,
  title,
  siteTitle,
  fontColor,
  article,
  maxWidth,
  theme,
  noFooter,
  ...props
}) => (
  <div>
    {!!(title && siteTitle) && (
      <Helmet
        title={`${title} - ${siteTitle}`}
        meta={[{ name: 'twitter:title', content: title }, { name: 'og:title', content: title }]}
      />
    )}
    <Header theme={theme} />
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
    {!noFooter && <Footer theme={theme} />}
  </div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  siteTitle: PropTypes.string,
  fontColor: PropTypes.string,
  article: PropTypes.bool,
  maxWidth: PropTypes.number,
  theme: PropTypes.object,
  noFooter: PropTypes.bool
};

Page.defaultProps = {
  title: '',
  siteTitle: '',
  fontColor: 'white',
  article: false,
  maxWidth: null,
  theme: layoutTheme,
  noFooter: false
};

export default Page;
