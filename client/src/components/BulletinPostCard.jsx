import Card from "react-bootstrap/Card";

const BulletinPostCard = () => {
    return (
        <Card>
            <Card.Body style={{backgroundColor:"orange"}}>
                <Card.Title style={{textAlign:"center"}}>UserName</Card.Title>
                <Card.Text>
                    {/* Words go here */}
                </Card.Text>
                <Card.Footer>
                    {/* Date */}
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default BulletinPostCard;