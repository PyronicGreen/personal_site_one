import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import projects from './components/pages/projects';
import About from './components/pages/About';
import resume from './components/pages/resume';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={projects} />
          <Route path='/About' component={About} />
          <Route path='/resume' component={resume} />
          <Route path='/Contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
