import { NAV_HOVER } from '../actions/types.js'

export const navBar = (state = { hovered: false }, action) => {
    switch (action.type) {
        case NAV_HOVER:
            return { navHovered: true };
        default:
            return state;
    }
}