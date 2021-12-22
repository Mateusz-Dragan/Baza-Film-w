import React, {Component} from "react";
import "./styles/signup.css"
import {BrowserRouter, Link} from "react-router-dom";


class Login extends Component {


    render() {
        return (
            <div className='signUpContainer'>
                <form className="labelContainer"><h1>Login</h1>
                    <div>

                        <label htmlFor="username">Username</label>
                        <input
                            name="username"
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Username"/>
                    </div>
                    <div>
                        <label htmlFor="Password">Password</label>
                        <input name="password"
                               type="password"
                               className="form-control"
                               id="password"
                               placeholder="Password"/>
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
