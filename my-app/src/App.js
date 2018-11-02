import React, { Component } from 'react';
import { Route } from "react-router-dom";
import react_logo from './ads.png';
import './App.css';
import Header from './components/header/Header'; 
import Categories from './components/categories/Categories';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import AboutPage from './pages/AboutPage';


class App extends Component {

  render() {
    return (
      <div className="container">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="header">
          <Header  logo={react_logo} />
        </div>
        <div className="categories">
          <Categories />
        </div>
        <div>
          <Footer />
          <Route path="/AboutPage" exact component={AboutPage} />
        </div>
        <div>
          <Body />
        </div>   
      </div>
    );
  }
}

export default App;