import React from 'react';
import arrowBtn from '../assets/slideshow-button.svg';
import ImgBgBlur from './ImageBgBlur.js';

export default class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.numOfImgs = 0;
        this.state = {
            currentImgIdx: 0
        };
        this.nextImage = this.nextImage.bind(this);
        this.prevImage = this.prevImage.bind(this);
    }
    nextImage() {
        this.setState(state => ({
            currentImgIdx: state.currentImgIdx + (state.currentImgIdx < this.numOfImgs - 1 ? 1 : 0)
        }));
    }
    prevImage() {
        this.setState(state => ({
            currentImgIdx: state.currentImgIdx - (state.currentImgIdx > 0 ? 1 : 0)
        }));
    }
    render() {
        this.numOfImgs = this.props.imgSrcs.length;
        const imgComps = this.props.imgSrcs.map(src =>
            <ImgBgBlur src={src} alt="journey picture" key={src} />
        );
        const indicatorComps = [];
        for (let i = 0; i < this.numOfImgs; i++) {
            indicatorComps.push(
                <div className={`slideshow_indicator ${i === this.state.currentImgIdx ? "slideshow_indicator--current" : ""}`} key={i} />
            );
        }
        return (
            <div className="slideshow">
                <div className="slider">
                    {imgComps[this.state.currentImgIdx]}
                    {(this.state.currentImgIdx !== 0) && <button onClick={this.prevImage} className="slider_prevBtn">
                        <img src={arrowBtn} alt="left arrow" />
                    </button>}
                    {(this.state.currentImgIdx !== this.numOfImgs - 1) && <button onClick={this.nextImage} className="slider_nextBtn">
                        <img src={arrowBtn} alt="right arrow" />
                    </button>}
                </div>
                <div className="slideshow_idx-indicators">{this.numOfImgs > 1 && indicatorComps}</div>
            </div>
        );
    }
}