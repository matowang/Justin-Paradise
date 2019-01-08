import React from 'react';
import journiesData from '../data/journies/journies-data.json';
import ImgBgBlur from './ImageBgBlur.js';

export default class Journy extends React.Component {
    constructor(props) {
        super(props);
        this.imageSrcs = require.context("../data/journies", true, /\.(png|jpe?g|svg)$/).keys();
        this.journyComps = journiesData.map((journyData, i) => {
            let imgSrcs = this.imageSrcs.filter(src => RegExp(journyData.imageSrcs).test(src))
            return <JournyCard title={journyData.title} imgSrcs={imgSrcs} contentSrc={journyData.contentSrc} key={journyData.id} />
        })
        this.state = {
            imageComps: []
        }
    }
    render() {
        return (
            <div id="journy-page">
                <h1>Journy</h1>
                {this.journyComps}
            </div>
        );
    }
}

class JournyCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgComps: [],
            content: "loading...",
            currentImgIndex: 0
        }
    }
    componentDidMount() {
        this.props.imgSrcs.forEach(src => {
            import("../data/journies" + src.replace('.', ''))
                .then(img => {
                    const imgComp = <ImgBgBlur src={img.default} alt="journy" key={img.default} />;
                    this.setState(state => ({
                        imgComps: [...state.imgComps, imgComp]
                    }));
                });
        });
    }
    render() {
        return (
            <section id="journy-section">
                <h2>{this.props.title}</h2>
                {this.state.imgComps}
                <p>{this.state.content}</p>
            </section>
        )
    }
}