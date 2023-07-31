import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import CalendarCard from "../components/calendarCard";
import Bulletin from "../components/Bulletin";
import Sidebar from "../components/Sidebar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Home = () => {
  return (
    <section id="homeSection">
      <Row>
        <NavbarComponent />
        <Row>
          <Col style={{ width: "10%", height: "100%" }}>
            <Sidebar />
          </Col>
          <Col xs={8}>
            <Row>
              <Col>
                <CalendarCard />
              </Col>
              <Col>
                <Bulletin />
              </Col>
            </Row>
            <Row></Row>
          </Col>
          <Col></Col>
        </Row>
      </Row>
    </section>
  );
};

export default Home;
