// import Button from 'react-bootstrap/Button';
import React from "react";
import Card from "react-bootstrap/Card";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';



function CalendarCard() {
  return (
    <Card style={{ width: "100%", height:"100%", margin:'1em' }} >
      <Card.Body style={{height:"100%"}}>
        <Card.Title style={{textAlign:"center"}}>Calendar</Card.Title>
        {/* fullcalendar display */}
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: "prev,next",
            center: "title",
            end: ""
          }}
        />
      </Card.Body>
    </Card>
  );
}

export default CalendarCard;
