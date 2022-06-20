import React from 'react';
import  Product  from './product.js';

function Products (props) {
  const {products = []} = props;

  return (
    <div className='card-group'>
      {products.length ? (
        products.map((product) => <Product key={product.id}{...product} />)
      ):(
        <h4>Не найдено</h4>
)}
    </div>

  );
}

export default Products;
