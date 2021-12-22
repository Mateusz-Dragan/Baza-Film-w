import React from 'react';
import MoviePic from "./moviePic";
import MovieDescription from "./movieDescription";
import '../homePage/styles/movieStyles.css'
import {Link} from "react-router-dom";

function MovieContainer() {
    return (
            <Link to className="movie"
                  onClick={() => {
                      window.location.href = "/details";
                  }}>
                <MoviePic/>
                <MovieDescription/>
            </Link>);
}

export default MovieContainer