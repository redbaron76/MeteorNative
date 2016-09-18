// General import/export for components

import {
    View,
    Text,
    ScrollView,
    ListView,
    StyleSheet,
} from 'react-native';

import {
    Badge,
    Button,
    Card,
    CardItem,
    // Container,
    Content,
    Footer,
    Header,
    Icon,
    InputGroup,
    Input,
    List,
    ListItem,
    Spinner,
    Thumbnail,
    Title,
} from 'native-base';

import {
    Container,
    Navbar,
} from 'navbar-native';

import {
    Field
} from 'redux-form';

import AppManager from './AppManager';
import ContainerWithMenu from './ContainerWithMenu';
import { InputInlineLabel, InputIconLabel } from './FormFields';
import SideMenuContent from './SideMenuContent';
import LoadingScreen from './LoadingScreen';

// Export all components from a single location

export {

    // react-native

    View,
    Text,
    ScrollView,
    ListView,
    StyleSheet,

    // native-base component

    Badge,
    Button,
    Card,
    CardItem,
    // Container,
    Content,
    Footer,
    Header,
    Icon,
    InputGroup,
    Input,
    List,
    ListItem,
    Spinner,
    Text,
    Thumbnail,
    Title,

    // navbar-native components

    Container,
    Navbar,

    // redux-form component

    Field,

    // Custom components

    AppManager,
    ContainerWithMenu,
    InputIconLabel,
    InputInlineLabel,
    SideMenuContent,
    LoadingScreen,
};