import React from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends React.Component {
    render() {
        const className = this.props.className;
        return (
            <nav className="navbar-height" onMouseEnter={this.props.onHover} onMouseLeave={this.props.onHoverOut} onClick={this.props.onClick}>
                <ul>
                    <NavButton className={className} to="/journey" activeClassName="active-tab">journey</NavButton>
                    <NavButton exact className={className} to="/"><h1>Justin Hoong</h1></NavButton>
                    <NavButton className={className} to="/articles" activeClassName="active-tab">articles</NavButton>
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