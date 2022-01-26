import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import "./styles/signup.css";

function AddMovieBtn() {
    return (
        <BrowserRouter>
            <Link to
                  className="addButton"
                  onClick={() => {
                      window.location.href = "/add";
                  }}>
                Add a movie
            </Link>
        </BrowserRouter>
    );
}

export default AddMovieBtn;
