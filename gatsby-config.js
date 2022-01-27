require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
module.exports = {
  siteMetadata: {
    title: `Gatsby Coffee`,
    description: `As roast dark, iced, strong irish crema whipped ristretto crema. Breve, cup americano filter trifecta est strong redeye half and half. Et aftertaste flavour carajillo blue mountain froth, white beans so extraction shop foam.`,
    author: `sherwin_suva`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: '1pJo1XNyCq9tHb9eMMciJ1Tt1rULp4zKBL71wixlAsx4',
        apiKey: 'AIzaSyADXVfFzBkZUatJjCd4DtUQ9k7YYpPs7vY'
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/assets/videos`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `imyw7ltsxoa6`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },

    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
