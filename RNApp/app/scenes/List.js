import React, { Component } from 'react';

import styles from '../styles/PageStyle';

import {
    View,
    Text,
    ContainerWithMenu,
    Navbar
} from '../components';

class List extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const left = {
            role: "back",
        };

        const right = {
            role: "sidebar",
        };

        return (
            <ContainerWithMenu>
                <Navbar role="header" title="Home Page" left={left} right={right} />
                <View style={styles.content}>
                    <View style={styles.subContainer}>
                        <Text style={styles.heading}>List Page</Text>
                    </View>
                </View>
            </ContainerWithMenu>
        );
    }
}

export default List;