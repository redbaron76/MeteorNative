import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import DeviceInfo from 'react-native-device-info';
import * as s from '../styles/styles';

import {
    View,
    Text,
    ContainerWithMenu,
    Navbar,
    ListView,
} from '../components';

class ListPage extends Component {

    constructor(props) {
        super(props);

        this.infos = this._getDeviceInfos();
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
            row: s.merge({
                    flexDirection: 'row',
                    alignItems: s.position.center,
                    justifyContent: s.position.spaceBetween,
                    borderBottomWidth: 1,
                    borderBottomColor: s.color.border
                },
                s.styles.withPadding(s.unit.space, s.unit.spaceMin)
            ),
            text: {
                flex: 1,
                fontSize: s.size.small
            },
            right: {
                flex: 1,
                color: s.color.link,
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
                <View style={s.styles.innerContainer}>
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