import React, { Component } from 'react';
import './App.css';

class Split extends Component {
   constructor(props) {
    super(props);
  }

  render() {
    return (
       <SplitPaneView left={ <Contacts /> } right={ <Chat title={this.props.title} /> } />
    );
  }
}

function SplitPaneView(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function Contacts(props) {
  return <div className="Contacts"> 
         
         </div>;
}

function Chat(props) {
  return <div className="Chat" >
            <br/>
            <h4>{props.title}</h4>
         </div>;
}

export default Split;
