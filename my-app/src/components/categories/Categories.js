import React, {Component} from 'react';
import './Categories.css';


// class Categories extends Component {
//     render(){
//         return(
//             <div className="navbar">
//                 <a>Home</a>
//                 <a>News</a>
//                 <div className="dropdown">
//                     <button className="dropbtn">Dropdown 
//                         <i className="fa fa-caret-down" />
//                     </button>
//                     <div className="dropdown-content">
//                         <a>Link 1</a>
//                         <a>Link 2</a>
//                         <a>Link 3</a>
//                     </div>
//                 </div>
//             </div>

//         );
//     };
// };

class Categories extends Component{
    render(){
        return(
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li style={{float: 'right'}}><a href="#about">About</a></li>
        </ul>
        );
    };
};

export default Categories;