import { useQuery, gql } from '@apollo/client';
import Card from "react-bootstrap/Card";

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
        <div>
            {data.bulletins.map(bulletin => (
                <Card key={bulletin._id}>
                    <Card.Body style={{backgroundColor:"orange", }}>
                        <Card.Title style={{textAlign:"center"}}>{bulletin.user.name}</Card.Title>
                        <Card.Text>
                            {bulletin.body}
                        </Card.Text>
                        <Card.Footer>
                            {/* Date */}
                        </Card.Footer>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default BulletinPostCard;
