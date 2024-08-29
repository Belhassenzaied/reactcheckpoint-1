import './App.css';
import Name from './Compantes/Name';
import Price from './Compantes/Price';
import Description from './Compantes/Description';
import Image from './Compantes/Image';

function App() {
  return (
<div>
    <div>
 <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>

    <div>
  
    <Name/>
    <Price/>
    <Description/>
    <Image/>
  </div>
  </div>
  );
}

export default App;
