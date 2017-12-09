import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'material-design-lite/material.min.js';
import 'material-design-lite/material.min.css';
import { BrowserRouter, Route, BrowserHistory, Switch } from 'react-router-dom';

import Main from './views/main/Main';
import Profile from './views/main/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Main} />
              <Route exact path="/profile" component={Profile} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
