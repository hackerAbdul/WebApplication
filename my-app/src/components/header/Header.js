import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


class Header extends Component {
    
    // handleSearchSubmit(event){

    // //prevent the form to be submitted to its action url
    // event.preventDefault();
    // this.props.onSearchClick(this.state.SearchTerm);
    
    // }

    

    render() {
        return (
        <div className="header">
            <div className="login-register">
                {/* <a href="link9">Login/Register</a> */}
                <p>Login/Register</p>
            </div>
            <img src={this.props.logo} alt="React logo" /><Link to="/About" className="logo">Classified Ads</Link>
            <div className="header-right">
                <div className="search-container">
                    <form action="">
                        <input type="text" placeholder="Search.." name="txtSearch" onChange={this.handleInputChange} />
                        <button type="submit" onClick={this.handleSearchSubmit}>Search</button>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}
export default Header;