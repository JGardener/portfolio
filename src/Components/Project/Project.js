import React from "react";
import { Link } from "react-router-dom";
import styles from './Project.module.css'

const Project = ({projectName, projectImage, projectDescription}) => {
    return(
        <section className="project_wrapper">
            <h1>{projectName}</h1>
            <section className="display_wrapper">
                <section className={styles.project_image} style={{backgroundImage: `url(${projectImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></section>
                <section><p>{projectDescription}</p></section>

            </section>            
            <Link to="/projects">Back</Link>
        </section>
    )
};

export default Project