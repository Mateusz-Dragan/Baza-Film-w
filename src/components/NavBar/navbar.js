import React from 'react';
import "./navbar.css"
import Search from "./NavBar elements/search";
import Logo from "./NavBar elements/logo";
import SignupBtn from "./NavBar elements/signupBtn";
import LogoutBtn from "./NavBar elements/logoutBtn";
import { isExpired, } from "react-jwt";
import LoginBtn from "./NavBar elements/loginBtn";
import AddMovieBtn from "../addMovieBtn";
const Navbar = (props) => {

    const isNotLogged = isExpired(localStorage.getItem('token'));

    return (
        <div className="container">
            <Logo/>
            <Search/>
            {isNotLogged && <div><LoginBtn/> <SignupBtn/></div>}
            {!isNotLogged && <div> <AddMovieBtn/><LogoutBtn/></div>}
        </div>
    );
};

export default Navbar;
