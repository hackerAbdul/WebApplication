import React from 'react';
import { Route } from "react-router-dom";
import Header from './components/header/Header';
import NavigationBar from './components/navigationbar/NavigationBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TermsPage from './pages/TermsPage';
import CategoryPage from './pages/CategoryPage';
import ContactPage from './pages/ContactPage';
import FAQsPage from './pages/FAQsPage';
import LoginForm from './components/forms/LoginForm';
import RegisterForm from './components/forms/RegisterForm';
import Footer from './components/footer/Footer';
import react_logo from './ads.png';




/* this is where all the routes are connected to the other pages
making it a single page application
also displays the footer navigation bar and also the header on every page */


const App = () => (
  <div id="page">
    <Header logo={react_logo} />
    <NavigationBar />
    <div className="PagePadding">
      <Route path="/" exact component={HomePage} />
      <Route path="/About" exact component={AboutPage} />
      <Route path="/Categories" exact component={CategoryPage} />
      <Route path="/Terms&Conditions" exact component={TermsPage} />
      <Route path="/Contact Us" exact component={ContactPage} />
      <Route path="/LogIn" exact component={LoginForm} />
      <Route path="/Register" exact component={RegisterForm} />
      <Route path="/FAQs" exact component={FAQsPage} />
    </div>
    <Footer />
    <div id="footer-spacing">

    </div>
  </div>
);

export default App;