import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/signature.svg';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        }
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }
    handleMouseOver() {
        console.log("Mouse Over");
        this.setState({ hovered: true });
    }
    handleMouseOut() {
        console.log("Mouse Out");
        this.setState({ hovered: false })
    }
    render() {
        const className = this.state.hovered ? "dim" : "";
        return (
            <nav className="navbar-height" onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut}>
                <ul>
                    <NavButton className={className} to="/journey" activeClassName="active-tab">journey</NavButton>
                    <NavButton className={className} to="/"><img className="navbar-height" id="nav-logo" src={logo} alt="Justin Hoong" /></NavButton>
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