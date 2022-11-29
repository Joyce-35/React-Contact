import React, { Component } from 'react';
import { Form, Button,} from "react-bootstrap";

class EditContactsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.userInfo.name,
            phone: props.userInfo.phone,
            locations: props.userInfo.locations,
            id: props.userInfo.id,
        }
    }
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editUser(this.state.id, this.state)
        this.setState({
            name: "",
            phone: "",
            locations: "",
        })
        this.props.closeModal()
    }
    render() {
        return (
            <>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name='name' value={this.state.name} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder=" Enter Phone Number" name='phone' value={this.state.phone} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Location" name='locations' value={this.state.locations} onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
        );
    }
}

export default EditContactsForm;
