import { NAV_HOVER, NAV_HOVER_OUT } from '../actions/types.js'

export const navBar = (state = { hovered: false }, action) => {
    switch (action.type) {
        case NAV_HOVER:
            return { hovered: true };
        case NAV_HOVER_OUT:
            return { hovered: false };
        default:
            return state;
    }
}