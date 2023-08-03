import { useQuery, gql } from '@apollo/client';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//GraphQL query. 
const GET_BULLETINS = gql`
    query GetBulletins {
        bulletins {
            _id
            title
            body
            createdAt
            user {
                _id
                name
            }
        }
    }
`;

const BulletinPostCard = () => {
    // Use the useQuery hook to fetch data
    const { loading, error, data } = useQuery(GET_BULLETINS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div className='m-5'>
            <Row className='bulletins-container'>
                {data.bulletins.map(bulletin => (
                    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Card className='postCard' key={bulletin._id}>
                            <Card.Body >
                                <Card.Title style={{textAlign:"center"}}>{bulletin.title}</Card.Title>
                                <Card.Text>
                                    {bulletin.body}
                                </Card.Text>
                                <Card.Footer>
                                    {bulletin.user.name}
                                    {/* Date */}
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default BulletinPostCard;
