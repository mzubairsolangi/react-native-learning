import React, { Component } from 'react';
import logo from './logo.svg';
import Toggle from './toggle';
import LoginControl from './LoginControl';
import Page from './page';
import Mailbox from './Mailbox';
import './App.css';
import { Button, Row, Col } from 'react-bootstrap';

// Messages array for mailbox component.
const messages = ['hello world', 'welcome to React', 'lorem ipsum dolor sit amet', 'Are you there?'];

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
