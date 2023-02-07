import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cardsub = (props)=> {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.sub}</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardsub;