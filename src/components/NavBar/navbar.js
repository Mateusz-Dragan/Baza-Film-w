import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';
import Search from "../search";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <h1>Movie Page</h1>
                </NavLink>
                <Bars/>
                    <Search/>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;