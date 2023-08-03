import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";


const Sidebar = () => {
  return (
  <>
  <div>
    
  <Navbar className="pt-4 px-4 justify-content-between">
        <div className="fridgeTitle"></div>
        <Form>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="What's In The Fridge?"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" variant="dark">Search</Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
  
  <ListGroup>
  <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
  <div className="position-sticky">
    <div className="list-group list-group-flush mx-3 mt-4">
      <a href="/profile" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
        <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Profile</span>
      </a>
      <a href="/" className="list-group-item list-group-item-action py-2 ripple">
        <i className="fas fa-chart-area fa-fw me-3"></i><span>Logout</span>
      </a>
      
    </div>
  </div>
</nav>
</ListGroup>

</div>
</>
  );
};

export default Sidebar;