import React, {Component} from "react";
import "./styles/signup.css"
import {Link} from "react-router-dom";

const axios = require('axios');


class Login extends Component {

    state = {
        account: {
            username: "",
            password: ""
        },
        errors: {}
    };

    handleChangeRoute = () => {
        this.props.history.push('/');
        window.location.reload();
    };

    validate = () => {
        const errors = {};

        const {account} = this.state;
        if (account.username.trim() === '') {
            errors.username = 'Username is required!';
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

        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/user/auth',
            data: {
                login: this.state.account.username,
                password: this.state.account.password
            }
        }).then((response) => {
            localStorage.setItem("token", response.data.token);
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
                <form className="labelContainer" onSubmit={this.handleSubmit}><h1>Login</h1>
                    <div>

                        <label htmlFor="username">Username</label>
                        <input
                            value={this.state.account.username}
                            name="username"
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            id="username"
                            aria-describedby="emailHelp"
                            placeholder="Username"/>
                        {this.state.errors.username &&
                        <div className="alert alert-danger">{this.state.errors.username}</div>}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input value={this.state.account.password}
                               name="password"
                               onChange={this.handleChange}
                               type="password"
                               className="form-control"
                               id="password"
                               placeholder="Password"/>
                        {this.state.errors.password &&
                        <div className="alert alert-danger">{this.state.errors.password}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <p>Don't have an account?</p>
                    <Link to
                          className="btn btn-primary"
                          onClick={() => {
                              window.location.href = "/signup";
                          }}>
                        Create account
                    </Link>
                    <br></br>
                </form>
            </div>
        );
    }
}

export default Login;
