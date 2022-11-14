import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './Contacts';
import './App.css';
import ContactForm from './ContactForm';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          name: "Joyce Adzokatse",
          phone: +22394123495,
          locations: "Accra"

        },
        {
          name: "Barrister Charlie",
          phone: +223645347891,
          locations: "Kasoa"
        },
        {
          name: "Kojo Antwi",
          phone: +2334512039,
          locations: "Legon"
        },
      ]
    }


  }
  handleAddContact = (user) => {
    this.setState({
      users: [...this.state.users, user]
    })
    console.log(this.state)
  }
  render() {
    return (
      <div className='App'>
        <h1>Contact Forms</h1>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <ContactForm addUser={this.handleAddContact} />
            </Col>
            <Col>
              <Contacts userData={this.state.users} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
