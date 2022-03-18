// import { Container, Row, Col } from "react-bootstrap";
import React from "react";
// import FirstMovies from "./FirstMovies";
import Middle from "./Middle";

const Main = () => (
  <>
    <Middle saga={"the+lord+of+the+rings"} />
    <Middle saga={"harry+potter"} />
    <Middle saga={"terminator"} />
  </>
);
export default Main;
