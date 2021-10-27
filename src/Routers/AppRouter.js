import React from 'react';
import {
    BrowserRouter as Router,
    Switch, 
    Route
} from 'react-router-dom';

import Contact from '../Pages/Contact/Contact'
import Header from '../Components/Header/Header';
import Home from '../Pages/Home/Home';
import Project from '../Components/Project/Project';
import Projects from '../Pages/Projects/Projects';
import { Descriptions } from '../Components/Descriptions/Descriptions'

import indecisionImage from '../Assets/images/indecision.png' 
import rpsImage from '../Assets/images/rps.png' 



const AppRouter = () => {
    return(
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path='/projects' exact component={Projects}/>
                <Route path="/projects/indecision" render={() => <Project projectName={'Indecision'} projectImage={indecisionImage} projectDescription={Descriptions.indecision}/>}/>
                <Route path="/projects/rock-paper-scissors" render={() => <Project projectName={'Rock-Paper-Scissors'} projectImage={rpsImage} projectDescription={Descriptions.rps}/>}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
        </Router>
    )
};

export default AppRouter
