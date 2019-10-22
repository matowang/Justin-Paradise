import React from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar-height" onMouseEnter={this.props.onHover} onMouseLeave={this.props.onHoverOut} onClick={this.props.onClick}>
                <ul>
                    <li><a href="https://hoongjustin.wixsite.com/website" activeClassName="active-tab">journey</a></li>
                    <NavButton exact to="/"><h1>Justin Hoong</h1></NavButton>
                    <li><a href="https://medium.com/justinhoong">blog</a></li>
                </ul>
            </nav>
        );
    }
}
class NavButton extends React.Component {
    render() {
        return (
            <li><NavLink {...this.props}>
                {this.props.children}
            </NavLink></li>
        );
    }
}