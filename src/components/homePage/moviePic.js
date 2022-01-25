import React, {Component} from 'react'
import movie from "../images/movie2.jpg"
import '../homePage/styles/movieStyles.css'

class MoviePic extends Component{

    render(){
        return (
            <img className="image" src={this.props.image} alt="movie"/>
        );
    }
}

export default MoviePic;
