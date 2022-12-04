import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
//import './styles.less';
import './styles.css';
import Header from '../layout/header';
import Footer from '../layout/footer';
import MainPage from '../layout/main-page';
import Catalog from '../pages/catalog';
import Company from '../pages/company';
import Register from '../ui/register';
import Delivery from '../pages/delivery';
import News from '../pages/news';
import SpecialOffers from '../pages/specialOffer';
import Contacts from '../pages/contacts';
import Materials from '../pages/materials';
import NotFound from '../pages/notFound';
import 'typeface-roboto';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="main_page" element={<MainPage />} />
          <Route index element={<MainPage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="company" element={<Company />} />
          <Route path="news" element={<News />} />
          <Route path="special_offers" element={<SpecialOffers />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="auth/registration" element={<Register />} />
          <Route path="materials" element={<Materials />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
