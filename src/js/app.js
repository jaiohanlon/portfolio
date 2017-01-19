import React, { Component } from 'react';
import {Router, Route} from 'react-router-redux';
import Home from './views/home';
import '../scss/main';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

export default class App extends Component {
  render() {
    return (
      <Home/>
    );
  }
}