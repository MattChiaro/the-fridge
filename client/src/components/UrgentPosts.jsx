import Card from "react-bootstrap/Card";

const UrgentPosts = () => {
  // displays the bulletin board of notes people have posted
  return (
    <Card>
      <Card.Body>
        <Card.Title 
        // style={{textAlign:"center"}}
        >Urgent Posts</Card.Title>
        {/* display notes from database */}
        <Card.Text>
          {/* scrollable field to look through notes */}
          <textarea
            readOnly
          ></textarea>
        </Card.Text>

      </Card.Body>
    </Card>
  );
};

export default UrgentPosts;
