import React, { Component } from 'react';
import '../App.css';
import Body from '../components/body/Body';
import Grid from './../components/grid/Grid';
import Data from '../Data';

/*this is the homepage only displays the body on here footer and header is 
always printed as a continuous function call*/

class HomePage extends Component {

    render() {
      return (
        <div className="container-HomePage">
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <div>
            <Body />
            <Grid items={Data.items} colClass="col-m-3" onClick={this.handleThumbnailClicked} rowLength={4} />
          </div> 
        </div>
      );
    }
};

export default HomePage;
