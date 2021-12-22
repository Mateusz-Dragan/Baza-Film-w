import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import "../components/styles/home.css"
import MovieContainer from "./homePage/movieContainer";
import AddMovieBtn from "./addMovieBtn";


class Home extends Component {
    render() {
        return (
            <div className="movieContainer">
                <AddMovieBtn/>
                <Row>
                    <Col xs={6} md={3}>
                        <MovieContainer/>
                    </Col>
                    <Col xs={6} md={3}>
                        <MovieContainer/>
                    </Col>
                    <Col xs={6} md={3}>
                        <MovieContainer/>
                    </Col>
                    <Col xs={6} md={3}>
                        <MovieContainer/>
                    </Col>
                    <Col xs={6} md={3}>
                        <MovieContainer/>
                    </Col>
                    <Col xs={6} md={3}>
                        <MovieContainer/>
                    </Col>
                    <Col xs={6} md={3}>
                        <MovieContainer/>
                    </Col>
                    <Col xs={6} md={3}>
                        <MovieContainer/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home