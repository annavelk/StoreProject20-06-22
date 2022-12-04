import React from 'react';
import Nav from '../layout/nav.js';
import  '../app/styles.less';


function Footer() {
  return (
    <>
      <section>
        <section>
          <figure>
            <img src="https://via.placeholder.com/220x68" alt="" />
          </figure>
          <section>
            г. Санкт-Петербург, наб. Реки Карповки, 5 лит П<br />
            +7 800 555-86-28
          </section>
        </section>


        <Nav />

      </section>

      <section>
        <section>
          <p>
          © {new Date().getFullYear()} Компания «Техномарт»
            <br />
            Все права защищены
          </p>
        </section>
        <section>
          <a href='/materials' title='/materials'>
            <img src="https://via.placeholder.com/44x44" alt="" />
          </a>
          <a href='/materials' title='/materials'>
            <img src="https://via.placeholder.com/44x44" alt="" />
          </a>
          <a href='/materials' title='/materials'>
            <img src="https://via.placeholder.com/44x44" alt="" />
          </a>
        </section>
        <section>
          <p>
            Обратная связь:
            <br />
            mail@htmlacademy.ru
          </p>
        </section>
        <section>
          <p>
            Разработано - <br />
            htmlacademy.ru
          </p>
        </section>
      </section>
    </>
  );
}

export default Footer;
