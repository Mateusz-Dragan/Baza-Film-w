import React, {Component} from "react";
import "./styles/signup.css"
import {BrowserRouter, Link} from "react-router-dom";


class SignUp extends Component {


    render() {
        return (
            <div className='signUpContainer'>
                <form className="labelContainer"><h1>Create an account</h1>
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
                        <label>Name</label>
                        <input
                            name="username"
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Name"/>
                    </div>
                    <div>
                        <label>Email address</label>
                        <input
                            name="username"
                            type="text"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Email"/>
                    </div>
                    <div>
                        <label htmlFor="Password">Password</label>
                        <input name="password"
                               type="password"
                               className="form-control"
                               id="password"
                               placeholder="Password"/>
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

