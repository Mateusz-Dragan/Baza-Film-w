import React, {Component} from 'react';
import '../homePage/styles/movieStyles.css'

class MovieDescription extends Component {

    render(){
        return (<div className="movieContainer">
            <div className="movieTitle">{this.props.title}</div>
            <br/>
            <div className="description"> {this.props.content}
            </div>
        </div>);
    }



}

export default MovieDescription
