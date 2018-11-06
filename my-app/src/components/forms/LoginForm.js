import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {

    // constructor checks if the user has entered the right values into the input boxes within the pageXOffset, if not entered it will show an error
    constructor(props) {
        super(props);
        this.state = {
            Username:'', 
            Password:''
        };
    
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.signIn = this.signIn.bind(this);
    }
    
    handleUsernameChange(event) {
        this.setState({Username: event.target.Username});
    }
    
    signIn(event) {
        alert('A name was submitted: ' + this.state.Username);
        event.preventDefault();
    }
    

    render(){
        return(
            <div className="LogIn-Container">
                <form onSubmit={this.handleSubmit}>
                    <div className="Username-Container">
                        <label>Username:</label>
                        <input type="text" placeholder="Enter Username" Username={this.state.Username} onChange={this.handleUsernameChange} />
                    </div>
                    <div className="Password">
                        <label>Password:</label>
                        <input type="password" placeholder="Enter Password" Password={this.state.Password} onChange={this.handleChange} />
                    </div>
                        <button  onClick={this.signIn.bind(this)} type="button"> Sign in </button>
                </form>
            </div>
        );
    }
};

export default LoginForm;

/* <div class="loginbox">
    <h1>Log in here</h1>
    <form>
        <p>Username</p>
        <input type="text" name="" placeholder="Enter Username">
        <p>Password</p>
        <input input type="text" name="" placeholder="Enter Username">
        <input type="submit" name="" value="Login">
    </form>
</div> */