import React from 'react';
import "./navbar.css"
import Search from "./NavBar elements/search";
import Logo from "./NavBar elements/logo";
import Signup from "./NavBar elements/signup";

const Navbar = () => {
    return (
        <div className="container">
            <Logo/>
            <Search/>
            <Signup/>
        </div>
    );
};

export default Navbar;