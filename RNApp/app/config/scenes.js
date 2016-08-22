import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import * as Card from '../containers';

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="home" title="Home page" component={Card.Home} hideNavBar={false} initial={true}/>
        <Scene key="modal" title="Modal page" hideNavBar={false} direction="vertical" component={Card.Modal}/>
        <Scene key="list" title="List" hideNavBar={false} component={Card.List}/>
    </Scene>
);

export default scenes;