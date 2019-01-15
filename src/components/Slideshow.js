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
    }
    nextImage = () => {
        this.setState(state => (
            state.currentImgIdx < this.numOfImgs - 1 ? { currentImgIdx: state.currentImgIdx + 1 } : state
        ));
    }
    prevImage = () => {
        this.setState(state => (
            state.currentImgIdx > 0 ? { currentImgIdx: state.currentImgIdx - 1 } : state
        ));
    }
    render() {
        const { imgSrcs } = this.props;
        this.numOfImgs = imgSrcs.length;
        const indicatorComps = [];
        for (let i = 0; i < this.numOfImgs; i++) {
            indicatorComps.push(
                <div className={`slideshow_indicator ${i === this.state.currentImgIdx ? "slideshow_indicator--current" : ""}`} key={i} />
            );
        }
        return (
            <div className="slideshow">
                <div className="slider">
                    <div className="img-wrapper" style={{ width: imgSrcs.length + "00%", transform: `translate(${-100 / imgSrcs.length * this.state.currentImgIdx}%)` }}>
                        {imgSrcs.map(src => <ImgBgBlur src={src} alt="journey picture" key={src} />)}
                    </div >
                    {(this.state.currentImgIdx !== 0) && <button onClick={this.prevImage} className="slider_prevBtn">
                        <img src={arrowBtn} alt="left arrow" />
                    </button>}
                    {(this.state.currentImgIdx !== imgSrcs.length - 1) && <button onClick={this.nextImage} className="slider_nextBtn">
                        <img src={arrowBtn} alt="right arrow" />
                    </button>}
                </div>
                <div className="slideshow_idx-indicators">{imgSrcs.length > 1 && indicatorComps}</div>
            </div>
        );
    }
}