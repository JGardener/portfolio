import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {
    return(
        <section className = {styles.header_wrapper}> 
            <h1 className = {styles.header_title}>
                Hi, I'm James Gardener
            </h1>
            <p className = "header_text">
                I'm a front-end developer working with JS and React!
            </p>
            <Link className = {styles.header_link} to = "/">Home</Link>
            <Link className = {styles.header_link} to = "/about">About</Link>
            <Link className = {styles.header_link} to = "/projects">Projects</Link>
            <Link className = {styles.header_link} to = "/contact">Contact</Link>
        </section>
    )
}

export default Header