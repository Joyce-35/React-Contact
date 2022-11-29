import React from 'react';
import { Container, Row,} from "react-bootstrap";
import Contact from './Contact';

const Contacts = (props) => {
    return (
        <Container>
                <Row>
                    {
                        props.userData.map((user)=>{
                            return<Contact  
                            userInfo={user} 
                            key= {user.id} 
                            DeleteUser={props.DeleteUser}
                            editUser={props.editUser}/>
                        })
                    }
                    
                </Row>
            </Container>
    );
}

export default Contacts;
