import React, {Component} from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';


{/*
    Code here is for displaying the navigation bar 
    within the web application 
    each button has a link that allows it to connect
    with other pages and call other functions
*/}

class Categories extends Component{
    render(){
        return(
            <ul>
                <li><Link to="/" className="Home-Button">Home</Link></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li style={{float: 'right'}}><Link to="/AboutPage">About</Link></li>
        </ul>
        );
    };
};

export default Categories;