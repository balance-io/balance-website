import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { colors, transitions, responsive } from '../styles';
import { ellipseText, getReadingTime, getTimeagoString } from '../utils/helpers';

const dividerColors = ['#A539BD', '#9251AC', '#32325D', '#3079C0', '#217AB7', '#00AEA5', '#517299', '#54606C'];

const SDivider = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  overflow: hidden;
  margin-bottom: 18px;
  display: ${({ i }) => (i === 0 ? 'none' : 'block')};
  background: rgb(${colors.dark});
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: ${transitions.short};
    background: ${({ i }) => dividerColors[i % 8]};
  }
`;

const SPostCards = styled(Link)`
  display: block;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 36px;
  width: 100%;
  cursor: pointer;
  transition: all 0.38s cubic-bezier(0.19, 1, 0.22, 1);
  overflow: hidden;
  @media screen and (${responsive.sm.max}) {
    border-radius: 0;
  }
  @media (hover: hover) {
    &:hover > div > div {
      opacity: 0;
      -webkit-filter: blur(6px);
    }
  }
  ${({ i }) => {
    if (i === 0) {
      return `
      margin-bottom: 32px;
      padding: 20px 22px 27px 22px;
      margin-left: -22px;
      width: calc(100% + 44px);
      background: #fff;
      border-radius: 5px;
      box-shadow: 0 0 1px 0 rgba(49,49,93,.12), 0 5px 15px 0 rgba(49,49,93,.1), 0 15px 35px 0 rgba(49,49,93,0.15), 0 50px 100px 0 rgba(49,49,93,0.1);
      @media screen and (${responsive.sm.max}) {
        transform: scale(.96) rotate3d(0,0,0,0);
      	border-radius: 5px;
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
  font-weight: 700;
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
  ${({ i }) => {
    if (i === 0) {
      return `margin-bottom: 7px;`;
    }
  }};
`;

const IndexPage = ({ data, errors }) => {
  const posts = data.allContentfulPost.edges;
  return (
    <div>
      {posts.map((post, idx) => (
        <SPostCards key={post.node.id} i={idx} to={post.node.slug}>
          <SDivider i={idx}>
            <div />
          </SDivider>
          <SPostInfo i={idx}>
            {`${getTimeagoString(post.node.date, true)}  •  ${getReadingTime(post.node.body.body)} min read`}
          </SPostInfo>
          <SPostTitle>{post.node.title.title}</SPostTitle>
          <SPostSummary>
            {idx > 0 ? ellipseText(post.node.body.body, 117) : ellipseText(post.node.body.body, 237)}
          </SPostSummary>
        </SPostCards>
      ))}
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
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
            body
          }
        }
      }
    }
  }
`;
