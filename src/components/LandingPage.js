import React from "react";
class LandingPage extends React.Component {
    render() {
        return (
            <div id="landing-page">
                <div >
                    <p>Hi, I'm </p><h1>Justin Hoong</h1><span>,</span><p> and welcome<br /> to my<br /> paradise</p>
                </div>
                <a id="check-me-out-button" onClick={this.props.scrollToDescription} href="#description-intro">Check me out</a>
            </div>
        )
            ;
    }
}

export default LandingPage;