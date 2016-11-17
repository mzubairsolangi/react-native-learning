import React, { Component } from 'react';
import ProductRow  from './ProductRow';
import ProductCategoryRow  from './ProductCategoryRow';

class ProductTable  extends Component {

constructor (props){
    super(props)
}

  render() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
     return (
       <div>
       
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      
       </div>
    );
  }
}

export default ProductTable;
