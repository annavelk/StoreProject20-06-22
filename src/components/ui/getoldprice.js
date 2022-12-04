import React from 'react';
import { apiUrlList } from '../config';

// Компонент для отображения и перечеркивания старой цены, если она больше новой

class GetOldPrice extends React.Component {
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

    // eslint-disable-next-line react/prop-types
    if (products.oldPrice > products.price)
    {
    // eslint-disable-next-line react/prop-types
      return (<div className='top-product_oldprice'>{products.oldPrice} руб.</div>);
    }

    return null;

  }
}
export default GetOldPrice;
