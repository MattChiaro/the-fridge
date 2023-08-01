// import Button from 'react-bootstrap/Button';
import React from "react";
import Card from "react-bootstrap/Card";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import * as bootstrap from 'bootstrap';
import "bootstrap/dist/css/bootstrap.css";

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
  
  // format for events
  // let events = [
    //   {
      //     title: 'All Day Event',
      //     start: '2023-08-15',
      //     end: '2023-08-15',
      //     description: 'description for All Day Event',
      //   }
      // ]

  function addEvent(title, date, description) {
        events.push({
          title: title,
          start: date,
          end: date,
          description: description,
        })
      }
  // function to add data from database to events array to populate calendar
  

  return (
    <Card 
    // style={{ width: "100%", height:"100%", margin:'1em' }} 
    >
      <Card.Body 
      // style={{height:"100%"}}
      >
        <Card.Title style={{textAlign:"center"}}>Calendar</Card.Title>
        {/* fullcalendar display */}
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
  );
}

export default CalendarCard;
