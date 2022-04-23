import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subContainer: {
    height: 30,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  backIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '500',
  },
  dotsIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
  name: {
    color: '#08101F',
    fontSize: 15,
    fontWeight: '400',
  },
  toggleView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    justifyContent: 'space-between',
    marginHorizontal: 10,
    borderColor: '#F2F3F5',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    justifyContent: 'space-between',
    marginHorizontal: 10,
    borderColor: '#F2F3F5',
    borderBottomWidth: 1,
  },
});
  export default styles