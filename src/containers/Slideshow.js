import { connect } from 'react-redux';
import { NEXT_IMG, PREV_IMG } from '../actions/types.js';
import { nextImage, prevImage } from '../actions';

const mapStateToProps = (state) => state.currentImgIdx;