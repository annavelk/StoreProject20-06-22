import React from 'react';
import Product from './product';

function GetOldPrice(props) {
  if (props.oldPrice > props.price)
  {
    return (<div><font color="red"><del>Старая цена: {props.oldPrice}</del></font></div>)
  }

  return null;

}

export default GetOldPrice;
