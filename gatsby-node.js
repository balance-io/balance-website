const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const convertSlugToTitle = slug => {
  const words = slug
    .replace(/\//gi, '')
    .replace(/-/gi, ' ')
    .split(' ');
  const capitalisedWords = words.map(
    word => word.substr(0, 1).toUpperCase() + word.toLowerCase().substring(1)
  );
  const title = capitalisedWords.join(' ');
  return title;
};

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  const legacyFilePath = new RegExp(`${__dirname}/src/legacy`, 'gi');
  const wikiFilePath = new RegExp(`${__dirname}/src/wiki`, 'gi');

  if (
    (node.id.match(legacyFilePath) || node.id.match(wikiFilePath)) &&
    node.internal.type === `MarkdownRemark`
  ) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    const parent = getNode(node.parent).sourceInstanceName;
    const title = convertSlugToTitle(slug);
    if (parent.toLowerCase() === 'wiki') {
      node.frontmatter.title = title;
    }
    if (slug) {
      createNodeField({
        node,
        name: `slug`,
        value: slug
      });
      createNodeField({
        node,
        name: `markdownOrigin`,
        value: parent
      });
    }
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      query {
        site {
          siteMetadata {
            title
            campaigns
          }
        }
        markdown: allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                markdownOrigin
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
      result.data.markdown.edges.map(({ node }) => {
        if (node.fields) {
          const origin = node.fields.markdownOrigin;
          if (origin.toLowerCase() === 'wiki') {
            createPage({
              path: `wiki${node.fields.slug}`,
              component: path.resolve(`./src/templates/wiki.js`),
              context: {
                slug: node.fields.slug
              }
            });
          } else {
            createPage({
              path: node.fields.slug,
              component: path.resolve(`./src/templates/legacy.js`),
              context: {
                slug: node.fields.slug
              }
            });
          }
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
