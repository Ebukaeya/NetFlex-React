import { Card } from "react-bootstrap";
const SingleMovie = (props) => (
  <>
    <Card key={props.data.imdbID}>
      <Card.Img variant="top" src={props.data.Poster} />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
      </Card.Body>
    </Card>
  </>
);
export default SingleMovie;
