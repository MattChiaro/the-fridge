// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';



function CalendarCard() {
  return (
    <Card style={{ width: "18rem", height:"20rem" } }>
      <Card.Body>
        <Card.Title>Calendar</Card.Title>
        {/* <FullCalendar
            plugins={[]}
            initialView="dayGridMonth"
            headerToolbar={{
              start: "",
              center: "title",
              end: ""
            }}
            /> */}
      </Card.Body>
    </Card>
  );
}

export default CalendarCard;
