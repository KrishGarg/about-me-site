import React from "react";
import "../styles/GlobalStyles.scss";

import Seo from "./SEO";
import { MDXProvider } from "@mdx-js/react";
import { Helmet } from "react-helmet";

// Shortcode components for blogs
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Layout = ({ children, title }) => {
  const shortcodes = {
    AniLink,
  };

  return (
    <>
      <Helmet>
        <script src="https://s.pageclip.co/v1/pageclip.js" />
      </Helmet>
      <MDXProvider components={shortcodes}>
        <Seo title={title} />
        <div>{children}</div>
      </MDXProvider>
    </>
  );
};

export default Layout;
