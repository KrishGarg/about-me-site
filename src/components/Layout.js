import React from "react";
import "../styles/GlobalStyles.scss";

import SEO from "./SEO";

const Layout = ({ children, title }) => {
  return (
    <>
      <SEO />
      <title>Krish Garg - {title}</title>
      <div>{children}</div>
    </>
  );
};

export default Layout;
