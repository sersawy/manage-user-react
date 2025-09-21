import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

const UserCard = ({ user }) => {
  const roleBadge = (role) => {
    switch (role) {
      case 'admin':
        return <Badge bg="success">Admin</Badge>;
      case 'user':
        return <Badge bg="primary">User</Badge>;
      case 'moderator':
        return <Badge bg="warning">Moderator</Badge>;
      default:
        return <Badge bg="secondary">{role}</Badge>;
    }
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.image} alt={user.username} />

      <Card.Body>
        <Card.Title>{user.username}</Card.Title>
        <Card.Text>{user.email}</Card.Text>
      </Card.Body>

      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <strong>Phone:</strong> {user.phone}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Birth Date:</strong> {user.birthDate}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Role:</strong> {roleBadge(user.role)}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default UserCard;
