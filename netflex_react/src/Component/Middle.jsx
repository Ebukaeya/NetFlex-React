import { Component } from "react";
// import FirstMovies from "./FirstMovies";
import { Container, Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class Middle extends Component {
  state = {
    theMovies: [],
  };

  componentDidMount = () => this.Fetchresult();

  Fetchresult = async () => {
    try {
      let res = await fetch(
        " http://www.omdbapi.com/?apikey=acc853ec&s=" + this.props.saga
      );

      if (res.ok) {
        let data = await res.json();
        console.log(data);
        this.setState({
          theMovies: data.Search,
        });
        // console.log(this.state.theMovies);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.state.theMovies.map((movie) => (
              <SingleMovie data={movie} />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Middle;
