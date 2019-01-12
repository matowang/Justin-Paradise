import { connect } from 'react-redux';
import { navHover } from '../actions';
import NavBar from '../components/Navbar';

const mapStateToProps = (state) => {
    return {
        hovered: state.navBar.navHovered
    }
}

const mapDispatchToProps = (dispatch) => ({
    onHover: () => dispatch(navHover())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);