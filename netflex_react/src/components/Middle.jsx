import { Component } from "react"
// import FirstMovies from "./FirstMovies";
import { Container, Row, Col } from "react-bootstrap"
import SingleMovie from "./SingleMovie"

class Middle extends Component {
  state = {
    theMovies: [],
  }

  componentDidMount = () => this.Fetchresult()

  Fetchresult = async () => {
    try {
      let res = await fetch(" http://www.omdbapi.com/?apikey=acc853ec&s=" + this.props.saga)

      if (res.ok) {
        let data = await res.json()
        console.log(data)
        this.setState({
          theMovies: data.Search,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="col-sm-6 col-md-4 col-xl-3">
              {this.state.theMovies.map((movie) => (
                <SingleMovie data={movie} />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default Middle
