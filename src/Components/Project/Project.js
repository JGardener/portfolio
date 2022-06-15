import React from "react";
import { Link } from "react-router-dom";
import styles from "./Project.module.css";

const Project = ({
  projectName,
  projectImage,
  projectDescription,
  projectSkills,
  projectCode,
  projectApp,
}) => {
  return (
    <section className={styles.project_wrapper}>
      <h1 className={styles.project_name}>{projectName}</h1>
      <section className={styles.display_wrapper}>
        <section className={styles.project_image_wrapper}>
          <img
            height="400px"
            src={projectImage}
            alt="Project Thumbnail"
            styles="object-fit: cover;"
          />
        </section>
        <section className={styles.project_description}>
          <p className={styles.project_description_text}>
            {projectDescription}
          </p>
        </section>
        <section className={styles.project_tech}>
          <ul className={styles.project_tech_list}>
            {projectSkills.map((element) => (
              <li>{element}</li>
            ))}
          </ul>
        </section>
      </section>
      <section className={styles.project_external_link_wrapper}>
        {projectApp && (
          <a
            className={styles.external_link}
            href={projectApp}
            target="_blank"
            rel="noreferrer"
          >
            See the App
          </a>
        )}
        <a
          className={styles.external_link}
          href={projectCode}
          target="_blank"
          rel="noreferrer"
        >
          See the Code
        </a>
        <Link className={styles.external_link} to="/projects">
          Back to Projects
        </Link>
      </section>
    </section>
  );
};

export default Project;
