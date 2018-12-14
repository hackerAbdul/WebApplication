import React, { Component } from 'react';
import './LoginForm.css';

class RegisterForm extends Component {

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
        alert('An email has been submitted: ' +  this.state.email );
        event.preventDefault();
    }
    

    render(){
        return(
           <div className="LogIn-container">
                <form onSubmit={this.handleSubmit}>
                    <label>
                    <h1 id='Name'>Name:</h1>
                        <input type="text" placeholder="Name" />
                        <h1 id='Email'>Email:</h1>
                        <input type="text" placeholder="example@example.com" email={this.state.email} onChange={this.handleChange}/>
                        <h1 id='Password'>Password</h1>
                        <input type="password" placeholder="Enter Password"/>
                        <h1 id='Password'>Confirm Password</h1>
                        <input type="password" placeholder="Enter Password"/>
                    </label>
                    <br/>
                    <hr />
                    <input type="submit" value="Register" />
                </form>
           </div> 
        );
    }
};



export default RegisterForm;