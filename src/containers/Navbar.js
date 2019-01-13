import { connect } from 'react-redux';
import { navHover, navHoverOut, navClick } from '../actions';
import NavBar from '../components/Navbar';

const className = ({ hovered, clicked }) => {
    return hovered || clicked ? "dim" : "" //if navbar is hovered or has been clicked lower opacity
}

const mapStateToProps = (state) => {
    return {
        className: className(state.navBar)
    }
}

const mapDispatchToProps = (dispatch) => ({
    onHover: () => dispatch(navHover()),
    onHoverOut: () => dispatch(navHoverOut()),
    onClick: () => dispatch(navClick())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);