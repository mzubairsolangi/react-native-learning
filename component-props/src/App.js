import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment';
import Clock from './clock';

// Comment props object.
const comment = {
      title:"Component with 'props' object",
      date: new Date(),
      message: 'I hope you enjoy learning React!',
      author: {
        avatarUrl: 'http://www.mobilelive.ca/wp-content/uploads/2015/01/logo3.png'
      }
    }
    

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Comment
          title= {comment.title}
          date={comment.date}
          message={comment.message}
          author={comment.author} />,
          <Clock />
      </div>
    );
  }
}

export default App;


// Always start component names with a capital letter.
// Components must return a single root element.
// A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.