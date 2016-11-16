import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';

class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return ( 
        <form onSubmit={this.handleSubmit}>
        <h3>Text field example</h3>
          Select flavour:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Dropdown;