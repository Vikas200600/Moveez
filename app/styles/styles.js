import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
    signCard: {
        alignItems: 'center'
    },
    signText: {
        fontSize: 24,
        lineHeight: 30,
        marginBottom: 10
    },
    signBut: {
        backgroundColor: 'blue',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20
    },
    butText: {
        color: 'white',
        letterSpacing: 1,
        fontWeight: 'bold'
    },
    infoCard: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    info: {
        marginLeft: 16
    },
    infoHead: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    infoData: {
        fontSize: 18,
        letterSpacing: 1
    }

})

export default styles;