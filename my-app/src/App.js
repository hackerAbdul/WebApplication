import React from 'react';
import { Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import react_logo from './ads.png';
import Categories from './components/categories/Categories';

{/* this is where all the routes are connected to the other pages
making it a single page application
also displays the footer navigation bar and also the header on every page */}

const App = () => (
  <div id="page">
    <Header logo={react_logo} />
    <Categories />
    <Route path="/" exact component={HomePage} />
    <Route path="/AboutPage" exact component={AboutPage} />
    <Footer />
    <div id="footer-spacing">

    </div>
  </div>
);

export default App;