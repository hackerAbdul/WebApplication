import React, { Component } from 'react';
import react_logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'; 
import Categories from './components/categories/Categories';
import Footer from './components/Footer/Footer';


class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="header">
          <Header logo={react_logo} />
        </div>
        <div className="categories">
          <Categories />
        </div>
        <div>
          <Footer />
        </div>    
      </div>
    );
  }
}

export default App;