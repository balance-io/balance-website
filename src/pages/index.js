import React from 'react';
import {
  ellipseText,
  getReadingTime,
  getTimeagoString
} from '../utils/helpers';

const IndexPage = ({ data }) => {
  const posts = data.allContentfulPost.edges;
  return (
    <div>
      {console.log(posts)}
      {posts.map((post, idx) => (
        <div key={post.node.id}>
          <h1>{post.node.title.title}</h1>
          <p>{getTimeagoString(post.node.date)}</p>
          <p>{`${getReadingTime(post.node.body.body)} MIN READ`}</p>
          <p>
            {idx > 0 ? (
              ellipseText(post.node.body.body, 117)
            ) : (
              ellipseText(post.node.body.body, 237)
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allContentfulPost {
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
