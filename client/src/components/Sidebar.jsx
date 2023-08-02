import React from 'react';
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
//   CDBSidebarFooter,
// } from 'cdbreact';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";


const Sidebar = () => {
  return (
      // <CDBSidebar style={{height:'100%', width:'10%'}}>
      //   <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Contrast</CDBSidebarHeader>
      //   <CDBSidebarContent>
      //     <CDBSidebarMenu>
      //       <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
      //       <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
      //       <CDBSidebarMenuItem icon="credit-card" iconType="solid">
      //         Metrics
      //       </CDBSidebarMenuItem>
      //     </CDBSidebarMenu>
      //   </CDBSidebarContent>

        
      // </CDBSidebar>
      // <ul class="list-group">
      //   <li class="list-group-item" aria-current="true">An active item</li>
      //   <li class="list-group-item">A second item</li>
      //   <li class="list-group-item">A third item</li>
      //   <li class="list-group-item">A fourth item</li>
      //   <li class="list-group-item">And a fifth one</li>
      // </ul>

  // <ListGroup>
  //   <ListGroup.Item>Cras justo odio</ListGroup.Item>
  //   <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  //   <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  //   <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  //   <a><ListGroup.Item>Logout</ListGroup.Item></a>
  // </ListGroup>
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
              <Button type="submit">Search</Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
  
  <ListGroup>
  <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
  <div class="position-sticky">
    <div class="list-group list-group-flush mx-3 mt-4">
      <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
        <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Profile</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-2 ripple">
        <i class="fas fa-chart-area fa-fw me-3"></i><span>Logout</span>
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