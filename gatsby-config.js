const contentAuthors = "content/authors";
const contentPosts = "content/posts";

module.exports = {
  siteMetadata: {
    title: `Blog by Sanket Maru`,
    name: `Sanket Maru`,
    siteUrl: `http://sanketmaru.github.io`,
    description: `Programmer. Loves Javascript. Open Source contributor. Photographer.`,

    // important to set the main text that appears in the hero
    hero: {
      heading: `Programmer. Loves Javascript. Open Source contributor. Photographer.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/sanketmaru`,
      },
      {
        name: `github`,
        url: `https://github.com/sanketmaru`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/sanket-maru-00314025/`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts,
        contentAuthors,
        authorsPage: true,
        basePath: "/",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Sanket Maru`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/profile.jpeg`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-21053714-3",
      },
    }
  ],
};
