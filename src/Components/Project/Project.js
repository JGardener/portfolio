import React from "react";
import { Link } from "react-router-dom";
import styles from './Project.module.css';

const Project = ({projectName, projectImage, projectDescription, projectCode, projectApp}) => {
    return(
        <section className={styles.project_wrapper}>
            <h1 className={styles.project_name}>{projectName}</h1>
            <section className={styles.display_wrapper}>
                <section className={styles.project_image_wrapper}>  
                    <section className={styles.project_image} style={{backgroundImage: `url(${projectImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition:'center'}}></section>
                </section>
                <section className={styles.project_description}>
                    <p className={styles.project_description_text}>{projectDescription}</p>
                    <a className={styles.external_link} href={projectApp} target="_blank" rel="noreferrer">See the App</a> <br/>
                    <a className={styles.external_link} href={projectCode}target="_blank" rel="noreferrer">See the Code</a>
                    </section>
            </section>
            <Link to="/projects">Back</Link>
        </section>
    )
};

export default Project