import React, { Component } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';


class Card extends Component {
  
    constructor(props){
        super(props);

        this.state = {
           cardStyle:{backgroundColor:this.props.backgroundColor}
        };
        
        //this.onClickHandler = this.onClickHandler.bind(this);
    }


    render() {

        return (

            //when a card is pressed the url changes with details of the card and where it belongs
            <div className="card">
                <img src={this.props.image} alt={this.props.imgAlt} style={{width: '100%'}} />
                <div className="cardContainer">
                    <Link to={"/Category/" + this.props.id} className="logo"><button  className="linkButton"><h4><b>{this.props.title}</b></h4></button></Link>
                    <p>{this.props.article}</p> 
                </div>
            </div>
        );
    }
}
export default Card;