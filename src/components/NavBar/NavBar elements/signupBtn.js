import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import "../styles/signupBtn.css";

function SignupBtn() {
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

export default SignupBtn;
