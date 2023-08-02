import React, { useState } from "react";
import { People } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import CalendarCard from "../components/calendarCard";
import Bulletin from "../components/Bulletin";
import Sidebar from "../components/Sidebar";
import Notepad from "../components/Notepad";
import UrgentPosts from "../components/UrgentPosts";

import { Container, Col, Row } from "react-bootstrap";
import Auth from "../utils/auth";

import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS, {
    variables: { id: Auth.getProfile().data._id },
  });

  const user = data?.user || {};

  return (
    // <section id="homeSection">
    // <Container>
    <>
      <Row>
        <NavbarComponent />
        {/* <div>
              <Link to='/profile'><People size={48} color='black'/></Link>
          </div>
          <p>Hi, {user.name}</p> */}
      </Row>
      <Row>
        {/* Column 1 */}
        <Col
          className="col-12 col-lg-2"
          // style={{ width: "10%", height: "100%" }}
        >
          <Sidebar />
        </Col>

        {/* Column 2 */}
        <Col
          className="col-12 col-lg-8"
          // xs={8}
        >
          <Row>
            <Col>
              <CalendarCard />
            </Col>
            <Col>
              <Bulletin />
            </Col>
          </Row>
          <Row>
            <Col>
              <Notepad />
            </Col>
            <Col>
              <UrgentPosts />
            </Col>
          </Row>
        </Col>

        {/* Column 3 */}
        <Col className="col-12 col-lg-2"></Col>
      </Row>
    </>
    // </Container>
    // </section>
  );
};

export default Home;
