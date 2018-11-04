import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

/*function for running the footer within the web application also has links to other pages 
via the button displayed in the footer*/

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
              <td><Link to="/About">About</Link></td>
              <td><a href="link2">FAQs</a></td>
              {/* these links lead to a already set up classified ads company facebook website */}
              <td><a href="https://www.facebook.com/ClassifiedAds.com/" target="_blank" rel="noopener noreferrer" >FaceBook</a></td>
            </tr>
            <tr>
              <td><Link to="/Terms&Conditions">Terms & Conditions</Link></td>
              <td><Link to="/Contact Us">Contact Us</Link></td>
              {/* these links lead to a already set up classified ads company twitter website */}
              <td><a href="https://twitter.com/classifiedads__?lang=en" target="_blank" rel="noopener noreferrer">Twitter</a></td>
            </tr>
            <tr>
              <td></td>
              {/* sends an email directly to me if the user wants to get in contact with me in regards with feedback of the web application */}
              <td><a href="mailto:qaasima@uni.coventry.ac.uk?subject=User%20Feedback&body=Hi%20there,%0D%0A%0D%0AI wanted to give some feedback on your Web Application:%0D%0A%0D%0A">Feedback</a></td>
              <td></td>
            </tr>
          </tbody></table>
        </div>
      </div>  
    );
  };
};
export default Footer;