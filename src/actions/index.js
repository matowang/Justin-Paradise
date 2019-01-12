import { NEXT_IMG, PREV_IMG } from '../actions/types.js';
export const nextImage = () => ({
    type: NEXT_IMG,
    numOfImgs
})
export const prevImage = () => ({
    type: PREV_IMG
})