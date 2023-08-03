import Card from "react-bootstrap/Card";
import BulletinPostCard from "./BulletinPostCard";

// displays the bulletin board of notes people have posted

const Bulletin = () => {
  // displays the bulletin board of notes people have posted
  // for loop to iterate through notes in database and return them to the bulletin board
  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];
  //   <BulletinPostCard 

  //   />;
  // }

  return (
     <Card className="bulletinCard">
       <Card.Body>
         <Card.Title 
         style={{textAlign:"center"}}>Bulletin</Card.Title>
        {/* display notes from database */}
        {/* <Card.Text> */}
          {/* scrollable field to look through notes */}
      {/*     <textarea
      //       style={{ width: "100%", height: "100%", resize: "none" }}
      //       readOnly
      //     ></textarea>
      //   </Card.Text>*/}

        <BulletinPostCard />
      </Card.Body>

    </Card>
  );
};

export default Bulletin;
