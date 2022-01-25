import React, {Component} from 'react';
import MoviePic from "./moviePic";
import MovieDescription from "./movieDescription";
import '../homePage/styles/movieStyles.css'
import {Link} from "react-router-dom";

class MovieContainer extends Component {
    render() {
        const url = "details/" + this.props.id;
        return (
            <Link to className="movie"
                  onClick={() => {
                      window.location.href = url;
                  }}>
                <MoviePic image={this.props.image}/>
                <MovieDescription title={this.props.title} content={this.props.content}/>
            </Link>);
    }

}

export default MovieContainer
