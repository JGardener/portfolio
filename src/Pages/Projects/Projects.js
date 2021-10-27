import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <section>
            <Link to="/projects/indecision">Indecision</Link>
            <Link to="/projects/rock-paper-scissors">Rock-Paper-Scissors</Link>
        </section>
    )
};

export default Projects