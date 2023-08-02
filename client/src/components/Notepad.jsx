import React, { useState } from "react";
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
    // const [message, setMessage] = useState("");
    // const [bulletin, setBulletin] = useState(false);
    // const [urgent, setUrgent] = useState(false);
    // const [calendar, setCalendar] = useState(false);
    // const [allDay, setAllDay] = useState(false);
    // const [startDate, setStartDate] = useState("");
    // const [endDate, setEndDate] = useState("");
    // const [startTime, setStartTime] = useState("");
    // const [endTime, setEndTime] = useState("");

    const [formData, setFormData] = useState({
        message: "",
        bulletin: false,
        urgent: false,
        calendar: false,
        allDay: false,
        startDate: "",
        endDate: "",
        startTime: "",
        endTime: ""
    })

    // const fullStartDate = startDate + "T" + startTime + ":00";
    // const fullEndDate = endDate + "T" + endTime + ":00";

    const [updated, setUpdated] = useState(formData.message);


    // sets message to user input to be stored in database
    const handleChange = (e) => {
        let { name, value, checked } = e.target;

        const isCheckbox = e.target.type === "checkbox";

        setFormData({
            ...formData,
            [name]: isCheckbox ? checked : value
        })
        // setMessage(e.target.value);
        // console.log(message)
    };

    // sets bulletin to true if user wants to add to bulletin
    // const handleSendBull = (e) => {
    //     setBulletin(!bulletin);
    // }

    // sets urgent to true if user wants to add to urgent posts
    // const handleSendUrg = (e) => {
    //     setUrgent(!urgent);
    // }

    // // sets calendar to true if user wants to add to calendar
    // const handleSendCal = (e) => {
    //     setCalendar(!calendar);
    // }

    // // sets date to user input to be stored in database
    // const handleStartDate = (e) => {
    //     setStartDate(e.target.value);
    // }


    // const handleStartTime = (e) => {
    //     setStartTime(e.target.value);
    // }

    // const handleEndDate = (e) => {
    //     setEndDate(e.target.value);
    // }

    // const handleEndTime = (e) => {
    //     setEndTime(e.target.value);
    // }

    // const handleAllDay = (e) => {
    //     setAllDay(!allDay);
    // }




    const handleClick = (e) => {
        e.preventDefault();
        setUpdated(formData.message);

        // console.log(message + " message")
        // console.log(bulletin + " bulletin")
        // console.log(urgent + " urgent")
        // console.log(calendar + " calendar")
        // console.log(allDay + " allDay")

        // console.log(fullStartDate + " fullStartDate")
        // console.log(fullEndDate + " fullEndDate")
        

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
                            name="message"
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
                        <Form.Check type="checkbox" label="Add to Bulletin"
                            name="bulletin"
                            checked={formData.bulletin}
                            onChange={handleChange} />
                        <Form.Check type="checkbox" label="Add to Urgent"
                            name="urgent"
                            onChange={handleChange} />
                        <Form.Check type="checkbox" label="Add to Calendar"
                            name="calendar" onChange={handleChange} />
                        {/* all day check */}
                        <Form.Check type="checkbox" label="All Day Event"
                            name="allDay" onChange={handleChange} />
                        {/* date */}

                        <Form.Label>Enter the start time of the event</Form.Label>
                        <Form.Control type="date" placeholder="Enter date" data-date-format="YYYY/MM/DD" name="startDate" onChange={handleChange} />
                        <Form.Control type="time" placeholder="Enter time" data-date-format="HH:mm" name="startTime" onChange={handleChange} />

                        {/* end date and time */}
                        <Form.Label>Enter the end date and time of the event</Form.Label>
                        <Form.Control type="date" placeholder="Enter date" data-date-format="YYYY/MM/DD" name="endDate" onChange={handleChange} />
                        <Form.Control type="time" placeholder="Enter time" data-date-format="HH:mm" name="endTime" onChange={handleChange} />
                        {/* submit button */}
                        <Form.Control type="submit" value="Submit" onClick={handleClick} />


                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default Notepad;