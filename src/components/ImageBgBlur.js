import React from 'react';

const ImgBgBlur = (props) => {
    const style = {
        "backgroundImage": `url(${props.src})`,
    };
    return (
        <div className="image-bg-blur">
            <div className="image-bg-blur_background" style={style} />
            <div className="image-bg-blur_tint" />
            <img src={props.src} alt={props.alt} />
        </div>
    );
}
export default ImgBgBlur;