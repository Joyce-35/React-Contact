import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import './App.css';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            locations: "",
        }
    }
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
            console.log(this.state)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state)
        this.setState({
            name: "",
            phone: "",
            locations: "",
        })
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit} className="myForm">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name='name' value={this.state.name} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter Phone number" name='phone' value={this.state.phone} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Location" name='locations' value={this.state.locations} onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}
export default ContactForm;