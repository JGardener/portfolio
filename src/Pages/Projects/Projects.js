import React from "react";
import { Link } from "react-router-dom";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.projects_wrapper}>
      <section className={styles.projects_text}>
        <h1 className={styles.projects_title}>Projects</h1>
        <p className={styles.projects_subtitle}>
          These are some projects I've completed outside of work
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
          streamers on Twitch.tv. It's built in NodeJS and does not have a GUI,
          however, the code is available to view. I used Twitch's API to
          interact with the site and streamer's channel.
        </p>
        <br />
        <Link to="/projects/moviedb">MovieDB</Link>
        <p>
          MovieDB uses the Open Movie Database API to search for a queried
          movie, display results, then give the user more information once they
          choose a specific movie. Furthermore, they can add movies to their
          'favourites', which is displayed as a list on the main page.
        </p>
        <br />
        <Link to="/projects/pokequest">PokéQuest</Link>
        <p>
          PokéQuest originally started as a code-test for a company I was
          interviewing for. After completing the initial requirements of the
          assignment, I continued to add to it. I added functionality, I
          refactored code, and continued to expand on previous work. The company
          wanted to make me an offer for the role, but the company board put a
          hiring freeze in place before the offer could be made due to the
          economy. Whilst this was incredibly unfortunate, I wanted to continue
          building on this project!
        </p>
      </section>
    </section>
  );
};

export default Projects;
