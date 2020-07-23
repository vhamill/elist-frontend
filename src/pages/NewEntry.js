import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';

class NewEntry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            medium: null,
            description: null,
            imageurl: null
        }

        this.titleInput = React.createRef();
        this.mediumInput = React.createRef();
        this.descriptionInput = React.createRef();
        this.imageurlInput = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state
        var title = data.title;
        var medium = data.medium;
        var description = data.description;
        var image_url = data.imageurl;
        fetch('http://localhost:3001/entries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, medium, description, image_url }),
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
                <Hero title="New Entry"/>
                <Form OnSubmit={this.handleSubmit}>
                    <Form.Group controlId="titleForm">
                        <Form.Label>Title</Form.Label>
                        <Form.Control name="title" placeholder="Roy 2: Dave" onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="mediumForm">
                        <Form.Label>Medium</Form.Label>
                        <Form.Control name="medium" as="select" onChange={this.handleInputChange}>
                            <option disabled selected>Select one</option>
                            <option>Album</option>
                            <option>Song</option>
                            <option>Book</option>
                            <option>Movie</option>
                            <option>TV Series</option>
                            <option>TV Episode</option>
                            <option>Video Game</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="descriptionForm">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="description" as="textarea" rows="4" onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="imageurlForm">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control name="imageurl" placeholder="https:// ..." onChange={this.handleInputChange} />
                    </Form.Group>
                </Form>
                <Button onClick={this.handleSubmit}>Submit</Button>
            </div>
        );
    }

}

export default NewEntry;