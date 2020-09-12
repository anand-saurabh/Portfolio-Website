import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


const Main = () => (
  <Switch>
    <Route exact path="/portfoliowebsite" component={LandingPage} />
    <Route path="/portfoliowebsite/aboutme" component={AboutMe} />
    <Route path="/portfoliowebsite/contact" component={Contact} />
    <Route path="/portfoliowebsite/projects" component={Projects} />
    <Route path="/portfoliowebsite/resume" component={Resume} />
  </Switch>
)

export default Main;
