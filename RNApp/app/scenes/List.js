import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import DeviceInfo from 'react-native-device-info';
import styles from '../styles/PageStyle';

import {
    View,
    Text,
    Icon,
    Badge,
    ContainerWithMenu,
    Navbar,
    Content,
    List,
    ListItem,
} from '../components';

class ListPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const left = {
            role: "back"
        };

        const right = {
            role: "sidebar",
        };

        return (
            <ContainerWithMenu>
                <Navbar role="header" title="Device infos" left={left} right={right} />
                <View style={styles.content}>
                    <Content>
                        <List>
                            <ListItem>
                                <Text>Device Manufacturer</Text>
                                <Text note style={styles.note}>{DeviceInfo.getManufacturer()}</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <Text>Device Brand</Text>
                                <Text note style={styles.note}>{DeviceInfo.getBrand()}</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <Text>Device Model</Text>
                                <Text note style={styles.note}>{DeviceInfo.getModel()}</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <Text>Device ID</Text>
                                <Text note style={styles.note}>{DeviceInfo.getDeviceId()}</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <Text>System Name</Text>
                                <Text note style={styles.note}>{DeviceInfo.getSystemName()}</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <Text>System Version</Text>
                                <Text note style={styles.note}>{DeviceInfo.getSystemVersion()}</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <Text>Bundle ID</Text>
                                <Text note style={styles.note}>{DeviceInfo.getBundleId()}</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <Text>Build Number</Text>
                                <Text note style={styles.note}>{DeviceInfo.getBuildNumber()}</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <Text>App Version</Text>
                                <Text note style={styles.note}>{DeviceInfo.getVersion()}</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <Text>App Version (Readable)</Text>
                                <Text note style={styles.note}>{DeviceInfo.getReadableVersion()}</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <Text>Device Name</Text>
                                <Text note style={styles.note}>{DeviceInfo.getDeviceName()}</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <Text>User Agent</Text>
                                <Text note style={styles.note}>{DeviceInfo.getUserAgent()}</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <Text>Device Locale</Text>
                                <Text note style={styles.note}>{DeviceInfo.getDeviceLocale()}</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <Text>Device Country</Text>
                                <Text note style={styles.note}>{DeviceInfo.getDeviceCountry()}</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <Text>Unique ID</Text>
                                <Text note style={styles.note}>{DeviceInfo.getUniqueID()}</Text>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <Text>App Instance ID</Text>
                                <Text note style={styles.note}>{DeviceInfo.getInstanceID()}</Text>
                            </ListItem>
                        </List>
                    </Content>
                </View>
            </ContainerWithMenu>
        );
    }
}

export default ListPage;