import { NEXT_IMG, PREV_IMG } from '../actions/types.js';

const slider = (state = { currentImgIdx: 0 }, action) => {
    switch (action.type) {
        case NEXT_IMG:
            return state.currentImgIdx < action.numOfImgs - 1 ? { currentImgIdx: state.currentImgIdx + 1 } : state;
        case PREV_IMG:
            return state.currentImgIdx > 0 ? { currentImgIdx: state.currentImgIdx - 1 } : state;
        default:
            return state;

    }
}

export default slider;