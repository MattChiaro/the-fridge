import React from 'react';
import { useState } from 'react';
import videoBG from '../assets/FridgeLandingShrank.mp4';
import logo from '../assets/logo192.png';
import { useQuery, useMutation } from '@apollo/client';

import { Button, Form, Modal } from 'react-bootstrap';

import { LOGIN, ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const Landing = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleLoginClose = () => setShowLogin(false);
  const handleSignUpClose = () => {setShowSignUp(false); setShowLogin(false)};
  const handleShowLogin = () => setShowLogin(true);
  const handleShowSignup = () => setShowSignUp(true);

  const [login, { loading, data }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;

      Auth.login(token)

    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div id='videoContainer'>
      <video src={videoBG} autoPlay loop muted />
      <Button id='loginBtn' variant="primary" onClick={handleShowLogin}>
        Login
      </Button>
      <section className="gradient-custom">

        {/* Login Modal */}
        <Modal className="" show={showLogin} onHide={handleLoginClose}>

          <Modal.Title className='modalLogin'><img src={logo} alt="logo" /></Modal.Title>
          <Modal.Body>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group
                className="m-4" controlId="fromEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="m-4"
                controlId="formPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="********"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Button type="submit" variant="secondary" onClick={handleLoginClose}>
            Login
          </Button>
          <Modal.Footer className="flex d-flex justify-content-center">

            Don't have an account?
            <p as={Button} variant="primary" onClick={handleShowSignup}>
              <i>Sign up.</i>
            </p>
          </Modal.Footer>
        </Modal>

{/* Signup Modal */}
        <Modal className="" show={showSignUp} onHide={handleSignUpClose}>

          <Modal.Title className='modalLogin'><img src={logo} alt="logo" /></Modal.Title>
          <Modal.Body>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group
                className="m-4" controlId="fromEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter your display name"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="m-4" controlId="fromEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="m-4"
                controlId="formPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="********"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Button type="submit" variant="secondary" onClick={handleSignUpClose}>
            Sign Up!
          </Button>
          <Modal.Footer className="flex d-flex justify-content-center">
          </Modal.Footer>
        </Modal>

      </section>
      {/* unable to get image into top right corner. revisit issue later */}
      {/* <img src={logo} alt="logo" id='landingLogo' /> */}

    </div>

  );
}

export default Landing;