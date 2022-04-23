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
        // marginHorizontal: 15,
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
    downarrow: {
        height: 20,
        width: 20,
        marginHorizontal: 5,
    },
    toptext: {
        color: '#08101F',
        fontSize: 16,
        padding:5
    },
    view3: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F3F5',
        borderRadius: 32,
        height: 32,
        justifyContent: 'center'
    },
    view2: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        marginBottom:5,
        justifyContent: 'space-between'
    },
    view4: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F3F5',
        borderRadius: 32,
        // width: 98,
        // height: 32,
        marginHorizontal: 10,
        justifyContent: 'center'
    },
    sorticon: {
        height: 24,
        width: 24,
        marginHorizontal: 15,
    },
    image: {
        height: 48,
        width: 48
    },
    flatlisttext: {
        color: '#08101F',
        fontSize: 17,
        fontWeight: 'bold'
    },
    flatlisttext2: {
        color: '#798293',
        fontSize: 13,
        marginHorizontal: 5
    },
    calenderIcon: {
        height: 16,
        width: 16,
    },
    flatlistview: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flatlistMainview: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    flatlistview2: {
        marginHorizontal: 15
    },
    button: {
        height: 32, width: 72, borderRadius: 50, borderWidth: 1, borderColor: '#4AB5E3', justifyContent: 'center'
    },
    buttontext: {
        color: '#4AB5E3',
        textAlign: 'center'
    },
    button2: {
        height: 32, width: 72, borderRadius: 50, borderWidth: 1, borderColor: '#4AB5E3', justifyContent: 'center', backgroundColor: '#4AB5E3', marginHorizontal: 10
    },
    buttontext2: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
    separatorline: {
        borderWidth: 1, borderColor: '#F2F3F5', marginTop: 15,
    }
});
export default styles