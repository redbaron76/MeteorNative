// General import/export for components

import {
    View,
    // Text,
    StyleSheet,
} from 'react-native';

import {
    Badge,
    Button,
    Card,
    CardItem,
    Container,
    Content,
    Footer,
    Header,
    Icon,
    InputGroup,
    Input,
    List,
    ListItem,
    ProgressBar,
    Spinner,
    Text,
    Thumbnail,
    Title,
} from 'native-base';

import {
    Field
} from 'redux-form';

import AppManager from './AppManager';
import ContainerWithMenu from './ContainerWithMenu';
import { InputInlineLabel, InputIconLabel } from './FormFields';
import SideMenuContent from './SideMenuContent';
import Navbar from './Navbar';

// Export all components from a single location

export {

    // react-native

    View,
    // Text,
    StyleSheet,

    // native-base component

    Badge,
    Button,
    Card,
    CardItem,
    Container,
    Content,
    Footer,
    Header,
    Icon,
    InputGroup,
    Input,
    List,
    ListItem,
    ProgressBar,
    Spinner,
    Text,
    Thumbnail,
    Title,

    // redux-form component

    Field,

    // Custom components

    AppManager,
    ContainerWithMenu,
    InputIconLabel,
    InputInlineLabel,
    SideMenuContent,
    Navbar,
};