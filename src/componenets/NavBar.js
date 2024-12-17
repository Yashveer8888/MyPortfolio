import React from 'react'
// import { Link } from "react-router-dom";
import About from './About'
import Coding from './Coding'
import Web from './Web'
import Ml from './Ml'
import Contact from './Contact'

const NavBar = () => {
    return (
        <>
        <nav>
            <div class="nav-content">
                <ul class="nav-links">
                    <li><a href="#about"><b>About</b></a></li>
                    <li><a href="#coding"><b>Problem Solving</b></a></li>
                    <li><a href="#web-projects"><b>Web Dev</b></a></li>
                    <li><a href="#ml-projects"><b>ML Projects</b></a></li>
                    <li><a href="#contact"><b>contact</b></a></li>
                </ul>
            </div>
        </nav>
        </>
    )

}

export default NavBar
