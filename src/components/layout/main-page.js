/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import ProductTop from '../ui/product_top.js';
import '../app/styles.less';
import Products from '../ui/products.js';

function MainPage() {
  return (
    <section>
      {/* <!-- Секция с цветными блоками --> */}
      <section className="cards-group">
        <section className="card bg-11">
          <div className="icon-image">
            <img
              src="https://s363vla.storage.yandex.net/rdisk/54802e82c095c422970df58255a9fe940d26ab9af097773c51b2a9fdab7d3b13/638cf5ab/PFjRjhMgRw5Jh0XrHWBUVZHcpbzmbN3FqGL0c9lSkuP0T157vqvgJVTBiUGHDQKuXwSAuhj1r0s21b1KFTJ3JA==?uid=259999937&filename=icon-1.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=259999937&fsize=1059&hid=dc17a39523a5dac996d28cfa52ff402d&media_type=image&tknv=v2&etag=e19182aef95157949c46b426cec98fc4&rtoken=bLCW3E2CrHbX&force_default=yes&ycrid=na-d85260e2e1ac2c4960ace98ef2d5a40c-downloader3f&ts=5ef059f9880c0&s=1f63c434656f456e4cd7f5d164f9bea1ca333518b2b81e6e6f68724e4311b829&pb=U2FsdGVkX1-RAJ-KuFQVdudAqFgkFHgskmrRfe8V6cb4Van5RKJMWJ7nOG-Ies6APMmycJ5ekIVsPFjt-FKT5pJPp2qrynlZPRaM8Zca0Ds"
              alt=""
            >
            </img>
          </div>
          <h3>МАТЕРИАЛЫ</h3>
          <a href="/materials" title="/materials">
            <p className="cards-group-button">НА ЛЮБОЙ КУРС</p>
          </a>
        </section>

        <section className="card bg-12">
          <div className="icon-image">
            <img
              src="https://s152vlx.storage.yandex.net/rdisk/61a3a497e6b58413c09acbea6c21c4cc73360c3898c11d507bbe527aac1f9b96/638cf5f7/PFjRjhMgRw5Jh0XrHWBUVasrnRAtjHEU9fWAUJSqzUFSGc8OdkARAtPpDMPVZfrl_yc_q8UmB4LFGQ55upku7A==?uid=259999937&filename=icon-2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=259999937&fsize=730&hid=a7d84faba1959489799c270f985561e5&media_type=image&tknv=v2&etag=e5c5ebdae56f8cd71392a75123f45241&rtoken=kwmH1TLycYiz&force_default=yes&ycrid=na-927224ff5fdaee488c6380d305536381-downloader3f&ts=5ef05a4202bc0&s=edf373a6f86722696d30d995b064008b3d272f13c1c1ae71b62eecd27947cfb6&pb=U2FsdGVkX1-fBPfI83_mlRl814Z-8CMMI9HRidUZ6u9-BA509aJhN5ZdZWIzKyT8vMSmA7OW6KsXXV7fuxmXV1oKXjDni_RjxDPDnStZeJE"
              alt=""
            >
            </img>
          </div>
          <h3>ИНСТРУМЕНТ</h3>
          <a href="/materials" title="/materials">
            <p className="cards-group-button">НА ВСЕ СЛУЧАИ</p>
          </a>
        </section>

        <section className="card bg-13">
          <div className="icon-image">
            <img
              src="https://s149vlx.storage.yandex.net/rdisk/f22682bf8f94439afb832761c11cede33c9b2e8eaab38506914b8ac52d261701/638cf16d/PFjRjhMgRw5Jh0XrHWBUVVdNdny7arhhIojlilIgQXG20d9jaom1Ixvko5Rn_cqLyq_5scOdKSwHPMJMEFmtwA==?uid=259999937&filename=icon-3.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=259999937&fsize=1486&hid=06aedb0d35126f17dd5f08d2fca5727a&media_type=image&tknv=v2&etag=04d1f1d4afc88f547f215512fe96578d&rtoken=9V5Pjzk6mdWQ&force_default=yes&ycrid=na-4c85e80b77258c1e3178f10e29856bee-downloader13e&ts=5ef055edd7540&s=3e66fa36139165f96a6173986571200b652534f08e4c35ce04230653ebc5f14f&pb=U2FsdGVkX19M4YI_dRqlItDsf3ulfSjFjl9_LpJ7-6HmGXBiTaZ7BqiqHPwHTi1Btn9zGxm_LCi1GriTGM-CZF5oOgPLCRJwZo6_mRBuyqA"
              alt=""
            >
            </img>
          </div>
          <div>
            <h3>ТЕХНИКА</h3>
            <a href="/materials" title="/materials">
              <p className="cards-group-button">ДЛЯ СТРОЙКИ</p>
            </a>
          </div>
        </section>

        <section className="card bg-23">
          <div className="icon-image">
            <img
              src="https://s869sas.storage.yandex.net/rdisk/c90ba00b0ecead59b4d841688a485a0c151c1622fa87e82a03be262ab768fade/638cf655/PFjRjhMgRw5Jh0XrHWBUVW4P9rwg4nf0MPpHRdPG5Iyv5IK2HXV6Jp6naruWYFCklYScX1EA8QdRLrF15SO9Lg==?uid=259999937&filename=icon-4.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=259999937&fsize=1255&hid=d96de1fb98827ca69864f134e8a442ad&media_type=image&tknv=v2&etag=b1ac960099a354ee690f72c2f372a87b&rtoken=p1QHdsKlUHuP&force_default=yes&ycrid=na-541e60d09c840e264f4466899b1cb274-downloader3f&ts=5ef05a9ba7f40&s=3746ff011ecbe378f192f2126c31be468a5842835e7c4defb5eb48e647158491&pb=U2FsdGVkX18OjbdaEn5L7HfHza2dm8QrP5msHM4mDncpQWLtja6tFqiUD5Zaxx8zDyrhHw0YQU7cUXusjNDTO09QIHhsxg7YHYn3pYwkYqI"
              alt=""
            >
            </img>
          </div>
          <h3>СКИДКИ 50 %</h3>
          <a href="/materials" title="/materials">
            <p className="cards-group-button">НА 350 ТОВАРОВ</p>
          </a>
        </section>

        <section className="card bg-33">
          <div className="icon-image">
            <img
              src="https://s117vla.storage.yandex.net/rdisk/49329456b2b672799e3d9515ff59621d38dca5a0e5e9fe2466d2976088656eeb/638cf683/PFjRjhMgRw5Jh0XrHWBUVWLWDqAREU71pnb7WFAHznqi3D4U4Sz2J1EBHYi9NNCu-hFPOCIBD85Vkw9gKURz1g==?uid=259999937&filename=icon-5.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=259999937&fsize=1095&hid=5ba02bbc52c37c893f8d2e0877eebee7&media_type=image&tknv=v2&etag=824570e1354a3c77f70608e7301ec0db&rtoken=8VXsvc1uvvTZ&force_default=yes&ycrid=na-59580d83e78dbe493f6269c60d94dd98-downloader3f&ts=5ef05ac7866c0&s=08f967a6fdc9dd9f2024a09f573536cf4b4cc22e93bb2e32bd422fd822c6cbb1&pb=U2FsdGVkX18c-CDKQqVUZr3rgsGmSM6wwRi74VRSpKlEM-D_yAZtIo2DgVBzVPB-3pmmW_0WWQDF0fk-NCOSfFj_LpM42eMY0BRS_7gf1Os"
              alt=""
            >
            </img>
          </div>
          <h3>ДОСТАВКА</h3>
          <a href="/materials" title="/materials">
            <p className="cards-group-button">БЕСПЛАТНО</p>
          </a>
        </section>

        <section className="card bg-23-12">
          <a href="/materials" title="/materials">
            <h3>ПЕРФОРАТОРЫ</h3>
            <p>НАСТОЯЩИЕ МУЖСКИЕ ИГРУШКИ</p>
            <p>
              <a href="/catalog" title="/catalog">
                ОТКРЫТЬ КАТАЛОГ
              </a>
            </p>
          </a>
        </section>

        {/* <!-- Блок популярных товаров --> */}
        <section>
          <section>
            <section>
              <h2>Популярные товары</h2>
              <section>
                <h3>Все популярные товары</h3>
              </section>
            </section>
          </section>
          <section className="">
            <section>
              <Products />
            </section>
          </section>

          {/* <!-- Блок популярных производителей --> */}
          <section>
            <section>
              <section>
                <h2>Популярные производители</h2>
                <section>
                  <h3>Все производители</h3>
                </section>
              </section>
            </section>
            <section className="">
              <section className="card">
                <img src="https://via.placeholder.com/220x145" alt="" />
              </section>

              <section className="card">
                <img src="https://via.placeholder.com/220x145" alt="" />
              </section>

              <section className="card">
                <img src="https://via.placeholder.com/220x145" alt="" />
              </section>

              <section className="card">
                <img src="https://via.placeholder.com/220x145" alt="" />
              </section>

              <section className="card">
                <img src="https://via.placeholder.com/220x145" alt="" />
              </section>

              <section className="card">
                <img src="https://via.placeholder.com/220x145" alt="" />
              </section>

              <section className="card">
                <img src="https://via.placeholder.com/220x145" alt="" />
              </section>

              <section className="card">
                <img src="https://via.placeholder.com/220x145" alt="" />
              </section>
            </section>
          </section>
          {/* <!-- Блок сервисов --> */}
          <section>
            <section>
              <h2>Сервисы</h2>
              <h3>
                Хороший интернет-магазин отличается от плохого не только ценами!
                <br />
                Мы стараемся изо всех сил, чтобы сделать ваши покупки приятными.
              </h3>
            </section>
            <section>
              <ul>
                <li>Доставка</li>
                <li>Гарантия</li>
                <li>Кредит</li>
              </ul>
            </section>
            <section>
              <h2>Доставка</h2>
              <h3>
                Мы с удовольствием доставим ваш товар прямо <br />
                к вашему подъезду совершенно бесплатно!
                <br />
                Ведь мы неплохо заработаем, <br />
                поднимая его на ваш этаж!
              </h3>
              <p>
                <img src="https://via.placeholder.com/468x261" alt="" />
              </p>
            </section>
          </section>
          {/* <!-- Блок с информацией и картой --> */}
          <section>
            <section>
              <h2>КОМПАНИЯ «Техномарт»</h2>
              <h3>
                Настоящий мужской шоппинг начинается здесь! Огромный выбор
                товаров для
                <br />
                ремонта и строительства не оставит равнодушными любителей
                сэкономить на
                <br /> гастарбайтерах.
                <br />
                Мы можем доставить ваш товар в самые отдаленные точки России!
                <br />
                Техномарт работает со многими транспортными компаниями:
              </h3>
              <ul>
                <li>Деловые линии</li>
                <li>Автотрейдинг</li>
                <li>ЖелДорЭкспедиция</li>
              </ul>
              <p>
                <a href="#">ПОДРОБНЕЕ О КОМПАНИИ</a>
              </p>
            </section>
            <section>
              <h2>КОНТАКТЫ</h2>
              <h3>
                Вы можете забрать товар сами,
                <br />
                заехав в наш офис:
              </h3>
              <img src="https://via.placeholder.com/300x158" alt="" />
              <form action="#" method="get">
                <input
                  type="button"
                  name=""
                  value="ЗАБЛУДИЛИСЬ? НАПИШИТЕ НАМ!"
                />
              </form>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default MainPage;
