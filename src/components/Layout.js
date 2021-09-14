import React from "react";
import "../styles/GlobalStyles.scss";

import Seo from "./SEO";

const Layout = ({ children, title }) => {
  return (
    <>
      <Seo />
      <title>Krish Garg - {title}</title>
      <div>{children}</div>
    </>
  );
};

export default Layout;
