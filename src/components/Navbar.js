import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/signature.svg';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><NavLink to="/journy">journy</NavLink></li>
                    <li><NavLink to="/"><img id="nav-logo" src={logo} alt="Justin Hoong" /></NavLink></li>
                    <li><NavLink to="/articles">articles</NavLink></li>
                </ul>
            </nav>
        );
    }
}