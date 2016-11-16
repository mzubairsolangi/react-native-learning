import React, { Component } from 'react';
import logo from './logo.svg';
import Toggle from './toggle';
import LoginControl from './LoginControl';
import Page from './page';
import Mailbox from './Mailbox';
import Blog from './blog';
import { Button, Row, Col } from 'react-bootstrap';
import './App.css';

// Messages array for mailbox component.
const messages = ['hello world', 'welcome to React', 'lorem ipsum dolor sit amet', 'Are you there?'];
const posts = [
  {id: 1, title: 'John', content: 'Welcome to learning React!'},
  {id: 2, title: 'mike', content: 'You can install React from npm.'},
  {id: 3, title: 'lorem', content: 'Keys help React identify which items have changed, are added, or are removed'},
  {id: 4, title: 'ipsum', content: 'React do not recommend using indexes for keys if the items can reorder'},
];

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Row className="show-grid">
          <Col xs={6} md={4}>
            <br/>
            <h4>Toggle handling</h4>,
            <Toggle />
             <br/>
             <hr/>
             <h5>lis and Keys - Keys Must Only Be Unique example</h5>
             <h6>List of posts</h6>
            <Blog posts={posts} />
          </Col>
          <Col xs={6} md={4}>
            <br/>
            <h4>Conditional Rendering</h4>
            <LoginControl />

            <Mailbox unreadMessages={messages} />
          </Col>
          <Col xsHidden md={4}>
           <br/>
           <Page />
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default App;
