import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import actions from authReducer to pass as props to component
import { loginWithFacebook, logout } from '../actions/authActions';
// import actions from sideMenuReducer
import { openSideMenu, closeSideMenu } from '../actions/sideMenuActions';

import { Container } from './';
import SideMenu from '../containers/SideMenuContainer';

class ContainerWithMenu extends Component {

    _renderContainer() {
        return (
            <Container
                data={this.props.data}
                row={this.props.row}
                loading={this.props.loading}
                type={this.props.type || 'scroll'}
                style={this.props.style}
            >
                {this.props.children}
            </Container>
        );
    }

    render() {

        switch (true) {

            // Wraps Container by SideMenu when logged
            case (!!this.props.user):
                return (
                    <SideMenu
                        onOpen={this.props.openSideMenu}
                        onClose={this.props.closeSideMenu}
                    >
                        {this._renderContainer()}
                    </SideMenu>
                );

            default:
                return this._renderContainer();
        }

    }
}

// pass state attributes as props to Component
const mapStateToProps = (state, props) => {
    return {
        loading: state.routeState.loading,
        user: state.authState.user,
    };
};

// pass Event handlers to dumb component
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loginWithFacebook,
        logout,
        openSideMenu,
        closeSideMenu,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerWithMenu);