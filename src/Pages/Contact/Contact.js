import React from "react";
import Card from "../../Components/Card/Card";
import styles from "./Contact.module.css";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogleDrive,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section className={styles.contact_wrapper}>
      <Card />
      <section className={styles.contact_text}>
        <p>
          Let's talk! You can find me on{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jamesgardener92"
          >
            LinkedIn
          </a>
          , you can see my work on{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/jgardener"
          >
            Github
          </a>
          , and you can also read my{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/170sXGtXZP0A4p9V4HoihcpFdY3u2Tz_O/view?usp=sharing"
          >
            CV
          </a>
          . Alternatively, you can{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:jamesgardener92@gmail.com"
          >
            email me
          </a>{" "}
          directly!
        </p>
      </section>
    </section>
  );
};

export default Contact;
