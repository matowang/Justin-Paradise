import React from 'react';
import LandingPage from './LandingPage.js';
import DescriptionIntro from './DescriptionIntro.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.descriptionIntroAnchor = React.createRef();
    }
    scrollToDescription = (e) => {
        e.preventDefault();
        var isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
        if (isSmoothScrollSupported) {
            this.descriptionIntroAnchor.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        } else {
            this.descriptionIntroAnchor.current.scrollIntoView(false);
        }
    }
    render() {
        return (
            <React.Fragment>
                <LandingPage scrollToDescription={this.scrollToDescription} />
                <div id="descriptionIntro-anchor" ref={this.descriptionIntroAnchor}></div>
                <DescriptionIntro ref={this.descriptionIntroRef} />
            </React.Fragment>
        );
    }
}

export default Home;
