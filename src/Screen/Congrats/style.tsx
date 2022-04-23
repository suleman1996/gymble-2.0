import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    safeareaview: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    view: {
        flex: 1,
        marginHorizontal: 15,
        justifyContent:'center',
        alignItems: 'center',
    },
    success:{
        height:72,
        width:72,
    },
    congrats:{
        fontSize:17,
        marginTop:10,
        fontWeight:'bold',
        color:'#08101F'
    },
    text:{
        fontSize:13,
        color:'#798293',
        textAlign: 'center',
        marginTop:10

    }
});
export default styles