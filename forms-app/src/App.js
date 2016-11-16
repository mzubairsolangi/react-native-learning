import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Textfield from './textfield';
import TextArea from './textarea';
import Dropdown from './dropdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
         Form example
        </p>
        <Textfield />
         <hr/>
        <TextArea />
         <hr/>
         <Dropdown />
      </div>
    );
  }
}

export default App;


// An input form element whose value is controlled by React in this way is called a "controlled component".
// In React, mutable state is typically kept in the state property of components, and only updated with setState().
