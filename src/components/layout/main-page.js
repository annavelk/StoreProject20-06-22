import React from 'react';
import ProductTop from '../ui/product_top.js';
import '../app/styles.css';


function MainPage() {
	return (
		<section>
		{/* <!-- Секция с цветными блоками --> */}
			<section className='cards-group'>
				<section class="card bg-11">
					<a href="#">
						<h3>Материалы</h3>
						<p>на любой вкус</p>
					</a>
				</section>

				<section class="card bg-12">
					<a href="#">
						<h3>Инструмент</h3>
						<p>на все случаи</p>
					</a>
				</section>

				<section class="card bg-13">
					<a href="#">
						<h3>Техника</h3>
						<p>для стройки</p>
					</a>
				</section>

				<section class="card bg-23">
					<a href="#">
						<h3>Скидки 50 %</h3>
						<p>на 350 товаров</p>
					</a>
				</section>

				<section class="card bg-33">
					<a href="#">
						<h3>Доставка</h3>
						<p>бесплатно</p>
					</a>
				</section>

				<section class="card bg-23-12">
					<a href="#">
						<h3>Перфораторы</h3>
						<p>Настоящие мужские игрушки</p>
						<p>
							<a href="#">Открыть каталог</a>
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
          <section class="">
					<section>
						<ProductTop />
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
<section class="">
						<section class="card">
							<img src="https://via.placeholder.com/220x145" alt="" />
						</section>

						<section class="card">
							<img src="https://via.placeholder.com/220x145" alt="" />
						</section>

						<section class="card">
							<img src="https://via.placeholder.com/220x145" alt="" />
						</section>

						<section class="card">
							<img src="https://via.placeholder.com/220x145" alt="" />
						</section>

						<section class="card">
							<img src="https://via.placeholder.com/220x145" alt="" />
						</section>

						<section class="card">
							<img src="https://via.placeholder.com/220x145" alt="" />
						</section>

						<section class="card">
							<img src="https://via.placeholder.com/220x145" alt="" />
						</section>

						<section class="card">
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
