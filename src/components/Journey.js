import React from 'react';
import journeysData from '../data/journeys/journeys-data.json';
import Slideshow from './Slideshow.js';
import ReactMarkdown from 'react-markdown';
import { dateSlashNotation } from '../modules/dateFormats.js';

export default class Journey extends React.Component {
    constructor(props) {
        super(props);
        this.imageSrcs = require.context("../data/journeys", true, /\.(png|jpe?g|JPG|svg)$/).keys();
        this.journeyComps = journeysData.map((journeyData, i) => {
            let imgSrcs = this.imageSrcs.filter(src => RegExp(journeyData.imageSrcs).test(src))
            return (
                <React.Fragment key={journeyData.id}>
                    <JourneyCard title={journeyData.title} date={journeyData.date} imgSrcs={imgSrcs} contentSrc={journeyData.contentSrc} />
                    <hr className="style-two" />
                </React.Fragment>
            )
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
        import("../data/journeys" + this.props.contentSrc)
            .then(src =>
                fetch(src.default)
                    .then(response => response.text())
                    .then(text => this.setState({ content: text }))
            )
            .catch(e => console.log(e));
    }
    render() {
        const { title, date } = this.props;

        return (
            <section className="article-font-sizing article-fonts-style journey_section">
                <h2 className="responsive-text-padding">{title}</h2>
                <p className="article-fonts-style--info responsive-text-padding">{`${dateSlashNotation(date.start)} - ${date.end ? dateSlashNotation(date.end) : 'Now'}`}</p>
                <Slideshow imgSrcs={this.state.imgSrcs} />
                <div className="journey_section_content article-fonts-style--content responsive-text-padding"><ReactMarkdown source={this.state.content} /></div>
            </section>
        )
    }
}