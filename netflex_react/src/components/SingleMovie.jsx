import { Card } from "react-bootstrap"
const SingleMovie = (props) => (
  <>
    <Card key={props.data.imdbID}>
      <Card.Img
        className="   
    img-fluid"
        variant="top"
        src={props.data.Poster}
      />
      <Card.Body>{props.data.Title}</Card.Body>
    </Card>
  </>
)
export default SingleMovie
