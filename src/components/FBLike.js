import React from 'react';
const FBLike = ({ address }) => {
    return (
        <div className="fb-like" data-href={address} data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
    )
}
export default FBLike;