import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
  render(){
    return (
      <div>
        <div className="footer">
          <table id="Content">
          <tbody>
            <tr>
              <th>About</th>
              <th>Help/Contact</th>
              <th>Social Media</th>
            </tr>
            <tr>
              <td><a href="link1">About Us</a></td>
              <td><a href="link2">FAQs</a></td>
              <td><a href="link3">FaceBook</a></td>
            </tr>
            <tr>
              <td><a href="link4">Terms & Contditions</a></td>
              <td><a href="link5">Contact Us</a></td>
              <td><a href="link6">Twitter</a></td>
            </tr>
            <tr>
              <td></td>
              <td><a href="link7">Email</a></td>
              <td></td>
            </tr>
          </tbody></table>
        </div>
      </div>
    );
  };
};
export default Footer;