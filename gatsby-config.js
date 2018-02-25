module.exports = {
  siteMetadata: {
    title: `Balance`,
    baseUrl: `https://balance.io`,
    homepageTitle: `Balance - An Ethereum wallet that supports all ERC-20 tokens.`,
    description: `Store and secure all your ERC-20 tokens in one place`,
    keywords: `blockchain, tokens, cryptocurrency, wallet, interface, ethereum, bitcoin`,
    socialCard: `social-media-card.png`,
    twitterUsername: '@balance_io',
    facebookId: '1748891795369317'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-77954108-1'
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
        username: `balance-io`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-next`
  ]
};
