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

class FontPage extends Component {

    renderFontRow(rowData, sectionID) {
        const style= {
            row: s.merge({
                    flexDirection: s.direction.row,
                    alignItems: s.position.center,
                    justifyContent: s.position.spaceBetween,
                    borderBottomWidth: 1,
                    borderBottomColor: s.color.border
                },
                s.styles.withPadding(s.unit.space, s.unit.spaceMin)
            ),
            text: {
                flex: 1,
                fontSize: s.size.big,
                fontFamily: rowData,
            },
        };

        return (
            <View key={sectionID} style={style.row}>
                <Text style={style.text}>{rowData}</Text>
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
            <ContainerWithMenu type="list" data={s.font.family} row={this.renderFontRow}>
                <Navbar title={this.props.title} left={left} right={right} user={this.props.user} />
            </ContainerWithMenu>
        );
    }
}

export default FontPage;