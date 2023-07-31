import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Navbar() {
    return(
<Navbar className="bg-body-tertiary justify-content-between">
<div className='fridgeTitle'>
   
</div>
<Form inline>
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
    );
    }

export default Navbar;