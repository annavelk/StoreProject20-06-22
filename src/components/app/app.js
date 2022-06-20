import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import './styles.css';
import Header from '../layout/header';
import Footer from '../layout/footer';
import MainPage from '../layout/main-page';

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
}

export default App;
