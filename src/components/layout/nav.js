import React from 'react';
import  '../app/styles.css';

function Nav() {
  return (
    <nav class="nav">
    <section className="nav_item-1">
    <a class="" href="/main_page" title='/main_page'>Главная</a>
  </section>
  <section className="nav_item-2">
    <a class="" href="/company" title='/company'>Компания</a>
  </section>
  <section className="nav_item-3">
    <a class="" href="/catalog" title='/catalog'>Каталог</a>
  </section>
  <section className="nav_item-4">
    <a class="" href="#">Новости</a>
  </section>
  <section className="nav_item-5">
    <a class="" href="#">Спецпредложения</a>
  </section>
  <section className="nav_item-6">
    <a class="" href="#">Доставка</a>
  </section>
  <section className="nav_item-7">
    <a class="" href="#">Контакты</a>
  </section>
 </nav>
        );
      }
export default Nav;

