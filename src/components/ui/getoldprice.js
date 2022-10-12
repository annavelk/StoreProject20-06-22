import React from 'react';

// Компонент для отображения и перечеркивания старой цены, если она больше новой

function GetOldPrice(props) {
  if (props.oldPrice > props.price)
  {
    return (<div className='top-product_oldprice'>{props.oldPrice} руб.</div>)
  }

  return null;

}

export default GetOldPrice;
