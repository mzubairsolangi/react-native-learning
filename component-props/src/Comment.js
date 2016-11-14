import React, { Component } from 'react';
import './App.css';

// set date format.
function formatDate(date) {
  return date.toLocaleDateString();
}

class Comment extends Component {
    constructor(props) {
      super(props);
    }
    
   render() {
    return (
    <div className="Comment">
      <h2> {this.props.title}</h2>
      <div className="UserInfo">
        <img className="Avatar"
            src={this.props.author.avatarUrl}
            alt={this.props.author.name} />
        <h5 className="Comment-date">
         {formatDate(this.props.date)}
        </h5>
      </div>
      <div className="Comment-text">
        {this.props.message}
      </div>
    </div>
    );
  }
}

export default Comment;