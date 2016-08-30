import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import * as Card from '../containers';

const scenes = Actions.create(
    <Scene key="root" hideNavBar={true}>
        <Scene key="home" title="Home page" component={Card.Home} initial={true}/>
        <Scene key="login" title="Login page" direction="vertical" component={Card.Login}/>
        <Scene key="modal" title="Modal page" direction="vertical" component={Card.Modal}/>
        <Scene key="list" title="List" component={Card.List}/>
        <Scene key="profile" title="Profile" hideNavBar={false} component={Card.Profile}/>
    </Scene>
);

export default scenes;