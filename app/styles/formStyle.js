import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formCard: {
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10
    },
    formHead: {
        fontSize: 24,
        letterSpacing: 1,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    toggleConatainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    toggleAsk: {
        fontSize: 18,
        paddingRight: 15
    },
    toggleLink: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'blue'
    }
})

export default styles;