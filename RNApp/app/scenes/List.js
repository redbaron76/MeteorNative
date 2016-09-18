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
    ListView,
} from '../components';

class ListPage extends Component {

    constructor(props) {
        super(props);

        this.infos = this._getDeviceInfos();
        console.log(this.infos);
    }

    _getDeviceInfos() {
        const infos = [];
        infos.push({label:"Device Manufacturer", data: DeviceInfo.getManufacturer()});
        infos.push({label:"Device Brand", data: DeviceInfo.getBrand()});
        infos.push({label:"Device Model", data: DeviceInfo.getModel()});
        infos.push({label:"Device ID", data: DeviceInfo.getDeviceId()});
        infos.push({label:"System Name", data: DeviceInfo.getSystemName()});
        infos.push({label:"System Version", data: DeviceInfo.getSystemVersion()});
        infos.push({label:"Bundle ID", data: DeviceInfo.getBundleId()});
        infos.push({label:"Build Number", data: DeviceInfo.getBuildNumber()});
        infos.push({label:"App Version", data: DeviceInfo.getVersion()});
        infos.push({label:"App Version Readable", data: DeviceInfo.getReadableVersion()});
        infos.push({label:"Device name", data: DeviceInfo.getDeviceName()});
        infos.push({label:"User Agent", data: DeviceInfo.getUserAgent()});
        infos.push({label:"Device Locale", data: DeviceInfo.getDeviceLocale()});
        infos.push({label:"Device Country", data: DeviceInfo.getDeviceCountry()});
        infos.push({label:"Unique ID", data: DeviceInfo.getUniqueID()});
        infos.push({label:"App Instance ID", data: DeviceInfo.getInstanceID()});

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return ds.cloneWithRows(infos);
    }

    renderListRow(rowData, sectionID) {
        const style= {
            row: {
                flexDirection:'row',
                alignItems: 'center',
                justifyContent:'space-between',
                paddingTop: 18,
                paddingBottom: 18,
                borderBottomWidth: 1,
                borderBottomColor: '#efeff4'
            },
            text: {
                flex: 1,
                fontSize: 15
            },
            right: {
                flex: 1,
                color:'#0076FF',
                textAlign: 'right'
            }
        };

        return (
            <View key={sectionID} style={style.row}>
                <Text style={[style.text]}>{rowData.label}</Text>
                <Text style={[style.text, style.right]}>{rowData.data}</Text>
            </View>
        );
    }

    render() {

        const left = {
            role: "back",
            onPress: Actions.pop
        };

        const right = {
            role: "menu",
            onPress: this.props.openSideMenu
        };

        return (
            <ContainerWithMenu>
                <Navbar title={this.props.title} left={left} right={right} user={this.props.user} />
                <View style={styles.content}>
                    <ListView
                        dataSource={this.infos}
                        renderRow={this.renderListRow}
                    />
                </View>
            </ContainerWithMenu>
        );
    }
}

export default ListPage;