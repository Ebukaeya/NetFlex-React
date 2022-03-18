import { Component } from "react";
import FirstMovies from "./FirstMovies";

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
          theMovies: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <FirstMovies data={this.state.theMovies}
      </div>
    );
  }
}
export default Middle;
