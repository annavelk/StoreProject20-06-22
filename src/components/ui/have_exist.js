import React from 'react';
import { apiUrlList } from '../config';

class HaveExist extends React.Component {
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
    if (products.exist <= '0')
    { return ( <div className='product-no_exist'> Нет в наличии </div>);
    }
    return null;

  }
}

export default HaveExist;
