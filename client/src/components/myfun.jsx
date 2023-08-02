import {Form, Button, Modal} from 'react-bootstrap';
import React, { useState } from 'react';
import { ADD_BULLETIN } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';


const NotePad = () => {

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  const [formState, setFormState] = useState({
    title: '',
    body: '',
    priority: '',
  })
const [characterCount, setCharacterCount] = useState(0);

const [addBulletin] = useMutation(ADD_BULLETIN);

const handleFormSubmit = async (event) => {
  event.preventDefault();
  let el = event.target.children[2];
  let userPostLocation = el.options[el.selectedIndex].text;
  console.log('working', el.options[el.selectedIndex].text);


  try {
   if (userPostLocation === 'Bulletin') {
    const mutationResponse = await addBulletin({
      variables: { title: formState.title, body: formState.body, user: formState.user }
    })
  } else if (userPostLocation === 'Urgent Post'){
    const mutationResponse = await addBulletin({
      variables: { title: formState.title, body: formState.body, user: formState.user, priority: true}
    })
  }
    // const mutationResponse =  await addBulletin({
    //   variables:{title: formState.title, body: formState.body, user: Auth.getProfile().data._id}
    // });
// console.log(mutationResponse);
    // window.location.reload();
  } catch (error) {
    console.error(error);
  }
};
const handleChange = (e) => {
  const { name, value} = e.target;
  if (name === 'title' && value.length <= 280) {
      setFormState({ formState, [name]: value });
      setCharacterCount(value.length);

  } else if (name !== 'title') {
      setFormState({ formState, [name]: value });
  }
  };

  return (
<>
<Button variant="dark" onClick={handleShow}>
  New Post
</Button>

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>New Post</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" rows={1}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className={`m-0 ${
          characterCount === 280 ? 'text-danger' : ''
          }`}>Content</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Select className='mt-4' aria-label="Default select example">
        <option>Select desired note location</option>
        <option value="1">Bulletin</option>
        <option value="2">Urgent Post</option>
        <option value="3">Calendar</option>
      </Form.Select>
      <Form.Label className='mt-4'>Enter the date and time of the event</Form.Label>
        <Form.Control type="date" placeholder="Enter date" data-date-format="YYYY/MM/DD" name="startDate" onChange={handleChange} />
        <Form.Control type="time" placeholder="Enter time" data-date-format="HH:mm" name="startTime" onChange={handleChange} />
      <Button variant="light" type='submit' onClick={handleClose}>
        Post
      </Button>
    </Form>
  </Modal.Body>
</Modal>
</>
  );
}

export default NotePad;