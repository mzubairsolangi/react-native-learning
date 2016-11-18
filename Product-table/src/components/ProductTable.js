import React, { Component } from 'react';
import ProductRow  from './ProductRow';
import ProductCategoryRow  from './ProductCategoryRow';
import { Table, tbody, thead, striped, bordered, condensed, hover, Pagination} from 'react-bootstrap';


class ProductTable  extends Component {

  constructor (props){
      super(props)
  }

  render() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach((product) => {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    
     return (
       <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
       </div>
    );
  }
}

export default ProductTable;
