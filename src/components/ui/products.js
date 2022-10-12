import React from 'react';
import  Product  from './product.js';

  // Компонент для взаимодействия карточек товаров в группе
  
function Products (props) {
  const {products = []} = props;
    return (<div className='cards-group_top_product'>
      {products.length ? (
        products.map((product) => <Product key={product.id}{...product} />)
      ):(
        <h4>Не найдено</h4>
)}
    </div>

  );
}

export default Products;
