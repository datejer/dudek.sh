"use client";

import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import projects from "../../../assets/data/projects.json";
import styles from "./Projects.module.scss";

export const Projects = () => {
  const [hasHover, setHasHover] = useState(true);

  useEffect(() => {
    setHasHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  return (
    <ul className={styles.projects}>
      {projects.map((project, index) => (
        <li key={project.name || index} className={styles.projectWrapper}>
          <Tilt tiltEnable={hasHover} style={{ height: "100%" }}>
            <a href={project.link}>
              <div className={styles.project} style={{ borderColor: project.color }}>
                <h2 className={styles.projectName}>{project.name}</h2>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
            </a>
          </Tilt>
        </li>
      ))}
    </ul>
  );
};
