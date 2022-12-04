import React from 'react';
import  Product  from './product.js';
import { apiUrlList } from '../config.js';

// Компонент для взаимодействия карточек товаров в группе

class Products extends React.Component {
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
      <div className='cards-group_top_product'>
        {products.length ? (
          products.map((product) => <Product key={product.id}{...product} />)
        ):(
          <h4>Не найдено</h4>
        )}
      </div>

    );
  }
}

export default Products;
