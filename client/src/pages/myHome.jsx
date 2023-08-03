import React, { useState } from "react";
import { Modal, Card } from "react-bootstrap";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import background from '../assets/homeBack.jpeg'
import logo from '../assets/logo300.png';
import { Calendar4, People, BoxArrowLeft} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import * as bootstrap from 'bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import Note from '../components/newNote';
// global variable for events
let events = [
    {
      title: 'All Day Event',
      start: '2023-08-15',
      end: '2023-08-15',
      description: 'description for All Day Event',
    }
  ]

const Home = () => {

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return (
      <>
      <div className="backgroundImg">
      <img className="backimg" src={background}/>
      </div>
      <div >
        <img className="homelogo" src={logo}></img>
      </div>
        <Link onClick={handleShow}><Calendar4 size={38} color='white' className="icon"/>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Calendar</Modal.Title>
        </Modal.Header>
        <Modal.Body>        
        <Card>
        <Card.Body>
        <Card.Title style={{textAlign:"center"}}>Calendar</Card.Title>
        <FullCalendar
          plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin ]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: "prev,next",
            center: "title",
            end: "dayGridMonth timeGridWeek"
          }}

          // add events to calendar
          events = {events}
          eventDidMount={(info) => {
            return new bootstrap.Popover(info.el, {
              title: info.event.title,
              placement: "auto",
              customClass: "popoverStyle",
              contet: info.event.extendedProps.description,
              html: true,});
          }}
        />
              </Card.Body>
            </Card>
        </Modal.Body>
      </Modal>
</Link>
<Link to='/' onClick={logout}><BoxArrowLeft size={48} color='white' className="LogOutIcon"/></Link>
<div>
    <Link to='/profile' className="profileIcon"><People size={48} color='white'/></Link>
</div>
<Note />
</>
)};

export default Home;