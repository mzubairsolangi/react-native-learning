import React, { Component } from 'react';

class CLock extends Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date(), desc:"Component with 'state' object"};
  }

   //this method will runs after the component output has been rendered to the DOM. 
   componentDidMount() {

       // This method will be call after every second.    
       this.timerID = setInterval(
      () => this.tick(),
      1000
    );  
  }

  //This method is known as "lifecycle hooks".
  componentWillUnmount() {
       clearInterval(this.timerID);
  }

// /Set timer method.
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>   
        <h2>{this.state.desc} </h2>
         <h4>{this.state.date.toLocaleTimeString()}.</h4>
      </div>
    );
  }
}

export default CLock;

// Class components should always call the base constructor with props.
// We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called "mounting" in React.
// We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called "unmounting" in React.
// componentDidMount(),  componentWillUnmount() //These methods are called "lifecycle hooks".
// The componentDidMount() hook runs after the component output has been rendered to the DOM. 
// There are three things you should know about setState()
    // Do Not Modify State Directly - 
            // Wrong- this.state.comment = 'Hello'; // Correct -this.setState({comment: 'Hello'});
    // State Updates May Be Asynchronous - 
            // Wrong  
            // this.setState({
            // counter: this.state.counter + this.props.increment,
            // });
            // Correct
            // this.setState((prevState, props) => ({
            // counter: prevState.counter + props.increment
            // }));
    // State Updates are Merged  - When you call setState(), React merges the object you provide into the current state.
