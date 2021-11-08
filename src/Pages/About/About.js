import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.about_wrapper}>
            <h1 className={styles.about_title}>Who are you?</h1>
            <p>
                I'm an aspiring front-end developer, learning to code from 2018.
            </p>
            <br />
            <p>
                I want to build a strong, secure future in a stable yet challenging industry. With the field
                growing rapidly with each passing year, there are many new technologies being released seemingly
                every day. I want to dive into the world of technology and build things that people will use and love.
            </p>
            <br />
            <p>
                Since 2018, I have learned how to create pages for the web, 
                small applications including single-page apps, games and helped code 
                a friend's interface for their professional app. 
            </p>
            <br />
            <p>
                Now, I am looking to get my very first professional position as a front-end developer to grow my 
                skillbase, to expand my knowledge and advance as a developer.  
            </p>
            <br />
            <p>
                When I'm not coding, you'll find me playing video games with friends, 
                hiking with my Cocker Spaniel; Wheatley, 
                or reading Lord of the Rings... again... don't judge me.
            </p>
            <br />
            <p>
                Thank you for taking the time to read through my portfolio! 
            </p>
            <br />
            <p>
                If you would like to get in touch, just head over to the contact page!
            </p>
        </section>
    )
}

export default About;