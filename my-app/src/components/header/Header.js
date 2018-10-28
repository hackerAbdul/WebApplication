import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
    
    // handleSearchSubmit(event){

    // //prevent the form to be submitted to its action url
    // event.preventDefault();
    // this.props.onSearchClick(this.state.SearchTerm);
    
    // }

    

    render() {
        return (
        <div className="header">
            <a href="#default" className="logo"> {this.props.title}</a> 
            <img src={this.props.logo} alt="React logo" /><a href="#default" className="logo">Classified Ads</a>
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