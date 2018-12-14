import React, {Component} from 'react';
import './NavigationBar.css';
import { Link } from 'react-router-dom';


/*
    Code here is for displaying the navigation bar 
    within the web application 
    each button has a link that allows it to connect
    with other pages and call other functions
*/

class NavigationBar extends Component{
    render(){
        return(
            <ul className="NavigationBar">
                <li className="NavigationItem"><Link to="/" className="Home-Button">Home</Link></li>
                <li className="NavigationItem"><Link to="/Categories">Categories</Link></li>
                <li className="NavigationItem"><Link to="/Contact Us">Contact</Link></li>
                <li className="NavigationItem" style={{float: 'right'}}><Link to="/About">About</Link></li>
        </ul>
        );
    };
};

export default NavigationBar;