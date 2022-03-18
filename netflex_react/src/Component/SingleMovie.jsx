import { Col, Card } from "react-bootstrap";

const SingleMovie = (props) => (
  <>
    {console.log(props.data)}

    <Col key={props.data.imdbID} md={4}>
      <Card>
        <Card.Img variant="top" src={props.data.Poster} />
        <Card.Body>
          <Card.Title>{props.Title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  </>
);
export default SingleMovie;
