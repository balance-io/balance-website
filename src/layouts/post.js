import React from 'react';

const Post = props => {
  console.log(props);
  return <div>This is a post</div>;
};

export default Post;

// export const query = graphql`
//   query IndexQuery($slug: String!) {
//     contentfulPost(slug: { eq: $slug }) {
//       idc
//       date
//       title {
//         title
//       }
//       body {
//         content: childMarkdownRemark {
//           html
//         }
//       }
//     }
//   }
// `;
