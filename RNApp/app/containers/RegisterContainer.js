import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import actions from authReducer to pass as props to component
import { registerByEmail } from '../actions/authActions';

// import dumb component to be wrapped by container
import Register from '../scenes/Register';

// Compact way to create Container -> connect creates container by default

// pass state attributes as props to Home
// authState attr comes from combineReducers
const mapStateToProps = (state) => {
    return {

    };
};

// pass Event handlers to List dumb component
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        registerByEmail
    }, dispatch);
};

// this wraps the dumb component (Home is presentational)
export default connect(mapStateToProps, mapDispatchToProps)(Register);