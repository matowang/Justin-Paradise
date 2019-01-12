import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/signature.svg';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }
    handleClick = () => {
        this.setState({ clicked: true });
    }
    render() {
        const className = this.props.hovered || this.state.clicked ? "dim" : "";
        return (
            <nav className="navbar-height" onMouseEnter={this.props.onHover} onMouseLeave={this.props.onHoverOut} onClick={this.handleClick}>
                <ul>
                    <NavButton className={className} to="/journey" activeClassName="active-tab">journey</NavButton>
                    <NavButton exact className={className} to="/"><img className="navbar-height" id="nav-logo" src={logo} alt="Justin Hoong" /></NavButton>
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