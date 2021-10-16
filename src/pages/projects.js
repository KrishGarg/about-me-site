import React from "react";

import Layout from "../components/Layout";
import Button from "../components/Button";

// Styles
import {
  heading,
  project as projectStyle,
  projects as projectWrap,
  projTitle,
} from "../styles/Projects.module.scss";

// Projects data
import projects from "../../projects.json";

const Projects = () => {
  return (
    <Layout title="Projects">
      <div>
        <Button to="/" text="Back To Home" />
      </div>
      <h1 className={heading}>Projects</h1>
      <hr />
      <div className={projectWrap}>
        {projects.map((p, idx) => (
          <div key={idx} className={projectStyle}>
            <div className={projTitle}>{p.name}</div>
            <div>{p.description}</div>
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
