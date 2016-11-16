import React, { Component } from 'react';
import './App.css';
import { Form, FormGroup, FormControl, Col, ControlLabel,  Button } from 'react-bootstrap';

class LoginControl  extends Component {
    constructor(props) {
    super(props);

    // There is need to bind the method with 'this'' otherwise method will be undefined.
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);

    // config toggle value for display Component.
    this.state = {isLoggedIn: false};
  }

  //  this method will show dashboard Component.
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }
  
  // this method will show the signup Component.
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
      const isLoggedIn = this.state.isLoggedIn;

      let button = null;
      if (isLoggedIn) {
      button = <LogoutButton  onClick={this.handleLogoutClick} />;
      } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
      }

    return (
          <div>
          {button}
            <Greeting isLoggedIn={isLoggedIn} />
          </div>
        );
  }
}

// this method will return dashboard component.
function UserGreeting(props) {
  return <h1>Welcome to Dashboard!</h1>;
}

// this method will return signup component.
function GuestGreeting(props) {
  return <Form horizontal>
             <h2>Please sign up.</h2>
            <FormGroup controlId="formHorizontalEmail">
              <Col sm={12}>
                <FormControl type="email" placeholder="Email" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col sm={12}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={12}>
                <Button type="button">
                  Submit
                </Button>
              </Col>
            </FormGroup>
        </Form>;
}

// This method will return component based on condition.
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// this method will return login button.
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

// this method will return logout button.
function LogoutButton(props) {
  return (
    <button  onClick={props.onClick}>
      Logout
    </button>
  );
}


export default LoginControl;