import {Card, Modal} from "react-bootstrap";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import * as bootstrap from 'bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { Calendar4 } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'
import React, { useState } from "react";

// global variable for events
let events = [
  {
    title: 'All Day Event',
    start: '2023-08-15',
    end: '2023-08-15',
    description: 'description for All Day Event',
  }
]

function CalendarCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function addEvent(title, date, description) {
        events.push({
          title: title,
          start: date,
          end: date,
          description: description,
        })
      }

  return (
    <div>
      <Link onClick={handleShow}><Calendar4 size={38} color='white' className="icon"/></Link>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>        
          <FullCalendar
            plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin ]}
            initialView="dayGridMonth"
            headerToolbar={{
              start: "prev,next",
              center: "title",
              end: "dayGridMonth timeGridWeek"
            }}
            events = {events}
            eventDidMount={(info) => {
              return new bootstrap.Popover(info.el, {
                title: info.event.title,
                placement: "auto",
                customClass: "popoverStyle",
                content: info.event.extendedProps.description,
                html: true,});
            }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CalendarCard;
