import React from 'react';
import { apiUrlList } from '../config';
import Products from '../ui/products';

// Компонент для вывода каталога продуктов

class Catalog extends React.Component {
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

export default Catalog;


