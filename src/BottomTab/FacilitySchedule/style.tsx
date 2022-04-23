import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '500',
  },
  backIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  circle: {
    width: 96,
    height: 96,
    marginTop: 15,
  },
  subContainer: {
    alignSelf: 'center',
  },
  businessName: {
    color: '#08101F',
    fontSize: 14,
  },
  maxNumber: {
    color: '#798293',
    fontSize: 11,
    alignSelf: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
  },
  userIcon: {
    marginHorizontal: 10,
    height: 24,
    width: 24,
    alignSelf: 'center',
    flex: 1,
  },
  name: {
    color: '#08101F',
    fontSize: 14,
  },
  forminputView: {
    height: 50,
    borderColor: '#F2F3F5',
    marginHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5,
  },
  verifyEmail: {
    fontSize: 13,
    color: '#4AB5E3',
    height: 20,
  },
  icon: {
    width: 14,
    height: 18,
    color: '#798293',
    marginLeft: 17,
    position: 'absolute',
    marginTop: 10,
  },
  dotsIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  dots: {
    flexDirection: 'row-reverse',
    display: 'flex',
  },
  downarrow: {
    height: 24,
    width: 24,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  view1: {
    height: 30,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  view2: {
    height: 30,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F3F5',
  },
  text1: {color: '#798293', fontSize: 13, alignSelf: 'center'},
  input: {
    height: 50,
    borderRadius: 10,
    fontSize: 15,
    color: 'black',
  },
  details: {
    height: 150,
    borderColor: '#F2F3F5',
    marginHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5,
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    height: 50,
    borderColor: '#F2F3F5',
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  view3: {flexDirection: 'row', alignItems: 'center'},
  subHeadingView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:10,
    marginTop:15
  },
  subHeadingText:{
    color: '#08101F',
    fontSize: 14,
  },
  subHeadingBtntext:{
    color: '#08101F',
    fontSize: 14,
  },
  scheduleCardView:{
    width:'90%',
    height:200,
    alignSelf:'center',
    borderRadius:20,
    borderWidth:2,
    borderColor: '#F2F3F5',
    overflow: 'hidden',
    marginTop:10,
    marginBottom:10
  },
  cardSubView1:{
    height:'70%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width:'90%',
    alignSelf:'center',
    borderBottomWidth:1,
    borderBottomColor:'#F2F3F5'
  },
  cardSubView2:{
    height:'30%',
    justifyContent:'space-evenly',
    flexDirection:'row',

  
  },
  cardSubViewhalf:{
    width:`49%`,
    height:'100%',
    
    // backgroundColor: 'black'
  },
  rowViewInCard:{
    width:`100%`,
    flexDirection: 'row',
    margin:8,
    marginLeft:10
  },
  cardIconText:{
    color:'#798293',
    fontSize:12
  },
  cardSubHeading:{
    fontSize:15, 
    color:'#08101F',
    marginLeft:10, 
    marginTop:5
  },
  cardIcon:{
    width:16, 
    height:16,
    marginRight:5
  },
  endBtn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position:'relative',
    bottom: 5
  }
});
export default styles;
