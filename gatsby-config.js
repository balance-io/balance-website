const proxy = require("http-proxy-middleware");

module.exports = {
  siteMetadata: {
    title: `Balance`,
    description: `Welcome to the Open Financial System`,
    longTitle: `Balance - The Open Financial System`,
    author: `@balance_io`,
    supportUrl: `http://support.balance.io/`,
    managerUrl: `https://manager.balance.io/`,
    appStoreUrl: `https://testflight.apple.com/join/QXCgM6bu`,
    urls: [
      { url: "https://discord.gg/xCtf2wN", label: "Discord" },
      { url: "https://spectrum.chat/balance/meetups", label: "Meetups" },
      { url: "https://twitter.com/balance_io", label: "Twitter" },
      { url: "https://medium.com/balance-io", label: "Blog" },
      { url: "https://github.com/balance-io/", label: "GitHub" },
      { url: "https://spectrum.chat/balance", label: "Forum" }
    ],
    tweets: [
      "1079238612888182785",
      "1080444794508361728",
      "1059520196472463364",
      "1059535647151517696",
      "1052007905791074304"
    ],
    integrations: [
      {
        name: "Maker Loans",
        description:
          "Track Collateralized Debt Positions you have opened to get a loan",
        link: "https://makerdao.com",
        brand: "maker",
        ready: true
      },
      {
        name: "Compound Interest",
        description: "See how much interest you have earned on your tokens",
        link: "https://compound.finance",
        brand: "compound",
        ready: true
      },
      {
        name: "Dharma Loans",
        description:
          "See how much interest you are paying or earning with your debt",
        link: "https://dharma.io",
        brand: "dharma",
        ready: false
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-77954108-1",
        head: true,
        anonymize: true,
        respectDNT: true,
        cookieDomain: process.env.URL || "http://localhost:8000"
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://balance.us11.list-manage.com/subscribe/post?u=a3f87e208a9f9896949b4f336&amp;id=3985713da6`
      }
    },
    {
      resolve: `gatsby-plugin-intercom`,
      options: {
        appId: "j0fl7v0m",
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Balance`,
        short_name: `Balance`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/balance-icon.png`
      }
    },
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify`
  ],
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": ""
        }
      })
    );
  }
};
