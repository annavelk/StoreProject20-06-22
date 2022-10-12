import React from 'react';
import Product from './product.js';

// Компонент для вывода топа продуктов

class ProductTop extends React.Component {
  state = {
    products: {},
  };

    
  componentDidMount() {

    const apiUrl = 'http://localhost:8000/product/';
     fetch(apiUrl)
       .then((response) => response.json())

     //.then((data) => {console.log(data.id)})
      .then((data) => this.setState({ products: data }));
      
    
      
  }

  render() {
    const { products } = this.state;
    
    return (
      <div className='cards-group_top_product'>
        {products.length > 4 ? (
        products.map((product) => <Product {...product}/>)
      ):(
        <h4>Не найдено</h4>
)}
      </div>
    );
  }
}

export default ProductTop;
