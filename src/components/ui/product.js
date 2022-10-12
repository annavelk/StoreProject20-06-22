import React from 'react';
import HaveExist from './have_exist';
import GetOldPrice from './getoldprice';


// Компонент, описывающий карточку товара для топа продуктов

function Product (props) {

  return (
      <div className='top-product_card'>
        <div><HaveExist exist={props.exist} /></div>
        <div><GetOldPrice oldPrice={props.oldPrice} price={props.price} /></div>
        <div className='top-product_img'><img src={props.src} width="184" height="164"/></div>
        <div className='top-product_price'>{props.price} руб.</div>
        <h3 className='top-product_head'><b>{props.name}</b></h3>
        
        {/* <div>Описание: {props.description}</div> */}
      </div>
    );
}

export default Product;
