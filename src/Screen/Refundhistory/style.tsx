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
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginHorizontal: 15,
    },
    arrowicon: {
        height: 20, width: 20,
    },
    text: {
        color: "#08101F",
        fontSize: 15,
        fontWeight: 'bold'
    },
    doticon: {
        height: 20, width: 20,
    },
    flatlistimage:{
        height:48, width:48
    },
    flatlistname:{
        color:'#08101F',
        fontSize:17,
        fontWeight: 'bold'
    },
    flatlisttext:{
        color:'#798293',
        fontSize:13
    },
    flatlistview:{
        marginHorizontal: 12
    },
    flatlistamount:{
        color:'#08101F',
        fontSize:14,
        fontWeight: 'bold'
    },
    date:{
        color:'#08101F',
        fontSize:15,
        fontWeight: 'bold',
        marginHorizontal: 12,
        marginTop: 20,
    }

});
export default styles