import React from "react";
class LandingPage extends React.Component {
    render() {
        return (
            <div id="landing-page">
                <div >
                    <p>Support them <br />for the world <br />they built.</p>
                </div>
                <a id="check-me-out-button" onClick={this.props.scrollToDescription} href="#description-intro">More on</a>
            </div>
        )
            ;
    }
}

export default LandingPage;