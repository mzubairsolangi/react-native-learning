import React, { Component } from 'react';

class SearchBar extends Component {

constructor (props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
}

handleChange() {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    );
  }

  render() {
     return (
     <form>
        <input
          type="text"
          placeholder="Search product"
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
