import { NAV_HOVER, NAV_HOVER_OUT, NAV_CLICK } from '../actions/types.js'

export const navBar = (state = { hovered: false, clicked: false }, action) => {
    switch (action.type) {
        case NAV_HOVER:
            return { ...state, hovered: true };
        case NAV_HOVER_OUT:
            return { ...state, hovered: false };
        case NAV_CLICK:
            return { ...state, clicked: true }
        default:
            return state;
    }
}