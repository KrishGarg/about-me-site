module.exports = {
  siteMetadata: {
    siteUrl: "https://www.krishgarg.ga",
    title: "About Krish Garg",
  },
  plugins: [
    "gatsby-plugin-transition-link",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blogs",
        path: `${__dirname}/blogs/`,
      },
      __key: "blogs",
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "AboutMe",
        short_name: "AboutMe",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
  ],
};
