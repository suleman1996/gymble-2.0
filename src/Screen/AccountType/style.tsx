import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    safeareaview: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    view: {
        flex: 1,
        marginHorizontal: 15
    },
    logo: {
        alignSelf: 'center',
        marginTop: 30
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#08101F',
        textAlign: 'center',
        marginTop: 20
    },
    text1: {
        fontSize: 15,
        color: '#798293',
        textAlign: 'center',
        marginTop: 8
    },
    text2: {
        color: '#08101F',
        fontSize: 14,
        marginTop: 25
    },
    forminputView: {
        height: 50,
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 5,
        justifyContent:'space-between'
    },
    userIcon: {
        marginHorizontal: 10, height: 24, width: 24, alignSelf: 'center', flex: 1
    },
    downarrow: {
        height: 25,
        width: 25,
        alignSelf: 'center',
        marginHorizontal: 10
    },

});
export default styles