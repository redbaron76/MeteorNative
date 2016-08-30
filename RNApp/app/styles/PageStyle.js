import { StyleSheet } from 'react-native';
import { colors } from '../config/styles';

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    content: {
        flex: 1,
        padding: 7,
        flexDirection: 'column',
        backgroundColor: colors.gray
    },
    heading: {
        padding: 30,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: "100",
    },
    subContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    listLogin: {
        paddingRight: 21,
        paddingLeft: 21,
    },
    formItem: {
        paddingRight: 21,
        paddingLeft: 21,
    },
    listItem: {
        paddingTop: 20,
        paddingRight: 7,
        paddingBottom: 20,
        paddingLeft: 7,
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    link: {
        color: colors.link
    }
});