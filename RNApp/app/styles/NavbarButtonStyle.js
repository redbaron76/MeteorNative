import { StyleSheet } from 'react-native';
import { colors } from '../config/styles';

export default styles = StyleSheet.create({
    buttonWrapper: {    // all containers are display:flex by default
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 8,
    },
    leftText: {
        color: colors.link,
        fontSize: 17,
    },
    rightText: {
        color: colors.link,
        textAlign: 'left',
        fontSize: 17,
    },
    icon: {
        color: colors.link,
        height: 29,
    }
});