import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col,} from "react-bootstrap";

const Contact = (props) => {
    return (
        <>
        <Col md="4" style={{ marginBottom: "1rem" }}>
            <Card>
                <Card.Body>
                    <Card.Title>CodeTrain User</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.userInfo.name}</Card.Subtitle>
                    <Card.Text>
                        <p>Phone Number:{props.userInfo.phone}</p>
                        <p>Location: {props.userInfo.locations}</p>
                    </Card.Text>
                    <Card.Link href="#">Edit</Card.Link>
                    <Card.Link href="#">Delete</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    </>
    );
}

export default Contact;
