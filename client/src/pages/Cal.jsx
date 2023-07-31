import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import CalPageCard from '../components/calPageCard';


const CalendarComponent = () => {
    return(
      <div id='calComp'>
        <div id='calDiv'>
          <FullCalendar
            plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin ]}
            initialView="dayGridMonth"
            headerToolbar={{
              start: "prev,next",
              center: "title",
              end: ""
            }}
            />
        </div> 
            <div id='calInfo'>
              <CalPageCard />
            </div>
      </div>
    )
}

export default CalendarComponent;