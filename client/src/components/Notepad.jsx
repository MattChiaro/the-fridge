import React , { useState} from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { DropdownButton, Dropdown } from "react-bootstrap";


// handleClick = (x) => {
//     return x;
// }

const Notepad = () => {
    // receive inputs from user
    // store inputs in database
    // display inputs on bulletin board
    // allows user to add to calendar if they want

    // if user selects calendar, add to calendar

    // const dropdownOptions = [
    //     { value: "Bulletin", label: "Bulletin" },
    //     { value: "Urgent", label: "Urgent" },
    //     { value: "Calendar", label: "Calendar" },
    // ];
    const [message, setMessage] = useState("");
    const [bulletin, setBulletin] = useState(false);
    const [urgent, setUrgent] = useState(false);
    const [calendar, setCalendar] = useState(false);
    const [allDay, setAllDay] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");


    const [updated, setUpdated] = useState(message);

    
    // sets message to user input to be stored in database
    const handleChange = (e) => {
        setMessage(e.target.value);
        console.log(message)
    };

    // sets bulletin to true if user wants to add to bulletin
    const handleSendBull = (e) => {
        setBulletin(!bulletin);
    }

    // sets urgent to true if user wants to add to urgent posts
    const handleSendUrg = (e) => {
        setUrgent(!urgent);
    }

    // sets calendar to true if user wants to add to calendar
    const handleSendCal = (e) => {
        setCalendar(!calendar);
    }

    // sets date to user input to be stored in database
    const handleStartDate = (e) => {
        setStartDate(e.target.value);
    }


    const handleStartTime = (e) => {
        setStartTime(e.target.value);
    }

    const handleEndDate = (e) => {
        setEndDate(e.target.value);
    }

    const handleEndTime = (e) => {
        setEndTime(e.target.value);
    }

    const handleAllDay = (e) => {
        setAllDay(!allDay);
    }




    const handleClick = (e) => {
        e.preventDefault();
        setUpdated(message);
        console.log(message);
        console.log(bulletin + " bulletin");
        console.log(urgent + " urgent");
        console.log(calendar + " calendar");
        console.log(startDate + " start date");
        console.log(startTime + " start time");
        console.log(endDate + " end date");
        console.log(endTime + " end time");
        // pass data to database 

    }
    
    return (
        <Card 
        // style={{ width: "100%",height:"30rem", margin:'1em' }}
        >
            <Card.Body>
                <Card.Title>Notepad</Card.Title>
                <Form>
                    <Form.Group >
                        {/*  */}
                        <Form.Label>Enter your note here</Form.Label>
                        <Form.Control 
                            type="text" 
                            rows={3} 
                            id="message"
                            onChange={handleChange}
                            />

                        {/* Dropdown to select notepad info destination */}
                        {/* <DropdownButton
                        // id="notepadDrop" 
                        >
                            <Dropdown.Item href="#/action-1">Bulletin</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Urgent</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" id="dropCal" onClick={}>Calendar
                            
                            </Dropdown.Item>
                        </DropdownButton> */}
                            {/* { ? (
                                <Form.Control type="date" placeholder="Enter date" />
                                ):(
                                    <></>
                                ) } */}

                            {/* if calendar, add date selector */}



                        {/* date selector and checkbox to add to calendar */}                        
                        <Form.Label>Enter the date you want to add to the calendar</Form.Label>
                        {/* destination choices */}
                        <Form.Check type="checkbox" label="Add to Bulletin" onChange={handleSendBull} />
                        <Form.Check type="checkbox" label="Add to Urgent" onChange={handleSendUrg}/>
                        <Form.Check type="checkbox" label="Add to Calendar" onChange={handleSendCal}/>
                        {/* all day check */}
                        <Form.Check type="checkbox" label="All Day Event" onChange={handleAllDay}/>
                        {/* date */}

                        <Form.Label>Enter the start time of the event</Form.Label>
                        <Form.Control type="date" placeholder="Enter date" data-date-format="YYYY/MM/DD" onChange={handleStartDate}/>
                        <Form.Control type="time" placeholder="Enter time" data-date-format="HH:mm" onChange={handleStartTime}/>
                        
                        {/* end date and time */}
                        <Form.Label>Enter the end date and time of the event</Form.Label>
                        <Form.Control type="date" placeholder="Enter date" data-date-format="YYYY/MM/DD" onChange={handleEndDate}/>
                        <Form.Control type="time" placeholder="Enter time" data-date-format="HH:mm" onChange={handleEndTime}/>
                        {/* submit button */}
                        <Form.Control type="submit" value="Submit" onClick={handleClick}  />


                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default Notepad;