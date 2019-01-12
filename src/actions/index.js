import { NAV_HOVER, NAV_HOVER_OUT, NAV_CLICK } from '../actions/types.js';
export const navHover = () => ({
    type: NAV_HOVER
});
export const navHoverOut = () => ({
    type: NAV_HOVER_OUT
});
export const navClick = () => ({
    type: NAV_CLICK
});