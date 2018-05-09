import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Section from '../components/Section';
import Header from '../components/Header';
import Footer from '../components/Footer';
import mediumLogo from '../assets/medium-logo.svg';
import { colors, transitions, responsive } from '../styles';
import { ellipseText, getTimeagoString } from '../utils/helpers';

const SBlog = styled(Section)`
  padding: 48px 0 12px;
  padding-bottom: 76px;

  @media screen and (${responsive.md.max}) {
    padding-top: 42px;
    padding-bottom: 68px;
  }

  @media screen and (${responsive.sm.max}) {
    padding-top: 32px;
    padding-bottom: 54px;
  }
`;
const dividerColors = [
  '#A539BD',
  '#9251AC',
  '#32325D',
  '#3079C0',
  '#217AB7',
  '#00AEA5',
  '#517299',
  '#54606C'
];

const SDivider = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  overflow: hidden;
  margin-bottom: 18px;
  display: ${({ idx }) => (idx === 0 ? 'none' : 'block')};
  background: rgb(${colors.dark});
  @media screen and (${responsive.sm.max}) {
    width: 110%;
    margin-left: -5%;
  }
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: ${transitions.short};
    background: ${({ idx }) => dividerColors[idx % 8]};
  }
`;

const SPostCards = styled.div`
  display: block;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 36px;
  width: 100%;
  cursor: pointer;
  transition: all 0.38s cubic-bezier(0.19, 1, 0.22, 1);
  overflow: hidden;
  & p,
  & h2 {
    padding-right: ${({ medium }) => (medium ? '50px' : 0)};
  }
  @media screen and (${responsive.sm.max}) {
    border-radius: 0;
    padding: 0 4%;
  }
  @media (hover: hover) {
    &:hover > div > div {
      opacity: 0;
      -webkit-filter: blur(6px);
    }
  }
  ${({ idx }) => {
    if (idx === 0) {
      return `
      margin-bottom: 32px;
      padding: 20px 22px 27px 22px;
      margin-left: -22px;
      width: calc(100% + 44px);
      background: #fff;
      border-radius: 5px;
      z-index: 5;
      box-shadow: 0 0 1px 0 rgba(49,49,93,.12), 0 5px 15px 0 rgba(49,49,93,.1), 0 15px 35px 0 rgba(49,49,93,0.15), 0 50px 100px 0 rgba(49,49,93,0.1);
      @media screen and (${responsive.sm.max}) {
        transform: scale(.96) rotate3d(0,0,0,0);
      	border-radius: 5px;
        padding: 20px 8% 27px;
      }
      &:active {
        transform: scale(.92) rotate3d(0,0,0,0);
    		border-radius: 6px;
      }
      `;
    }
  }};
`;

const SPostInfo = styled.p`
  margin-bottom: 5px;
  font-size: 0.75em;
  font-weight: 500;
  color: rgb(${colors.darkGrey});
  letter-spacing: 0.2px;
  text-transform: uppercase;
`;

const SPostTitle = styled.h2`
  margin-bottom: 7px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 1.04;
`;

const SPostSummary = styled.p`
  font-family: 'FreightText';
  font-size: 1.125em;
  line-height: 1.3333333333;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  ${({ idx }) => {
    if (idx === 0) {
      return `margin-bottom: 7px;`;
    }
  }};
`;

const SMediumLogo = styled.img`
  position: absolute;
  height: 44px;
  width: 44px;
  right: ${({ first }) => (first ? '20px' : '5px')};
  bottom: ${({ first }) => (first ? '10px' : '0')};
`;

const mergePosts = (contentful, medium) => {
  const allPosts = contentful.concat(medium);
  const parsedPosts = allPosts.map(post => {
    const result = {
      id: '',
      slug: '',
      date: '',
      title: '',
      excerpt: '',
      readingTime: '',
      medium: false
    };
    result.id = post.node.id;
    result.slug = post.node.slug;
    result.date = isNaN(post.node.date) ? Date.parse(post.node.date) : Number(post.node.date);
    if (typeof post.node.title === 'string') {
      result.medium = true;
      result.title = post.node.title;
    } else {
      result.title = post.node.title.title;
    }
    if (post.node.body) {
      result.excerpt = post.node.body.content.excerpt;
      result.readingTime = Math.ceil(post.node.body.content.readingTime);
    } else {
      result.excerpt = post.node.virtuals.excerpt;
      result.readingTime = Math.ceil(post.node.virtuals.readingTime);
    }

    return result;
  });
  parsedPosts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
  return parsedPosts;
};

const layoutTheme = {
  hideIcon: true,
  linkColor: colors.dark,
  linkHover: colors.white,
  footerLinkColor: colors.dark,
  footerDivider: colors.dark,
  mobileActiveColor: colors.lightPurple,
  mobileToggleColor: colors.dark,
  logoColor: colors.dark,
  logoHover: colors.green
};

const Blog = ({ data, errors }) => {
  const contentful = data.allContentfulPost.edges;
  const medium = data.allMediumPost.edges;
  const posts = mergePosts(contentful, medium);
  return (
    <div>
      <Helmet title={`${data.site.siteMetadata.title} Blog`} />
      <Header theme={layoutTheme} />
      <SBlog maxWidth={700} fontColor={colors.dark}>
        {posts.map((post, idx) => {
          if (post.medium) {
            return (
              <a key={post.id} href={`https://medium.com/balance-io/${post.slug}-${post.id}`}>
                <SPostCards medium={post.medium} idx={idx}>
                  <SDivider idx={idx}>
                    <div />
                  </SDivider>
                  <SPostInfo idx={idx}>{`${getTimeagoString(post.date, true)}  •  ${
                    post.readingTime
                  } min read`}</SPostInfo>
                  <SPostTitle>{post.title}</SPostTitle>
                  <SPostSummary>
                    {idx > 0 ? ellipseText(post.excerpt, 120) : ellipseText(post.excerpt, 240)}
                  </SPostSummary>
                  <SMediumLogo first={idx === 0} src={mediumLogo} alt="medium" />
                </SPostCards>
              </a>
            );
          } else {
            return (
              <Link key={post.id} to={`blog/${post.slug}`}>
                <SPostCards medium={post.medium} idx={idx}>
                  <SDivider idx={idx}>
                    <div />
                  </SDivider>
                  <SPostInfo idx={idx}>{`${getTimeagoString(post.date, true)}  •  ${
                    post.readingTime
                  } min read`}</SPostInfo>
                  <SPostTitle>{post.title}</SPostTitle>
                  <SPostSummary>
                    {idx > 0 ? ellipseText(post.excerpt, 120) : ellipseText(post.excerpt, 240)}
                  </SPostSummary>
                </SPostCards>
              </Link>
            );
          }
        })}
      </SBlog>
      <Footer theme={layoutTheme} />
    </div>
  );
};

export default Blog;

export const query = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMediumPost {
      edges {
        node {
          id
          slug
          date: firstPublishedAt
          title
          virtuals {
            excerpt: subtitle
            readingTime
          }
        }
      }
    }
    allContentfulPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          slug
          date
          title {
            title
          }
          body {
            content: childMarkdownRemark {
              excerpt(pruneLength: 250)
              readingTime: timeToRead
            }
          }
        }
      }
    }
  }
`;
