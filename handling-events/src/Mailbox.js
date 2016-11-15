import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

class Mailbox extends Component {
   
   constructor(props) { 
       super(props); 
       this.state = {messages:props}
    }

   render() {
    return (
      <div>
      <hr />
        <h4>Inline If with Logical && Operator</h4>
            {this.props.unreadMessages.length > 0 &&
        <h5>
          You have {this.props.unreadMessages.length} unread messages.
        </h5>
      }
      <MessagesList messages={ this.state.messages } />
      </div>
    );
  }
}

function MessagesList(props) {
  const messages = props.messages.unreadMessages;
  console.log("messages", messages);
  const MsgList = messages.map((message, index) =>
    <ListGroupItem href="#link1" key={message.toString()}>
           {message}
    </ListGroupItem>
  );
  return (
    <ListGroup>
        {MsgList}
    </ListGroup>
  );
}

export default Mailbox;