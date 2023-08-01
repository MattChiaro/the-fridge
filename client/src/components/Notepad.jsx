import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";



const Notepad = () => {
    // receive inputs from user
    // store inputs in database
    // display inputs on bulletin board
    // allows user to add to calendar if they want
    return (
        <Card 
        // style={{ width: "100%",height:"30rem", margin:'1em' }}
        >
            <Card.Body>
                <Card.Title>Notepad</Card.Title>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        {/*  */}
                        <Form.Label>Enter your note here</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        {/* date selector and checkbox to add to calendar */}
                        <Form.Label>Enter the date you want to add to the calendar</Form.Label>
                        <Form.Control type="date" placeholder="Enter date" />
                        <Form.Check type="checkbox" label="Add to Urgent" />
                        <Form.Check type="checkbox" label="Add to calendar" />
                        {/* submit button */}
                        <Form.Control type="submit" value="Submit" />


                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default Notepad;