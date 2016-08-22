import React from 'react';
// import * as Scene from '../containers';
import { NavigationExperimental } from 'react-native'

const { Header: NavigationHeader } = NavigationExperimental;

const renderTitle = (title) => {
    return <NavigationHeader.Title>{title}</NavigationHeader.Title>
};

// parameter would be 'prop' and it gets 'prop.scene' only
export default function getHeader(props) {

    const {route} = props.scene;
    const rootProps = props.rootProps;

    console.log('headers', props);

    // Detect key and return scene
    switch (route.key) {
        case 'list':
            return <NavigationHeader {...props} onNavigateBack={rootProps.popRoute} renderTitleComponent={() => renderTitle(route.title)}/>;
        case 'home':
        default:
            return null;
    }
};