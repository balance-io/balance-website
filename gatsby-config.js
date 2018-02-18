module.exports = {
  siteMetadata: {
    title: `Balance`,
    baseUrl: `https://balance.io`,
    homepageTitle: `Balance - An Ethereum wallet that supports ERC-20 tokens.`,
    description: `Store and secure all your ERC-20 tokens in one place`,
    keywords: `blockchain, tokens, cryptocurrency, wallet, interface, ethereum, bitcoin`,
    socialCard: `social-media-card.png`,
    twitterUsername: '@balancemymoney',
    facebookId: '1748891795369317',
    campaigns: ['relay', 'appstories', 'macstories']
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-77954108-1'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `legacy`,
        path: `${__dirname}/src/legacy`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `0in2z5jkbaay`,
        accessToken: `8a07f78be235d70f1bb3aee5d324b30e90275a542173a923604dcc12235ef33c`
      }
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `balancemymoney`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-next`
  ]
};
