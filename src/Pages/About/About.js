import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about_wrapper}>
      <h1 className={styles.about_title}>What have I learned?</h1>
      <div>
        <p>
          The trifecta of HTML, CSS and JS is where I began my coding journey,
          and consistently working on the fundamentals makes working with other
          technologies that build on these a lot easier. I firmly believe that
          consistently working on fundamentals makes me a stronger developer
          than just rushing into frameworks without knowing what's going on
          under the hood.
        </p>
      </div>
      <div>
        <h4>Whilst at Wonderful</h4>
        <p>Up-skilling HTML, CSS, JS and TailwindCSS</p>
        <p>
          Optimising websites for deployment; image compression,
          prefetch/preload, CDN/local files, clean directory structure, GTMetrix
          et al.
        </p>
        <p>
          Incorporating libraries into work, TinySlider for carousels, FancyBox
          for modal videos/images, LeafletJS for interactive maps, ChartJS for
          charting, etc
        </p>
        <p>
          Adobe Photoshop and Adobe XD - Photoshop to resize and make small
          adjustments to images, and designers would send through their designs
          to me in XD.
        </p>
      </div>

      <div>
        <h4>What's my plan?</h4>
        <p>
          I'd like to focus on front-end work at the moment, but once I complete
          my time as a junior, and move into mid-level or senior work, I'd like
          to expand to full-stack development!
        </p>
        <p>
          I'd like to look into Python and Java, as they're both incredibly
          popular. Java is a full programming language, and therefore something
          I'd love to get my teeth into once I move into full-stack work.
        </p>
      </div>
    </section>
  );
};

export default About;
