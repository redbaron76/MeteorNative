import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import {
    Header,
    Button,
    Icon,
    Title,
} from './';

import { logout } from '../actions/authActions';
import { openSideMenu, closeSideMenu } from '../actions/sideMenuActions';

class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    _renderTitle() {
        return this.props.title ?
            <Title>{this.props.title}</Title> : null;
    }

    _renderIcon(props) {
        switch (true) {
            case (props.role == 'sidebar'):
                switch (true) {
                    case (!!this.props.user):
                        const icon = (props.icon) ? props.icon : 'ios-menu';
                        return <Icon name={icon}/>;
                    default:
                        return null;
                }
            case (props.role == 'close'):
                const icon = (props.icon) ? props.icon : 'ios-close';
                return <Icon name={icon}/>;
            case (!!props.icon):
                return <Icon name={props.icon}/>;
            default:
                return null;
        }
    }

    _renderLabel(props) {
        switch (true) {
            case (props.role == 'login'):
                switch (true) {
                    case (!!this.props.user):
                        return props.logoutLabel || 'Logout';
                    default:
                        return props.loginLabel || 'Login';
                }
            case (!!props.label):
                return props.label;
            default:
                return null;
        }
    }

    _managePress(props) {
        switch (true) {
            case (props.role == 'login'):
                switch (true) {
                    case (!!this.props.user):
                        return this.props.logout;
                    default:
                        return props.onPress;
                }
            case (props.role == 'sidebar'):
                switch (true) {
                    case (!!this.props.user):
                        return this.props.openSideMenu;
                    default:
                        return null;
                }
            case (props.role == 'close'):
                return props.onPress || Actions.pop;
            default:
                return props.onPress;
        }
    }

    _renderLeftButton() {
        const left = this.props.left;
        if (left && typeof left === 'object') {
            return (
                <Button
                    transparent
                    btnLeft={!!left}
                    iconLeft={left.iconPos == 'left'}
                    iconRight={left.iconPos == 'right'}
                    onPress={this._managePress(left)}
                >
                    {this._renderIcon(left)}
                    {this._renderLabel(left)}
                </Button>
            );
        }
        return null;
    }

    _renderRightButton() {
        const right = this.props.right;
        if (right && typeof right === 'object') {
            return (
                <Button
                    transparent
                    btnRight={!!right}
                    iconLeft={right.iconPos == 'left'}
                    iconRight={right.iconPos == 'right'}
                    onPress={this._managePress(right)}
                >
                    {this._renderLabel(right)}
                    {this._renderIcon(right)}
                </Button>
            );

        }
        return null;
    }

    render() {
        //console.log('Navbar', this.props);
        return (
            <Header>
                {this._renderLeftButton()}
                {this._renderTitle()}
                {this._renderRightButton()}
            </Header>
        );
    }

}

Navbar.propTypes = {
    title:React.PropTypes.string,
    left:React.PropTypes.shape({
        icon: React.PropTypes.string,
        iconPos: React.PropTypes.string,
        label: React.PropTypes.string,
        onPress:React.PropTypes.func,
        role:React.PropTypes.oneOf(['back', 'close', 'login', 'sidebar']),
    }),
    right:React.PropTypes.shape({
        icon: React.PropTypes.string,
        iconPos: React.PropTypes.string,
        label: React.PropTypes.string,
        onPress:React.PropTypes.func,
        role:React.PropTypes.oneOf(['back', 'close', 'login', 'sidebar']),
    })
};

// pass state attributes as props to Navbar
const mapStateToProps = (state, props) => {
    return {
        user: state.authState.user,
    };
};

// pass Event handlers to Navbar
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        logout,
        openSideMenu,
        closeSideMenu,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);