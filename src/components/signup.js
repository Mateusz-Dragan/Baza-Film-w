import React, {Component} from "react";
import "./styles/signup.css"
import {Link} from "react-router-dom";

const axios = require('axios');


class SignUp extends Component {

    state = {
        account: {
            username: "",
            email: "",
            password: ""
        },
        errors: {}
    };

    handleChangeRoute = () => {
        this.props.history.push('/signin');
        window.location.reload();
    };

    validate = () => {
        const errors = {};

        const {account} = this.state;
        if (account.username.trim() === '') {
            errors.username = 'Username is required!';
        }
        if (account.email.trim() === '') {
            errors.password = 'Email is required!';
        }
        if (account.password.trim() === '') {
            errors.password = 'Password is required!';
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
            url: 'https://pr-movies.herokuapp.com/api/user/create',
            data: {
                name: this.state.account.username,
                email: this.state.account.email,
                password: this.state.account.password
            }
        }).then((response) => {
            this.handleChangeRoute();
        }).catch((error) => {
            const errors = {};
            errors.password = 'Username or password does not exist';
            this.setState({errors: errors || {}});
            console.log(error);
        });
    };

    handleChange = (event) => {
        const account = {...this.state.account};
        account[event.currentTarget.name] = event.currentTarget.value;
        this.setState({account});
    };


    render() {
        return (
            <div className='signUpContainer'>
                <form className="labelContainer" onSubmit={this.handleSubmit}><h1>Create an account</h1>
                    <div>

                        <label htmlFor="username">Username</label>
                        <input
                            value={this.state.account.username}
                            name="username"
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Username"/>
                        {this.state.errors.username &&
                        <div className="alert alert-danger">{this.state.errors.username}</div>}
                    </div>
                    <div>
                        <label>Email address</label>
                        <input
                            value={this.state.account.email}
                            name="email"
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Email"/>
                        {this.state.errors.email &&
                        <div className="alert alert-danger">{this.state.errors.email}</div>}
                    </div>
                    <div>
                        <label htmlFor="Password">Password</label>
                        <input
                            value={this.state.account.password}
                            name="password"
                            onChange={this.handleChange}
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"/>
                        {this.state.errors.password &&
                        <div className="alert alert-danger">{this.state.errors.password}</div>}
                    </div>
                    <br></br>

                    <button type="submit" className="btn btn-primary">Create account</button>
                    <br></br>
                    <p>Already have an account?</p>
                    <Link to
                          className="btn btn-primary"
                          onClick={() => {
                              window.location.href = "/signin";
                          }}>
                        Login
                    </Link>
                    <br></br>
                </form>
            </div>
        );
    }
}

export default SignUp;

