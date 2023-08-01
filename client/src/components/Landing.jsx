import React from 'react';
import { useState } from 'react';
import videoBG from '../assets/FridgeLandingShrank.mp4';
import logo from '../assets/logo192.png';
import loginLogo from '../assets/logo512login.png';
import { useMutation } from '@apollo/client';

import { Button, Form, Modal, } from 'react-bootstrap';

import { LOGIN, ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const Landing = () => {

  //modal state (show/hide)
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  //form state
  const [LoginFormState, setLoginFormState] = useState({ email: '', password: '' });
  const [SignUpFormState, setSignUpFormState] = useState({ name: '', email: '', password: '' });
  const [validated] = useState(false)

  //modal handlers
  const handleLoginClose = () => setShowLogin(false);
  const handleSignUpClose = () => { setShowSignUp(false); setShowLogin(false) };
  const handleShowLogin = () => setShowLogin(true);
  const handleShowSignup = () => setShowSignUp(true);

  //mutations
  const [login] = useMutation(LOGIN);
  const [addUser] = useMutation(ADD_USER);


  //form submit handlers
  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(LoginFormState)
    try {
      const mutationResponse = await login({
        variables: { email: LoginFormState.email, password: LoginFormState.password },
      });
      console.log(mutationResponse)
      const token = mutationResponse.data.login.token;
      console.log(token)

      Auth.login(token)

    } catch (e) {
      console.log(e);
    }
  }

  const handleSignUpFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(SignUpFormState)
    try {
      const mutationResponse = await addUser({
        variables: { name: SignUpFormState.name, email: SignUpFormState.email, password: SignUpFormState.password },
      });

      const token = mutationResponse.data.addUser.token;
      Auth.login(token)

    } catch (e) {
      console.log(e);
    }
  }


  //form change handles 
  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginFormState({
      ...LoginFormState,
      [name]: value,
    });
  };

  const handleSignUpChange = (event) => {
    const { name, value } = event.target;
    setSignUpFormState({
      ...SignUpFormState,
      [name]: value,
    });
  };


  //component return
  return (
    <div id='videoContainer'>
      <video src={videoBG} autoPlay loop muted />
      <div >
            <img className="hero-logo" src={loginLogo} onClick={handleShowLogin}></img>
            <p>Click to Login!</p>
            {/* <Button id='loginBtn' variant="primary" onClick={handleShowLogin}>
              Login
            </Button> */}
            </div>
      <section className="gradient-custom">

        {/* Login Modal */}
        <Modal show={showLogin} onHide={handleLoginClose}>

          <Modal.Title className='flex d-flex justify-content-center'><img src={logo} alt="logo" /></Modal.Title>
          <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleLoginFormSubmit}>
              <Form.Group
                className="m-4" controlId="fromEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name='email'
                  value={LoginFormState.email}
                  placeholder="name@example.com"
                  autoFocus
                  onChange={handleLoginChange}
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
                  name='password'
                  value={LoginFormState.password}
                  autoFocus
                  onChange={handleLoginChange}
                />
              </Form.Group>
              <Form.Group className='flex d-flex justify-content-center'>
                <Button type="submit" variant="secondary">
                  Login
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer className="flex d-flex justify-content-center">

            Don't have an account?
            <p as={Button} variant="primary" onClick={handleShowSignup}>
              <i>Sign up.</i>
            </p>
          </Modal.Footer>
        </Modal>

        {/* Signup Modal */}
        <Modal show={showSignUp} onHide={handleSignUpClose}>

          <Modal.Title className='flex d-flex justify-content-center'><img src={logo} alt="logo" /></Modal.Title>
          <Modal.Body className="mb-3">
            <Form noValidate validated={validated} onSubmit={handleSignUpFormSubmit} >
              <Form.Group
                className="m-4" controlId="fromName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  name='name'
                  value={SignUpFormState.name}
                  placeholder="Enter your display name"
                  autoFocus
                  onChange={handleSignUpChange}
                />
              </Form.Group>
              <Form.Group
                className="m-4" controlId="fromEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name='email'
                  value={SignUpFormState.email}
                  placeholder="name@example.com"
                  autoFocus
                  onChange={handleSignUpChange}
                />
              </Form.Group>
              <Form.Group
                className="m-4"
                controlId="formPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name='password'
                  value={SignUpFormState.password}
                  placeholder="********"
                  autoFocus
                  onChange={handleSignUpChange}
                />
              </Form.Group>
              <Form.Group className='flex d-flex justify-content-center'>
                <Button type="submit" variant="secondary">
                  Sign Up!
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>

      </section>
    </div>

  );
}

export default Landing;