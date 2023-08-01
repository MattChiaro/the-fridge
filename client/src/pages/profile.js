import Icon from '../assets/images.jpg'
import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBInputGroup } from 'mdb-react-ui-kit';
import {House} from 'react-bootstrap-icons';
import {Link} from 'react-router-dom'


export default function ProfileStatistics() {
  return (
    <div style={{ background: '#FFCC80'}}>
      <div  style={{marginLeft: '10px' }}>
        <Link to='/home'><House size={48} color='white'/></Link>
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
                <MDBTypography tag="h4">NAME</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  email
                </MDBCardText>
                <MDBInputGroup className='mb-3'>
      </MDBInputGroup>
      <MDBBtn color='light' rippleColor='dark'>
        INVITE
      </MDBBtn>
      <MDBBtn color='light' rippleColor='dark'>
        LOGOUT
      </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        
        <div className="card text-center" style={{ width: "18rem" }}>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <MDBBtn color='light' rippleColor='dark'>
        INVITE
      </MDBBtn>
  </div>
</div>

<div className="card text-center" style={{ width: "18rem" }}>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <MDBBtn color='light' rippleColor='dark'>
        INVITE
      </MDBBtn>
  </div>
</div>

<div className="card text-center" style={{ width: "18rem" }}>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <MDBBtn color='light' rippleColor='dark'>
        INVITE
      </MDBBtn>
  </div>
</div>

<div className="card text-center" style={{ width: "18rem" }}>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <MDBBtn color='light' rippleColor='dark'>
        INVITE
      </MDBBtn>
  </div>
</div>

<div className="card text-center" style={{ width: "18rem" }}>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <MDBBtn color='light' rippleColor='dark'>
        INVITE
      </MDBBtn>
  </div>
</div>

<div className="card text-center" style={{ width: "18rem" }}>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <MDBBtn color='light' rippleColor='dark'>
        INVITE
      </MDBBtn>
  </div>
</div>

      </MDBContainer>
    </div>
  );
}