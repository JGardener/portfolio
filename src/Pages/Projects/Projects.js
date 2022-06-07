import React from "react";
import { Link } from "react-router-dom";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.projects_wrapper}>
      <section className={styles.projects_text}>
        <h1 className={styles.projects_title}>Projects</h1>
        <p>
          These are the projects I completed before I got my first professional
          job
        </p>
      </section>
      <section className={styles.projects_links}>
        <Link to="/projects/indecision">Indecision</Link>
        <p>
          Indecision is my most complicated app in terms of technology used to
          build it. It's a whole lot of React, but with state management through
          Redux and some local storage!
        </p>
        <br />
        <Link to="/projects/rock-paper-scissors">Rock-Paper-Scissors</Link>
        <p>
          Rock-Paper-Scissors was a small, fun project to build something that
          'simulated' AI to my friends, but it's just Math.random()
        </p>
        <br />
        <Link to="/projects/chatbot">Chatbot</Link>
        <p>
          Chatbot is the beginning of a moderation and interaction bot for
          streamers on Twitch.tv. It has no front-end, so there isn't anything
          to see live, however the code is available to view. I used Twitch's
          API to interact with the site and streamer's channels.
        </p>
      </section>
    </section>
  );
};

export default Projects;
