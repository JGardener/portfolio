import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogleDrive,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <section className={styles.header_wrapper}>
      <h2 className={styles.header_title}>James Gardener</h2>
      <p className={styles.header_text}>
        Junior Front End Developer working with JS and React
      </p>
      <section className={styles.card_icon_wrapper}>
        <a
          className={styles.card_icon}
          href="https://www.linkedin.com/in/jamesgardener92"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className={styles.card_icon}
          href="https://www.github.com/jgardener"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className={styles.card_icon}
          href="https://drive.google.com/file/d/170sXGtXZP0A4p9V4HoihcpFdY3u2Tz_O/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGoogleDrive} />
        </a>
      </section>
      <section className={styles.header_links}>
        <Link to="/work">Work</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/portfolio">Tech</Link>
        <Link to="/contact">Contact</Link>
      </section>
    </section>
  );
};

export default Header;
