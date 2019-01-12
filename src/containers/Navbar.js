import { connect } from 'react-redux';
import { navHover, navHoverOut } from '../actions';
import NavBar from '../components/Navbar';

const mapStateToProps = (state) => {
    return {
        hovered: state.navBar.hovered
    }
}

const mapDispatchToProps = (dispatch) => ({
    onHover: () => dispatch(navHover()),
    onHoverOut: () => dispatch(navHoverOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);