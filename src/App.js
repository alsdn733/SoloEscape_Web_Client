import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'material-design-lite/material.min.js';
import 'material-design-lite/material.min.css';
import { BrowserRouter, Router, Route, BrowserHistory, Switch } from 'react-router-dom';
 
import { Header } from './components/header';

import Main from './views/main/Main';
import Profile from './views/main/Profile';
import SignIn from './views/main/SignIn';
import Partner from './views/partner';
import history from './history';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-intro">
        <Router history={history}>
            <div>
              <Route exact path="/" component={Main} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/partner" component={Partner.Main}/>
            </div>
        </Router>
        </div>
      </div>
    );
  }
}

export default App;
