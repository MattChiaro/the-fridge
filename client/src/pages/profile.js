import Icon from '../assets/images.jpg'
import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon, MDBInputGroup } from 'mdb-react-ui-kit';
import {House} from 'react-bootstrap-icons';

export default function ProfileStatistics() {
  return (
    <div className='' style={{ background: '#FFCC80'}}>
      <div>
        <MDBBtn outline color='white'>
          <House size={48} color='white'/>
        </MDBBtn>
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
        {/* <input className='form-control' type='text' />
        <MDBBtn color='light' rippleColor='dark'>ADD  CODE</MDBBtn> */}
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
      </MDBContainer>
    </div>
  );
}