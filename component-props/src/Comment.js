import React, { Component } from 'react';

// set date format.
function formatDate(date) {
  return date.toLocaleDateString();
}

class Comment extends Component {
  render() {
    return (
         <div className="Comment">
         <h2> {this.props.title}</h2>
          <div className="UserInfo">
          <img className="Avatar"
              src={this.props.author.avatarUrl}
              alt={this.props.author.name} />
          <div className="UserInfo-name">
            {this.props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {this.props.message}
        </div>
        <div className="Comment-date">
        {formatDate(this.props.date)}
      </div>
    </div>
    );
  }
}

export default Comment;