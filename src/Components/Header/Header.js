import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {
    return(
        <section className = {styles.header_wrapper}> 
            <h2 className = {styles.header_title}>
                Hi, I'm James Gardener
            </h2>
            <p className = {styles.header_text}>
               I'm a front-end developer working with JS and React!
            </p>
            <section className={styles.header_links}>
                <Link to = "/">Home</Link>
                <Link to = "/about">About</Link>
                <Link to = "/projects">Projects</Link>
                <Link to = "/contact">Contact</Link>
            </section>
        </section>
    )
}

export default Header