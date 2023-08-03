import React, { useState } from "react";
import { Modal, Card } from "react-bootstrap";
import Auth from "../utils/auth";
import background from '../assets/homeBack.jpeg'
import logo from '../assets/logo300.png';
import { People, BoxArrowLeft} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import Note from '../components/newNote';
import CalendarCard from "../components/calendarCard";
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
<Link to='/' onClick={logout}><BoxArrowLeft size={48} color='white' className="LogOutIcon"/></Link>
<div>
    <Link to='/profile' className="profileIcon"><People size={48} color='white'/></Link>
</div>
<Note />
<CalendarCard />
</>
)};

export default Home;