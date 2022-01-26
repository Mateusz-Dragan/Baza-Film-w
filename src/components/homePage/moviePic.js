import React, {Component} from 'react'
import '../homePage/styles/movieStyles.css'
import noImage from "../images/no-images.png";

class MoviePic extends Component {

    render() {
        let image = this.props.image
        if (!image.match(/(jpg|jpeg|png|gif)/)) {
            image = noImage
            return (
                <img className="image" src={image} alt="movie"/>
            );
        } else {
            return (
                <img className="image" src={this.props.image} alt="movie"/>
            );
        }
    }
}

export default MoviePic;
