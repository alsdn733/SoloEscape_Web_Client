import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'material-design-lite/material.min.js';
import 'material-design-lite/material.min.css';
import { BrowserRouter, Route, BrowserHistory, Switch } from 'react-router-dom';

import Main from './views/main/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <BrowserRouter>
            <Route exact path="/" component={Main} />
          </BrowserRouter>
        </p>
      </div>
    );
  }
}

export default App;
