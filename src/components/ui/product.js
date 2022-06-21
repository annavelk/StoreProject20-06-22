import React from 'react';
import GetOldPrice from './getoldprice';

// Компонент, описывающий карточку товара для топа продуктов

function Product (props) {

  return (
      <div class="card">
        <div>Артикул: {props.id}</div>
        <h3><b>{props.name}</b></h3>
        <div> Категория: {props.categories}</div>
        <div><img src={props.src} width="184" height="164"/></div>
        <div>Цена: {props.price}</div>
        <div><GetOldPrice oldPrice={props.oldPrice} price={props.price} /></div>
        {/* <div>В наличии: {props.exist}</div>
        <div>Описание: {props.description}</div> */}
      </div>
    );
}

export default Product;
