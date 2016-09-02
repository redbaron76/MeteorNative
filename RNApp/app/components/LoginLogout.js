import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import { Button } from 'native-base';

import { logout } from '../actions/authActions';

class LoginLogout extends Component {

    constructor(props) {
        super(props);
        console.log('LoginLogout', LoginLogout);
    }

    _renderLabel() {
        switch (true) {
            case !!this.props.user:
                return this.props.logoutLabel || 'Logout';
            default:
                return this.props.loginLabel || 'Login';
        }
    }

    _managePress() {
        switch (true) {
            case !!this.props.user:
                return this.props.pressLogout;
            default:
                return this.props.pressLogin;
        }
    }

    render() {
        return (
            <Button
                transparent
                onPress={this._managePress()}
            >
                {this._renderLabel()}
            </Button>
        );
    }

}

export default LoginLogout;