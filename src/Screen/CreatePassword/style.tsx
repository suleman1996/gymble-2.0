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
    arrowicon: {
        height: 24,
        width: 24,
        marginTop: 20
    },
    topText: {
        color: '#08101F',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 25
    },
    text: {
        color: '#798293',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 5
    },
    userIcon: {
        marginHorizontal: 10, height: 24, width: 24, alignSelf: 'center', flex: 1
    },
    text2: {
        color: '#08101F',
        fontSize: 14,
        marginTop: 30
    },
    forminputView: {
        height: 50,
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 5,
    },
    eyeIcon: {
        marginHorizontal: 10, height: 24, width: 24, alignSelf: 'center', position: 'absolute', right: 0
    },
    text3:{
        color:"#08101F",
        fontSize:15,
        marginTop:20
    },
    tickIcon:{
        height:24,
        width: 24
    },
    tickView:{
        flexDirection: 'row',
        alignItems:'center',
        marginTop:15
    },
    text4:{
        color:'#798293',
        fontSize:13,
        marginHorizontal: 15
    }
});
export default styles