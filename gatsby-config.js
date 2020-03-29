module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Asokumar Gurusamy`,
    description: `The personal website for Asokumar Gurusamy known as Ashok G`,
    author: `Asokumar Gurusamy`,
    keywords: ['agurusamy', 'asokg', 'Asokumar Gurusamy', 'Ashok G', 'Ashokkumar Gurusamy', 'Ashok Gurusamy']
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `asokumar-gurusamy-personal-webpage`,
        short_name: `asokg`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
        icon: `src/images/leaf.png`
      },
    },
  ],
}
