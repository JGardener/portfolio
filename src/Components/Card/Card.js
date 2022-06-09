import React from "react";
import styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogleDrive,
} from "@fortawesome/free-brands-svg-icons";

const Card = () => {
  return (
    <section className={styles.card_wrapper}>
      {/* <h1 className={styles.card_title}> James Gardener</h1>
      <section className={styles.card_icon_wrapper}>
        <a
          className={styles.card_icon}
          href="https://www.linkedin.com/in/jamesgardener92"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a
          className={styles.card_icon}
          href="https://www.github.com/jgardener"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a
          className={styles.card_icon}
          href="https://drive.google.com/file/d/170sXGtXZP0A4p9V4HoihcpFdY3u2Tz_O/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGoogleDrive} /> CV
        </a>
      </section> */}
    </section>
  );
};

export default Card;
