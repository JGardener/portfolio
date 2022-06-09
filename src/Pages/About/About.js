import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about_wrapper}>
      <h1 className={styles.about_title}>What have I learned?</h1>
      <h4>Base</h4>
      <p>HTML, CSS, JS and TailwindCSS</p>
      <p>
        The trifecta is where I began my coding journey, and consistently
        working on the fundamentals makes working with other technologies that
        build on these a lot easier. Furthermore, TailwindCSS has made my CSS
        process much cleaner and more efficient.
      </p>
      <br />
      <h4>Frameworks</h4>
      <p>
        React - Whilst I'm focussing on React, with particular focus on Hooks
        and Redux Toolkit, I am more than willing to upskill in Vue and/or
        Angular
      </p>
      <br />
      <h4>Beginning to learn</h4>
      <p>PHP, Laravel, Wordpress</p>
      <br />
      <h4>Whilst at work</h4>
      <p>Up-skilling HTML, CSS, JS and TailwindCSS</p>
      <p>
        Optimising websites for deployment; image compression, prefetch/preload,
        CDN/local files, clean directory structure, GTMetrix et al.
      </p>
      <p>
        Incorporating libraries into work, TinySlider for carousels, FancyBox
        for modal videos/images, LeafletJS for interactive maps, ChartJS for
        charting, etc
      </p>
      <p>
        Adobe Photoshop and Adobe XD - Photoshop to resize and make small
        adjustments to images, and designers would send through their designs to
        me in XD
      </p>
      <br />
      <h4>What I'm learning right now</h4>
      <p>React - it's always ongoing!</p>
      <p>React Hooks</p>
      <p>Redux Toolkit</p>
      <p>Any libraries that make any of my projects smoother!</p>
      <br />
      <h4>What's my plan?</h4>
      <p>
        I'd like to focus on front-end work at the moment, but once I complete
        my time as a junior, and move into mid-level or senior work, I'd like to
        expand to full-stack development!
      </p>
    </section>
  );
};

export default About;
