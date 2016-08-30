import { StyleSheet } from 'react-native';
import { colors } from '../config/styles';

export default styles = StyleSheet.create({
    content: {
        flexDirection: 'column',
    },
    container: {
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
    text: {
        color: 'white',
        textAlign: 'center'
    }
});