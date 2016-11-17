import React, { Component } from 'react';

class ProductRow extends Component {

constructor (props){
    super(props)
}

  render() {
     return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default ProductRow;
