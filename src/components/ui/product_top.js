import React from 'react';
// import products from './products.js';
import Products from './products.js';
import { apiUrlList } from '../config.js';
// Компонент для вывода топа продуктов

class ProductTop extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    // const jsonData = require('./prod.json');
    // this.setState({products: Object.values(jsonData)});

    fetch(apiUrlList)
      .then((response) => response.json())
    //  .then((data) => {console.log(data)})
      .then((data) => this.setState({ products: data }));
  }

  render() {
    const { products } = this.state;

    return (
      <div className='container content'>
        <Products products={products} />
      </div>
    );
  }
}

export default ProductTop;
