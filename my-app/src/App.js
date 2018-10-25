import React, { Component } from 'react';
import react_logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'; 


class App extends Component {
  onSearch(term){

    console.log("search on term:" + term);
   }
  render() {
    return (
      <div>
        <Header title="My Own title" logo={react_logo} onSearchClick={this.onSearch} />
      </div>
    );
  }
}

export default App;