import Icon from '../assets/images.jpg'
import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBInputGroup } from 'mdb-react-ui-kit';
import { House, Trash3 } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import {Button, Modal, Card, Col, Row} from 'react-bootstrap';


import { useQuery } from '@apollo/client';
import { QUERY_USERS_BY_ID, QUERY_BULLETINS } from '../utils/queries';
import Auth from '../utils/auth';

export default function ProfileStatistics() {
  

  const { loading, data } = useQuery(QUERY_USERS_BY_ID, {
    variables: { id: Auth.getProfile().data._id },
  });


  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  }

  const user = data?.user || {};

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div style={{ background: '#FFCC80' }}>
      <div style={{ marginLeft: '10px' }}>
        <Link to='/home'><House size={38} color='black' marginTop='10px'/></Link>
      </div>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src={Icon}
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">{user.name}</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  {user.email}
                </MDBCardText>
                <MDBInputGroup className='mb-3'>
                </MDBInputGroup>
                <Button variant="light" onClick={handleShow} className='m-3'>
                  MY CODE
                </Button>
              <Modal show={show} onHide={handleClose} className='codeName'>
                <Modal.Header closeButton>
                  <Modal.Title>Your Code</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>{user.fridgeId}</Modal.Body>
              </Modal>
              <Button variant="light" className='m-3' onClick={logout}>
                  LOGOUT
              </Button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
       </MDBRow>
       <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                {user.bulletins.body}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      </MDBContainer>
    </div>
  );
  }