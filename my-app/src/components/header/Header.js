import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


class Header extends Component {
    

    

    render() {
        return (
        <div className="header">
            <div className="login-register">
                {/* <a href="link9">Login/Register</a> */}
                <Link to="LogIn"> Login/Register</Link>
            </div>
            <img src={this.props.logo} alt="React logo" /><Link to="/" className="logo">Classified Ads</Link>
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