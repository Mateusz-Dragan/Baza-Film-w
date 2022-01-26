import React, {Component} from "react";
const axios = require('axios');

class AddMovie extends Component{

    state = {
        addMovie: {
            title: "",
            content: "",
            image: ""
        },
        errors: {}
    };
    handleChangeRoute = () => {
        this.props.history.push('/');
        window.location.reload();
    };

    validate = () => {
        const errors = {};

        const {addMovie} = this.state;
        if (addMovie.title.trim() === '') {
            errors.title = 'Title is required!';
        }
        if (addMovie.content.trim() === '') {
            errors.content = 'Description is required!';
        }
        if (addMovie.image.trim() === '') {
            errors.image = 'Image is required!';
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };
    handleSubmit = (event) => {
        event.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;

        console.log(this.state)

        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/movies',
            data: {
                title: this.state.addMovie.title,
                content: this.state.addMovie.content,
                image: this.state.addMovie.image
            }
        }).then((response) => {
            this.handleChangeRoute();
        }).catch((error) => {
            const errors = {};
            errors.title = 'Username or password does not exist';
            this.setState({errors: errors || {}});
            console.log(error);
        });
    };
    handleChange = (event) => {
        const addMovie = {...this.state.addMovie};
        addMovie[event.currentTarget.name] = event.currentTarget.value;
        this.setState({addMovie});
    };
    render(){
        return(
            <div className='signUpContainer'>
                <form className="labelContainer" onSubmit={this.handleSubmit}><h1>Add a movie</h1>
                    <div>
                        <label>Title</label>
                        <input
                            value={this.state.addMovie.title}
                            name="title"
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Title"/>
                        {this.state.errors.title &&
                        <div className="alert alert-danger">{this.state.errors.title}</div>}
                    </div>
                    <div>
                        <label>Description</label>
                        <input
                            value={this.state.addMovie.content}
                            name="content"
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            id="content"
                            placeholder="Description"/>
                        {this.state.errors.content &&
                        <div className="alert alert-danger">{this.state.errors.content}</div>}
                    </div>
                    <div>
                        <label>Image</label>
                        <input
                            value={this.state.addMovie.image}
                            name="image"
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            id="image"
                            placeholder="Image"/>
                        {this.state.errors.image &&
                        <div className="alert alert-danger">{this.state.errors.image}</div>}
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>
        );

}
}

export default AddMovie;
