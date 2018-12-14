import React, { Component } from 'react';
import '../App.css';
import Body from '../components/body/Body';
import Grid from './../components/grid/Grid';
import CategoryData from '../CategoryData'

class CategoryPage extends Component {

    render() {
      return (
        <div className="container-HomePage">
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <div>
            <Body />
            <Grid items={CategoryData.items} colClass="col-m-3" onClick={this.handleThumbnailClicked} rowLength={4} />
          </div> 
        </div>
      );
    }
};

export default CategoryPage;