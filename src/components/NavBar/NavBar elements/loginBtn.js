import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import "../styles/signupBtn.css";

function LoginBtn() {
    return (
        <BrowserRouter>
            <Link to
                  className="signup"
                  onClick={() => {
                      window.location.href = "/signin";
                  }}>
                Log in
            </Link>
        </BrowserRouter>
    );
}

export default LoginBtn;
