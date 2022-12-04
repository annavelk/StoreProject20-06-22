/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Nav from './nav';
import '../app/styles.less';

function Header() {
  return (
    <header className="header">
      <section className="header-top">
        <section className="header-top_items-1">
          <a className="" href="#">
            <img src="https://s752sas.storage.yandex.net/rdisk/12c85cbdd62c05fa353cff625f6ddb09d3084b95a141abfb9a20c32842a1de52/638ca07e/PFjRjhMgRw5Jh0XrHWBUVY4lKxDDITgIZKyy_4zTuXEQqIv5p6NvGigkg8aIvWY5LqOc6swd8U3TKjMjlQ5LwA==?uid=259999937&filename=logo.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=259999937&fsize=258746&hid=e9e31f162ae108add5280a29529c17b4&media_type=image&tknv=v2&etag=f2f72bc6a5508c1fbf8efba2f078c7db&rtoken=w2LNxfAlieth&force_default=yes&ycrid=na-c42900f9439617ec8b0288d1a25d77c9-downloader23h&ts=5ef008bea9b80&s=639c5142d9b1dfb726b20a696d2e8d50ad38a669995fbe4bfa9bdaed988cd7be&pb=U2FsdGVkX1_CD5SeUY4-OQ0-F73b9NG42yg2x_GU6q5UlcAWyK_2G1PckMKw7LXZxCRqqGQAEC2wuhME18NZss8oo1SCzGA2RQYYAWL_BK4" width="220" height="47" alt="logo" />
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
          <a className="" href="#">
            <img src="https://via.placeholder.com/14x15" alt="" />
              Закладки
          </a>
        </section>
        <section className="header-top_items-4">
          <a className="" href="#">
            <img src="https://via.placeholder.com/15x11" alt="" />
              Корзина
          </a>
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
          <a className="" href="#">
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
            <a className="" href="auth/registration" title='/registration'>
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
