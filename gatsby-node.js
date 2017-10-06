const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      query {
        posts: allContentfulPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors);
      }
      result.data.posts.edges.map(({ node }) => {
        if (node.slug) {
          createPage({
            path: `blog/${node.slug}`,
            component: path.resolve(`./src/templates/post.js`),
            context: {
              slug: node.slug
            }
          });
        }
      });
      resolve();
    });
  });
};
