import React from 'react';
import  '../app/styles.less';

function Nav() {
  return (
    <nav className="nav">
      <section className="nav_item-1">
        <a className="" href="/main_page" title='/main_page'>Главная</a>
      </section>
      <section className="nav_item-2">
        <a className="" href='/company' title='/company'>Компания</a>
      </section>
      <section className="nav_item-3">
        <a className="" href='/catalog' title='/catalog'>Каталог</a>
      </section>
      <section className="nav_item-4">
        <a className="" href='/news' title='/news'>Новости</a>
      </section>
      <section className="nav_item-5">
        <a className="" href='/special_offers' title='/special_offers'>Спецпредложения</a>
      </section>
      <section className="nav_item-6">
        <a className="" href='/delivery' title='/delivery'>Доставка</a>
      </section>
      <section className="nav_item-7">
        <a className="" href='/contacts' title='/contacts'>Контакты</a>
      </section>
    </nav>
  );
}
export default Nav;

