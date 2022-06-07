import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Contact from "../Pages/Contact/Contact";
import Header from "../Components/Header/Header";
import About from "../Pages/About/About";
import Project from "../Components/Project/Project";
import Projects from "../Pages/Projects/Projects";
import Work from "../Pages/Work";
import { IndecisionInformation } from "../Components/Information/IndecisionInformation";
import { RPSInformation } from "../Components/Information/RPSInformation";
import { ChatbotInformation } from "../Components/Information/ChatbotInfomation";
import indecisionImage from "../Assets/images/indecision.png";
import rpsImage from "../Assets/images/rps.png";
import chatbotImage from "../Assets/images/bot.png";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/work" exact component={Work} />
        <Route path="/portfolio" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route
          path="/projects/indecision"
          render={() => (
            <Project
              projectName={"Indecision"}
              projectImage={indecisionImage}
              projectDescription={IndecisionInformation.description}
              projectSkills={IndecisionInformation.skills}
              projectApp={IndecisionInformation.app}
              projectCode={IndecisionInformation.code}
            />
          )}
        />

        <Route
          path="/projects/rock-paper-scissors"
          render={() => (
            <Project
              projectName={"Rock-Paper-Scissors"}
              projectImage={rpsImage}
              projectDescription={RPSInformation.description}
              projectSkills={RPSInformation.skills}
              projectApp={RPSInformation.app}
              projectCode={RPSInformation.code}
            />
          )}
        />

        <Route
          path="/projects/chatbot"
          render={() => (
            <Project
              projectName={"Chatbot"}
              projectImage={chatbotImage}
              projectDescription={ChatbotInformation.description}
              projectSkills={ChatbotInformation.skills}
              projectCode={ChatbotInformation.code}
            />
          )}
        />

        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
