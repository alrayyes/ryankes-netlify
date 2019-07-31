module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      resolve: `gatsby-source-filesystem`,

    },
    {
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
      resolve: 'gatsby-source-filesystem',

    },
    {
      options: {
        name: 'images',
        path: `${__dirname}/src/img`,
      },
      resolve: 'gatsby-source-filesystem',

    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
      resolve: `gatsby-plugin-typography`,

    },
    `gatsby-plugin-typescript`,
    {
      options: {
        plugins: [
          {
            options: {
              name: 'uploads',
            },
            resolve: 'gatsby-remark-relative-images',

          },
          {
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
            resolve: 'gatsby-remark-images',

          },
          {
            options: {
              destinationDir: 'static',
            },
            resolve: 'gatsby-remark-copy-linked-files',

          },
          {
            resolve: 'gatsby-remark-smartypants',
          },
        ],
      },
      resolve: 'gatsby-transformer-remark',

    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      options: {
        modulePath: `${__dirname}/src/cms/cms.ts`,
      },
      resolve: 'gatsby-plugin-netlify-cms',

    },
    'gatsby-plugin-netlify',
  ],
  siteMetadata: {
    author: `Ryan Kes`,
    description: `This is my namepage, there are many like it but this one is mine`,
    title: `Ryan's Namepage`,
    twitter_author: `@alrayyes`,
  },

}
