import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import actions from authReducer to pass as props to component
import { loginWithFacebook, logout } from '../actions/authActions';
// import dumb component to be wrapped by container
import Home from '../scenes/Home';

// Compact way to create Container -> connect creates container by default

// pass state attributes as props to Home
// authState attr comes from combineReducers
const mapStateToProps = (state) => {
    return {
        // user: state.authState.user,
        // loggingIn: state.authState.loggingIn,
    };
};

// pass Actions creators as props to Home
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loginWithFacebook,
        logout
    }, dispatch)
};

// this wraps the dumb component (Home is presentational)
export default connect(mapStateToProps, mapDispatchToProps)(Home);