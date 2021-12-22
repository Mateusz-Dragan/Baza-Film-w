import React, {Component} from "react";
import {Link} from "react-router-dom";

class AddMovie extends Component{
    render(){
        return(
            <div className='signUpContainer'>
                <form className="labelContainer"><h1>Add a movie</h1>
                    <div>
                        <label>Title</label>
                        <input
                            name="username"
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Title"/>
                    </div>
                    <div>
                        <label>Description</label>
                        <input
                            name="username"
                            type="text"
                            className="form-control"
                            id="description"
                            placeholder="Description"/>
                    </div>
                    <div>
                        <label>Genre</label>
                        <input
                            name="username"
                            type="text"
                            className="form-control"
                            id="genre"
                            placeholder="Type"/>
                    </div>
                    <div>
                        <label>Rating</label>
                        <input
                            name="username"
                            type="text"
                            className="form-control"
                            id="rating"
                            placeholder="ex. 12/15"/>
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>
        );

}
}

export default AddMovie;