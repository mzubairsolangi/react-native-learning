import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar  from './SearchBar';


class FilterableProductTable extends Component {
  constructor (props){
    super(props)
     this.state = {
      filterText: '',
      inStockOnly: false
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

    handleUserInput(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  }

  render() {
    console.log("this.props.products:",this.props.products)
     return (
      <div className="table-conatainer">
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
