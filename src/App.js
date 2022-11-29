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
          locations: "Accra",
          id: "gg5gg4regr"

        },
        {
          name: "Barrister Charlie",
          phone: +223645347891,
          locations: "Kasoa",
          id: "5848ssergerd",
        },
        {
          name: "Kojo Antwi",
          phone: +2334512039,
          locations: "Legon",
          id: "gg5gg4gsg34"
        },
      ]
    }


  }
  handleAddContact = (user) => {
    user.id = Math.random().toString()
    this.setState({
      users: [...this.state.users, user]
    })
  }
  DeleteUser=(id)=>{
    let undeletedUsers =this.state.users.filter(user=>user.id !== id)
    this.setState({
      users: undeletedUsers
    })
}
editUser=(id, updatedUser)=>{
  this.setState({
      users: this.state.users.map((user)=> user.id=== id ? updatedUser : user)
  })
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
              <Contacts
               userData={this.state.users} 
               DeleteUser={this.DeleteUser} 
               editUser={this.editUser} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
