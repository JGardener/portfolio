import React from "react";
import { Link } from "react-router-dom";
import styles from './Projects.module.css';

const Projects = () => {
    return (
        <section className={styles.projects_wrapper}>
            <section className={styles.projects_text}>
                <h1 className={styles.projects_title}>
                    Projects
                </h1>
            </section>            
            <section className={styles.projects_links}>
                <Link to="/projects/indecision">Indecision</Link>
                <Link to="/projects/rock-paper-scissors">Rock-Paper-Scissors</Link>
            </section>
        </section>
    )
};

export default Projects