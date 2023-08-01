import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar"

const NavbarComponent = () => {
  return (
    <>
    <Navbar className="p-2 bg-body-tertiary justify-content-between">
      <img src={require("../assets/logo192inline.png")} alt="logo" />
      <div className="fridgeTitle"></div>
      <Form >
        <Row>
          <Col xs="auto">
            
          </Col>
          <Col xs="auto">
            
          </Col>
        </Row>
      </Form>
    </Navbar>
    <Navbar className="p-2 bg-body-tertiary justify-content-between">
     
      <div className="fridgeTitle"></div>
      <Form >
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
    </Navbar>
    </>
  );
}

export default NavbarComponent;
