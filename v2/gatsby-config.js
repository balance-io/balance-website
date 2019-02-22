const proxy = require("http-proxy-middleware");

module.exports = {
  siteMetadata: {
    title: `Balance`,
    description: ``,
    author: `@balance_io`,
    supportUrl: `https://support.balance.io/`,
    managerUrl: `https://manager.balance.io/`,
    urls: [
      { url: "https://twitter.com/balance_io", label: "Twitter" },
      { url: "https://medium.com/balance-io", label: "Blog" },
      { url: "http://github.com/balance-io/", label: "GitHub" },
      { url: "https://spectrum.chat/balance", label: "Forum" },
      { url: "https://spectrum.chat/balance/meetups", label: "Meetups" }
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
    }
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
