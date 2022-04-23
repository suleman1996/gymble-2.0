import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    safeareaview: {
        flex: 1,
        backgroundColor: '#4AB5E3'
    },
    MainView: {
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#FFFFFF',
    },
    arrowicon: {
        height: 20, width: 20
    },
    text: {
        color: "#FFFFFF",
        fontSize: 15,
    },
    doticon: {
        height: 20, width: 20,
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginHorizontal: 10
    },
    image: {
        height: 56,
        width: 56,
        marginHorizontal: 10
    },
    view1: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    text1: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold',
    },
    text2: {
        color: '#FFFFFF',
        fontSize: 12,
    },
    view2: {
        // flex:1,
        height: 23,
        width: 112,
        backgroundColor: '#6EC4E9',
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    premiumIcon: {
        right: 5,
        height: 10,
        width: 15
    },
    text3: {
        fontSize: 12,
        color: '#FFFFFF'
    },
    view3: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10, marginTop: 40, marginBottom: 20
    },
    MainText: {
        fontSize: 15,
        color: '#08101F',
        marginHorizontal: 15,
        marginTop: 20,
        fontWeight: 'bold'
    },
    MainView1: {
        backgroundColor: '#F9F9FA',
        marginHorizontal: 15,
        borderRadius: 10,
        marginTop: 10
    },
    MainViewText: {
        color: "#08101F",
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginTop: 15
    },
    MainViewText2: {
        color: '#798293',
        marginTop:10,
        marginHorizontal: 15,
    },
    imageContainer: {
        paddingVertical: 10,
        margin: -14,
        borderRadius: 5,
        paddingLeft: 10,
        display: 'flex',
        borderColor: 'red',
        marginTop: 1,
        flex: 1,
    },
    Flatlistimage: {
        width: 40,
        height: 40,
        borderRadius: 90,
    },
    flatlistView: {
        marginHorizontal: 15
    },
    calenderIcon: {
        height: 20,
        width: 20,
    },
    MainViewText3: {
        color: '#798293',
        fontSize: 12,
        marginHorizontal: 20,
        marginTop: 20,
    },
    MainView2: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginBottom: 10
    },
    MainViewText4: {
        flex: 1,
        color: '#08101F',
        fontSize: 15,
        marginHorizontal: 10
    },
    MainViewText5: {
        flex: 1,
        color: '#08101F',
        fontSize: 15,
        marginHorizontal: 10
    },
    MainText2:{
        fontSize: 15,
        color: '#08101F',
        marginHorizontal: 15,
        marginTop: 20,
        fontWeight: 'bold' 
    },
    MainView3:{
        backgroundColor: '#F9F9FA',
        marginHorizontal: 15,
        borderRadius: 10,
        marginTop: 10
    },
    MainView4:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginHorizontal:15,
        marginTop:15
    },
    MainText3:{
        fontSize:15,
        color:'#798293',
    },
    MainText4:{
        fontSize:15,
        color:'#08101F',
        marginBottom: 15,
    },
    MainView5:{
        backgroundColor: '#F9F9FA',
        marginHorizontal: 15,
        borderRadius: 10,
        marginTop: 10
    },
    MainText5:{
        marginTop:15,
        textAlign:'justify',
        fontSize:15,
        color:'#08101F',
        marginBottom: 15,
        marginHorizontal: 15
    },
    LastView:{
        marginBottom:15,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:10
    },
    docicon:{
        height:15,
        width:15,
        marginHorizontal:15,
    },
    doctext:{
        color: '#4AB5E3' ,
        fontSize:12
    },
    footer:{
        flexDirection: 'row',
        width: '100%',
        height: 60,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-around',
        alignItems: 'center',
        // position: 'absolute',
        // bottom: 0,
    }
});
export default styles