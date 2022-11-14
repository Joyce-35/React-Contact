import React from 'react';
import { Container, Row,} from "react-bootstrap";
import Contact from './Contact';

const Contacts = (props) => {
    return (
        <Container>
                <Row>
                    {
                        props.userData.map((user, index)=>{
                            return<Contact  userInfo={user} key={index}/>
                        })
                    }
                    
                </Row>
            </Container>
    );
}

export default Contacts;
