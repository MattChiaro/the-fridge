// import { QUERY_USERS_PROFILE } from '../utils/queries';
// import { useQuery } from '@apollo/client';
import {Card, Col, Image, Button, Form, InputGroup} from 'react-bootstrap';
import React from 'react';
import Icon from '../assets/images.jpg'

function Profile() {

// const [userProfile] = useQuery(QUERY_USERS_PROFILE)

  return (
    <Card style={{ width: '25rem', height: '30rem' }}>
      <Card.Body className='bg-black border-0 rounded'>
      <Col>
          <Image src={Icon} className='col-8 col-lg-8' roundedCircle/>
        </Col>
        <Card.Title className='text-white text-center'>NAME</Card.Title>
        <Card.Subtitle className="mb-5 text-white text-center">Email</Card.Subtitle>
        <Button variant="outline-light" className='col-md-12  text-right'>INVITE FRIEND</Button>
        <InputGroup className="mt-4">
        <Form.Control
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-light">
          ADD CODE
        </Button>
      </InputGroup>
      <Button className='mt-5 col-4' variant="outline-light">LOGOUT</Button>
      </Card.Body>
    </Card>
  );
}

export default Profile;