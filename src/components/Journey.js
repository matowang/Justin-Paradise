import React from 'react';
import journeysData from '../data/journeys/journeys-data.json';
import Slideshow from './Slideshow.js';

export default class Journey extends React.Component {
    constructor(props) {
        super(props);
        this.imageSrcs = require.context("../data/journeys", true, /\.(png|jpe?g|svg)$/).keys();
        this.journeyComps = journeysData.map((journeyData, i) => {
            let imgSrcs = this.imageSrcs.filter(src => RegExp(journeyData.imageSrcs).test(src))
            return <JourneyCard title={journeyData.title} imgSrcs={imgSrcs} contentSrc={journeyData.contentSrc} key={journeyData.id} />
        })
        this.state = {
            imageComps: []
        }
    }
    render() {
        return (
            <div id="journey-page">
                {this.journeyComps}
            </div>
        );
    }
}

class JourneyCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrcs: [],
            content: "loading...",
        }
    }
    componentDidMount() {
        this.props.imgSrcs.forEach(src => {
            import("../data/journeys" + src.replace('.', ''))
                .then(img => {
                    this.setState(state => ({
                        imgSrcs: [...state.imgSrcs, img.default]
                    }));
                });
        });
    }
    render() {
        return (
            <section className="article-font-sizing" id="journey-page_section">
                <h2>{this.props.title}</h2>
                <Slideshow imgSrcs={this.state.imgSrcs} />
                <p>{this.state.content}</p>
            </section>
        )
    }
}