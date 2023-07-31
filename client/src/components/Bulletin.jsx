import Card from "react-bootstrap/Card";

const Bulletin = () => {
  // displays the bulletin board of notes people have posted
  return (
    <Card style={{ width: "100%",height:"30rem", margin:'1em' }}>
      <Card.Body>
        <Card.Title style={{textAlign:"center"}}>Bulletin</Card.Title>
        {/* display notes from database */}
        <Card.Text>
          {/* scrollable field to look through notes */}
          <textarea
            style={{ width: "100%", height: "100%", resize: "none" }}
            readOnly
          ></textarea>
        </Card.Text>

      </Card.Body>
    </Card>
  );
};

export default Bulletin;
