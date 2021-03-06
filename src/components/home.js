import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import "../components/styles/home.css"
import MovieContainer from "./homePage/movieContainer";
import {isExpired} from "react-jwt";

class Home extends Component {
    constructor(props) {
        super(props);
        this.isNotLogged = isExpired(localStorage.getItem('token'));
        this.state = {
            movieList: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch("https://pr-movies.herokuapp.com/api/movies")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    movieList: json,
                    isLoaded: true,
                });
            });
    }


    render() {
        const {isLoaded, movieList} = this.state;

        for (let i = 0; i < movieList.length; i++) {
            if (movieList[i].title === undefined || movieList[i].title.length < 3) {
                movieList.splice(i, 1)
                i--;
            }
        }
        return (
            <div className="movieContainer">
                {isLoaded && <Row>
                    <React.Fragment>
                        <div className="contents">
                            {movieList.reverse().map((movie) => (
                                <Col xs={6} md={12}>
                                    <MovieContainer title={movie.title} content={movie.content} image={movie.image}
                                                    id={movie.id}/>
                                </Col>
                            ))}
                        </div>
                    </React.Fragment>
                </Row>}
            </div>
        )
    }
}

export default Home
