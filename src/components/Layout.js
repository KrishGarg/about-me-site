import React from "react";
import "../styles/GlobalStyles.scss";

const Layout = ({ children, title }) => {
  return (
    <>
      <title>Krish Garg - {title}</title>
      <div>{children}</div>
    </>
  );
};

export default Layout;
