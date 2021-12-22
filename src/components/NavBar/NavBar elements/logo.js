import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import logo from "./logo.svg";

function Logo() {
    return (
        <BrowserRouter>
            <Link to
                  onClick={() => {
                      window.location.href = "/";
                  }}>
                <img src={logo} alt="logo"/>
            </Link>
        </BrowserRouter>
    );
}

export default Logo;
