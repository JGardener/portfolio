import React from "react";
import styles from './Home.module.css'

const Home = () => {
    return (
        <section className={styles.home_wrapper}>
            <p>Hello there!</p>
            <br />
            <p>Welcome to my portfolio, and thank you for taking the time to peruse it.</p>
            <br />
            <p>The links above take you to the various sections of the site:</p>
            <br />
            <ul>
                <li>"About" will tell you more about me and my journey into development</li>
                <li>"Projects" will take you to some of the work I've done; both the complete application and the code on GitHub</li>
                <li>"Contact" has all the information you need to get in touch with me. Let's chat!</li>
            </ul>
        </section>
    )
}

export default Home