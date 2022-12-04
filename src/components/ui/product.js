import React from 'react';
// import PropTypes from 'react';
import HaveExist from './have_exist';
import GetOldPrice from './getoldprice';
import { apiUrlList } from '../config';

// Компонент, описывающий карточку товара для топа продуктов

class Product extends React.Component {
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
      <div className="top-product_card">
        <div>
          <HaveExist />
        </div>
        <div>
          <GetOldPrice oldPrice={products.oldPrice} price={products.price} />
        </div>
        <div className="top-product_img">
          <img
            src={products.src}
            width="184"
            height="164"
            alt="Изображение товара"
          />
        </div>
        <div className="top-product_price">{products.price} руб.</div>
        <h3 className="top-product_head">
          <b>{products.name}</b>
        </h3>
        {/* <div>Описание: {props.description}</div> */}
      </div>
    );
  }
}

export default Product;
