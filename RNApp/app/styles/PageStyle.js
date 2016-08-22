import { StyleSheet } from 'react-native';
import { colors } from '../config/styles';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent:"space-around",
        backgroundColor: '#f2f2f2',
    },
    heading: {
        fontSize: 30,
        fontWeight: "100",
    },
    subContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#c5c5c5',
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    navigationBarWrapper: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        paddingTop: 0
    }
});