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
      
  <ListGroup>
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>



  );
};

export default Sidebar;