import React from "react";

import Layout from "../components/Layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";

// Styles
import {
  buttonStyle,
  heading,
  project as projectStyle,
  projects as projectWrap,
  projTitle,
  projDesc,
} from "../styles/Projects.module.scss";

// Projects data
import projects from "../../projects.json";

const Projects = () => {
  console.log(projects);

  return (
    <Layout title="Projects">
      <div>
        <AniLink
          hex="#1d1d1d"
          duration={1}
          paintDrip
          to="/"
          className={buttonStyle}
        >
          <button>Back to Home</button>
        </AniLink>
      </div>
      <h1 className={heading}>Projects</h1>
      <hr />
      <div className={projectWrap}>
        {projects.map((p, idx) => (
          <div key={idx} className={projectStyle}>
            <div className={projTitle}>{p.name}</div>
            <div className={projDesc}>{p.description}</div>
            <a href={p.link} target="_blank" rel="noreferrer">
              Link to Project
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
