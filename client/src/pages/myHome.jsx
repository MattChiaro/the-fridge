import React from "react";
import Auth from "../utils/auth";
import background from '../assets/homeBack.jpeg'
import logo from '../assets/logo300.png';
import { People, BoxArrowLeft} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import Note from '../components/newNote';
import CalendarCard from "../components/calendarCard";
import Bulletin from "../components/BulletinPostCard";

const Home = () => {

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      }

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
<Bulletin />
</>
)};

export default Home;