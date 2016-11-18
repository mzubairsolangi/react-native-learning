import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h4>Product table with filter</h4>
        <FilterableProductTable products={PRODUCTS} />
      </div>
    );
  }
}

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$499.99', stocked: true, name: 'Samsung Galaxy 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

export default App;


// props are a way of passing data from parent to child.
// React's one-way data flow (also called one-way binding) keeps everything modular and fast.
// There are two types of "model" data in React: props and state. 
// To make your UI interactive, you need to be able to trigger changes to your underlying data model. React makes this easy with state.
// STATE:- The search text the user has entered, The value of the checkbox.
// Remember: React is all about one-way data flow down the component hierarchy. 
// 