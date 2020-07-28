import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';

class LogInPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
        }

        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state
        var email = data.email;
        var password = data.password;
    
        fetch('http://localhost:3001/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
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
                <Hero title="Log In"/>
                <Form OnSubmit={this.handleSubmit}>
                    <Form.Group controlId="emailForm">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control name="email" placeholder="brad@email.com" onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="passwordForm">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" placeholder="*****" onChange={this.handleInputChange}/>
                    </Form.Group>
                    {/* <a href={"/signup"}>Forgot Password</a> */}
                    <a href={"/signup"}>Don't have an account yet? Sign Up!</a>
                </Form>
                <Button onClick={this.handleSubmit}>Log In</Button>
            </div>
        );
    }

}

export default LogInPage;