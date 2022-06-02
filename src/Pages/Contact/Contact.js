import React from "react";
import Card from "../../Components/Card/Card";
import styles from "./Contact.module.css";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section className={styles.contact_wrapper}>
      <Card />
      <section className={styles.contact_text}>
        <p>Hover over aor tap the image to find my LinkedIn, Github and CV. </p>
        <p>
          <FontAwesomeIcon icon={faEnvelopeOpenText} />
          Email:
          <a href="mailto:jamesgardener92@gmail.com">
            jamesgardener92@gmail.com
          </a>
        </p>
      </section>
    </section>
  );
};

export default Contact;
