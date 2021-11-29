import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {
    return(
        <section className = {styles.header_wrapper}> 
            <h2 className = {styles.header_title}>
                James Gardener
            </h2>
            <p className = {styles.header_text}>
               Front End Developer working with JS and React
            </p>
            <section className={styles.header_links}>
                <Link to = "/projects">Projects</Link>
                <Link to = "/portfolio">Me</Link>
                <Link to = "/contact">Contact</Link>
            </section>
        </section>
    )
}

export default Header