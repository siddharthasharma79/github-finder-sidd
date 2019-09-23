import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import User from './components/users/User';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import './App.css';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                {/* HOME PAGE */}
                <Route exact path="/" component={Home} />

                {/* ABOUT PAGE */}
                <Route exact path="/about" component={About} />

                {/* USER DETAIL PAGE */}
                <Route exact path="/user/:login" component={User} />

                {/* NOT FOUND PAGE */}
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
