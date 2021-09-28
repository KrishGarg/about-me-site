import React from "react";

import AniLink from "gatsby-plugin-transition-link/AniLink";

// Styles
import { buttonStyle } from "../styles/Button.module.scss";

const Button = ({ to = "/", text = "None Given", className }) => {
  return (
    <div>
      <AniLink
        hex="#1d1d1d"
        duration={1}
        paintDrip
        to={to}
        className={className ? className : buttonStyle}
      >
        <button>{text}</button>
      </AniLink>
    </div>
  );
};

export default Button;
