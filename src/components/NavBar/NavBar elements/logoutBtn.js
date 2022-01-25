import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import "../styles/signupBtn.css";
import { isExpired, decodeToken  } from "react-jwt";

function LogoutBtn() {


    return (

        <BrowserRouter>
            <Link to
                  className="signup"
                  onClick={() => {
                      localStorage.removeItem('token')
                      window.location.href = "/";
                  }}>
                Log Out
            </Link>
        </BrowserRouter>

    );
}

export default LogoutBtn;
