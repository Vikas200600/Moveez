import { StyleSheet } from 'react-native';

const globalStyle = StyleSheet.create({
    container: {
        backgroundColor: '#00b4d8',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '450',
        height: '100%'
    },
    input: {
        fontSize: 20,
        paddingVertical: 15,
        paddingHorizontal: 20,
        minWidth: 300,
        marginBottom: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        borderStyle:  'solid'
    }
})

export default globalStyle;