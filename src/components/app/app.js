import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import './styles.css';
import Header from '../layout/header';
import Footer from '../layout/footer';
import MainPage from '../layout/main-page';
import Catalog from '../pages/catalog';
import Company from '../pages/company';
import Register from '../ui/register';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='company' element={<Company />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
