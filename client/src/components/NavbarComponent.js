import React, { useState } from "react";
import {People} from 'react-bootstrap-icons';
import {Link} from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavbarComponent from "../components/NavbarComponent";
// import CalendarCard from "../components/calendarCard";
// import Bulletin from "../components/Bulletin";
// import Sidebar from "../components/Sidebar";
// import Notepad from "../components/Notepad";
// import UrgentPosts from "../components/UrgentPosts";
import { Button, Form, Navbar } from "react-bootstrap";

import { Container, Col, Row } from "react-bootstrap";
import Auth from "../utils/auth";

import { useQuery } from "@apollo/client";
import { QUERY_USERS_LOGIN  } from "../utils/queries";

const NavbarComponent = () => {
  const { loading, data } = useQuery(QUERY_USERS, {
    variables: { id: Auth.getProfile().data._id },
  });

  // const user = data?.user || {};

  return (
    <>
      <Navbar className="p-2 bg-body-tertiary justify-content-between ">
        <img src={require("../assets/logo192inline.png")} alt="logo" />
        <div className="fridgeTitle"></div>
        <div>
          <Link to="/profile">
            <People size={48} color="black" />
          </Link>
          {/* <p>Hi, {user.name}</p> */}
        </div>

        <Form>
          <Row>
            <Col xs="auto"></Col>
            <Col xs="auto"></Col>
          </Row>
        </Form>
      </Navbar>
      {/* <Navbar className="p-2 bg-body-tertiary justify-content-between">
        <div className="fridgeTitle"></div>
        <Form>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      </Navbar> */}
    </>
  );
};

export default NavbarComponent;
