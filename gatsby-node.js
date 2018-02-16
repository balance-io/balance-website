const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  const legacyFilePath = new RegExp(`${__dirname}/src/legacy`, 'gi');
  if (node.id.match(legacyFilePath) && node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      query {
        site {
          siteMetadata {
            campaigns
          }
        }
        legacy: allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        posts: allContentfulPost {
          edges {
            node {
              slug
            }
          }
        }
       }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors);
      }
      result.data.site.siteMetadata.campaigns.map(name => {
        createPage({
          path: name,
          component: path.resolve(`./src/templates/campaign.js`),
          context: {
            slug: name
          }
        });
      });
      result.data.legacy.edges.map(({ node }) => {
        if (node.fields) {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/legacy.js`),
            context: {
              slug: node.fields.slug
            }
          });
        }
      });
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
