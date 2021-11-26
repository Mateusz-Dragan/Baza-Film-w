
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/NavBar/navbar";
import Home from "./components/home";
import {Col, Container, Image, Row} from "react-bootstrap";
const mStyle = { color: 'white',fontSize: 25 };
const copyright = {color: 'white', textAlign: 'center',fontSize: 15}

function App() {
  return (

      <div className="App">
          <Router>
              <Navbar/>
              <Routes>
                      <Route path='/' exact component={Home} />
              </Routes>
          </Router>
          <header>
          <h1 xs={2} md={3}>Movies</h1>
          </header>
          <Container>
              <Row>
                  <Col xs={6} md={3}>
                      <p style={mStyle}>Random Movie</p>
                      <img src={require("./images/movie2.jpg").default} alt=""  />
                  </Col>
                  <Col xs={6} md={3}>
                      <p style={mStyle}>Random Movie</p>
                      <img src={require("./images/movie2.jpg").default} alt=""  />
                  </Col>
                  <Col xs={6} md={3}>
                      <p style={mStyle}>Random Movie</p>
                      <img src={require("./images/movie2.jpg").default} alt=""  />
                  </Col>
                  <Col xs={6} md={3}>
                      <p style={mStyle}>Random Movie</p>
                      <img src={require("./images/movie2.jpg").default} alt=""  />
                  </Col>
              </Row>
          </Container>
          <p></p>
          <Container>
              <Row>
                  <Col xs={6} md={3}>
                      <p style={mStyle}>Random Movie</p>
                      <img src={require("./images/movie2.jpg").default} alt=""  />
                  </Col>
                  <Col xs={6} md={3}>
                      <p style={mStyle}>Random Movie</p>
                      <img src={require("./images/movie2.jpg").default} alt=""  />
                  </Col>
                  <Col xs={6} md={3}>
                      <p style={mStyle}>Random Movie</p>
                      <img src={require("./images/movie2.jpg").default} alt=""  />
                  </Col>
                  <Col xs={6} md={3}>
                      <p style={mStyle}>Random Movie</p>
                      <img src={require("./images/movie2.jpg").default} alt=""  />
                  </Col>
              </Row>
          </Container>
          <p style={copyright}>Copyright &copy; 2021 - Mateusz Dragan | All rights reserved</p>
      </div>



  );
}

export default App;
