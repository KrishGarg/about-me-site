import React from "react";
import "../styles/GlobalStyles.scss";

import Seo from "./SEO";
import { MDXProvider } from "@mdx-js/react";

// Shortcode components for blogs
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Layout = ({ children, title }) => {
  const shortcodes = {
    AniLink,
  };

  return (
    <MDXProvider components={shortcodes}>
      <Seo />
      <title>Krish Garg - {title}</title>
      <div>{children}</div>
    </MDXProvider>
  );
};

export default Layout;
