import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {

    // constructor checks if the user has entered the right values into the input boxes within the pageXOffset, if not entered it will show an error
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            email:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({email: event.target.value});
        this.setState({username: event.target.value});
    }

    handleSubmit(event){
        alert('A name was submitted: ' +  this.state.username + this.state.email);
        event.preventDefault();
    }
    

    render(){
        return(
           <div className="LogIn-container">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h1 id='Username'>Username:</h1>
                        <input type="text" placeholder="Enter Username" username={this.state.username} onChange={this.handleChange}/>
                        <h1 id='Email'>Email:</h1>
                        <input type="text" placeholder="example@example.com" email={this.state.email} onChange={this.handleChange}/>
                    </label>
                    <hr />
                    <input type="submit" value="Submit" />
                </form>
           </div> 
        );
    }
};



export default LoginForm;
