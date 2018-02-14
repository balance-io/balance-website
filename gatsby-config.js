module.exports = {
  siteMetadata: {
    title: `Balance`,
    baseUrl: `https://balance.io`,
    homepageTitle: `Balance - A place for your tokens`,
    description: `Buy, store and secure Ethereum-based tokens. A wallet that supports ERC-20 & ERC-721.`,
    keywords: `blockchain, cryptocurrency, wallet, interface, ethereum, tokens`,
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
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-next`
  ]
};
