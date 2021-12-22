import React, {Component} from "react";
import "./styles/movie.css";
import movie from "./images/movie2.jpg"

class Movie extends Component {
    render() {
        return (
            <div className="movieDetailsContainer">
                <div className="detailsContainer">
                    <div className="titleContainer">
                        <p className="title">Random Movie</p>
                    </div>
                    <div className="pic">
                        <img src={movie} alt="movie"/>
                    </div>
                    <div className="descriptionContainer">
                        <p className="details">Random movie please ignore this message.</p>
                    </div>
                    <div className="ratingContainer">
                        <p className="rating">Rating: ?/10</p>
                    </div>
                    <div className="genreContainer">
                        <p className="genre">Type: Movie</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default Movie;

