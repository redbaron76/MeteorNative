import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import styles from '../styles/NavbarButtonStyle';

class NavbarItem extends Component {

    constructor(props) {
        super(props);
        this.scene = props.scene.navigationState;
        this.isBack = this.props.role == 'back';
        this.isMenu = this.props.role == 'menu';
        this.isLeft = this.props.role == 'left';
        this.isRight = this.props.role == 'right';
        this.isLogged = !!this.props.user;
        this.hasIcon = !!this.props.icon;
        this.hasText = !!this.props.text;
    }

    _renderIcon(pos) {
        const padding = (this.hasText) ? 0 : 6;
        switch (true) {
            case (this.isBack || this.isLeft) && this.hasIcon && pos == 'left':
                return <Icon style={[styles.icon, {paddingLeft: padding}]} name={this.props.icon}/>;
            case this.isRight && this.hasIcon && pos == 'right':
                return <Icon style={[styles.icon, {paddingRight: padding}]} name={this.props.icon}/>;
            case this.isMenu && this.isLogged && pos == 'right':
                return <Icon style={[styles.icon, {paddingLeft: padding}]} name="ios-menu"/>;
            default:
                return null;
        }
    }

    _renderText() {
        const padding = (this.hasIcon) ? 6 : 0;
        switch (true) {
            case this.isBack:
            case this.isLeft:
                return <Text style={[styles.leftText, {paddingLeft: padding}]}>{this.props.text}</Text>;
            case this.isMenu:
            case this.isRight:
                return <Text style={[styles.rightText, {paddingRight: padding}]}>{this.props.text}</Text>;
            default:
                return null;
        }
    }

    _getPressAction() {
        switch (true) {
            case this.isMenu && this.isLogged:
                return this.props.openSideMenu;
            case this.isBack:
                return Actions.pop;
            default:
                return this.props.onPress;
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={this._getPressAction()}>
                <View style={styles.buttonWrapper}>
                    {this._renderIcon('left')}
                    {this._renderText()}
                    {this._renderIcon('right')}
                </View>
            </TouchableOpacity>
        );
    }

}

NavbarItem.propTypes = {
    role:React.PropTypes.string.isRequired,
    icon:React.PropTypes.string,
    text:React.PropTypes.string,
    onPress:React.PropTypes.func
};

// pass state attributes as props to Home
// authState attr comes from combineReducers
const mapStateToProps = (state, props) => {
    return {

    };
};

// pass Event handlers to List dumb component
const mapDispatchToProps = (dispatch) => {
    return {

    };
};

//export default NavbarItem;
export default connect(mapStateToProps, mapDispatchToProps)(NavbarItem);