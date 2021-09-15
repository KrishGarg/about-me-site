module.exports = {
  siteMetadata: {
    siteUrl: "https://www.krishgarg.ga",
    title: "Krish Garg",
    titleTemplate: "Krish Garg - %s",
    description:
      "A site about me, Krish Garg. I post some blogs and will add some more info and projects of/about me in the future.",
    url: "https://www.krishgarg.ga",
    image: "/images/icon.png",
    twitterUsername: "@KrishGa95586696",
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
    "gatsby-plugin-mdx",
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
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.krishgarg.ga",
        sitemap: "https://www.krishgarg.ga/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
