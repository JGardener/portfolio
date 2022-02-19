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
                I went to university to study acting. During that time, around 2012, I took a module on web development so I could build a website to promote myself as an actor once I had graduated.
                I took an interest in coding since then, but it was pushed aside so I could focus on acting. 
            </p>
            <br />
            <p>
                After deciding that acting wasn't for me, and working other jobs besides, I took a greater interest in coding around 2018. I decided that I would learn from home to bolster my skills as a developer, whilst working jobs to keep me afloat. 
                I would teach English during the day, then spend my evenings coding. I started with the basics of HTML, CSS and Javascript, but once I became comfortable with those, I decided to try React as it is a very popular framework. 
            </p>
            <br />
            <p>
                I realised that not holding a degree in Computer Science, Information Technology, or something similar, was hurting my prospects as a junior developer. I started training with The Training Room through their virtual platform, and gained
                new qualifications from Certified Partners such as Javascript Specialist, User Interface Design, Advanced HTML and CSS Specialist, and more. 
            </p>
            <br />
            <p>
                Now that I hold some qualifications, I am looking to expand my knowledge of different technologies and techniques. From React Hooks, Node, React Router, through to Typescript, GraphQL and data visualisation such as D3. 
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