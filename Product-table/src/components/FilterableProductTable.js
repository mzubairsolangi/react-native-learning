import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar  from './SearchBar';


class FilterableProductTable extends Component {
  constructor (props){
    super(props)
}

  render() {
    console.log("this.props.products:",this.props.products)
     return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
