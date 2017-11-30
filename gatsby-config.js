module.exports = {
  siteMetadata: {
    title: `Balance`,
    baseUrl: `https://balancemy.money`,
    description: `We're building a wallet for all the world's currencies, available soon for Mac and iOS.`,
    keywords: `blockchain, cryptocurrency, wallet, interface, ethereum, bitcoin`,
    coverImage: `twitter-card-800-400.png`,
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
