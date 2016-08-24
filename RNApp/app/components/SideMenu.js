import React, { Component, PropTypes } from 'react';
import { DefaultRenderer, Actions } from 'react-native-router-flux';
import { Text, View, TouchableOpacity } from 'react-native';

import Drawer from 'react-native-drawer';
import DrawerContent from '../scenes/DrawerContent';
// import styles from '../styles/DrawerStyle';
import styles from '../styles/PageStyle';

import NavigationBar from 'react-native-navbar';
import NavbarButton from '../components/NavbarButton';

const propTypes = {
    navigationState: PropTypes.object,
};

class SideMenu extends Component {

    /*static renderNavigationBar(props) {
        console.log('SideMenu', props);
        return (
            <View style={styles.navigationBarWrapper}>
                <NavigationBar
                    title={{title:props.title}}
                    statusBar={{hideAnimation:'slide', showAnimation:'slide'}}
                    leftButton={<NavbarButton {...props} role="left" icon="ios-menu" onPress={() => alert('Toggle menu')}/>}
                />
            </View>
        )
    }*/

    render() {
        const state = this.props.navigationState;
        const children = state.children;
        console.log("drawer props", this.props);
        console.log("children", children);
        return (
            <Drawer
                ref="navigation"
                open={false}
                onOpen={()=>Actions.refresh({key:state.key, open: true})}
                onClose={()=>Actions.refresh({key:state.key, open: false})}
                type="displace"
                content={<DrawerContent />}
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}
                tweenHandler={(ratio) => ({
                    main: { opacity:Math.max(0.54,1-ratio) }
                })}>
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );

    }

}

Drawer.propTypes = propTypes;

export default SideMenu;