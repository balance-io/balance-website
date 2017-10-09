import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Section from '../components/Section';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { colors, responsive } from '../styles';
import { getTimeagoString } from '../utils/helpers';
import TrianglesLeft from '../assets/blog-triangles-left.svg';
import TrianglesRight from '../assets/blog-triangles-right.svg';

const SBackgroundTriangles = styled.div`@media screen and (${responsive.sm.max}) {display: none;}`;

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

const SBackground = () => (
  <SBackgroundTriangles>
    <STrianglesLeft />
    <STrianglesRight />
  </SBackgroundTriangles>
);

const SPost = styled(Section)`
  padding: 56px 0 12px;
  & h1 {
    margin-bottom: 11px;
    font-size: 2.5em;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1.04;
  }

  & h2 {
    margin: 48px 0 11px 0;
    font-size: 1.75em;
    font-weight: 700;
    letter-spacing: -0.6px;
    line-height: 1.04;
  }
  @media screen and (${responsive.sm.max}) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const SInfo = styled.div`
  margin-bottom: 29px;
  height: 60px;
  & p {
    font-size: 0.8125em;
    color: rgb(${colors.darkGrey});
  }
  & p:first-of-type {
    margin-bottom: 4px;
  }
`;

const SAuthorImage = styled.div`
  float: left;
  margin-right: 15px;
  width: 60px;
  height: 60px;
  background-size: 60px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
  & img {
    width: 100%;
  }
`;

const SAuthorName = styled.h5`
  padding-top: 2px;
  margin-bottom: 3px;
  font-size: 0.9375em;
  letter-spacing: -0.1px;
  font-weight: 500;
`;

const SPostContent = styled.div`
  & p {
    margin-bottom: 29px;
    font-family: 'FreightText';
    font-size: 1.3125em;
    line-height: 1.5714285714;
  }
  & a {
    display: inline-block;
    font-weight: 400;
    background-image: linear-gradient(to bottom, rgba(51, 51, 51, 0.75) 50%, rgba(51, 51, 51, 0) 50%);
    background-repeat: repeat-x;
    background-size: 2px 0.1em;
    background-position: 0 1.25em;
  }
  & a:active {
    -webkit-transform: scale(0.95) translate3d(0, 0, 0);
    -webkit-transition: 0.06s ease;
  }
`;

const layoutTheme = {
  fontWeight: '400',
  linkColor: colors.green,
  linkHover: colors.dark,
  mobileToggleColor: colors.green,
  mobileToggleOpacity: '1',
  logoColor: colors.green,
  logoHover: colors.dark
};

const Post = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const siteUrl = data.site.siteMetadata.baseUrl;

  const post = data.contentfulPost;

  const title = post.title.title;
  const date = post.date;
  const category = post.category.title;
  const tags = post.tags;
  const slug = post.slug;
  const excerpt = post.body.content.excerpt;
  const featuredImage = `https:${post.featuredImage.file.url}`;
  const readingTime = post.body.content.timeToRead;
  const html = post.body.content.html;

  const authorName = post.author[0].name;
  const authorBio = post.author[0].biography.biography;
  const authorImg = post.author[0].profilePhoto.file.url;
  return (
    <div>
      <Helmet
        title={`${title} - ${siteTitle} Blog`}
        meta={[
          { name: 'description', content: excerpt },
          { name: 'keywords', content: tags },

          { name: 'twitter:title', content: title },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:description', content: excerpt },
          { name: 'twitter:image:src', content: featuredImage },

          { name: 'og:title', content: title },
          { name: 'og:type', content: 'article' },
          { name: 'og:url', content: `${siteUrl}/post/${slug}` },
          { name: 'og:description', content: excerpt },
          { name: 'og:image', content: featuredImage },

          { name: 'article:published_time', content: date },
          { name: 'article:author', content: authorName },
          { name: 'article:section', content: category }
        ]}
      />
      <Header theme={layoutTheme} />
      <SPost maxWidth={700} fontColor={colors.dark} background={<SBackground />}>
        <header>
          <SInfo>
            <SAuthorImage>
              <img src={authorImg} alt={authorName} />
            </SAuthorImage>
            <SAuthorName>{authorName}</SAuthorName>
            <p>{authorBio}</p>
            <p>{`Posted ${getTimeagoString(date, true)}  •  ${readingTime} min read`}</p>
          </SInfo>
          <h1>{title}</h1>
        </header>
        <article>
          <SPostContent dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </SPost>
      <Footer theme={layoutTheme} />
    </div>
  );
};

export default Post;

export const query = graphql`
  query PostQuery($slug: String) {
    site {
      siteMetadata {
        title
        baseUrl
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      date
      category {
        title
      }
      tags
      slug
      featuredImage {
        file {
          url
        }
      }
      author {
        name
        biography {
          biography
        }
        profilePhoto {
          file {
            url
          }
        }
      }
      title {
        title
      }
      body {
        content: childMarkdownRemark {
          excerpt
          timeToRead
          html
        }
      }
    }
  }
`;
