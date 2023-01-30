import * as React from 'react';
import './navbar.css';


function NavBar() {

    return (
        <div className="navbar">
            <a href="/">Home</a> 
            <a href="/about">About</a> 
            <a href="/contact">Contact</a> 
            <a href="/sign-in">Sign In</a>
            <a href="/sign-up">Sign Up</a>
        </div>
    );
}

export { NavBar }; 