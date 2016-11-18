import React, { Component } from 'react';

class ProductCategoryRow extends Component {

  constructor (props){
      super(props)
  }

  render() {
     return  <tr><th colSpan="2">{this.props.category}</th></tr>;
  }
}

export default ProductCategoryRow;
