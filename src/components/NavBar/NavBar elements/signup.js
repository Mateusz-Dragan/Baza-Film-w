import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import "../styles/signup.css";

function Signup() {
    return (

        <BrowserRouter>
            <Link to
                  className="signup"
                  onClick={() => {
                      window.location.href = "/signup";
                  }}>
                Create an account
            </Link>
        </BrowserRouter>

    );
}

export default Signup;