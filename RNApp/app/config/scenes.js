import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import SideMenu from '../components/SideMenu';
import * as Card from '../containers';

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="home" title="Home page" component={Card.Home} initial={true}/>
        <Scene key="modal" title="Modal page" direction="vertical" component={Card.Modal}/>
        <Scene key="list" title="List" component={Card.List}/>
        <Scene key="drawer" title="Profile" hideNavBar={false} component={SideMenu}>
            <Scene key="profile" title="Profile" hideNavBar={false} component={Card.Profile}/>
        </Scene>
    </Scene>
);

export default scenes;