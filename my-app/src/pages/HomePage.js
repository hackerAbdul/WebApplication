import React, { Component } from 'react';
import '../App.css';
import Body from '../components/body/Body';

{/*this is the homepage only displays the body on here footer and header is 
always printed as a continuous function call*/}

class HomePage extends Component {

    render() {
      return (
        <div className="container">
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <div>
            <Body />
          </div> 
        </div>
      );
    }
};

export default HomePage;
