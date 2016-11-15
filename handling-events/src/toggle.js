import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class toggle extends Component {
    constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <Button onClick={this.handleClick}> 
      {this.state.isToggleOn ? 'ON' : 'OFF'}
      </Button>
    );
  }
}

export default toggle;

// Event handling
    //   you cannot return false to prevent default behavior in React. You must call preventDefault explicitly.
    //  You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default.
    //  If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.
    // if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method like
        // like - this.handleClick = this.handleClick.bind(this);