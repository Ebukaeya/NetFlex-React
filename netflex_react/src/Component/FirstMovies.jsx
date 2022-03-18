import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

class FirstMovies extends Component {
  state = {
    movies: [],
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col key={this.props.data.imdbID} md={4}>
              <Card>
                <Card.Img variant="top" src={this.props.data.poster} />
                <Card.Body>
                  <Card.Title>{this.props.data.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default FirstMovies;
