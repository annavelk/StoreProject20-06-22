import React from 'react';
import Nav from './nav';
import '../app/styles.css';

function Header() {
  return (
    <header className="header">
      <section class="header-top">
         <section className="header-top_items-1">
          <a class="" href="#">
            <img src="public\img\logo.png" width="220" height="47" alt="logo" />
            </a>
          </section>
           {/* React Component for search */}
          <section className="header-top_items-2">
            <span>
            <a className="" href="#">
              <img src="https://via.placeholder.com/17x17" alt="" />
              Поиск
              <form action="#" method="get">
                <input type="search" name="" />
              </form>
            </a>
            </span>
          </section>
          <section className="header-top_items-3">
            <a class="" href="#">
            <img src="https://via.placeholder.com/14x15" alt="" />
              Закладки</a>
          </section>
          <section className="header-top_items-4">
            <a class="" href="#">
            <img src="https://via.placeholder.com/15x11" alt="" />
              Корзина</a>
          </section>
          <section className="header-top_items-5">
          <form action="#" method="get">
              <input type="button" name="" value="Оформить заказ" />
            </form>
          </section>
        </section>
      {/* <!-- Средняя панель шапки --> */}
      <section className="header-middle">
          <section className="header-middle_items-1">
            Интернет-магазин
            <br />
            строительных материалов
            <br />и инструментов для ремонта
          </section>
          <section className="header-middle_items-2">
            <a class="" href="#">
              <p className="header_tel">+7 800 555-86-28</p>
              <p>г. Красноярск, пр. Мира, 1</p>
            </a>
          </section>
          {/* <!-- React Component for login --> */}
          <section className="header-middle_items-3">
            <form action="#" method="get">
              <input type="button" name="" value="Вход" />
            </form>
          </section>
          {/* <!-- React Component for registration --> */}
          <section className="header-middle_items-4">
           <form action="#" method="get">
            <a class="" href="auth/registration" title='/registration'>
              <input type="button" name="" value="Регистрация" />
          </a>
            </form>
          </section>
      </section>
      {/* <!-- Панель навигации --> */}
      <Nav />
    </header>
  );
}

export default Header;
