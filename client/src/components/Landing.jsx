import React from 'react';
import { useState } from 'react';
import videoBG from '../assets/FridgeLandingShrank.mp4';
import logo from '../assets/logo192.png';
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
<section className="gradient-custom">
      <Modal show={show} onHide={handleClose}>
    
          <Modal.Title className='modalLogin text-center'><img src={logo} alt="logo" /></Modal.Title>
        <Modal.Body>
          <Form>
            <Form.Group id='emailForm'
            className="m-4 text-center" controlId="exampleForm.ControlInput1">
              <Form.Label id='email'>Email address</Form.Label>
              <Form.Control id='emailBox'
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group id='passForm'
              className="m-4 text-center"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label id='pass'>Password</Form.Label>
              <Form.Control id='passBox'
                type="password"
                placeholder="********"
                autoFocus
              />

              <Button id='logInBtn' variant="secondary" className='mt-4 bg-white border-0 text-black' onClick={handleClose}>
                Login
            </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
      </section>
            {/* unable to get image into top right corner. revisit issue later */}
            {/* <img src={logo} alt="logo" id='landingLogo' /> */}
           
        </div>
    
    );
}

export default Landing;