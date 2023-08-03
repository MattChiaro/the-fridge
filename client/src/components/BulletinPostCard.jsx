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
        <div className='m-5'>
            {data.bulletins.map(bulletin => (
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
            ))}
        </div>
    )
}

export default BulletinPostCard;
