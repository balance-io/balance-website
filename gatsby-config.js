module.exports = {
  siteMetadata: {
    title: `Balance`,
    baseUrl: `https://balance.io`,
    homepageTitle: `Balance - A secure automatic portfolio tracker`,
    description: `Securely connect to multiple exchanges to automatically keep track of your cryptocurrency and token balances.`,
    keywords: `blockchain, cryptocurrency, wallet, interface, ethereum, bitcoin`,
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
