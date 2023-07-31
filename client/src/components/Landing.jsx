import React from 'react';
import { useState } from 'react';
import videoBG from '../assets/FridgeLandingShrank.mp4';
// import logo from '../assets/logo192.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const Landing = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div id='videoContainer'>
            <video src={videoBG} autoPlay loop muted />
            <Button id='loginBtn' variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
    
          <Modal.Title className='modalLogin'>The Fridge</Modal.Title>
        <Modal.Body>
          <Form>
            <Form.Group  
            className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="********"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Login
          </Button>
          Don't have an account?
          <Button variant="primary" onClick={handleClose}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
            {/* unable to get image into top right corner. revisit issue later */}
            {/* <img src={logo} alt="logo" id='landingLogo' /> */}
           
        </div>
    
    );
}

export default Landing;