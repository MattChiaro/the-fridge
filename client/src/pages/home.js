import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import CalendarCard from "../components/calendarCard";
import Bulletin from "../components/Bulletin";
import Sidebar from "../components/Sidebar";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const Home = () => {
  return (

  <section id="homeSection">
      <Row>
        <NavbarComponent />
          <Row>
            <Col style={{width:'10%'}}>
            <Sidebar />
            </Col>
            <Col>
              <Row>

                <CalendarCard />
                <Bulletin />
              </Row>
            </Col>


            </Row>
      </Row>

  </section>

  );
};

export default Home;