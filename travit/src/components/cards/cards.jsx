import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Content() {
  return (
    <Card style={{ width: '1000rem', alignContent: 'center' }}>
      <Card.Body>
        <Card.Title>What's Travit?</Card.Title>
        <Card.Text>
          Travit is your guide to exploring your favorite destinations.
        </Card.Text>
        <Button variant="primary">Start Exploring</Button>
      </Card.Body>
    </Card>
  );
}

export { Content };