import { connect } from 'react-redux';
import { Buttons } from './buttons';
import { goAction, cautionAction, stopAction } from '../../actions';

const mapStateToProps = state => {
    return {
        lightStatus: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        go: () => dispatch(goAction),
        caution: () => dispatch(cautionAction),
        stop: () => dispatch(stopAction),
    }
}

export const ButtonsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Buttons);