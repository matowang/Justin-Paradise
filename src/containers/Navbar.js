import { connect } from 'react-redux';
import { navHover, navHoverOut, navClick } from '../actions';
import NavBar from '../components/Navbar';

const mapStateToProps = (state) => {
    return {
        hovered: state.navBar.hovered,
        clicked: state.navBar.clicked
    }
}

const mapDispatchToProps = (dispatch) => ({
    onHover: () => dispatch(navHover()),
    onHoverOut: () => dispatch(navHoverOut()),
    onClick: () => dispatch(navClick())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);