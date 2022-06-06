import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about_wrapper}>
      <h1 className={styles.about_title}>Who are you?</h1>
      <p>
        I'm a Junior Front-End Developer, who chose React as their framework of
        choice. In 2018, I began to teach myself how to code.
      </p>
      <p>
        My first professional role was for Wonderful Creative Agency in Kent,
        building out projects such as the landing page for a high-profile
        household name collaborating with a top BBC/Netflix TV series. Other
        projects included email signatures and quote templates for clients. I
        up-skilled in HTML, CSS and JS, began using TailwindCSS as well as
        learning the basics of Wordpress, PHP and Laravel. I learned how to
        incorporate libraries into my work, such as TinySlider and FancyBox.
      </p>
      <p>
        I learned how to optimise websites for deployment by performing tasks
        such as preload and prefetch, compressing images while retaining their
        quality, converting CDN's to local files, deferring scripts, etc.
      </p>
    </section>
  );
};

export default About;
