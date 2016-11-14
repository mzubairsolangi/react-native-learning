import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h3>Component with props example.</h3>
        <p className="App-intro">
          Hello, {this.props.message}
        </p>
      </div>
    );
  }
}

export default App;


// Always start component names with a capital letter.
// Components must return a single root element.
// A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.