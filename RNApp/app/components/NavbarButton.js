import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import styles from '../styles/NavbarButtonStyle';

class NavbarItem extends Component {

    constructor(props) {
        super(props);
        this.scene = props.scene.navigationState;
        this.isBack = this.props.role == 'back';
        this.isLeft = this.props.role == 'left';
        this.isRight = this.props.role == 'right';
        this.hasIcon = !!this.props.icon;
        this.hasText = !!this.props.text;
    }

    _renderIcon(pos) {
        const padding = (this.hasText) ? 0 : 6;
        switch (true) {
            case (this.isBack || this.isLeft) && this.hasIcon && (pos == 'left' || pos == 'back'):
                return <Icon style={[styles.icon, {paddingLeft: padding}]} name={this.props.icon}/>;
            case this.isRight && this.hasIcon && pos == 'right':
                return <Icon style={[styles.icon, {paddingRight: padding}]} name={this.props.icon}/>;
            default:
                return null;
        }
    }

    _renderText() {
        const padding = (this.hasIcon) ? 6 : 0;
        switch (true) {
            case this.isBack:
                return <Text style={[styles.leftText, {paddingLeft: padding}]}>{this.props.text}</Text>;
            case this.isLeft:
                return <Text style={[styles.leftText, {paddingLeft: padding}]}>{this.props.text}</Text>;
            case this.isRight:
                return <Text style={[styles.rightText, {paddingRight: padding}]}>{this.props.text}</Text>;
            default:
                return null;
        }
    }

    render() {
        const onPress = (this.isBack) ? Actions.pop : this.props.onPress;
        return (
            <TouchableOpacity onPress={onPress}>
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

export default NavbarItem;