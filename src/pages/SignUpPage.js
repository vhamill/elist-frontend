import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';

class SignUpPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            email: null,
            password: null,
            confirmPassword: null,
        }

        this.usernameInput = React.createRef();
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
        this.confirmPasswordInput = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state
        var username = data.username;
        var email = data.email;
        var password = data.password;
        var confirmPassword = data.confirmPassword;

        //insert confirm password logic

        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                //this.getEntry();
            });
        window.location.href = "/"
    }

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value

        });
    }

    render(){
        const {title} = this.state
        return(
            <div className="mx-3 mx-md-3 mx-lg-5">
                <Hero title="Sign Up"/>
                <Form OnSubmit={this.handleSubmit}>
                    <Form.Group controlId="usernameForm">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" placeholder="movielover1357" onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="emailForm">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control name="email" placeholder="brad@email.com" onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="passwordForm">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="*****" onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="confirmPasswordForm">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control name="confirmPassword" type="password" placeholder="*****" onChange={this.handleInputChange}/>
                    </Form.Group>
                </Form>
                <Button onClick={this.handleSubmit}>Sign Up</Button>
            </div>
        );
    }

}

export default SignUpPage;