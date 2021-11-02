import React from 'react';
import {
    BrowserRouter as Router,
    Switch, 
    Route
} from 'react-router-dom';

import Contact from '../Pages/Contact/Contact'
import Header from '../Components/Header/Header';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import Project from '../Components/Project/Project';
import Projects from '../Pages/Projects/Projects';
import { IndecisionInformation } from '../Components/Information/IndecisionInformation'
import { RPSInformation } from '../Components/Information/RPSInformation'
import indecisionImage from '../Assets/images/indecision.png' 
import rpsImage from '../Assets/images/rps.png' 



const AppRouter = () => {
    return(
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path='/projects' exact component={Projects}/>

                <Route 
                path="/projects/indecision" 
                render={() => <Project 
                    projectName={'Indecision'} 
                    projectImage={indecisionImage} 
                    projectDescription={IndecisionInformation.description} 
                    projectApp={IndecisionInformation.app}
                    projectCode={IndecisionInformation.code}
                />}/>

                <Route 
                path="/projects/rock-paper-scissors" 
                render={() => <Project 
                    projectName={'Rock-Paper-Scissors'} 
                    projectImage={rpsImage} 
                    projectDescription={RPSInformation.description}
                    projectApp={RPSInformation.app}
                    projectCode={RPSInformation.code}
                />}/>

                <Route path="/contact" component={Contact}/>
            </Switch>
        </Router>
    )
};

export default AppRouter
