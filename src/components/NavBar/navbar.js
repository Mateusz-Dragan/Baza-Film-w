import React from 'react';
import "./navbar.css"
import Search from "./NavBar elements/search";
import Logo from "./NavBar elements/logo";
import SignupBtn from "./NavBar elements/signupBtn";
import LogoutBtn from "./NavBar elements/logoutBtn";
import { isExpired, decodeToken  } from "react-jwt";
import LoginBtn from "./NavBar elements/loginBtn";

const Navbar = (props) => {

    const user = decodeToken(localStorage.getItem('token'));
    const isNotLogged = isExpired(localStorage.getItem('token'));

    return (
        <div className="container">
            <Logo/>
            <Search/>
            {isNotLogged && <div><LoginBtn/> <SignupBtn/></div>}
            {!isNotLogged && <LogoutBtn/>}
        </div>
    );
};

export default Navbar;
