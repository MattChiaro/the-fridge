import React, { useState } from "react";
import {People} from 'react-bootstrap-icons';
import {Link} from 'react-router-dom'
import { Button, Form, Navbar } from "react-bootstrap";

import { Container, Col, Row } from "react-bootstrap";
import Auth from "../utils/auth";

import { useQuery } from "@apollo/client";


const NavbarComponent = () => {



  return (
    <>
      <Navbar className="p-2 bg-body-tertiary justify-content-between ">
        <img src={require("../assets/logo192inline.png")} alt="logo" />
        <div className="fridgeTitle"></div>
        <div>

        </div>

        <Form>
          <Row>
            <Col xs="auto"></Col>
            <Col xs="auto"></Col>
          </Row>
        </Form>
      </Navbar>
      
    </>
  );
};

export default NavbarComponent;
