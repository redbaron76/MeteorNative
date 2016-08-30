import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header, Button, Icon, Title } from 'native-base';

import { openSideMenu, closeSideMenu } from '../actions/sideMenuActions';

class Navbar extends Component {

    constructor(props) {
        super(props);

        console.log('Navbar', props);
    }

    _renderTitle() {
        return this.props.title ?
            <Title>{this.props.title}</Title> : null;
    }

    _renderIcon(icon) {
        return icon ?
            <Icon name={icon}/> : null;
    }

    _renderLabel(label) {
        if (label) {
            return label;
        }
        return null;
    }

    _renderLeftButton() {
        if (
            this.props.left &&
            typeof this.props.left === 'object' &&
            this.checkUserLogged('left')
        ) {
            const left = this.props.left;
            return (
                <Button
                    transparent
                    btnLeft={!!this.props.left}
                    iconLeft={left.iconPos == 'left'}
                    iconRight={left.iconPos == 'right'}
                    onPress={this._managePress('left')}
                >
                    {this._renderIcon(left.icon)}
                    {this._renderLabel(left.label)}
                </Button>
            );
        }
        return null;
    }

    _renderRightButton() {
        if (
            this.props.right &&
            typeof this.props.right === 'object' &&
            this.checkUserLogged('right')
        ) {
            const right = this.props.right;
            return (
                <Button
                    transparent
                    btnRight={!!this.props.right}
                    iconLeft={right.iconPos == 'left'}
                    iconRight={right.iconPos == 'right'}
                    onPress={this._managePress('right')}
                >
                    {this._renderLabel(right.label)}
                    {this._renderIcon(right.icon)}
                </Button>
            );
        }
        return null;
    }

    _managePress(pos) {
        if (
            // !!this.props.user &&
            !!!this.props[pos].onPress &&
            this.props[pos].icon == 'ios-menu'
        ) {
            return this.props.openSideMenu;
        }
        return this.props[pos].onPress;
    }

    render() {
        return (
            <Header>
                {this._renderLeftButton()}
                {this._renderTitle()}
                {this._renderRightButton()}
            </Header>
        );
    }

    checkUserLogged(pos) {
        const hasMenu = this.props[pos].icon == 'ios-menu';
        if (hasMenu) {
            return hasMenu && !!this.props.user;
        }
        return true;
    }

}

Navbar.propTypes = {
    title:React.PropTypes.string,
    left:React.PropTypes.shape({
        icon: React.PropTypes.string,
        iconPos: React.PropTypes.string,
        label: React.PropTypes.string,
        onPress:React.PropTypes.func,
    }),
    right:React.PropTypes.shape({
        icon: React.PropTypes.string,
        iconPos: React.PropTypes.string,
        label: React.PropTypes.string,
        onPress:React.PropTypes.func,
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
        openSideMenu,
        closeSideMenu,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);