import React from 'react';
import styled from 'styled-components';
import { colors, responsive } from '../styles';
import { getTimeagoString } from '../utils/helpers';

const SPost = styled.div`
  padding: 16px 0;
  margin: 0 auto;
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
    letter-spacing: -.6px;
    line-height: 1.04;
  }
  @media screen and (${responsive.sm.max}) {
    padding-left: 22px;
    padding-right: 22px;
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
  letter-spacing: -.1px;
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

const Post = ({ data }) => {
  const post = data.contentfulPost;
  const title = post.title.title;
  const date = post.date;
  const readingTime = post.body.content.timeToRead;
  const html = post.body.content.html;
  const authorName = post.author[0].name;
  const authorBio = post.author[0].biography.biography;
  const authorImg = post.author[0].profilePhoto.file.url;
  return (
    <SPost>
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
  );
};

export default Post;

export const query = graphql`
  query PostQuery($slug: String) {
    contentfulPost(slug: { eq: $slug }) {
      date
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
          timeToRead
          html
        }
      }
    }
  }
`;
