import React, { Component } from 'react';
import './App.css';

class Page  extends Component {
    constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

 // Toggle method for show hide element.
  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
      <h4>Preventing Component from Rendering </h4>
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
         <WarningBanner warn={this.state.showWarning} />
      </div>
    );
  }
}

// this is the warning component which will show hide based on condition.
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

export default Page;