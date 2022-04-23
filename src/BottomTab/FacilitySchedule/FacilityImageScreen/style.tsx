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
    width: 24,
    height: 24,
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
  endBtn:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  PictureUploader: {


    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 40,
    color: 'black'

},
uploadimageView: {


    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 15,
    borderStyle: 'dashed',
    alignItems: 'center',
    height: 200,
    marginTop: 25,
   justifyContent: 'center'


},
main3View: {


    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 30,
    marginHorizontal: 10
},
ImageBox:{
    width:'30%',
    height:80, 
    backgroundColor:"#F2F3F5",
    borderRadius:15,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
},
policyTextView:{
    paddingLeft:14
},
policyText:{

},
ModalView:{


    backgroundColor:"#FFFFFF",
    //  flex:1,
     height:280,
     width:'100%',
     
      // marginHorizontal:10,
      justifyContent: "center",
      alignItems: "center",
      alignSelf:'center',
      borderRadius: 10,
  },
  ModalBtnView:{
  
  
    flexDirection: 'row',
    marginTop:30,
    width:'100%',
    justifyContent: 'space-evenly', 
    // marginVertical:-50
  },
  Modalbtn:{
  
    borderRadius: 40,
   backgroundColor: 'white', 
    height: 50,
    width:130,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor:'lightgrey',
    borderWidth:0.2
  },Modalbtntext:{
  
  
    fontWeight: 'bold',
    alignSelf: 'center', 
    marginTop: 15, 
    flex:1,
  },
  images:{
      width: '100%',
      height: '100%',
  },
  modalIcon:{
    width: 18,
    height: 18,
    position: 'absolute',
    right: 10,
    top:10,  
  }
});
export default styles;